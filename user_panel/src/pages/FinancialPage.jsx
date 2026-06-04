import { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const PageBanner = ({ title, subtitle, breadcrumb }) => (
  <div className="bg-gradient-to-r from-primary-900 to-primary-700 py-12 px-4">
    <div className="max-w-7xl mx-auto">
      <div className="text-primary-300 text-sm mb-2">{breadcrumb}</div>
      <h1 className="font-display text-3xl md:text-4xl font-bold text-white mb-2">{title}</h1>
      {subtitle && <p className="text-primary-200">{subtitle}</p>}
    </div>
  </div>
);

const deposits = [
  {
    type: 'Saving Deposit (बचत निक्षेप)',
    rate: '7% p.a.',
    description: 'A basic savings account for all members. Flexible deposits and withdrawals. Earn competitive interest while keeping your money safe and accessible.',
    features: ['Minimum balance: NPR 500', 'Free 2 withdrawals/month', 'Passbook provided', 'Suitable for regular savings'],
  },
  {
    type: 'Fixed Deposit (मुद्दती निक्षेप)',
    rate: 'Up to 12% p.a.',
    description: 'Lock in your savings for a fixed term and earn higher interest rates. Ideal for members who want to grow their savings without frequent transactions.',
    features: ['Minimum: NPR 10,000', 'Terms: 3 months to 3 years', 'Higher interest than savings', 'Loan against FD available'],
  },
  {
    type: 'Recurring Deposit (आवर्ती निक्षेप)',
    rate: '9% p.a.',
    description: 'Discipline your saving with monthly fixed deposits. A great way to build wealth systematically over time with attractive interest rates.',
    features: ['Monthly deposits: NPR 500+', 'Terms: 1–5 years', 'Auto-debit option', 'Loan facility available'],
  },
  {
    type: 'Daily Deposit (दैनिक बचत)',
    rate: '6% p.a.',
    description: 'Small daily deposits collected at your doorstep by our field staff. Perfect for small vendors, farmers, and daily wage earners.',
    features: ['Daily minimum: NPR 20', 'Door collection service', 'No lock-in period', 'Encourages daily savings habit'],
  },
  {
    type: 'Children Savings (बाल बचत)',
    rate: '8% p.a.',
    description: 'A special savings account for children under 18, operated by parents/guardians. Nurtures saving habits from an early age.',
    features: ['Open from birth to 18 years', 'Higher interest rate', 'Maturity benefits', 'Free on savings up to NPR 50,000'],
  },
];

const loans = [
  {
    type: 'Agricultural Loan (कृषि ऋण)',
    rate: '10–12% p.a.',
    description: 'Affordable credit for crop cultivation, irrigation, farm equipment, and agro-based enterprises. Supports food security and agricultural productivity.',
    features: ['Up to NPR 5 Lakh', 'Flexible repayment', 'Seasonal repayment option', 'Subsidy linkage available'],
  },
  {
    type: 'Dairy Loan (पशुपालन ऋण)',
    rate: '10% p.a.',
    description: 'Special loan for purchase of dairy animals, fodder, shed construction, veterinary care, and dairy equipment. Exclusive for dairy farmer members.',
    features: ['Up to NPR 10 Lakh', 'Cattle as collateral', 'Insurance linked', 'Technical support included'],
  },
  {
    type: 'Home Loan (घर ऋण)',
    rate: '11–13% p.a.',
    description: 'Finance your dream home or renovation. Affordable long-term loans for house construction, purchase, or repair for member families.',
    features: ['Up to NPR 50 Lakh', 'Up to 15 years tenure', 'Property as collateral', 'Construction installment option'],
  },
  {
    type: 'Business Loan (व्यापार ऋण)',
    rate: '12–14% p.a.',
    description: 'Capital for establishing or expanding small and medium enterprises, shops, trading businesses, and cottage industries.',
    features: ['Up to NPR 25 Lakh', 'Project-based repayment', 'Business plan required', 'Mentoring support available'],
  },
  {
    type: 'Education Loan (शिक्षा ऋण)',
    rate: '9% p.a.',
    description: 'Invest in your family\'s future with affordable education loans for higher studies in Nepal or abroad. Moratorium period during studies.',
    features: ['Up to NPR 15 Lakh', 'Grace period during study', 'Simple documentation', 'Co-applicant (parent) required'],
  },
  {
    type: 'Emergency Loan (आकस्मिक ऋण)',
    rate: '13% p.a.',
    description: 'Quick-disbursement loans for medical emergencies, natural disasters, or unexpected urgent needs. Processed within 24–48 hours.',
    features: ['Up to NPR 2 Lakh', 'Fast disbursement', 'Minimal documentation', 'For active members only'],
  },
];

const Accordion = ({ title, children }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-gray-200 rounded-xl overflow-hidden mb-3">
      <button
        className="w-full flex items-center justify-between px-5 py-4 text-left bg-white hover:bg-primary-50 transition-colors"
        onClick={() => setOpen(!open)}
      >
        <span className="font-semibold text-primary-900 text-sm">{title}</span>
        {open ? <FaChevronUp className="text-primary-500 flex-shrink-0" /> : <FaChevronDown className="text-primary-500 flex-shrink-0" />}
      </button>
      {open && <div className="px-5 pb-5 bg-gray-50 text-sm text-gray-600 leading-relaxed">{children}</div>}
    </div>
  );
};

export default function FinancialPage() {
  const [activeTab, setActiveTab] = useState('deposit');

  return (
    <div>
      <PageBanner
        title="Financial Services"
        subtitle="Deposits, Loans & More"
        breadcrumb="Home › Financial"
      />

      {/* Overview */}
      <section id="overview" className="py-10 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            <div className="lg:col-span-2">
              <h2 className="font-display text-2xl font-bold text-primary-900 mb-3">Financial Services Overview</h2>
              <p className="text-gray-600 leading-relaxed mb-3">
                SFACL offers a comprehensive range of financial products designed for the specific needs of cooperative members in Jalthal. From daily savings to long-term fixed deposits, and from agricultural loans to home financing — we provide affordable, member-centric financial solutions.
              </p>
              <p className="text-gray-600 leading-relaxed">
                All services are available exclusively to registered members of the cooperative. Membership is open to all residents of the Jalthal area. Interest rates are reviewed periodically by the Board of Directors in line with Nepal Rastra Bank guidelines.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {[
                { value: 'NPR 15Cr+', label: 'Total Deposits' },
                { value: 'NPR 12Cr+', label: 'Loan Portfolio' },
                { value: '98.5%', label: 'Recovery Rate' },
                { value: '2,500+', label: 'Loan Members' },
              ].map((stat, i) => (
                <div key={i} className="bg-primary-700 text-white rounded-xl p-4 text-center">
                  <div className="text-xl font-display font-bold text-accent">{stat.value}</div>
                  <div className="text-xs text-primary-200 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Tabs */}
          <div className="flex border-b border-gray-200 mb-6">
            {[
              { id: 'deposit', label: '💰 Deposit Schemes' },
              { id: 'loan', label: '🏦 Loan Products' },
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-5 py-3 text-sm font-semibold transition-colors border-b-2 -mb-0.5 ${
                  activeTab === tab.id
                    ? 'border-primary-700 text-primary-700'
                    : 'border-transparent text-gray-500 hover:text-primary-600'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Deposit Services */}
      {activeTab === 'deposit' && (
        <section id="deposit" className="px-4 pb-12 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {deposits.map((dep, i) => (
                <div key={i} className="card-hover border border-gray-100 rounded-2xl p-5 bg-gray-50 hover:bg-white shadow-sm">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="font-display font-bold text-primary-900 text-sm leading-tight flex-1">{dep.type}</h3>
                    <span className="ml-2 bg-primary-700 text-white text-xs font-bold px-2.5 py-1 rounded-full flex-shrink-0">{dep.rate}</span>
                  </div>
                  <p className="text-gray-500 text-xs leading-relaxed mb-3">{dep.description}</p>
                  <ul className="space-y-1.5">
                    {dep.features.map((f, fi) => (
                      <li key={fi} className="flex gap-1.5 text-xs text-gray-600">
                        <span className="text-primary-500 font-bold flex-shrink-0">✓</span>
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Loan Services */}
      {activeTab === 'loan' && (
        <section id="loan" className="px-4 pb-12 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {loans.map((loan, i) => (
                <div key={i} className="card-hover border border-gray-100 rounded-2xl p-5 bg-gray-50 hover:bg-white shadow-sm">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="font-display font-bold text-primary-900 text-sm leading-tight flex-1">{loan.type}</h3>
                    <span className="ml-2 bg-accent text-white text-xs font-bold px-2.5 py-1 rounded-full flex-shrink-0">{loan.rate}</span>
                  </div>
                  <p className="text-gray-500 text-xs leading-relaxed mb-3">{loan.description}</p>
                  <ul className="space-y-1.5">
                    {loan.features.map((f, fi) => (
                      <li key={fi} className="flex gap-1.5 text-xs text-gray-600">
                        <span className="text-accent font-bold flex-shrink-0">✓</span>
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <div className="section-divider" />

      {/* Required Documents */}
      <section id="documents" className="py-14 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="font-display text-2xl font-bold text-primary-900 mb-2">Required Documents</h2>
            <p className="text-gray-500 text-sm">Documents needed for membership, account opening, and loan processing</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
              <h3 className="font-display font-bold text-primary-900 text-lg mb-5 pb-3 border-b border-gray-100 flex items-center gap-2">
                <span className="w-8 h-8 bg-primary-700 text-white rounded-lg flex items-center justify-center text-sm">📋</span>
                New Membership & Account Opening
              </h3>
              <ul className="space-y-2">
                {[
                  'Citizenship certificate (नागरिकता प्रमाण पत्र) — photocopy',
                  '2 recent passport-sized photographs',
                  'Residential proof (electricity bill / land ownership certificate)',
                  'PAN number (if available)',
                  'Initial share purchase amount (minimum NPR 500)',
                  'Membership application form (available at office)',
                  'Nominee details and their citizenship copy',
                  'Mobile number registered with your name',
                ].map((doc, i) => (
                  <li key={i} className="flex gap-2 text-sm text-gray-600">
                    <span className="text-primary-500 font-bold flex-shrink-0 mt-0.5">•</span>
                    {doc}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
              <h3 className="font-display font-bold text-primary-900 text-lg mb-5 pb-3 border-b border-gray-100 flex items-center gap-2">
                <span className="w-8 h-8 bg-accent text-white rounded-lg flex items-center justify-center text-sm">📄</span>
                Loan Application Processing
              </h3>
              <div className="space-y-4">
                <div>
                  <div className="text-xs font-bold text-gray-400 uppercase mb-1.5">Basic Documents (All Loans)</div>
                  <ul className="space-y-1.5">
                    {[
                      'Membership certificate and share passbook',
                      'Citizenship certificate — applicant + guarantor',
                      'Loan application form (available at office)',
                      'Savings account statement (minimum 3 months)',
                      '2 recent passport-sized photos',
                    ].map((doc, i) => (
                      <li key={i} className="flex gap-2 text-xs text-gray-600">
                        <span className="text-accent font-bold flex-shrink-0">•</span>{doc}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <div className="text-xs font-bold text-gray-400 uppercase mb-1.5">For Property Collateral Loans</div>
                  <ul className="space-y-1.5">
                    {[
                      'Land ownership certificate (लालपुर्जा)',
                      'Land revenue receipt (मालपोत तिरेको रसिद)',
                      'Land sketch map (नापी नक्शा)',
                      'Market valuation report if required',
                    ].map((doc, i) => (
                      <li key={i} className="flex gap-2 text-xs text-gray-600">
                        <span className="text-accent font-bold flex-shrink-0">•</span>{doc}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <div className="text-xs font-bold text-gray-400 uppercase mb-1.5">Business Loan Additional</div>
                  <ul className="space-y-1.5">
                    {[
                      'Business registration certificate',
                      'Project proposal / business plan',
                      'Tax clearance certificate (if applicable)',
                    ].map((doc, i) => (
                      <li key={i} className="flex gap-2 text-xs text-gray-600">
                        <span className="text-accent font-bold flex-shrink-0">•</span>{doc}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 p-4 bg-primary-50 border border-primary-200 rounded-xl">
            <p className="text-sm text-primary-800">
              <strong>Note:</strong> Document requirements may vary based on loan type and amount. Please visit our office or call us for specific requirements for your loan application. All documents should be submitted in original along with photocopies.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
