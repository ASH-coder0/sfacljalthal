import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaYoutube,
  FaTwitter,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaHeart,
} from "react-icons/fa";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-primary-950 text-gray-300">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Brand */}
        <div className="lg:col-span-1">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-14 h-14  bg-white rounded-full flex items-center justify-center shadow-md flex-shrink-0 border-2 border-accent">
              <img
                src="/assets/jalthal.png"
                alt="Jalthal Logo"
                className="w-cover h-cover object-contain"
              />
            </div>
            <div>
              <div className="text-white font-display font-bold text-sm leading-tight">
                साना किसान कृषि सहकारी संस्था लि.
              </div>
              <div className="text-primary-300 text-xs">
                Sana Kisan Agro Cooperative Ltd.
              </div>
            </div>
          </div>
          <p className="text-sm leading-relaxed text-gray-400 mb-4">
            A trusted cooperative institution serving the Jalthal community with
            dedication to prosperity and financial empowerment since
            establishment.
          </p>
          <div className="flex gap-3">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noreferrer"
              className="w-9 h-9 bg-primary-800 hover:bg-blue-600 rounded-full flex items-center justify-center transition-colors"
            >
              <FaFacebook />
            </a>
            <a
              href="https://www.youtube.com"
              target="_blank"
              rel="noreferrer"
              className="w-9 h-9 bg-primary-800 hover:bg-red-600 rounded-full flex items-center justify-center transition-colors"
            >
              <FaYoutube />
            </a>
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noreferrer"
              className="w-9 h-9 bg-primary-800 hover:bg-sky-500 rounded-full flex items-center justify-center transition-colors"
            >
              <FaTwitter />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-display font-semibold text-lg mb-4 pb-2 border-b border-primary-700">
            Quick Links
          </h3>
          <ul className="space-y-2 text-sm">
            {[
              { label: "Home", path: "/" },
              { label: "About Us", path: "/about" },
              { label: "Notice Board", path: "/notices" },
              { label: "Gallery", path: "/gallery" },
              { label: "News & Blogs", path: "/blogs" },
              { label: "Contact Us", path: "/contact" },
            ].map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className="hover:text-accent transition-colors flex items-center gap-1.5"
                >
                  <span className="text-accent text-xs">›</span> {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-white font-display font-semibold text-lg mb-4 pb-2 border-b border-primary-700">
            Our Services
          </h3>
          <ul className="space-y-2 text-sm">
            {[
              { label: "Deposit Services", path: "/financial#deposit" },
              { label: "Loan Services", path: "/financial#loan" },
              { label: "Dairy Industry", path: "/dairy" },
              { label: "Fixed Deposit", path: "/financial#deposit" },
              { label: "Required Documents", path: "/financial#documents" },
              { label: "Product Catalog", path: "/dairy#products" },
            ].map((link) => (
              <li key={link.label}>
                <Link
                  to={link.path}
                  className="hover:text-accent transition-colors flex items-center gap-1.5"
                >
                  <span className="text-accent text-xs">›</span> {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-white font-display font-semibold text-lg mb-4 pb-2 border-b border-primary-700">
            Contact Information
          </h3>
          <ul className="space-y-3 text-sm">
            <li className="flex gap-3">
              <FaMapMarkerAlt className="text-accent mt-1 flex-shrink-0" />
              <span>
                Haldibari-2, Jhapa, Nepal
                <br />
                Province No. 1, Nepal
              </span>
            </li>
            <li className="flex items-center gap-3">
              <FaPhone className="text-accent flex-shrink-0" />
              <a
                href="tel:+977-1-4000000"
                className="hover:text-accent transition-colors"
              >
                +977-1-4000000
              </a>
            </li>
            <li className="flex items-center gap-3">
              <FaEnvelope className="text-accent flex-shrink-0" />
              <a
                href="mailto:info@sfacljalthal.com.np"
                className="hover:text-accent transition-colors"
              >
                info@sfacljalthal.com.np
              </a>
            </li>
          </ul>
          <div className="mt-4 p-3 bg-primary-900 rounded-lg border border-primary-700">
            <div className="text-xs text-primary-300 mb-1">
              Information Administrator
            </div>
            <div className="text-white text-sm font-semibold">
              Ramesh Kumar Shrestha
            </div>
            <div className="text-xs text-primary-300">Executive Director</div>
          </div>
        </div>
      </div>

      {/* Section divider */}
      <div className="section-divider" />

      {/* Bottom bar */}
      <div className="bg-black/30 py-4 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2 text-xs text-gray-400">
          <div>
            © {year} साना किसान कृषि सहकारी संस्था लि. (Sana Kishan Agro
            Cooperative Ltd.) — All Rights Reserved
          </div>
          <div className="flex items-center gap-1">
            <span>sfacljalthal.com.np</span>
            <span>·</span>
            <span>Registered with Department of Cooperatives, Nepal</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
