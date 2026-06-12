import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  FaPhone,
  FaFacebook,
  FaYoutube,
  FaTwitter,
  FaEnvelope,
  FaBars,
  FaTimes,
  FaChevronDown,
  FaUser,
} from "react-icons/fa";

const navItems = [
  { label: "Home", path: "/" },
  { label: "About Us", path: "/about" },
  { label: "Notice Board", path: "/notices" },
  { label: "Gallery", path: "/gallery" },
  {
    label: "Dairy Industry",
    path: "/dairy",
    sub: [
      { label: "Description", path: "/dairy#description" },
      { label: "Product Catalog", path: "/dairy#products" },
    ],
  },
  {
    label: "Financial",
    path: "/financial",
    sub: [
      { label: "Overview", path: "/financial#overview" },
      { label: "Deposit Services", path: "/financial#deposit" },
      { label: "Loan Services", path: "/financial#loan" },
      { label: "Required Documents", path: "/financial#documents" },
    ],
  },
  { label: "News / Blogs", path: "/blogs" },
  { label: "Contact Us", path: "/contact" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setOpenDropdown(null);
  }, [location]);

  return (
    <>
      <header className="w-full shadow-lg">
        {/* Top bar */}
        <div className="bg-primary-900 text-white py-2 px-4">
          <div className="max-w-7xl mx-auto flex justify-between items-center text-sm">
            <div className="flex items-center gap-4">
              <a
                href="tel:+977-1-4000000"
                className="flex items-center gap-1.5 hover:text-accent transition-colors"
              >
                <FaPhone className="text-accent text-xs" />
                <span>+977-1-4000000</span>
              </a>
              <a
                href="mailto:info@sfacljalthal.com.np"
                className="hidden md:flex items-center gap-1.5 hover:text-accent transition-colors"
              >
                <FaEnvelope className="text-accent text-xs" />
                <span>info@sfacljalthal.com.np</span>
              </a>
            </div>
            <div className="flex items-center gap-3">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-accent transition-colors"
              >
                <FaFacebook />
              </a>
              <a
                href="https://www.youtube.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-accent transition-colors"
              >
                <FaYoutube />
              </a>
              <a
                href="https://www.twitter.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-accent transition-colors"
              >
                <FaTwitter />
              </a>
              <Link
                to="/login"
                className="ml-2 flex items-center gap-1.5 bg-accent text-white px-3 py-1 rounded text-xs font-semibold hover:bg-yellow-600 transition-colors"
              >
                <FaUser className="text-xs" /> Login
              </Link>
            </div>
          </div>
        </div>

        {/* Logo + Brand Bar */}
        <div className="bg-white border-b border-primary-100 py-3 px-4">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <Link to="/" className="flex items-center gap-3">
              {/* Logo SVG */}
              <div className="w-14 h-14  rounded-full flex items-center justify-center shadow-md flex-shrink-0 border-2 border-accent">
                <img
                  src="/assets/jalthal.png"
                  alt="Jalthal Logo"
                  className="w-cover h-cover object-contain"
                />
              </div>
              <div>
                <div className="font-display text-primary-800 font-bold text-lg leading-tight">
                  साना किसान कृषि सहकारी संस्था लि.
                </div>
                <div className="text-primary-600 text-xs font-body">
                  Sana Kisan Agro Cooperative Ltd. — Jalthal
                </div>
                <div className="text-primary-500 text-xs">
                  sfacljalthal.com.np
                </div>
              </div>
            </Link>
            {/* Banner text on large screens */}
            <div className="hidden lg:block text-right">
              <div className="text-accent font-display font-semibold text-sm">
                सहकारी — समृद्धि — सेवा
              </div>
              <div className="text-primary-600 text-xs mt-0.5">
                Cooperative · Prosperity · Service
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav
        className={`sticky tops-0 z-50 bg-primary-700 transition-all duration-300 ${scrolled ? "shadow-xl" : ""}`}
      >
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center">
            {navItems.map((item) => (
              <div key={item.path} className="relative group">
                <Link
                  to={item.path}
                  className={`nav-link flex items-center gap-1 px-4 py-3.5 text-sm font-semibold text-white hover:text-accent transition-colors ${location.pathname === item.path ? "text-accent active" : ""}`}
                >
                  {item.label}
                  {item.sub && (
                    <FaChevronDown className="text-xs opacity-70 group-hover:rotate-180 transition-transform" />
                  )}
                </Link>
                {item.sub && (
                  <div className="absolute top-full left-0 bg-white shadow-xl border-t-2 border-accent rounded-b-lg min-w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                    {item.sub.map((sub) => (
                      <Link
                        key={sub.path}
                        to={sub.path}
                        className="block px-4 py-2.5 text-sm text-primary-800 hover:bg-primary-50 hover:text-primary-700 transition-colors first:rounded-t-none last:rounded-b-lg"
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Hamburger */}
          <button
            className="lg:hidden text-white py-3 px-2"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
          </button>
          <div className="lg:hidden text-white text-sm font-semibold py-3">
            Menu
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="lg:hidden bg-primary-800 border-t border-primary-600 pb-4">
            {navItems.map((item) => (
              <div key={item.path}>
                <div className="flex items-center justify-between">
                  <Link
                    to={item.path}
                    className="flex-1 px-5 py-3 text-white text-sm font-medium hover:bg-primary-600 transition-colors"
                  >
                    {item.label}
                  </Link>
                  {item.sub && (
                    <button
                      className="px-4 py-3 text-white hover:bg-primary-600"
                      onClick={() =>
                        setOpenDropdown(
                          openDropdown === item.path ? null : item.path,
                        )
                      }
                    >
                      <FaChevronDown
                        className={`text-xs transition-transform ${openDropdown === item.path ? "rotate-180" : ""}`}
                      />
                    </button>
                  )}
                </div>
                {item.sub && openDropdown === item.path && (
                  <div className="bg-primary-900">
                    {item.sub.map((sub) => (
                      <Link
                        key={sub.path}
                        to={sub.path}
                        className="block pl-10 pr-5 py-2.5 text-primary-200 text-sm hover:text-white hover:bg-primary-700 transition-colors"
                      >
                        → {sub.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </nav>
    </>
  );
}
