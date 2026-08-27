import "./About.css";
import useScrollReveal from "../hooks/ScrollReveal";

// Import skill icons
import { FaReact, FaNodeJs, FaDatabase, FaGithub } from "react-icons/fa";
import {
  SiJavascript,
  SiRedux,
  SiFirebase,
  SiGraphql,
  SiPostman,
  SiFigma,
} from "react-icons/si";

// Import AWS EC2 icon from aws-react-icons
import ArchitectureServiceAmazonEC2 from "aws-react-icons/icons/ArchitectureServiceAmazonEC2";

export default function About() {
  const revealRef = useScrollReveal();

  // Array of floating icons
  const floatingIcons = [
    { icon: <FaReact className="float-icon react" />, name: "React" },
    { icon: <SiJavascript className="float-icon js" />, name: "JavaScript" },
    { icon: <SiRedux className="float-icon redux" />, name: "Redux" },
    { icon: <FaNodeJs className="float-icon node" />, name: "Node.js" },
    { icon: <FaDatabase className="float-icon db" />, name: "MySQL" },
    { icon: <SiFirebase className="float-icon firebase" />, name: "Firebase" },
    { icon: <SiGraphql className="float-icon graphql" />, name: "GraphQL" },
    { icon: <SiFigma className="float-icon figma" />, name: "Figma" },
    { icon: <SiPostman className="float-icon postman" />, name: "Postman" },
    { icon: <FaGithub className="float-icon github" />, name: "GitHub" },
    { icon: <ArchitectureServiceAmazonEC2 className="float-icon aws" size={32} />, name: "AWS" },
    // Extra icons repeated at new spots to make the background feel fuller
    { icon: <FaReact className="float-icon react" style={{ top: "5%", left: "55%", animationDuration: "20s" }} />, name: "React" },
    { icon: <SiJavascript className="float-icon js" style={{ top: "45%", left: "5%", animationDuration: "26s" }} />, name: "JavaScript" },
    { icon: <FaNodeJs className="float-icon node" style={{ top: "25%", left: "58%", animationDuration: "24s" }} />, name: "Node.js" },
    { icon: <SiFirebase className="float-icon firebase" style={{ top: "85%", left: "10%", animationDuration: "34s" }} />, name: "Firebase" },
    { icon: <SiPostman className="float-icon postman" style={{ top: "35%", left: "92%", animationDuration: "23s" }} />, name: "Postman" },
    { icon: <FaGithub className="float-icon github" style={{ top: "68%", left: "62%", animationDuration: "28s" }} />, name: "GitHub" },
  ];

  // Array of skills for the list
  const skillsList = [
    { icon: <FaReact className="icon react" />, label: "React.js / React Native (CLI & Expo) / React Vite" },
    { icon: <SiJavascript className="icon js" />, label: "JavaScript / HTML5 / CSS3" },
    { icon: <SiRedux className="icon redux" />, label: "Redux / Context API" },
    { icon: <FaNodeJs className="icon node" />, label: "Node.js / Express.js" },
    { icon: <FaDatabase className="icon db" />, label: "MySQL" },
    { icon: <SiFigma className="icon figma" />, label: "Figma to Code (Pixel-perfect UI)" },
    { icon: <SiFirebase className="icon firebase" />, label: "Firebase" },
    { icon: <SiGraphql className="icon graphql" />, label: "RESTful APIs / GraphQL" },
    { icon: <SiPostman className="icon postman" />, label: "Postman" },
    { icon: <FaGithub className="icon github" />, label: "Git / GitHub" },
    { icon: <ArchitectureServiceAmazonEC2 className="icon aws" size={24} />, label: "AWS (S3, EC2, RDS, CloudFront, IAM)" },
  ];

  return (
    <section ref={revealRef} className="about reveal">
      {/* Floating Skill Icons Background */}
      <div className="floating-icons">
        {floatingIcons.map((item, index) => (
          <span key={index}>{item.icon}</span>
        ))}
      </div>

      {/* Main Content */}
      <h2>About Me</h2>
      <p>
        Full Stack & Mobile Developer with <b>3+ years</b> of experience building
        high-quality applications for both web and mobile platforms, with strong expertise in{" "}
        <b>React Native (CLI & Expo)</b> for Android and iOS. Skilled in creating fast,
        user-friendly mobile interfaces, integrating APIs, handling navigation flows, generating
        APK builds, and publishing apps on the <b>Google Play Store</b>.
      </p>

      <p>
        Experienced in developing modern, responsive web applications using{" "}
        <b>React.js, JavaScript, HTML, CSS, and React Vite</b>, supported by solid state
        management skills with <b>Redux</b> and <b>Context API</b>. Adept at converting{" "}
        <b>Figma designs</b> into clean, pixel-perfect UI.
      </p>

      <p>
        Backend experience includes building and integrating <b>REST APIs</b> using{" "}
        <b>Node.js</b> and <b>Express.js</b>, and working with <b>MySQL</b> databases. Familiar
        with <b>AWS services (S3, EC2, RDS, CloudFront, IAM)</b> for deployment, file storage,
        database hosting, and secure access control.
      </p>

      <p>
        Proficient in version control with <b>Git/GitHub</b> and tools like <b>VS Code</b> and{" "}
        <b>Postman</b>. Known for delivering clean, scalable code and focusing on{" "}
        <b>mobile-first development</b> and excellent user experience.
      </p>

      <div className="grid-2">
        <div>
          <h4>Key Skills</h4>
          <ul className="skills-list">
            {skillsList.map((skill, index) => (
              <li key={index}>
                {skill.icon} {skill.label}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4>Education</h4>
          <ul className="list">
            <li><b>B.Tech in Computer Science & Engineering</b> – St. Mary's Engineering College, JNTU, Hyderabad (2015–2019)</li>
            <li><b>Full Stack Developer Course</b> – Rotary, Hyderabad (2022)</li>
          </ul>

          <h4>Strengths</h4>
          <ul className="list">
            <li>Clean and scalable code practices</li>
            <li>Strong problem-solving skills</li>
            <li>Focus on performance & UI/UX</li>
            <li>Continuous learner & team player</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
