import Nav from "./components/Nav.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./sections/Home.jsx";
import About from "./sections/About.jsx";
import Experience from "./sections/Experience.jsx";
import Projects from "./sections/Projects.jsx";
import Contact from "./sections/Contact.jsx";
import "./App.css";

export default function App() {
  return (
    <div className="app">
      <Nav />
      <main className="container">
        <section id="home"><Home /></section>
        <section id="about"><About /></section>
        <section id="experience"><Experience /></section>
        <section id="projects"><Projects /></section>
        <section id="contact"><Contact /></section>
      </main>
      <Footer />
    </div>
  );
}
