import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaBell, FaCalendarAlt, FaArrowRight, FaImage } from 'react-icons/fa';
import { fetchNotices, getImageUrl } from '../api/config';
import { formatDate } from '../utils/dateUtils';

export default function NoticeBoard({ limit = 5 }) {
  const [notices, setNotices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchNotices(limit)
      .then(data => {
        const items = data?.data || data?.notices || data?.rows || data || [];
        setNotices(Array.isArray(items) ? items : []);
        setLoading(false);
      })
      .catch(err => {
        setError('Could not load notices');
        setLoading(false);
      });
  }, [limit]);

  return (
    <section className="py-12 px-4 bg-primary-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary-700 rounded-lg flex items-center justify-center">
              <FaBell className="text-white text-lg" />
            </div>
            <div>
              <h2 className="font-display text-2xl font-bold text-primary-900">Notice Board</h2>
              <div className="text-primary-500 text-sm">Latest announcements & updates</div>
            </div>
          </div>
          <Link
            to="/notices"
            className="hidden md:flex items-center gap-1.5 text-primary-700 hover:text-accent font-semibold text-sm transition-colors border border-primary-700 hover:border-accent px-4 py-2 rounded-lg"
          >
            View All Notices <FaArrowRight className="text-xs" />
          </Link>
        </div>

        {loading && (
          <div className="space-y-3">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="h-16 bg-gray-200 rounded-lg animate-pulse" />
            ))}
          </div>
        )}

        {error && !loading && (
          <div className="text-center py-8 text-gray-400">
            <FaBell className="text-4xl mx-auto mb-2 opacity-30" />
            <p className="text-sm">{error}</p>
          </div>
        )}

        {!loading && !error && notices.length === 0 && (
          <div className="text-center py-8 text-gray-400 text-sm">No notices available at this time.</div>
        )}

        {!loading && !error && notices.length > 0 && (
          <div className="space-y-3">
            {notices.map((notice, i) => (
              <Link
                key={notice.id || i}
                to={`/notices/${notice.id}`}
                className="card-hover flex items-start gap-4 bg-white rounded-xl p-4 border border-primary-100 hover:border-primary-300 group"
              >
                {/* Thumbnail */}
                <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0 bg-primary-100">
                  {notice.featuredImage ? (
                    <img
                      src={getImageUrl(notice.featuredImage)}
                      alt={notice.title}
                      className="w-full h-full object-cover"
                      onError={e => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'flex'; }}
                    />
                  ) : null}
                  <div className={`w-full h-full bg-primary-700 items-center justify-center ${notice.featuredImage ? 'hidden' : 'flex'}`}>
                    <FaBell className="text-white text-xl" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="font-semibold text-primary-900 group-hover:text-primary-600 transition-colors text-sm leading-tight line-clamp-2">
                      {notice.title}
                    </h3>
                    {i === 0 && (
                      <span className="flex-shrink-0 bg-red-100 text-red-600 text-xs font-bold px-2 py-0.5 rounded-full">NEW</span>
                    )}
                  </div>
                  <div className="flex items-center gap-1.5 mt-1.5 text-xs text-gray-400">
                    <FaCalendarAlt className="text-primary-400" />
                    <span>{formatDate(notice.publishDate || notice.createdAt)}</span>
                    {notice.author && <span className="ml-2">· {notice.author}</span>}
                  </div>
                </div>

                <FaArrowRight className="text-primary-300 group-hover:text-primary-600 transition-colors flex-shrink-0 mt-1" />
              </Link>
            ))}
          </div>
        )}

        <div className="mt-6 md:hidden text-center">
          <Link
            to="/notices"
            className="inline-flex items-center gap-2 bg-primary-700 text-white font-semibold px-6 py-2.5 rounded-lg hover:bg-primary-800 transition-colors"
          >
            View All Notices <FaArrowRight className="text-xs" />
          </Link>
        </div>
      </div>
    </section>
  );
}
