﻿using AutoMapper;
using Larpex.Mono.Models;
using Larpex.Mono.Repositories.Interfaces;
using Larpex.Mono.Services.Interfaces;
using Larpex.Shared.ModelDto;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using Stripe;
using Stripe.Terminal;
using System.ComponentModel;
using System.Drawing;
using System.IO;

namespace Larpex.Mono.Repositories;

public class EventsRepo : IEventsRepo
{
    private readonly LarpexDbContext _context;
    private readonly IMapper _mapper;
    private readonly IPaymentService _paymentService;
    private readonly IParticipantService _participantService;
    private readonly IImageRepo _imageRepo;
    private readonly IGamesRepo _gameRepo;

    public EventsRepo(
        LarpexDbContext context,
        IMapper mapper,
        IGamesRepo gameRepo,
        IPaymentService paymentService,
        IParticipantService participantService,
        IImageRepo imageRepo
        )
    {
        _gameRepo = gameRepo;
        _context = context;
        _mapper = mapper;
        _participantService = participantService;
        _paymentService = paymentService;
        _imageRepo = imageRepo;
    }

    public async Task<EventDto> CreateEvent(EventWithTimeslotDto eventWithTimeslotDto)
    {
        TblEvent newEvent = new TblEvent();
        newEvent.EventName = eventWithTimeslotDto.EventName;
        newEvent.EventDescription = eventWithTimeslotDto.EventDescription;
        newEvent.LocationId = eventWithTimeslotDto.LocationId;
        newEvent.GameId = eventWithTimeslotDto.GameId;
        newEvent.EventStatus = "";

        #region TimeslotCreation
        var timeslotId = Guid.NewGuid().ToString();
        TblTimeslot timeslot = new TblTimeslot
        {
            TimeslotId = timeslotId,
            TimeslotDatetime = eventWithTimeslotDto.StartDate,
            TimeslotDuration = new TimeSpan(0, eventWithTimeslotDto.DurationHour, eventWithTimeslotDto.DurationMinute, 0, 0, 0),
        };
        await _context.TblTimeslots.AddAsync(timeslot);
        await _context.SaveChangesAsync();
        newEvent.TimeslotId = timeslot.TimeslotId;
        #endregion
        var eventTotalCost = await CalculateOrderAmount(eventWithTimeslotDto.AttendeesCount, eventWithTimeslotDto.LocationId);
        #region PaymentCreation
        var paymentId = Guid.NewGuid().ToString();
        TblPayment payment = new TblPayment
        {
            PaymentId = paymentId,
            PaymentAccepted = true,
            PaymentAmount = eventTotalCost,
            PaymentType = "Fast",
            UserId = eventWithTimeslotDto.UserId
        };
        await _context.TblPayments.AddAsync(payment);
        await _context.SaveChangesAsync();
        #endregion

        #region OrderCreation
        var orderId = Guid.NewGuid().ToString();
        TblOrder order = new TblOrder
        {
            OrderId = orderId,
            OrderAmount = eventTotalCost,
            PaymentId = payment.PaymentId
        };
        await _context.TblOrders.AddAsync(order);
        await _context.SaveChangesAsync();
        newEvent.OrderId = order.OrderId;
        #endregion

        #region IconCreation
        var image = await _imageRepo.UploadImage(eventWithTimeslotDto.Icon);
        newEvent.EventIconUrl = image.FilePath;
        #endregion
        await _context.TblEvents.AddAsync(newEvent);
        await _context.SaveChangesAsync();

        var addedEvent = await _context.TblEvents.FirstOrDefaultAsync(e => e.EventName.Equals(newEvent.EventName));
        return _mapper.Map<EventDto>(addedEvent);
    }

    public async Task<bool> DeleteEvent(int id)
    {
        var dbEvent = await _context.TblEvents.FirstOrDefaultAsync(e => e.EventId == id);

        if (dbEvent == null)
        {
            throw new ArgumentNullException("Event with this id does not exist.");
        }

        _context.TblEvents.Remove(dbEvent);
        await _context.SaveChangesAsync();
        return true;
    }

    public async Task<EventTimeslotResponseDto> GetEvent(int id)
    {
        var dbEvent = await _context.TblEvents.Include("TblParticipants").FirstOrDefaultAsync(e => e.EventId == id);

        if (dbEvent == null)
        {
            throw new ArgumentNullException("Event with this id does not exist.");
        }
        
        var existingEventDto = new EventTimeslotResponseDto
        {
            EventId = dbEvent.EventId,
            EventName = dbEvent.EventName,
            EventStatus = dbEvent.EventStatus,
            EventDescription = dbEvent.EventDescription,
            OrderId = dbEvent.OrderId,
            LocationId = dbEvent.LocationId,
            GameId = dbEvent.GameId,
            ParticipantsCount = dbEvent.TblParticipants.Count,
            Timeslot = _mapper.Map<TimeslotDto>(await _context.TblTimeslots.FirstOrDefaultAsync(t => t.TimeslotId.Equals(dbEvent.TimeslotId))),
        };

        if (dbEvent.GameId != null)
        {
            var game = await _gameRepo.GetGame(dbEvent.GameId ?? default(int));
            if (game != null)
                existingEventDto.GameName = game.GameName;
        }
        else
            existingEventDto.GameName = "";

        var icon = await _context.TblImages.FirstOrDefaultAsync(i => i.FilePath.Equals(dbEvent.EventIconUrl));
        var pathuwa = Directory.GetCurrentDirectory();
        if (icon != null)
        {
            if (System.IO.File.Exists(pathuwa + icon.FilePath))
                existingEventDto.Icon = icon.FilePath;
            else
                existingEventDto.Icon = "https://etapety.pl/images/2728-12-tapeta.jpg";
        }
        else
            existingEventDto.Icon = "https://etapety.pl/images/2728-12-tapeta.jpg";

        return existingEventDto;
    }

    public async Task<IEnumerable<EventTimeslotResponseDto>> GetEvents()
    {
        var dbEvents = await _context.TblEvents.Include("TblParticipants").ToListAsync();

        if (dbEvents.Count == 0)
        {
            throw new ArgumentNullException("No available events!!!!!!!!!!");
        }

        var eventList = new List<EventTimeslotResponseDto>();
        foreach(var e in dbEvents)
        {
            var evencik = new EventTimeslotResponseDto();
            evencik.EventId = e.EventId;
            evencik.EventName = e.EventName;
            evencik.EventStatus = e.EventStatus;
            evencik.EventDescription = e.EventDescription;
            evencik.OrderId = e.OrderId;
            evencik.LocationId = e.LocationId;
            evencik.GameId = e.GameId;
            evencik.Icon = e.EventIconUrl;
            evencik.ParticipantsCount = e.TblParticipants.Count;
            evencik.Timeslot = _mapper.Map<TimeslotDto>(await _context.TblTimeslots.FirstOrDefaultAsync(t => t.TimeslotId.Equals(e.TimeslotId)));

            if(e.GameId != null)
            {
                var game = await _gameRepo.GetGame(e.GameId ?? default(int));
                if (game != null)
                    evencik.GameName = game.GameName;
            }
            else
                evencik.GameName = "";

            eventList.Add(evencik);
        }

        return eventList;
    }

    public async Task<EventDto> UpdateEvent(int id, EventDto existingEvent)
    {
        if(id != existingEvent.EventId)
        {
            throw new ArgumentException("Event id and provided id does not match!!!!!!!!");
        }

        var dbEvent = await _context.TblEvents.FirstOrDefaultAsync(e => e.EventId == id);

        if (dbEvent == null)
        {
            throw new ArgumentNullException("Event with this id does not exist.");
        }

        dbEvent.EventDescription = existingEvent.EventDescription;
        dbEvent.EventName = existingEvent.EventName;
        dbEvent.EventStatus = existingEvent.EventStatus;
        dbEvent.EventDescription = existingEvent?.EventDescription;
        dbEvent.OrderId = existingEvent?.OrderId;
        dbEvent.LocationId = existingEvent?.LocationId;
        dbEvent.GameId = existingEvent?.GameId;
        dbEvent.TimeslotId = existingEvent?.TimeslotId;

        await _context.SaveChangesAsync();

        return _mapper.Map<EventDto>(dbEvent);
    }
    private async Task<decimal> CalculateOrderAmount(int attendeeCount, int locationId)
    {
        var dbLocation = await _context.TblLocations.FirstOrDefaultAsync(l => l.LocationId == locationId);
        var price = attendeeCount * dbLocation.UserHourPrice;
        return (decimal)price;
    }


    public async Task<bool> AssignUser(AssignUserToEventDto assignUser)
    {
        var dbUser = await _context.TblUsers.FirstOrDefaultAsync(e => e.UserId == assignUser.UserId);
        if (dbUser == null)
            return false;

        var dbEvent = await _context.TblEvents.FirstOrDefaultAsync(e => e.EventId == assignUser.EventId);
        if (dbEvent == null)
            return false;

        var dbParti = await _context.TblParticipants.FirstOrDefaultAsync(e => e.EventId == assignUser.EventId && e.UserId == assignUser.UserId);
        if(dbParti != null)
            return false;

        ParticipantDto dto = new ParticipantDto
        {
            CharacterId = assignUser.CharacterId,
            EventId = assignUser.EventId,
            UserId = assignUser.UserId,
        };
        var ret = await _participantService.AddParticipant(dto);

        if (ret < 0) return false;
        else         return true;
    }

    public async Task<bool> UnassignUser(UnassignUserDto unassignUser)
    {
        return await _participantService.DeleteParticipant(unassignUser);
    }
}
