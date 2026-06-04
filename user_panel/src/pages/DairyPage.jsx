const PageBanner = ({ title, subtitle, breadcrumb }) => (
  <div className="bg-gradient-to-r from-primary-900 to-primary-700 py-12 px-4">
    <div className="max-w-7xl mx-auto">
      <div className="text-primary-300 text-sm mb-2">{breadcrumb}</div>
      <h1 className="font-display text-3xl md:text-4xl font-bold text-white mb-2">{title}</h1>
      {subtitle && <p className="text-primary-200">{subtitle}</p>}
    </div>
  </div>
);

const products = [
  {
    icon: '🥛',
    name: 'Fresh Milk',
    description: 'Pure, fresh cow and buffalo milk collected daily from member farmers and processed under strict hygiene standards.',
    unit: 'per liter',
    available: true,
  },
  {
    icon: '🧈',
    name: 'Ghee (Clarified Butter)',
    description: 'Traditional Nepali ghee made from pure buffalo milk using time-honored methods. Rich flavor and high quality.',
    unit: 'per kg',
    available: true,
  },
  {
    icon: '🍦',
    name: 'Paneer (Cottage Cheese)',
    description: 'Fresh, soft paneer produced from whole milk. Perfect for cooking and direct consumption.',
    unit: 'per kg',
    available: true,
  },
  {
    icon: '🥣',
    name: 'Chhurpi (Hard Cheese)',
    description: 'Traditional Nepali hard cheese made from yak and cow milk, a popular local delicacy and export product.',
    unit: 'per pack',
    available: true,
  },
  {
    icon: '🍼',
    name: 'Pasteurized Milk Packets',
    description: 'Hygienically packaged, pasteurized milk in sealed pouches for extended shelf life and food safety.',
    unit: 'per packet',
    available: true,
  },
  {
    icon: '🧀',
    name: 'Butter',
    description: 'Creamy, natural butter produced from fresh cream. Available in salted and unsalted varieties.',
    unit: 'per pack',
    available: true,
  },
];

export default function DairyPage() {
  return (
    <div>
      <PageBanner
        title="Dairy Industry"
        subtitle="From Local Farms to Quality Products"
        breadcrumb="Home › Dairy Industry"
      />

      {/* Description */}
      <section id="description" className="py-14 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 text-primary-600 font-semibold text-sm mb-3">
              🐄 <span>Dairy Sector</span>
            </div>
            <h2 className="font-display text-3xl font-bold text-primary-900 mb-4">
              Supporting Dairy Farming in Jalthal
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              The Dairy Industry program of SFACL is one of our flagship initiatives, designed to support local dairy farmers with fair pricing, quality input supplies, veterinary services, and a reliable market for their produce.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              Our modern milk collection and processing center in Jalthal processes thousands of liters of milk daily, converting fresh milk into value-added dairy products including ghee, paneer, chhurpi, and packaged milk — creating higher income for our member farmers.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              We work in partnership with local government bodies, the National Dairy Development Board (NDDB), and international organizations to bring modern dairy technology and best practices to rural Jalthal.
            </p>
            <div className="grid grid-cols-2 gap-4 mt-6">
              {[
                { label: 'Daily Collection', value: '5,000+ liters' },
                { label: 'Farmer Members', value: '800+ families' },
                { label: 'Processing Capacity', value: '10,000 L/day' },
                { label: 'Coverage Area', value: '15 VDCs' },
              ].map((stat, i) => (
                <div key={i} className="bg-primary-50 rounded-xl p-3 border border-primary-100 text-center">
                  <div className="text-xl font-display font-bold text-primary-700">{stat.value}</div>
                  <div className="text-xs text-gray-500 mt-0.5">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-gradient-to-br from-primary-800 to-primary-600 rounded-2xl p-8 text-white">
            <h3 className="font-display text-xl font-bold mb-6">Our Dairy Services</h3>
            <div className="space-y-4">
              {[
                { icon: '🐄', title: 'Livestock Support', desc: 'Veterinary services, AI (artificial insemination), and livestock insurance for member farmers.' },
                { icon: '🏭', title: 'Processing Center', desc: 'State-of-the-art milk collection, chilling, and processing facilities in Jalthal.' },
                { icon: '📦', title: 'Market Linkage', desc: 'Direct market access through cooperative channels, eliminating middlemen and increasing farmer income.' },
                { icon: '📚', title: 'Training & Extension', desc: 'Regular training on modern dairy farming, hygiene practices, and animal nutrition.' },
                { icon: '💰', title: 'Input Supply', desc: 'Quality cattle feed, medicines, and equipment at subsidized rates for members.' },
              ].map((service, i) => (
                <div key={i} className="flex gap-3">
                  <span className="text-2xl flex-shrink-0">{service.icon}</span>
                  <div>
                    <div className="font-semibold text-sm">{service.title}</div>
                    <div className="text-primary-200 text-xs mt-0.5">{service.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* Product Catalog */}
      <section id="products" className="py-14 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="font-display text-3xl font-bold text-primary-900 mb-2">Product Catalog</h2>
            <p className="text-gray-500 text-sm">Quality dairy products from our cooperative members</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product, i) => (
              <div key={i} className="card-hover bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                <div className="text-4xl mb-3">{product.icon}</div>
                <h3 className="font-display font-bold text-primary-900 text-lg mb-2">{product.name}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">{product.description}</p>
                <div className="flex items-center justify-between mt-auto pt-3 border-t border-gray-100">
                  <span className="text-xs text-gray-400">Sold {product.unit}</span>
                  {product.available && (
                    <span className="bg-green-100 text-green-700 text-xs font-semibold px-2 py-0.5 rounded-full">Available</span>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 bg-primary-900 rounded-2xl p-6 text-white text-center">
            <h3 className="font-display text-xl font-bold mb-2">Interested in Our Products?</h3>
            <p className="text-primary-200 text-sm mb-4">Contact us for bulk orders, wholesale pricing, or to become a supplier member.</p>
            <a href="/contact" className="inline-flex items-center gap-2 bg-accent hover:bg-yellow-600 text-white font-semibold px-6 py-2.5 rounded-lg transition-colors">
              Contact for Pricing
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
