import { useState, useEffect } from 'react';
import { FaImages, FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { fetchGallery, getImageUrl } from '../api/config';

const PageBanner = ({ title, subtitle, breadcrumb }) => (
  <div className="bg-gradient-to-r from-primary-900 to-primary-700 py-12 px-4">
    <div className="max-w-7xl mx-auto">
      <div className="text-primary-300 text-sm mb-2">{breadcrumb}</div>
      <h1 className="font-display text-3xl md:text-4xl font-bold text-white mb-2">{title}</h1>
      {subtitle && <p className="text-primary-200">{subtitle}</p>}
    </div>
  </div>
);

export default function GalleryPage() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [lightbox, setLightbox] = useState(null);
  const [filter, setFilter] = useState('');
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetchGallery()
      .then(data => {
        const items = Array.isArray(data) ? data : (data?.data || data?.images || []);
        setImages(items);
        const eventSet = [...new Set(items.map(img => img.event).filter(Boolean))];
        setEvents(eventSet);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const filtered = filter
    ? images.filter(img => img.event === filter)
    : images;

  const openLightbox = (index) => setLightbox(index);
  const closeLightbox = () => setLightbox(null);
  const prevImage = () => setLightbox(i => (i - 1 + filtered.length) % filtered.length);
  const nextImage = () => setLightbox(i => (i + 1) % filtered.length);

  useEffect(() => {
    const handler = (e) => {
      if (lightbox !== null) {
        if (e.key === 'Escape') closeLightbox();
        if (e.key === 'ArrowLeft') prevImage();
        if (e.key === 'ArrowRight') nextImage();
      }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [lightbox]);

  const getGalleryImageUrl = (img) => {
    if (!img.image_name && !img.title) return null;
    const filename = img.image_name || img.title;
    const base = (import.meta.env.VITE_API_URL || 'http://localhost:5000/api').replace('/api', '');
    return `${base}/api/getgalleryimage/${filename}`;
  };

  return (
    <div>
      <PageBanner title="Photo Gallery" subtitle="Moments from our cooperative activities & events" breadcrumb="Home › Gallery" />

      <section className="py-10 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Filter tabs */}
          {events.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-8">
              <button
                onClick={() => setFilter('')}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors ${!filter ? 'bg-primary-700 text-white' : 'bg-gray-100 text-gray-600 hover:bg-primary-50'}`}
              >
                All Photos
              </button>
              {events.map(event => (
                <button
                  key={event}
                  onClick={() => setFilter(event)}
                  className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors ${filter === event ? 'bg-primary-700 text-white' : 'bg-gray-100 text-gray-600 hover:bg-primary-50'}`}
                >
                  {event}
                </button>
              ))}
            </div>
          )}

          {loading && (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {[...Array(12)].map((_, i) => (
                <div key={i} className="aspect-square bg-gray-200 rounded-xl animate-pulse" />
              ))}
            </div>
          )}

          {!loading && filtered.length === 0 && (
            <div className="text-center py-16 text-gray-400">
              <FaImages className="text-5xl mx-auto mb-3 opacity-20" />
              <p>No photos available.</p>
            </div>
          )}

          {!loading && filtered.length > 0 && (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {filtered.map((img, i) => (
                <div
                  key={img.id || i}
                  className="aspect-square overflow-hidden rounded-xl cursor-pointer group relative bg-primary-100"
                  onClick={() => openLightbox(i)}
                >
                  <img
                    src={getGalleryImageUrl(img)}
                    alt={img.event || 'Gallery'}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    onError={e => {
                      e.target.parentNode.classList.add('bg-primary-700');
                      e.target.style.display = 'none';
                    }}
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all flex items-center justify-center">
                    <FaImages className="text-white text-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  {img.event && (
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent py-2 px-3 opacity-0 group-hover:opacity-100 transition-opacity">
                      <p className="text-white text-xs truncate">{img.event}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      {lightbox !== null && filtered[lightbox] && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center"
          onClick={closeLightbox}
        >
          <button className="absolute top-4 right-4 text-white text-2xl hover:text-gray-300" onClick={closeLightbox}>
            <FaTimes />
          </button>
          <button className="absolute left-4 top-1/2 -translate-y-1/2 text-white text-3xl hover:text-gray-300 bg-white/10 rounded-full p-2" onClick={e => { e.stopPropagation(); prevImage(); }}>
            <FaChevronLeft />
          </button>
          <button className="absolute right-4 top-1/2 -translate-y-1/2 text-white text-3xl hover:text-gray-300 bg-white/10 rounded-full p-2" onClick={e => { e.stopPropagation(); nextImage(); }}>
            <FaChevronRight />
          </button>
          <img
            src={getGalleryImageUrl(filtered[lightbox])}
            alt=""
            className="max-w-[90vw] max-h-[90vh] object-contain rounded-lg"
            onClick={e => e.stopPropagation()}
          />
          <div className="absolute bottom-4 left-0 right-0 text-center text-white text-sm opacity-60">
            {lightbox + 1} / {filtered.length}
          </div>
        </div>
      )}
    </div>
  );
}
