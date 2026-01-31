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
    { icon: <SiPostman className="float-icon postman" />, name: "Postman" },
    { icon: <FaGithub className="float-icon github" />, name: "GitHub" },
    { icon: <ArchitectureServiceAmazonEC2 className="float-icon aws" size={32} />, name: "AWS EC2" },
  ];

  // Array of skills for the list
  const skillsList = [
    { icon: <FaReact className="icon react" />, label: "React.js / React Native / React Vite" },
    { icon: <SiJavascript className="icon js" />, label: "JavaScript / HTML5 / CSS3" },
    { icon: <SiRedux className="icon redux" />, label: "Redux / Context API" },
    { icon: <FaNodeJs className="icon node" />, label: "Node.js / Express.js" },
    { icon: <FaDatabase className="icon db" />, label: "MySQL" },
    { icon: <SiFirebase className="icon firebase" />, label: "Firebase" },
    { icon: <SiGraphql className="icon graphql" />, label: "RESTful APIs / GraphQL" },
    { icon: <SiPostman className="icon postman" />, label: "Postman" },
    { icon: <FaGithub className="icon github" />, label: "GitHub" },
    { icon: <ArchitectureServiceAmazonEC2 className="icon aws" size={24} />, label: "AWS EC2 / Cloud Deployment" },
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
        Dedicated <b>Associate Software Engineer</b> with <b>2+ years</b> of hands-on experience in
        developing responsive web applications using <b>HTML, CSS, JavaScript, React.js, and React Vite</b>.
        Proficient in state management with <b>Redux</b> and <b>Context API</b>, with strong attention
        to <b>performance optimization, UI/UX design principles</b>, and <b>debugging scalable applications</b>.
        Experienced in building modern user interfaces and integrating both <b>RESTful APIs</b>
        and <b>GraphQL</b> for dynamic data handling.
      </p>

      <p>
        Skilled in <b>cross-platform mobile application development</b> for <b>iOS</b> and <b>Android</b> using
        React Native and Android Studio. Proficient with <b>React Navigation</b>, mobile UI/UX design,
        generating <b>APK files</b>, building iOS apps, and publishing applications on the Google Play Store.
      </p>

      <p>
        On the backend, experienced in <b>API development</b> using <b>JavaScript, Node.js, and Express.js</b>,
        integrating with <b>Firebase</b>, and handling client–server communication with <b>Postman</b>.
        Knowledgeable in <b>relational databases (MySQL)</b> and skilled in database design and management.
      </p>

      <p>
        Proficient in <b>Visual Studio Code</b> and version control with <b>GitHub</b>.
        Passionate about creating <b>high-quality, user-friendly solutions</b>
        and continuously enhancing expertise across <b>web, mobile, and backend development</b>.
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
            <li><b>B.Tech in Computer Science & Engineering</b> – JNTU, Hyderabad (2015–2019)</li>
            <li><b>Full Stack Developer Course</b> – Rotary (2023)</li>
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
