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
  FaNodeJs,
  FaDatabase,
  FaCode,
} from "react-icons/fa"; 
import { ReactTyped } from "react-typed";

export default function Home() {
  return (
    <section className="hero">
      {/* Background animation */}
      <div className="bg-animation"></div>

      {/* Floating dev icons */}
      <div className="floating-icons">
        <FaReact className="bubble" style={{ left: "10%", fontSize: "50px", color: "#61dafb", animationDuration: "14s", animationDelay: "0s" }} />
        <FaMobileAlt className="bubble" style={{ left: "24%", fontSize: "36px", color: "#ff9800", animationDuration: "11s", animationDelay: "1.5s" }} />
        <FaLaptopCode className="bubble" style={{ left: "38%", fontSize: "28px", color: "#4caf50", animationDuration: "9s", animationDelay: "3s" }} />
        <FaWhatsapp className="bubble" style={{ left: "52%", fontSize: "42px", color: "#25d366", animationDuration: "13s", animationDelay: "0.8s" }} />
        <FaNodeJs className="bubble" style={{ left: "66%", fontSize: "34px", color: "#3c873a", animationDuration: "12s", animationDelay: "2.4s" }} />
        <FaGithub className="bubble" style={{ left: "78%", fontSize: "36px", color: "#e6edf3", animationDuration: "15s", animationDelay: "4s" }} />
        <FaDatabase className="bubble" style={{ left: "88%", fontSize: "30px", color: "#00758f", animationDuration: "10s", animationDelay: "5.5s" }} />
        <FaCode className="bubble" style={{ left: "4%", fontSize: "38px", color: "#6cf0c2", animationDuration: "16s", animationDelay: "6.5s" }} />
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
              "Full Stack Developer",
              "React Native Developer",
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
