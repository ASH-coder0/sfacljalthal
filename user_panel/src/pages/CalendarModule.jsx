import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { FaCalendarAlt, FaArrowRight, FaMapMarkerAlt, FaGift } from "react-icons/fa";
import { fetchEvents } from "../api/config";
import { formatDate } from "../utils/dateUtils";

// BS Calendar Utilities
import {
  BS_MONTHS,
  BS_MONTHS_EN,
  adToBs,
  bsToAd,
  nepaliDigits
} from '../utils/bsCalendarUtils';

// BSCalendar Component
import { BSCalendar } from '../components/BSCalander';

export default function CalendarModule() {
  const API = import.meta.env.VITE_API_URL;
  const todayBs = adToBs(new Date());
  const [selectedBs, setSelectedBs] = useState(todayBs);
  const [events, setEvents] = useState([]);
  const [holidays, setHolidays] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch events once
  useEffect(() => {
    fetchEvents(50)
      .then(data => {
        setEvents(Array.isArray(data) ? data : []);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  // Fetch holidays with polling (every 30 seconds for real-time updates)
  const fetchHolidays = async () => {
    try {
      const response = await axios.get(`${API}/get-holidays`);
      if (response.data.status) {
        setHolidays(response.data.data);
      }
    } catch (error) {
      console.error("Error fetching holidays:", error);
    }
  };

  useEffect(() => {
    fetchHolidays();
    const interval = setInterval(fetchHolidays, 30000);
    return () => clearInterval(interval);
  }, [API]);

  // Build holidayMap: key = "year-month-day" -> array of titles
  const holidayMap = new Map();
  holidays.forEach(holiday => {
    if (!holiday.holiday_date) return;
    const adDate = new Date(holiday.holiday_date);
    if (isNaN(adDate)) return;
    const bs = adToBs(adDate);
    const key = `${bs.year}-${bs.month}-${bs.day}`;
    if (!holidayMap.has(key)) {
      holidayMap.set(key, []);
    }
    holidayMap.get(key).push(holiday.title);
  });

  // Event dates for dot indicators
  const eventDates = events
    .filter(e => e.event_date)
    .map(e => adToBs(new Date(e.event_date)));

  // Events on selected BS date
  const selectedAdDate = bsToAd(selectedBs.year, selectedBs.month, selectedBs.day);
  const selectedEvents = events.filter(event => {
    if (!event.event_date) return false;
    const evDate = new Date(event.event_date);
    return (
      evDate.getFullYear() === selectedAdDate.getFullYear() &&
      evDate.getMonth() === selectedAdDate.getMonth() &&
      evDate.getDate() === selectedAdDate.getDate()
    );
  });

  // Holidays on selected BS date
  const selectedHolidayKey = `${selectedBs.year}-${selectedBs.month}-${selectedBs.day}`;
  const selectedHolidayTitles = holidayMap.get(selectedHolidayKey) || [];

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const allUpcomingEvents = events
    .filter(e => {
      if (!e.event_date) return false;
      const eventDate = new Date(e.event_date);
      eventDate.setHours(0, 0, 0, 0);
      return eventDate >= today;
    })
    .sort((a, b) => new Date(a.event_date) - new Date(b.event_date));

  const UPCOMING_LIMIT = 5; //can change limit heres
  const upcomingEvents = allUpcomingEvents.slice(0, UPCOMING_LIMIT);

  const hasSelectedContent = selectedEvents.length > 0 || selectedHolidayTitles.length > 0;
  const displayEvents = hasSelectedContent ? selectedEvents : upcomingEvents;
  const isShowingSelected = hasSelectedContent;

  const selectedBsLabel = `${nepaliDigits(selectedBs.day)} ${BS_MONTHS[selectedBs.month]} ${nepaliDigits(selectedBs.year)}`;
  const selectedAdLabel = selectedAdDate.toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });

  return (
    <section className="py-12 px-4 bg-primary-50">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary-700 rounded-lg flex items-center justify-center">
              <FaCalendarAlt className="text-white text-lg" />
            </div>
            <div>
              <h2 className="font-display text-2xl font-bold text-primary-900">Event Calendar</h2>
              <div className="text-primary-500 text-sm">Upcoming events & holidays</div>
            </div>
          </div>
          <Link
            to="/events"
            className="hidden md:flex items-center gap-1.5 text-primary-700 hover:text-accent font-semibold text-sm transition-colors border border-primary-700 hover:border-accent px-4 py-2 rounded-lg"
          >
            View All <FaArrowRight className="text-xs" />
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* BS Calendar */}
          <BSCalendar
            selectedBs={selectedBs}
            onSelect={setSelectedBs}
            eventDates={eventDates}
            holidayMap={holidayMap}
          />

          {/* Events & Holidays panel */}
          <div className="bg-white rounded-2xl p-5 shadow-sm border border-primary-100">
            <div className="flex items-center justify-between mb-4">
              <div>
                {isShowingSelected && (
                  <>
                    <h3 className="font-display font-semibold text-primary-900 text-lg leading-tight">
                      Event on {selectedBsLabel}
                    </h3>
                    <div className="text-xs text-gray-400 mt-0.5">{selectedAdLabel}</div>
                  </>
                )}
                {!isShowingSelected && (
                  <h3 className="font-display font-semibold text-primary-900 text-lg leading-tight">
                    Upcoming Events
                  </h3>
                )}
              </div>
              {isShowingSelected && (selectedEvents.length + selectedHolidayTitles.length) > 2 && (
                <Link to="/events" className="text-xs text-primary-600 hover:text-accent font-semibold flex items-center gap-1">
                  +{(selectedEvents.length + selectedHolidayTitles.length) - 2} more <FaArrowRight className="text-[10px]" />
                </Link>
              )}
            </div>

            {/* Loading skeleton */}
            {loading && (
              <div className="space-y-3">
                {[...Array(2)].map((_, i) => (
                  <div key={i} className="h-20 bg-gray-100 rounded-xl animate-pulse" />
                ))}
              </div>
            )}

            {!loading && (
              <>
                {/* Holidays Section */}
                {selectedHolidayTitles.length > 0 && (
                  <div className="mb-4">
                    <div className="space-y-2">
                      {selectedHolidayTitles.map((title, idx) => (
                        <div
                          key={`holiday-${idx}`}
                          className="flex items-center gap-3 p-3 rounded-xl border border-red-200 bg-red-50"
                        >
                          <div className="flex-shrink-0 w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                            <FaGift className="text-red-600" />
                          </div>
                          <div className="flex-1">
                            <div className="font-semibold text-red-800">{title}</div>
                            <div className="text-xs text-red-600">Holiday</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Events Section */}
                {displayEvents.length > 0 && (
                  <div>
                    {selectedHolidayTitles.length > 0 && (
                      <div className="flex items-center gap-2 text-primary-600 font-semibold text-sm mb-2 mt-2">
                        <FaCalendarAlt className="text-accent" />
                        <span>Events</span>
                      </div>
                    )}
                    <div className="space-y-3">
                      {displayEvents.map((event, i) => {
                        const evBs = event.event_date ? adToBs(new Date(event.event_date)) : null;
                        return (
                          <Link
                            key={event.id || i}
                            to={`/events/${event.id}`}
                            className="group flex gap-3 p-3 rounded-xl border border-primary-100 hover:border-primary-300 hover:bg-primary-50 transition-all"
                          >
                            {evBs && (
                              <div className="flex-shrink-0 w-12 bg-primary-700 text-white rounded-lg py-2 text-center">
                                <div className="text-base font-bold leading-none">{nepaliDigits(evBs.day)}</div>
                                <div className="text-[10px] opacity-80 mt-0.5">{BS_MONTHS_EN[evBs.month].slice(0, 4)}</div>
                                <div className="text-[9px] opacity-60 mt-0.5">
                                  {new Date(event.event_date).getDate()}{" "}
                                  {new Date(event.event_date).toLocaleString("en", { month: "short" })}
                                </div>
                              </div>
                            )}
                            <div className="flex-1 min-w-0">
                              <div className="font-semibold text-primary-900 text-sm group-hover:text-primary-600 transition-colors leading-snug line-clamp-2">
                                {event.title}
                              </div>
                              {event.content && (
                                <div className="text-xs text-gray-500 mt-0.5 line-clamp-1">
                                  {event.content.replace(/<[^>]*>/g, "")}
                                </div>
                              )}
                              {event.location && (
                                <div className="flex items-center gap-1 text-xs text-gray-400 mt-1">
                                  <FaMapMarkerAlt className="text-accent text-[10px]" />
                                  {event.location}
                                </div>
                              )}
                              {!event.content && !event.location && event.event_date && (
                                <div className="text-xs text-gray-400 mt-1">{formatDate(event.event_date)}</div>
                              )}
                            </div>
                            <FaArrowRight className="flex-shrink-0 text-primary-300 group-hover:text-primary-600 text-xs self-center transition-colors" />
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* Empty states */}
                {isShowingSelected && selectedHolidayTitles.length === 0 && displayEvents.length === 0 && (
                  <div className="text-center py-8 text-gray-400">
                    <FaCalendarAlt className="text-4xl mx-auto mb-2 opacity-20" />
                    <p className="text-sm">No events or holidays on this date.</p>
                  </div>
                )}

                {!isShowingSelected && displayEvents.length === 0 && (
                  <div className="text-center py-8 text-gray-400">
                    <FaCalendarAlt className="text-4xl mx-auto mb-2 opacity-20" />
                    <p className="text-sm">No upcoming events at this time.</p>
                  </div>
                )}
              </>
            )}

            {/* "View All" footer – only for upcoming events and only if more exist */}
            {!loading && !isShowingSelected && allUpcomingEvents.length > UPCOMING_LIMIT && (
              <div className="mt-4 pt-3 border-t border-gray-100">
                <Link
                  to="/events"
                  className="flex items-center justify-center gap-1.5 text-primary-700 hover:text-accent font-semibold text-sm transition-colors"
                >
                  View All Events <FaArrowRight className="text-xs" />
                </Link>
              </div>
            )}
          </div>
        </div>

        {/* Mobile View All */}
        <div className="mt-6 md:hidden text-center">
          <Link
            to="/events"
            className="inline-flex items-center gap-2 bg-primary-700 text-white font-semibold px-6 py-2.5 rounded-lg hover:bg-primary-800 transition-colors"
          >
            View All Events <FaArrowRight className="text-xs" />
          </Link>
        </div>
      </div>
    </section>
  );
}