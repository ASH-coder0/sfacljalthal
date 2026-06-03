'use client';

import React, { useEffect, useState } from 'react';

const Gallery = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [expandedEvents, setExpandedEvents] = useState({});
  const [selectedImage, setSelectedImage] = useState(null);
  const [modalLoaded, setModalLoaded] = useState(false);

  useEffect(() => {
    fetch('http://localhost:5000/api/gallery')
      .then((res) => res.json())
      .then((data) => {
        setImages(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Failed to fetch images:', err);
        setLoading(false);
      });
  }, []);

  const getImageSrc = (filename) =>
    `http://localhost:5000/api/getgalleryimage/${encodeURIComponent(filename)}`;

  // Group images by event
  const groupedImages = images.reduce((acc, image) => {
    const event = image.event?.trim() || 'Other';
    if (!acc[event]) acc[event] = [];
    acc[event].push(image);
    return acc;
  }, {});

  // Sort images inside each event by descending id (newest first)
  Object.keys(groupedImages).forEach((event) => {
    groupedImages[event].sort((a, b) => b.id - a.id);
  });

  const toggleExpand = (eventName) => {
    setExpandedEvents((prev) => ({
      ...prev,
      [eventName]: !prev[eventName],
    }));
  };

  return (
    <div className="w-full bg-white">
      <div className="max-w-7xl mx-auto px-4 pt-4 pb-12">
        <div className="bg-blue-900 text-white px-5 py-1.5 font-semibold rounded-t-md text-sm inline-block">
          Gallery Images
        </div>
        <hr className="border-t-2 border-blue-900 w-[90%] mt-0 mb-6" />

        {loading ? (
          <p className="text-center text-gray-500">Loading images...</p>
        ) : Object.keys(groupedImages).length === 0 ? (
          <p className="text-center text-gray-500">No images found.</p>
        ) : (
          Object.entries(groupedImages).map(([event, imgs]) => {
            const showAll = expandedEvents[event];
            const visibleImages = showAll ? imgs : imgs.slice(0, 8);

            return (
              <div key={event} className="mb-10">
                <div className="mb-2">
                  <h3 className="text-xl font-semibold text-gray-800 capitalize">
                    {event}
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {visibleImages.map((img) => (
                    <div
                      key={img.id}
                      className="rounded overflow-hidden shadow-sm bg-white border border-gray-200 cursor-pointer"
                      onClick={() => {
                        setSelectedImage(getImageSrc(img.title));
                        setModalLoaded(false);
                      }}
                    >
                      <img
                        src={getImageSrc(img.title)}
                        alt={img.title}
                        className="w-full h-48 object-cover hover:scale-105 transition-transform duration-200"
                        loading="lazy"
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = '/assets/placeholder.jpg';
                        }}
                      />
                    </div>
                  ))}
                </div>

                {imgs.length > 8 && (
                  <div className="flex justify-end mt-3">
                    <button
                      onClick={() => toggleExpand(event)}
                      className="text-sm px-3 py-1 border border-gray-500 rounded hover:bg-gray-500 transition"
                    >
                      {showAll ? 'See Less' : 'See More'}
                    </button>
                  </div>
                )}
              </div>
            );
          })
        )}
      </div>

      {/* Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 px-4"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative w-[90vw] max-w-4xl aspect-[16/9] bg-white rounded-lg overflow-hidden shadow-lg"
            onClick={(e) => e.stopPropagation()}
          >
            {!modalLoaded && (
              <div className="absolute inset-0 flex items-center justify-center text-white">
                Loading image...
              </div>
            )}
            <img
              src={selectedImage}
              alt="Preview"
              onLoad={() => setModalLoaded(true)}
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = '/assets/placeholder.jpg';
              }}
              className={`w-full h-full object-contain transition-opacity duration-300 ${
                modalLoaded ? 'opacity-100' : 'opacity-0'
              }`}
            />
            <button
              className="absolute top-2 right-2 text-black text-3xl font-bold hover:text-red-500"
              onClick={() => setSelectedImage(null)}
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
