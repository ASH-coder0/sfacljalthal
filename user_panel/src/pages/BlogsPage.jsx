import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { FaNewspaper, FaCalendarAlt, FaUser, FaArrowLeft, FaSearch } from 'react-icons/fa';
import { fetchBlogs, fetchBlogById, getImageUrl } from '../api/config';
import { formatDate, formatFullDate } from '../utils/dateUtils';

const PageBanner = ({ title, subtitle, breadcrumb }) => (
  <div className="bg-gradient-to-r from-primary-900 to-primary-700 py-12 px-4">
    <div className="max-w-7xl mx-auto">
      <div className="text-primary-300 text-sm mb-2">{breadcrumb}</div>
      <h1 className="font-display text-3xl md:text-4xl font-bold text-white mb-2">{title}</h1>
      {subtitle && <p className="text-primary-200">{subtitle}</p>}
    </div>
  </div>
);


export function BlogsPage() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [search, setSearch] = useState('');
  const limit = 9;

useEffect(() => {
  setLoading(true);

  fetchBlogs(limit, page)
    .then(res => {
       console.log('fetchBlogs res:', res); 
      setBlogs(res.data || []);        
      setTotal(res.totalItems || 0);
      setLoading(false);
    })
    .catch(() => setLoading(false));
}, [page]);

  const filtered = blogs.filter(b =>
    b.title?.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <PageBanner title="News & Blogs" subtitle="Latest news, events and cooperative updates" breadcrumb="Home › News & Blogs" />

      <section className="py-10 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="relative mb-8 max-w-md">
            <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search news & blogs..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-primary-500 text-sm"
            />
          </div>

          {loading && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="rounded-xl overflow-hidden bg-gray-100 animate-pulse h-72" />
              ))}
            </div>
          )}

          {!loading && filtered.length === 0 && (
            <div className="text-center py-16 text-gray-400">
              <FaNewspaper className="text-5xl mx-auto mb-3 opacity-20" />
              <p>No articles found.</p>
            </div>
          )}

          {!loading && filtered.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((blog, i) => (
                <Link
                  key={blog.id || i}
                  to={`/blogs/${blog.id}`}
                  className="card-hover group rounded-xl overflow-hidden border border-gray-100 hover:border-primary-200 bg-white shadow-sm"
                >
                  <div className="h-48 overflow-hidden bg-primary-50">
                    {blog.featuredImage ? (
                      <img src={getImageUrl(blog.featuredImage)} alt={blog.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-primary-700 to-primary-500 flex items-center justify-center">
                        <FaNewspaper className="text-white text-4xl opacity-40" />
                      </div>
                    )}
                  </div>
                  <div className="p-5">
                    <h3 className="font-display font-bold text-primary-900 group-hover:text-primary-600 transition-colors leading-tight mb-2 line-clamp-2">
                      {blog.title}
                    </h3>
                    {blog.content && (
                      <p className="text-gray-500 text-sm mb-3 line-clamp-2">
                        {blog.content.replace(/<[^>]*>/g, '').substring(0, 120)}...
                      </p>
                    )}
                    <div className="flex items-center gap-3 text-xs text-gray-400 pt-3 border-t border-gray-100">
                      <span className="flex items-center gap-1"><FaCalendarAlt className="text-primary-400" />{formatDate(blog.publishDate || blog.createdAt)}</span>
                      {blog.author && <span className="flex items-center gap-1 truncate"><FaUser className="text-primary-400" />{blog.author}</span>}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}

          {total > limit && (
            <div className="flex justify-center gap-2 mt-10">
              <button onClick={() => setPage(p => Math.max(1, p - 1))} disabled={page === 1}
                className="px-4 py-2 border rounded-lg text-sm disabled:opacity-40 hover:bg-primary-50 transition-colors">
                ← Prev
              </button>
              <span className="px-4 py-2 text-sm text-gray-500">Page {page}</span>
              <button onClick={() => setPage(p => p + 1)} disabled={page * limit >= total}
                className="px-4 py-2 border rounded-lg text-sm disabled:opacity-40 hover:bg-primary-50 transition-colors">
                Next →
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

export function BlogSinglePage() {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchBlogById(id)
      .then(data => {
        setBlog(data?.data || data);
        setLoading(false);
      })
      .catch(() => { setError('Article not found.'); setLoading(false); });
  }, [id]);

  return (
    <div>
      <div className="bg-gradient-to-r from-primary-900 to-primary-700 py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <Link to="/blogs" className="inline-flex items-center gap-2 text-primary-200 hover:text-white text-sm mb-4 transition-colors">
            <FaArrowLeft /> Back to News & Blogs
          </Link>
          <h1 className="font-display text-2xl md:text-3xl font-bold text-white">
            {loading ? 'Loading...' : (blog?.title || 'Article')}
          </h1>
        </div>
      </div>

      <section className="py-10 px-4">
        <div className="max-w-4xl mx-auto">
          {loading && <div className="h-64 bg-gray-100 rounded-xl animate-pulse" />}
          {error && <div className="text-center py-12 text-gray-400">{error}</div>}
          {!loading && !error && blog && (
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
              {blog.featuredImage && (
                <div className="h-64 overflow-hidden">
                  <img src={getImageUrl(blog.featuredImage)} alt={blog.title} className="w-full h-full object-cover" />
                </div>
              )}
              <div className="p-8">
                <div className="flex flex-wrap gap-4 text-sm text-gray-400 mb-6 pb-6 border-b border-gray-100">
                  <span className="flex items-center gap-1.5"><FaCalendarAlt className="text-primary-400" />{formatFullDate(blog.publishDate || blog.createdAt)}</span>
                  {blog.author && <span className="flex items-center gap-1.5"><FaUser className="text-primary-400" />{blog.author}</span>}
                </div>
                <div
                  className="prose prose-sm max-w-none text-gray-700 leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: blog.content || '<p>No content available.</p>' }}
                />
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
