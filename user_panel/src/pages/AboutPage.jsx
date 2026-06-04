import {
  FaLeaf,
  FaHandshake,
  FaUsers,
  FaAward,
  FaChartLine,
} from "react-icons/fa";

const PageBanner = ({ title, subtitle, breadcrumb }) => (
  <div className="bg-gradient-to-r from-primary-900 to-primary-700 py-12 px-4">
    <div className="max-w-7xl mx-auto">
      <div className="text-primary-300 text-sm mb-2">{breadcrumb}</div>
      <h1 className="font-display text-3xl md:text-4xl font-bold text-white mb-2">
        {title}
      </h1>
      {subtitle && <p className="text-primary-200 text-lg">{subtitle}</p>}
    </div>
  </div>
);

export default function AboutPage() {
  return (
    <div>
      <PageBanner
        title="About Us"
        subtitle="Our Story, Mission & Vision"
        breadcrumb="Home › About Us"
      />

      {/* Main About */}
      <section className="py-14 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 text-primary-600 font-semibold text-sm mb-3">
              <FaLeaf className="text-accent" /> Who We Are
            </div>
            <h2 className="font-display text-3xl font-bold text-primary-900 mb-4">
              साना किसान कृषि सहकारी संस्था लिमिटेड
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Sana Kisan Agro Cooperative Ltd. (SFACL) is a registered
              cooperative institution serving the Jalthal community of Sunsari
              District in Province No. 1, Nepal. Established with the core
              principle of "member-owned, member-controlled, member-benefited,"
              SFACL has been a pillar of rural financial and agricultural
              development.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              Our cooperative brings together farmers, entrepreneurs, and
              community members to create a collective force for economic
              empowerment. Through pooled savings, affordable credit, and
              agricultural support services — especially in the dairy industry —
              we help our members achieve financial security and prosperity.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Registered with the Department of Cooperatives of the Government
              of Nepal, SFACL operates under the Cooperative Act and maintains
              strict adherence to cooperative values including democracy,
              equality, equity, and solidarity.
            </p>
          </div>
          <div className="bg-primary-50 rounded-2xl p-8 border border-primary-100">
            <div className="space-y-5">
              {[
                { label: "Established", value: "2060 B.S. (2003 A.D.)" },
                { label: "Registration No.", value: "SUA-009/2060" },
                {
                  label: "Location",
                  value: "Jalthal, Sunsari, Province No. 1",
                },
                { label: "Membership", value: "2,500+ Active Members" },
                { label: "Share Capital", value: "NPR 5 Crore+" },
                { label: "Total Savings", value: "NPR 15 Crore+" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex justify-between items-center py-2 border-b border-primary-100 last:border-0"
                >
                  <span className="text-gray-500 text-sm">{item.label}</span>
                  <span className="text-primary-900 font-semibold text-sm">
                    {item.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* Mission Vision Objectives */}
      <section className="py-14 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="font-display text-3xl font-bold text-primary-900 mb-2">
              Mission, Vision & Objectives
            </h2>
            <div className="text-gray-500 text-sm">
              Our guiding principles and strategic direction
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {[
              {
                icon: "🌱",
                title: "Our Mission",
                color: "bg-green-50 border-green-200",
                iconBg: "bg-green-100",
                content:
                  "To empower members economically and socially through cooperative financial services, technical assistance, and collective market access — with a focus on agricultural and dairy sectors of Jalthal.",
              },
              {
                icon: "🎯",
                title: "Our Vision",
                color: "bg-blue-50 border-blue-200",
                iconBg: "bg-blue-100",
                content:
                  "To be the leading cooperative institution in Sunsari District, creating a self-reliant and prosperous community through transparent, democratic, and innovative cooperative practices.",
              },
              {
                icon: "⭐",
                title: "Core Values",
                color: "bg-yellow-50 border-yellow-200",
                iconBg: "bg-yellow-100",
                content:
                  "Democratic member control · Voluntary and open membership · Member economic participation · Autonomy and independence · Education, training and information · Cooperation among cooperatives · Community concern.",
              },
            ].map((item, i) => (
              <div key={i} className={`rounded-2xl p-6 border ${item.color}`}>
                <div
                  className={`w-12 h-12 ${item.iconBg} rounded-xl flex items-center justify-center text-2xl mb-4`}
                >
                  {item.icon}
                </div>
                <h3 className="font-display font-bold text-primary-900 text-lg mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.content}
                </p>
              </div>
            ))}
          </div>

          {/* Objectives */}
          <div className="bg-primary-900 rounded-2xl p-8 text-white">
            <h3 className="font-display text-2xl font-bold mb-6 text-center">
              Our Objectives
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "Mobilize savings of members and provide productive credit at affordable rates",
                "Develop and promote dairy industry and agro-based enterprises in the region",
                "Create employment opportunities for rural youth and farmers",
                "Provide financial literacy and cooperative education to members",
                "Support women empowerment through targeted cooperative programs",
                "Contribute to community infrastructure and rural development",
                "Maintain transparency and accountability in all financial operations",
                "Foster cooperation among cooperative institutions for collective strength",
              ].map((obj, i) => (
                <div key={i} className="flex gap-3 items-start">
                  <span className="text-accent font-bold mt-0.5 flex-shrink-0">
                    ✓
                  </span>
                  <span className="text-primary-100 text-sm">{obj}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Board/Team intro */}
      <section className="py-14 px-4 bg-primary-50">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="font-display text-2xl font-bold text-primary-900 mb-2">
            Our Leadership
          </h2>
          <p className="text-gray-500 text-sm mb-8">
            Dedicated committee members steering our cooperative forward
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { role: "Chairperson", name: "Ram Bahadur Rai" },
              { role: "Vice-Chairperson", name: "Sita Devi Shrestha" },
              { role: "Executive Director", name: "Ramesh Kumar Thapa" },
              { role: "Treasurer", name: "Gita Kumari Tamang" },
            ].map((person, i) => (
              <div
                key={i}
                className="bg-white rounded-xl p-5 shadow-sm border border-primary-100 text-center"
              >
                <div className="w-16 h-16 bg-primary-700 rounded-full flex items-center justify-center mx-auto mb-3 text-white text-xl font-bold">
                  {person.name[0]}
                </div>
                <div className="font-semibold text-primary-900 text-sm">
                  {person.name}
                </div>
                <div className="text-xs text-primary-500 mt-0.5">
                  {person.role}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
