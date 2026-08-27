import "./Experience.css";
import { FaLaptopCode, FaUserTie, FaHeadset, FaFileAlt } from "react-icons/fa";

export default function Experience() {
  const jobs = [
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
      <div className="timeline">
        {jobs.map((job, index) => (
          <div className="job" key={index}>
            <div className="job-header">
              {job.icon}
              <h3>
                {job.title} –{" "}
                {job.companyLink ? (
                  <a href={job.companyLink} target="_blank" rel="noopener noreferrer">
                    {job.company}
                  </a>
                ) : (
                  job.company
                )}
              </h3>
            </div>
            <span>{job.period}</span>
            <p>
              {job.description}
              {job.extraLinks &&
                job.extraLinks.map((link, i) => (
                  <span key={i}>
                    <br />
                    Check the{" "}
                    <a href={link.link} target="_blank" rel="noopener noreferrer">
                      {link.label}
                    </a>
                  </span>
                ))}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
