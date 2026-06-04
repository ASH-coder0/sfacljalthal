import { useState } from "react";
import Slider from "react-slick";
import {
  FaChevronLeft,
  FaChevronRight,
  FaUpload,
  FaArrowRight,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const defaultSlides = [
  {
    id: 1,
    image: null,
    title: "सहकारी संस्था — समृद्धि र सेवा",
    subtitle: "Building a Prosperous Community Together",
    description:
      "A trusted cooperative serving the Jalthal community with financial services, dairy industry support, and rural development.",
    cta: { label: "Learn About Us", path: "/about" },
    bgColor: "from-primary-900 to-primary-700",
  },
  {
    id: 2,
    image: null,
    title: "Financial Services for All",
    subtitle: "Deposits, Loans & More",
    description:
      "Flexible deposit schemes and affordable loan products designed to empower farmers, entrepreneurs, and families.",
    cta: { label: "Explore Services", path: "/financial" },
    bgColor: "from-primary-800 to-green-700",
  },
  {
    id: 3,
    image: null,
    title: "Dairy Industry Excellence",
    subtitle: "From Farm to Market",
    description:
      "Supporting local dairy farmers with modern processing, quality products, and fair market access across the region.",
    cta: { label: "Discover Dairy", path: "/dairy" },
    bgColor: "from-green-900 to-primary-600",
  },
];

const PrevArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white/20 hover:bg-white/40 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-all"
  >
    <FaChevronLeft />
  </button>
);

const NextArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white/20 hover:bg-white/40 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-all"
  >
    <FaChevronRight />
  </button>
);

export default function HeroSlider({ slides = defaultSlides }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    fade: true,
  };

  return (
    <div className="relative overflow-hidden">
      <div>
        {slides.map((slide) => (
          <div key={slide.id}>
            <div
              className={`relative min-h-[500px] md:min-h-[580px] flex items-center bg-gradient-to-br ${slide.bgColor}`}
              style={
                slide.image
                  ? {
                      backgroundImage: `url(${slide.image})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }
                  : {}
              }
            >
              {/* Overlay */}
              <div className="absolute inset-0 hero-gradient" />

              {/* Decorative circles */}
              <div className="absolute top-10 right-10 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
              <div className="absolute bottom-10 left-20 w-48 h-48 bg-accent/10 rounded-full blur-2xl" />

              {/* Content */}
              <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 py-16">
                <div className="max-w-2xl">
                  <div className="inline-block bg-accent/20 border border-accent/40 text-accent text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-4">
                    sfacljalthal.com.np
                  </div>
                  <h1 className="font-display text-white text-3xl md:text-5xl font-bold leading-tight mb-3">
                    {slide.title}
                  </h1>
                  <div className="text-accent font-semibold text-lg md:text-xl mb-4">
                    {slide.subtitle}
                  </div>
                  <p className="text-green-100 text-base md:text-lg leading-relaxed mb-8 max-w-lg">
                    {slide.description}
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <Link
                      to={slide.cta.path}
                      className="inline-flex items-center gap-2 bg-accent hover:bg-yellow-600 text-white font-semibold px-6 py-3 rounded-lg transition-all hover:shadow-lg hover:-translate-y-0.5"
                    >
                      {slide.cta.label} <FaArrowRight className="text-sm" />
                    </Link>
                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-2 bg-white/15 hover:bg-white/25 text-white border border-white/30 font-semibold px-6 py-3 rounded-lg transition-all"
                    >
                      Contact Us
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
