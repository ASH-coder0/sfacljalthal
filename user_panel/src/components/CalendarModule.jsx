import { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import { FaCalendarAlt } from 'react-icons/fa';
import { fetchEvents } from '../api/config';
import { formatDate } from '../utils/dateUtils';

export default function CalendarModule() {
  const [value, setValue] = useState(new Date());
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchEvents(50)
      .then(data => {
        const items = data?.data || data?.events || data?.rows || data || [];
        setEvents(Array.isArray(items) ? items : []);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const getEventsForDate = (date) => {
    return events.filter(event => {
      if (!event.event_date) return false;
      const evDate = new Date(event.event_date);
      return (
        evDate.getFullYear() === date.getFullYear() &&
        evDate.getMonth() === date.getMonth() &&
        evDate.getDate() === date.getDate()
      );
    });
  };

  const selectedEvents = getEventsForDate(value);

  const tileContent = ({ date, view }) => {
    if (view !== 'month') return null;
    const dayEvents = getEventsForDate(date);
    if (dayEvents.length === 0) return null;
    return (
      <div className="flex justify-center mt-0.5">
        <span className="w-1.5 h-1.5 bg-accent rounded-full" />
      </div>
    );
  };

  return (
    <section className="py-12 px-4 bg-primary-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-10 h-10 bg-primary-700 rounded-lg flex items-center justify-center">
            <FaCalendarAlt className="text-white text-lg" />
          </div>
          <div>
            <h2 className="font-display text-2xl font-bold text-primary-900">Event Calendar</h2>
            <div className="text-primary-500 text-sm">Upcoming events & activities</div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Calendar */}
          <div className="bg-white rounded-2xl p-4 shadow-sm border border-primary-100">
            <Calendar
              onChange={setValue}
              value={value}
              tileContent={tileContent}
              className="w-full"
            />
            <div className="mt-3 flex items-center gap-2 text-xs text-gray-500 border-t border-gray-100 pt-3">
              <span className="w-2 h-2 bg-accent rounded-full" />
              <span>Dot indicates event on that date</span>
            </div>
          </div>

          {/* Events list */}
          <div>
            <div className="bg-white rounded-2xl p-5 shadow-sm border border-primary-100">
              <h3 className="font-display font-semibold text-primary-900 mb-4 text-lg">
                {selectedEvents.length > 0
                  ? `Events on ${value.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}`
                  : 'Upcoming Events'}
              </h3>

              {loading && (
                <div className="space-y-3">
                  {[...Array(4)].map((_, i) => (
                    <div key={i} className="h-12 bg-gray-100 rounded-lg animate-pulse" />
                  ))}
                </div>
              )}

              {!loading && selectedEvents.length > 0 ? (
                <div className="space-y-3">
                  {selectedEvents.map((event, i) => (
                    <div key={event.id || i} className="flex gap-3 p-3 bg-primary-50 rounded-lg border-l-4 border-primary-600">
                      <div>
                        <div className="font-semibold text-primary-900 text-sm">{event.title}</div>
                        {event.content && <div className="text-xs text-gray-500 mt-0.5 line-clamp-1">{event.content.replace(/<[^>]*>/g, '')}</div>}
                      </div>
                    </div>
                  ))}
                </div>
              ) : !loading && (
                <div className="space-y-3">
                  {events.slice(0, 5).map((event, i) => (
                    <div key={event.id || i} className="flex gap-3 items-start p-3 hover:bg-primary-50 rounded-lg transition-colors">
                      <div className="flex-shrink-0 text-center w-12 bg-primary-700 text-white rounded-lg py-1.5">
                        <div className="text-lg font-bold leading-none">
                          {new Date(event.event_date).getDate() || '--'}
                        </div>
                        <div className="text-xs opacity-80">
                          {event.event_date ? new Date(event.event_date).toLocaleString('en', { month: 'short' }) : ''}
                        </div>
                      </div>
                      <div>
                        <div className="font-semibold text-primary-900 text-sm">{event.title}</div>
                        <div className="text-xs text-gray-400 mt-0.5">{formatDate(event.event_date)}</div>
                      </div>
                    </div>
                  ))}
                  {events.length === 0 && !loading && (
                    <p className="text-center text-gray-400 text-sm py-6">No upcoming events at this time.</p>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
