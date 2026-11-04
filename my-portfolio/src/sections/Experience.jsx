import "./Experience.css";
import { FaLaptopCode, FaHeadset, FaFileAlt, FaExternalLinkAlt } from "react-icons/fa";
import { useStaggerReveal } from "../hooks/ScrollReveal";

export default function Experience() {
  const timelineRef = useStaggerReveal();

  const jobs = [
    {
      title: "Full Stack Developer",
      company: "Fedigma Forge Pvt. Ltd.",
      companyLink: "https://fedigmaforge.com/",
      period: "Apr 2026 – Present",
      description:
        "Building digital products for the education sector — websites, mobile apps, and ERP systems for schools, colleges, and coaching institutes. Worked on EdTrack Smart (multi-branch institute ERP covering admissions, attendance, fees, exams, and parent communication) across web and its Android app, and delivered client websites including Advance Forte, EduMerit Institute, IBS Bank Career, and the FoldX e-commerce store.",
      extraLinks: [
        { label: "website", link: "https://fedigmaforge.com/" },
        { label: "work portfolio", link: "https://fedigmaforge.com/work" },
        { label: "EdTrack Smart app", link: "https://play.google.com/store/apps/details?id=com.edtracksmart&pcampaignid=web_share" },
      ],
      icon: <FaLaptopCode className="job-icon" />,
    },
    {
      title: "Full Stack Developer",
      company: "Aspire Tekhub Solutions",
      companyLink: "https://www.aspirebrand.store/",
      period: "Sep 2025 – Mar 2026",
      description:
        "Built full-stack features for web and mobile using React.js, React Native, Node.js, and Express. Implemented secure REST APIs with JWT auth, managed AWS deployment and infra (S3, EC2, RDS, CloudFront, IAM), and handled Redux/Context state management and CI/CD across staging and production.",
      extraLinks: [
        { label: "website", link: "https://www.aspirebrand.store/" },
        { label: "mobile app", link: "https://play.google.com/store/apps/details?id=com.aspirebrand&pcampaignid=web_share" },
      ],
      icon: <FaLaptopCode className="job-icon" />,
    },
    {
      title: "Associate Software Developer",
      company: "Five9S Solutions",
      period: "May 2025 – Aug 2025",
      description:
        "Developed responsive, dynamic UIs from Figma designs using HTML, CSS, JavaScript, React.js, and React Native, ensuring cross-platform performance and a consistent user experience.",
      icon: <FaLaptopCode className="job-icon" />,
    },
    {
      title: "Junior Software Engineer",
      company: "Sevak Digital Technologies Pvt. Ltd.",
      period: "Feb 2024 – May 2025",
      description:
        "Built responsive UIs from Figma designs with React.js and React Native, created RESTful APIs with Node.js/Express, and tested APIs using Postman.",
      icon: <FaLaptopCode className="job-icon" />,
    },
    {
      title: "Customer Support Associate",
      company: "Tech Mahindra",
      period: "Apr 2022 – Nov 2022",
      description: "Handled customer queries via phone, email, and chat, ensuring client satisfaction.",
      icon: <FaHeadset className="job-icon" />,
    },
    {
      title: "Computer Operator",
      company: "Venu Gopal Communication",
      period: "Aug 2019 – Apr 2022",
      description: "Managed data analysis in Excel and professional documents in MS Word.",
      icon: <FaFileAlt className="job-icon" />,
    },
  ];

  return (
    <section className="experience">
      <h2>Professional Experience</h2>
      <div className="timeline reveal" ref={timelineRef}>
        {jobs.map((job, index) => {
          const current = job.period.includes("Present");
          return (
            <div
              className={`job reveal${current ? " job--current" : ""}`}
              style={{ "--i": index }}
              key={index}
            >
              <div className="job-header">
                <span className="job-icon-wrap">{job.icon}</span>
                <div className="job-heading">
                  <h3>{job.title}</h3>
                  {job.companyLink ? (
                    <a className="job-company" href={job.companyLink} target="_blank" rel="noopener noreferrer">
                      {job.company}
                    </a>
                  ) : (
                    <span className="job-company">{job.company}</span>
                  )}
                </div>
                {current && <span className="job-badge">Current</span>}
              </div>
              <span className="job-period">{job.period}</span>
              <p>{job.description}</p>
              {job.extraLinks && (
                <div className="job-links">
                  {job.extraLinks.map((link, i) => (
                    <a key={i} href={link.link} target="_blank" rel="noopener noreferrer">
                      {link.label} <FaExternalLinkAlt />
                    </a>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
