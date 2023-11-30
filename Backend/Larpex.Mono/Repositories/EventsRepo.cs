using AutoMapper;
using Larpex.Mono.Models;
using Larpex.Mono.Repositories.Interfaces;
using Larpex.Mono.Services.Interfaces;
using Larpex.Shared.ModelDto;
using Microsoft.EntityFrameworkCore;

namespace Larpex.Mono.Repositories;

public class EventsRepo : IEventsRepo
{
    private readonly LarpexDbContext _context;
    private readonly IMapper _mapper;
    private readonly IPaymentService _paymentService;
    private readonly IImageRepo _imageRepo;

    public EventsRepo(
        LarpexDbContext context,
        IMapper mapper,
        IPaymentService paymentService,
        IImageRepo imageRepo
        )
    {
        _context = context;
        _mapper = mapper;
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

        #region PaymentCreation
        var paymentId = Guid.NewGuid().ToString();
        TblPayment payment = new TblPayment
        {
            PaymentId = paymentId,
            PaymentAccepted = true,
        };
        _context.TblPayments.Add(payment);
        await _context.SaveChangesAsync();
        #endregion

        #region OrderCreation
        var orderId = Guid.NewGuid().ToString();
        TblOrder order = new TblOrder
        {
            OrderId = orderId,
            OrderAmount = await CalculateOrderAmount(eventWithTimeslotDto.AttendeesCount, eventWithTimeslotDto.LocationId),
            PaymentId = payment.PaymentId
        };
        _context.TblOrders.Add(order);
        await _context.SaveChangesAsync();
        newEvent.OrderId = order.OrderId;
        #endregion

        #region IconCreation
        var image = await _imageRepo.UploadImage(eventWithTimeslotDto.Icon);
        newEvent.EventIconUrl = image.FilePath;
        #endregion

        return _mapper.Map<EventDto>(newEvent);
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

    public async Task<EventDto> GetEvent(int id)
    {
        var dbEvent = await _context.TblEvents.FirstOrDefaultAsync(e => e.EventId == id);

        if (dbEvent == null)
        {
            throw new ArgumentNullException("Event with this id does not exist.");
        }

        return _mapper.Map<EventDto>(dbEvent);
    }

    public async Task<IEnumerable<EventDto>> GetEvents()
    {
        var dbEvents = await _context.TblEvents.ToListAsync();

        if (dbEvents.Count == 0)
        {
            throw new ArgumentNullException("No available events!!!!!!!!!!");
        }

        var eventList = new List<EventDto>();

        foreach(var e in dbEvents)
        {
            eventList.Add(_mapper.Map<EventDto>(e));
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
}
