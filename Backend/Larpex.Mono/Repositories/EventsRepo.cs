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

    public EventsRepo(
        LarpexDbContext context,
        IMapper mapper,
        IPaymentService paymentService
        )
    {
        _context = context;
        _mapper = mapper;
        _paymentService = paymentService;
    }
    public async Task<EventDto> CreateEvent(EventDto eventDto)
    {
        await _context.TblEvents.AddAsync(_mapper.Map<TblEvent>(eventDto));
        await _context.SaveChangesAsync();
        return eventDto;
    }

    public async Task<EventDto> CreateEventWithTimeslot(EventWithTimeslotDto eventWithTimeslotDto)
    {
        EventDto newEvent = new EventDto();
        newEvent.EventDescription = eventWithTimeslotDto.EventDescription;
        newEvent.EventName = eventWithTimeslotDto.EventName;
        newEvent.GameId = eventWithTimeslotDto.GameId;
        newEvent.EventStatus = "";

        //Location
        TblLocation location = new TblLocation
        {
            LocationAddress = eventWithTimeslotDto.LocationAddress
        };
        _context.TblLocations.Add(location);
        await _context.SaveChangesAsync();
        newEvent.LocationId = location.LocationId;

        //Timeslot
        TblTimeslot timeslot = new TblTimeslot
        {
            TimeslotDatetime = eventWithTimeslotDto.StartDate,
            TimeslotDuration = new TimeSpan(0, eventWithTimeslotDto.DurationHour, eventWithTimeslotDto.DurationMinute, 0, 0, 0),
        };
        _context.TblTimeslots.Add(timeslot);
        await _context.SaveChangesAsync();
        newEvent.TimeslotId = timeslot.TimeslotId;

        newEvent.OrderId = 14;

        ////TblPayment
        //TblPayment payment = new TblPayment
        //{
        //    PaymentAccepted = true,
        //};
        //_context.TblPayments.Add(payment);
        //await _context.SaveChangesAsync();


        ////TblOrder
        //TblOrder order = new TblOrder
        //{
        //    OrderAmount = eventWithTimeslotDto.ClientPrice,
        //    PaymentId = payment.PaymentId
        //};
        //_context.TblOrders.Add(order);
        //await _context.SaveChangesAsync();
        //newEvent.LocationId = order.OrderId;


        _context.TblEvents.Add(_mapper.Map<TblEvent>(newEvent));
        int rews = await _context.SaveChangesAsync();
        return newEvent;
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
}
