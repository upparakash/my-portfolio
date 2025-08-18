import "./About.css";
import useScrollReveal from "../hooks/ScrollReveal";

// Import skill icons
import { FaReact, FaNodeJs, FaDatabase, FaGithub } from "react-icons/fa";
import { SiJavascript, SiRedux, SiFirebase, SiGraphql, SiPostman } from "react-icons/si";

export default function About() {
  const revealRef = useScrollReveal();

  return (
    <section ref={revealRef} className="about reveal">
      {/* Floating Skill Icons Background */}
      <div className="floating-icons">
        <FaReact className="float-icon react" />
        <SiJavascript className="float-icon js" />
        <SiRedux className="float-icon redux" />
        <FaNodeJs className="float-icon node" />
        <FaDatabase className="float-icon db" />
        <SiFirebase className="float-icon firebase" />
        <SiGraphql className="float-icon graphql" />
        <SiPostman className="float-icon postman" />
        <FaGithub className="float-icon github" />
      </div>

      {/* Main Content */}
      <h2>About Me</h2>
      <p>
        Dedicated <b>Associate Software Engineer</b> with <b>1.5+ years</b> of hands-on experience in 
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
            <li><FaReact className="icon react" /> React.js / React Native / React Vite</li>
            <li><SiJavascript className="icon js" /> JavaScript / HTML5 / CSS3</li>
            <li><SiRedux className="icon redux" /> Redux / Context API</li>
            <li><FaNodeJs className="icon node" /> Node.js / Express.js</li>
            <li><FaDatabase className="icon db" /> MySQL</li>
            <li><SiFirebase className="icon firebase" /> Firebase</li>
            <li><SiGraphql className="icon graphql" /> RESTful APIs / GraphQL</li>
            <li><SiPostman className="icon postman" /> Postman</li>
            <li><FaGithub className="icon github" /> GitHub</li>
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
