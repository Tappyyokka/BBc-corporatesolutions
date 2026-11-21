import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";
import { useEffect } from "react";
import "./CategoryPage.css";

const categoryPages = [
  {
    slug: "financial",
    number: "01",
    title: "Financial Services",
    description:
      "Explore financial services and support for your personal and business needs.",
    services: [
      "HOUSING LOAN",
      "PROPERTY LOAN",
      "PERSONAL LOAN",
      "BUSSINESS LOAN - SECURED",
      "BUSSINESS LOAN - UN SECURED",
    ],
  },
  {
    slug: "legal",
    number: "02",
    title: "Legal Services",
    description:
      "Find support for registrations, certificates, compliance, and other legal service needs.",
    services: [
      "REGISTRATION - LEGAL",
      "REGISTRATION - MUDRA PROJECT REPORT",
      "CIBIL REPORT",
      "M S M E",
      "MUDRA PROJECT REPORT UP TO 5 LAKSH",
      "MUDRA PROJECT REPORT ABOVE 5 LAKSH",
      "GST REGISTRATION",
      "I T R - INCOME TAX FILING",
      "FSSAI - REGISTRATION FEE",
      "FSSAI - LICENSE FEE",
      "FSSAI - REGISTRATION MODIFICATION",
      "FSSAI - LICENSE MODIFICATION",
      "FSSAI - MANUFATURE REGISTRATION",
      "FSSAI - MANUFATURE LICENSE",
      "IMPORT EXPORT CODE",
      "ISO CERTIFICATE",
      "PRIVATE LIMITED COMPANY REGISTRATION",
      "PARTNERSHIP REGISTRATION ONLY",
      "PARTNERSHIP WITHOUT REGISTRATION ( PAN+DEED)",
      "PARTNERSHIP WITH REGISTRATION (REG+PAN+DEED)",
      "LIMITED LIABILITYPARTNERSHIP REG (LLP)",
      "TRADEMARK - INDIVIDUAL,MSME(WITHOUT TRACK RECORDS )",
      "TRADEMARK - INDIVIDUAL,MSME(WITH TRACK RECORDS )",
      "TRADEMARK - LLP/Co/PS(Other Than MSME without track Records)",
      "TRADEMARK - LLP/Co/PS(Other Than MSME with track Records)",
      "TRADEMARK -Ownership change",
      "PCC - POLICE CLEARANCE CERTIFICATE",
      "VYAPAR MITHRA",
      "VYAPAR MITHRA PLUS",
      "VYAPAR MITHRA ALL IN ONE",
    ],
  },
  {
    slug: "gst-filing",
    number: "03",
    title: "GST Filing",
    description:
      "Choose a GST filing package suited to your business and filing requirements.",
    services: [
      "BASIC PACKAGE",
      "STARTUP PACKAGE",
      "STANDERD PACKAGE",
      "PREMIUM PACKAGE",
      "CORPORATE PACKAGE",
    ],
  },
{
  slug: "business-development",
  number: "04",
  title: "Business Development",
  description:
    "Discover business associate and franchise opportunities with Jaytrade. Choose your partnership model and grow with our business support network.",
  type: "business-development",
  packages: [
    {
      name: "Business Associate",
      serviceName: "Business Associate",
      percentage: "20%",
      description:
        "Explore business opportunities with attractive profit sharing.",
      features: [
        "High profit margin",
        "PAN India business opportunity",
        "Online and offline training",
        "₹5,000/- travelling allowance*",
        "Digital visiting card",
      ],
    },
    {
      name: "Virtual Franchise",
      serviceName: "Virtual Franchise",
      percentage: "30%",
      description:
        "Build your business without the requirement of an office space.",
      features: [
        "High profit margin",
        "Online and offline training",
        "PAN India business opportunity",
        "₹10,000/- rent support*",
        "₹5,000/- travelling allowance*",
        "₹5,000/- staff salary*",
        "Digital visiting card",
        "Do business without office space",
      ],
    },
    {
      name: "Normal Franchise",
      serviceName: "Normal Franchise",
      percentage: "40%",
      description:
        "Grow your business with corporate office support and facilities.",
      features: [
        "High profit margin",
        "Online and offline training",
        "PAN India business opportunity",
        "₹10,000/- rent support*",
        "₹5,000/- travelling allowance*",
        "₹10,000/- salary support*",
        "Digital visiting card",
        "Cabin facility available in corporate office",
      ],
    },
    {
      name: "Premium Franchise",
      serviceName: "Premium Franchise",
      percentage: "62%",
      featured: true,
      description:
        "A premium business partnership with extended support and facilities.",
      features: [
        "Free digital banking",
        "Company one number of share holder",
        "High profit margin",
        "Online and offline training",
        "PAN India business opportunity",
        "₹10,000/- administration cost support*",
        "₹10,000/- rent support*",
        "₹10,000/- salary support*",
        "Administration and marketing support",
        "Digital visiting card",
        "Lifetime one staff can use corporate office facility",
      ],
    },
  ],
},
{
  slug: "jaytrade-jobs",
  number: "05",
  title: "Jaytrade Jobs",
  description:
    "Explore job assistance and employer hiring packages through Jaytrade Jobs.",
  type: "jobs",
  industries: [
    "Optics",
    "Banking & Finance",
    "Automotive",
    "Insurance",
    "Textile",
    "Luxury Hotel",
    "Furniture",
    "Supermarket",
    "Real Estate",
    "Investments",
  ],
  candidatePackages: [
    {
      name: "Udyog Registration",
      serviceName: "Udyog Registration",
      description: "Build your career with professional job assistance.",
      features: [
        "CV creation and updation",
        "1 year job assistance",
        "Interview training",
        "12+ guaranteed opportunities",
        "Up-to-date job notifications",
        "Minimum 4 job migrations",
      ],
    },
    {
      name: "Udyog+ Registration",
      serviceName: "Udyog Plus Registration",
      featured: true,
      description: "A complete package for long-term career support.",
      features: [
        "Unlimited CV creation and updation",
        "5 year job assistance",
        "Certificate and professional kit",
        "Career advice and mock interviews",
        "Part-time job opportunities",
        "Free legal and financial assistance",
      ],
    },
  ],
  employerPackages: [
    {
      name: "Standard",
      serviceName: "Standard Registration",
      description: "Find verified candidates for your hiring needs.",
      features: [
        "Unlimited verified candidates for 1 year",
        "Up-to-date candidate notifications",
        "15 days replacement",
        "Part-time and full-time hiring",
        "Professional documentation and verification",
        "Free legal assistance",
      ],
    },
    {
      name: "Corporate Plus",
      serviceName: "Corporate Plus",
      featured: true,
      badge: "Corporate +",
      description: "Advanced hiring and business support for employers.",
      features: [
        "Unlimited verified candidates for 5 years",
        "International selection opportunity",
        "Up to 1 lakh consumer loan",
        "Free financial assistance, 1 lakh to 1 cr",
        "20% offer on digital banking",
        "1 page commercial ad",
      ],
    },
  ],
},
  {
    slug: "media-and-branding",
    number: "06",
    title: "Media & Branding",
    description:
      "Promote your business, build your brand presence, and explore media and business support packages from Jaytrade Times.",
    packages: [
      {
        name: "Grow Up Package",
        serviceName: "Growup Package",
        description:
          "Build your brand visibility with promotional media services.",
        features: [
          "Anchoring video promotion",
          "One page story",
          "2 copy magazine",
          "Online portal promotion",
        ],
      },
      {
        name: "Standard Package",
        serviceName: "Standard Package",
        description:
          "Get your business featured across digital and media platforms.",
        features: [
          "1 page story",
          "1 week social media promotion",
          "Anchoring video",
          "1 year free financial and legal assistance",
          "1 year subscription",
          "1 year valid reporter code and BA code",
        ],
      },
      {
        name: "Premium Package",
        serviceName: "Premium Package",
        description:
          "Expand your reach with premium media and business benefits.",
        features: [
          "2 page story",
          "15 days social media promotion",
          "Interview video",
          "2 year subscription",
          "2 year financial and legal assistance",
          "2 year valid reporter code and BA code",
        ],
      },
      {
        name: "Corporate Package",
        serviceName: "Corporate Package",
        description:
          "A complete promotional and business support package.",
        features: [
          "2 page story",
          "1 month social media promotion",
          "Corporate business video coverage",
          "Lifetime subscription",
          "Free lifetime financial and legal assistance",
          "2 year valid reporter code and BA code",
          "100 franchise business plan",
        ],
      },
    ],
  },
];

export default function CategoryPage({ slug, onBack }) {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "auto",
    });
  }, [slug]);

  const category = categoryPages.find((item) => item.slug === slug);
  

  const renderServices = (services) => (
    <div className="category-service-grid">
      {services.map((service) => (
        <article className="category-service-card" key={service}>
          <span className="category-service-icon">
            <CheckCircle2 size={20} />
          </span>

          <h3>{service}</h3>

          <a
            href={`#/application?category=${category.slug}&service=${encodeURIComponent(
              service
            )}`}
            className="category-enquire-link"
          >
            Enquire about this service
            <ArrowRight size={16} />
          </a>
        </article>
      ))}
    </div>
  );

  const renderPackageCards = (packages, type = "package") => (
  <div className="category-service-grid">
    {packages.map((item) => (
      <article
        className={`category-service-card ${
          item.featured ? "category-package-featured" : ""
        }`}
        key={item.name}
      >
        {item.badge && (
          <span className="category-package-badge">{item.badge}</span>
        )}

        {item.featured && !item.badge && (
          <span className="category-package-badge">Featured Package</span>
        )}

        <h3>{item.name}</h3>
        <p className="category-package-description">{item.description}</p>

        {item.percentage && (
          <div className="category-package-percentage">
            <span>UP TO</span>
            <strong>{item.percentage}</strong>
            <small>PROFIT SHARING</small>
          </div>
        )}

        <div className="category-package-feature-heading">
          {type === "candidate"
            ? "Career benefits"
            : type === "employer"
            ? "Hiring benefits"
            : "Partnership benefits"}
        </div>

        <ul className="category-package-features">
          {item.features.map((feature) => (
            <li key={feature}>
              <CheckCircle2 size={17} />
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        <a
          href={`#/application?category=${category.slug}&service=${encodeURIComponent(
            item.serviceName
          )}`}
          className="category-enquire-link"
        >
          {type === "candidate"
            ? "Register Now"
            : type === "employer"
            ? "Hire Now"
            : "Enquire Now"}
          <ArrowRight size={16} />
        </a>
      </article>
    ))}
  </div>
);

const renderJobs = () => (
  <>
    <div className="category-section-heading">
      <span>CAREER OPPORTUNITIES</span>
      <h2>Hire from Every Industry</h2>
      <p>
        Jay-Trade works with employers across sectors. Explore the
        industries where opportunities are available.
      </p>
    </div>

    <div className="category-industries-grid">
      {category.industries.map((industry) => (
        <div className="category-industry-card" key={industry}>
          <CheckCircle2 size={18} />
          <strong>{industry}</strong>
        </div>
      ))}
    </div>

    <div className="category-section-heading">
      <span>FOR JOB SEEKERS</span>
      <h2>Candidate Packages</h2>
      <p>Choose the registration that fits your career plan.</p>
    </div>

    {renderPackageCards(category.candidatePackages, "candidate")}

    <div className="category-section-heading">
      <span>FOR EMPLOYERS</span>
      <h2>Employer Packages</h2>
      <p>Verified, trained candidates with a replacement guarantee.</p>
    </div>

    {renderPackageCards(category.employerPackages, "employer")}
  </>
);

  const renderPackages = (packages) => (
    <div className="category-service-grid">
      {packages.map((item) => (
        <article className="category-service-card" key={item.name}>
          <span className="category-service-icon">
            <CheckCircle2 size={20} />
          </span>

          <h3>{item.name}</h3>
          <p>{item.description}</p>

          <h4>Package includes</h4>
          <ul>
            {item.features.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>

          <a
            href={`#/application?category=${category.slug}&service=${encodeURIComponent(
              item.serviceName
            )}`}
            className="category-enquire-link"
          >
            Enquire about this package
            <ArrowRight size={16} />
          </a>
        </article>
      ))}
    </div>
  );

  if (!category) {
    return (
      <main className="category-page">
        <p>Sorry, this service category could not be found.</p>
        <button className="category-back" onClick={onBack}>
          <ArrowLeft size={17} />
          Back to services
        </button>
      </main>
    );
  }

  return (
    <main className="category-page">
      <div className="category-container">
        <button className="category-back" onClick={onBack}>
          <ArrowLeft size={17} />
          Back to all services
        </button>

        <section className="category-hero">
          <span className="category-eyebrow">
            BBC CORPORATE SOLUTIONS / SERVICES
          </span>

          <span className="category-number">{category.number}</span>

          <h1>{category.title}</h1>
          <p>{category.description}</p>

          <button
            type="button"
            className="category-hero-button"
            onClick={() =>
              document
                .getElementById("category-services")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Explore services
            <ArrowRight size={18} />
          </button>
        </section>

        <section className="category-list-section" id="category-services">
          <div className="category-section-heading">
            <span>OUR SERVICES</span>
            <h2>
              {category.packages ? "Choose Your Package" : "How can we help?"}
            </h2>
          </div>

          {category.type === "jobs" ? (
  renderJobs()
) : category.type === "business-development" ? (
  renderPackageCards(category.packages, "business-development")
) : category.packages?.length > 0 ? (
  renderPackages(category.packages)
) : category.services?.length > 0 ? (
  renderServices(category.services)
) : null}
        </section>

        <section className="category-bottom-banner">
          <div>
            <span>LET’S GET STARTED</span>
            <h2>Looking for the right service?</h2>
            <p>Send us an enquiry and tell us what you need.</p>
          </div>

          <a href="#/application" className="category-hero-button">
            Make an enquiry
            <ArrowRight size={18} />
          </a>
        </section>
      </div>
    </main>
  );
}