import "./Home.css";
import akashImg from "../assets/akashimg.png";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaWhatsapp,
  FaMobileAlt,
  FaLaptopCode,
  FaReact,
} from "react-icons/fa"; 
import { ReactTyped } from "react-typed";

export default function Home() {
  return (
    <section className="hero">
      {/* Background animation */}
      <div className="bg-animation"></div>

      {/* Floating dev icons */}
      <div className="floating-icons">
        <FaReact className="bubble bubble1" />
        <FaMobileAlt className="bubble bubble2" />
        <FaLaptopCode className="bubble bubble3" />
        <FaWhatsapp className="bubble bubble4" />
      </div>

      {/* Left - Text */}
      <div className="hero-text">
        <h1>
          Hi, I'm <span className="accent">Akash Uppar</span>
        </h1>

        {/* Typing animation text */}
        <h3 className="typing-text">
          <ReactTyped
            strings={[
              "Associate Software Engineer",
              "Full-stack Developer",
              "Web App Developer",
              "Mobile App Developer",
            ]}
            typeSpeed={50}
            backSpeed={30}
            backDelay={1500}
            loop
          />
        </h3>

        <p className="muted">
          Full-stack developer crafting scalable, high-performance web & mobile apps.
        </p>

        {/* Social Media Icons */}
        <div className="social-icons">
          <a href="https://github.com/upparakash" target="_blank" rel="noreferrer">
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/akash-uppar-7804a117a/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=akashuppar1998@gmail.com&su=Hello Akash&body=I want to connect with you."
            target="_blank"
            rel="noreferrer"
          >
            <FaEnvelope />
          </a>
          <a
            href="https://wa.me/918186081185"
            target="_blank"
            rel="noreferrer"
          >
            <FaWhatsapp />
          </a>
        </div>

        {/* Actions */}
        <div className="actions">
          <a
            href="https://github.com/upparakash"
            target="_blank"
            rel="noreferrer"
            className="btn"
          >
            GitHub
          </a>
          <a href="#contact" className="btn btn--ghost">
            Contact Me
          </a>
        </div>
      </div>

      {/* Right - Image */}
      <div className="hero-img">
        <img src={akashImg} alt="Akash Uppar" />
      </div>
    </section>
  );
}
