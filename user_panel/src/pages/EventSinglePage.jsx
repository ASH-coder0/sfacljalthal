// src/pages/EventSinglePage.jsx
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { FaCalendarAlt, FaArrowLeft, FaMapMarkerAlt } from "react-icons/fa";
import { fetchEventById, fetchEvents } from "../api/config";
import { formatDate } from "../utils/dateUtils";
import { adToBs, BS_MONTHS, BS_MONTHS_EN, nepaliDigits } from "../utils/bsCalendarUtils";
import { getImageUrl } from "../api/config"; 

export default function EventSinglePage() {
  const { id } = useParams();
  const [event, setEvent] = useState(null);
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      fetchEventById(id)
        .then(data => {
          setEvent(data);
          setLoading(false);
        })
        .catch(err => {
          console.error("Error fetching event:", err);
          setLoading(false);
        });
    } else {
      fetchEvents(100)
        .then(data => {
          setEvents(Array.isArray(data) ? data : []);
          setLoading(false);
        })
        .catch(() => setLoading(false));
    }
  }, [id]);

  // Single event view
  if (id) {
    if (loading) {
      return (
        <div className="py-12 px-4 bg-primary-50 min-h-screen flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-700 mx-auto mb-4"></div>
            <p className="text-gray-500">Loading event details...</p>
          </div>
        </div>
      );
    }

    if (!event) {
      return (
        <div className="py-12 px-4 bg-primary-50 min-h-screen flex items-center justify-center">
          <div className="text-center">
            <FaCalendarAlt className="text-6xl text-gray-300 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-primary-900 mb-2">Event Not Found</h2>
            <p className="text-gray-500 mb-6">The event you're looking for doesn't exist.</p>
            <Link to="/events" className="inline-flex items-center gap-2 bg-primary-700 text-white px-6 py-2.5 rounded-lg">
              <FaArrowLeft /> Back to Events
            </Link>
          </div>
        </div>
      );
    }

    const evBs = event.event_date ? adToBs(new Date(event.event_date)) : null;
    
    // Get the correct image URL using the helper function
    const imageUrl = event.featuredImage;//image location in db
    const fullImageUrl = imageUrl ? getImageUrl(imageUrl) : null;

    return (
      <section className="py-12 px-4 bg-primary-50 min-h-screen">
        <div className="max-w-4xl mx-auto">
          <Link to="/events" className="inline-flex items-center gap-2 text-primary-600 hover:text-accent mb-6">
            <FaArrowLeft /> Back to all events
          </Link>

          <div className="bg-white rounded-2xl shadow-sm border border-primary-100 overflow-hidden">
            {/* Image Display Section */}
            {fullImageUrl ? (
              <div className="relative w-full h-60 md:h-96 bg-gray-100">
                <img 
                  src={fullImageUrl} 
                  alt={event.title || "Event image"} 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    // Fallback if image fails to load
                    e.target.style.display = 'none';
                    e.target.parentElement.innerHTML = `
                      <div class="w-full h-full flex items-center justify-center bg-primary-100">
                        <FaCalendarAlt class="text-5xl text-primary-400" />
                      </div>
                    `;
                  }}
                />
              </div>
            ) : (
              <div className="w-full h-64 md:h-96 bg-primary-100 flex items-center justify-center">
                <FaCalendarAlt className="text-5xl text-primary-400" />
              </div>
            )}

            <div className="p-6 md:p-8">
              <h1 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4">
                {event.title}
              </h1>
              
              <div className="flex flex-wrap gap-4 mb-6 text-sm text-gray-600">
                {event.event_date && (
                  <div className="flex items-center gap-2">
                    <FaCalendarAlt className="text-accent" />
                    <span>{formatDate(event.event_date)}</span>
                    {evBs && (
                      <span className="text-gray-400">
                        ({nepaliDigits(evBs.day)} {BS_MONTHS[evBs.month]} {nepaliDigits(evBs.year)} BS)
                      </span>
                    )}
                  </div>
                )}
                {event.location && (
                  <div className="flex items-center gap-2">
                    <FaMapMarkerAlt className="text-accent" />
                    <span>{event.location}</span>
                  </div>
                )}
              </div>

              {event.content && (
                <div 
                  className="prose prose-primary max-w-none" 
                  dangerouslySetInnerHTML={{ __html: event.content }} 
                />
              )}
            </div>
          </div>
        </div>
      </section>
    );
  }

  // Events listing view (when no id)
  return (
    <section className="py-12 px-4 bg-primary-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <div className="w-16 h-16 bg-primary-700 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <FaCalendarAlt className="text-white text-2xl" />
          </div>
          <h1 className="text-4xl font-bold text-primary-900 mb-2">All Events</h1>
          <p className="text-gray-600">Browse through all our events and activities</p>
        </div>

        {loading && (
          <div className="space-y-4">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="h-32 bg-gray-100 rounded-xl animate-pulse" />
            ))}
          </div>
        )}

        {!loading && events.length === 0 && (
          <div className="text-center py-16 bg-white rounded-xl border border-primary-100">
            <FaCalendarAlt className="text-5xl mx-auto mb-3 text-gray-300" />
            <p className="text-gray-500">No events found.</p>
          </div>
        )}

        {!loading && events.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {events.map((eventItem) => {
              const evBs = eventItem.event_date ? adToBs(new Date(eventItem.event_date)) : null;
              const imageUrl = eventItem.featuredImage || eventItem.image || eventItem.featured_image;
              const fullImageUrl = imageUrl ? getImageUrl(imageUrl) : null;
              
              return (
                <Link key={eventItem.id} to={`/events/${eventItem.id}`} className="group bg-white rounded-xl border border-primary-100 overflow-hidden hover:shadow-lg transition-all">
                  {fullImageUrl ? (
                    <div className="h-48 overflow-hidden">
                      <img 
                        src={fullImageUrl} 
                        alt={eventItem.title} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.parentElement.innerHTML = `
                            <div class="w-full h-full flex items-center justify-center bg-primary-100">
                              <FaCalendarAlt class="text-3xl text-primary-400" />
                            </div>
                          `;
                        }}
                      />
                    </div>
                  ) : (
                    <div className="h-48 bg-primary-100 flex items-center justify-center">
                      <FaCalendarAlt className="text-3xl text-primary-400" />
                    </div>
                  )}
                  <div className="p-5">
                    <div className="flex items-start gap-3 mb-2">
                      {evBs && (
                        <div className="flex-shrink-0 w-12 bg-primary-700 text-white rounded-lg py-1.5 text-center">
                          <div className="text-base font-bold leading-none">{nepaliDigits(evBs.day)}</div>
                          <div className="text-[9px] opacity-80">{BS_MONTHS_EN[evBs.month].slice(0, 3)}</div>
                        </div>
                      )}
                      <div className="flex-1">
                        <h3 className="font-semibold text-primary-900 text-lg group-hover:text-primary-600 transition-colors line-clamp-2">
                          {eventItem.title}
                        </h3>
                        <div className="flex flex-wrap gap-3 mt-2 text-xs text-gray-500">
                          {eventItem.event_date && (
                            <span className="flex items-center gap-1">
                              <FaCalendarAlt className="text-accent text-[10px]" />
                              {formatDate(eventItem.event_date)}
                            </span>
                          )}
                          {eventItem.location && (
                            <span className="flex items-center gap-1">
                              <FaMapMarkerAlt className="text-accent text-[10px]" />
                              {eventItem.location}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                    {eventItem.content && (
                      <p className="text-gray-600 text-sm mt-2 line-clamp-2">
                        {eventItem.content.replace(/<[^>]*>/g, "")}
                      </p>
                    )}
                  </div>
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}