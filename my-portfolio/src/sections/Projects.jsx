import { useState } from "react";
import "./Projects.css";
import {
  FaGraduationCap,
  FaChalkboardTeacher,
  FaBookOpen,
  FaUniversity,
  FaShoppingBag,
  FaSchool,
  FaTools,
  FaUtensils,
  FaHeart,
  FaChartLine,
  FaGem,
  FaExternalLinkAlt,
  FaGooglePlay,
} from "react-icons/fa";
import { useStaggerReveal } from "../hooks/ScrollReveal";
import edtrackImg from "../assets/projects/edtrack.jpg";
import advanceForteImg from "../assets/projects/advanceforte.jpg";
import eduMeritImg from "../assets/projects/edumerit.jpg";
import ibsImg from "../assets/projects/ibs.jpg";
import foldxImg from "../assets/projects/foldx.jpg";
import aspireImg from "../assets/projects/aspire.jpg";

const projects = [
  {
    title: "EdTrack Smart",
    company: "Fedigma Forge",
    icon: <FaGraduationCap />,
    description:
      "Multi-branch institute ERP used by schools, coaching institutes, colleges, and libraries — admissions, attendance, fee management, exams, and parent communication. Available on web and as an Android app.",
    tags: ["ERP", "Web App", "Mobile App", "Multi-branch"],
    link: "https://edtracksmart.com",
    playStore: "https://play.google.com/store/apps/details?id=com.edtracksmart&pcampaignid=web_share",
    preview: edtrackImg,
  },
  {
    title: "Aspire Brand Store",
    company: "Aspire Tekhub",
    icon: <FaGem />,
    description:
      "E-commerce platform for jewellery and accessories — necklaces, watches, earrings, rings, and bracelets — with offers, wishlist, order tracking, and a companion Android app.",
    tags: ["React.js", "React Native", "Node.js", "AWS"],
    link: "https://www.aspirebrand.store",
    playStore: "https://play.google.com/store/apps/details?id=com.aspirebrand&pcampaignid=web_share",
    preview: aspireImg,
  },
  {
    title: "Advance Forte",
    company: "Fedigma Forge",
    icon: <FaChalkboardTeacher />,
    description:
      "Website for an IIT-JEE, NEET & Foundation coaching institute with centres across Delhi, UP, and Bihar, with an admissions flow and ongoing digital presence management.",
    tags: ["Website", "Admissions", "Digital Presence"],
    link: "https://advanceforte.in",
    preview: advanceForteImg,
  },
  {
    title: "EduMerit Institute",
    company: "Fedigma Forge",
    icon: <FaBookOpen />,
    description:
      "Website for a Greater Noida institute (Class 2–10, Banking & SSC exams) with course listings, mock tests, quizzes, and daily current affairs.",
    tags: ["Website", "Mock Tests", "Quizzes"],
    link: "https://edumerits.in",
    preview: eduMeritImg,
  },
  {
    title: "IBS Bank Career",
    company: "Fedigma Forge",
    icon: <FaUniversity />,
    description:
      "Website for an Institute of Banking Studies offering JAIIB, CAIIB, IIBF, bank promotion, and SSC courses, with a course catalogue, publications, and callback requests.",
    tags: ["Website", "Course Catalogue"],
    link: "https://ibsbankcareer.in",
    preview: ibsImg,
  },
  {
    title: "FoldX",
    company: "Fedigma Forge",
    icon: <FaShoppingBag />,
    description:
      "E-commerce store for handcrafted leather bags and wallets, with product collections, free personalisation, gifting, and online payments.",
    tags: ["E-commerce", "Payments"],
    link: "https://foldx.co.in",
    preview: foldxImg,
  },
  {
    title: "School Management System",
    icon: <FaSchool />,
    description:
      "Student/Teacher CRUD, timetable, library, dashboard, AWS S3 file uploads, JWT auth, and real-time updates over WebSockets.",
    tags: ["React Vite", "React Native", "Node.js", "MySQL"],
  },
  {
    title: "Home Services App",
    icon: <FaTools />,
    description:
      "Booking app for local services (plumbing, cleaning, etc.) with a provider dashboard, Google Maps tracking, Razorpay/Stripe payments, and Firebase notifications.",
    tags: ["React Native", "Firebase", "AWS"],
  },
  {
    title: "HomeFood (UK Product)",
    icon: <FaUtensils />,
    description:
      "Connects users with homemade, healthy meals from local chefs across the UK — real-time listings, chef profiles, location search, payments, order tracking, and reviews.",
    tags: ["React Native", "Razorpay", "AWS"],
  },
  {
    title: "Flames Calculator",
    icon: <FaHeart />,
    description:
      "A fun take on the classic FLAMES game — interactive name input and instant animated results in a simple, engaging UI.",
    tags: ["React Native", "Animations"],
  },
  {
    title: "SIP Calculator",
    icon: <FaChartLine />,
    description:
      "Calculates investment growth for Systematic Investment Plans with monthly/annual input, real-time projections, interactive charts, and ROI analysis.",
    tags: ["React Native", "Charts"],
  },
];

const filters = ["All", ...new Set(projects.map((p) => p.company).filter(Boolean)), "Personal"];

export default function Projects() {
  const [filter, setFilter] = useState("All");
  const gridRef = useStaggerReveal([filter]);

  const visible = projects.filter((p) =>
    filter === "All" ? true : filter === "Personal" ? !p.company : p.company === filter
  );

  return (
    <section className="projects">
      <h2>Projects</h2>

      <div className="project-filters">
        {filters.map((f) => (
          <button
            key={f}
            className={`filter-btn${filter === f ? " active" : ""}`}
            onClick={() => setFilter(f)}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="projects-grid" ref={gridRef} key={filter}>
        {visible.map((p, i) => (
          <article className="card reveal" style={{ "--i": i }} key={p.title}>
            <div className="card-top">
              <span className="card-icon">{p.icon}</span>
              {p.company && <span className="card-company">{p.company}</span>}
            </div>
            <h3>{p.title}</h3>
            <p>{p.description}</p>
            <div className="chip-row">
              {p.tags.map((t) => (
                <span className="chip" key={t}>{t}</span>
              ))}
            </div>
            {p.preview && (
              <a
                className="card-preview"
                href={p.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Open ${p.title} website`}
              >
                <div className="preview-bar">
                  <span /><span /><span />
                  <em>{p.link.replace("https://", "")}</em>
                </div>
                <div className="preview-screen">
                  <img src={p.preview} alt={`${p.title} landing page`} loading="lazy" />
                </div>
              </a>
            )}
            {(p.link || p.playStore) && (
              <div className="card-actions">
                {p.link && (
                  <a className="card-link" href={p.link} target="_blank" rel="noopener noreferrer">
                    Visit site <FaExternalLinkAlt />
                  </a>
                )}
                {p.playStore && (
                  <a className="card-link card-link--play" href={p.playStore} target="_blank" rel="noopener noreferrer">
                    <FaGooglePlay /> Play Store
                  </a>
                )}
              </div>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
