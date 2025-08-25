import "./Experience.css";

export default function Experience() {
  return (
    <section className="experience">
      <h2>Professional Experience</h2>
      <div className="timeline">
        <div className="job">
          <h3>Associate Software Engineer – FIVE 9S SOLUTIONS</h3>
          <span>(May 2025 – Present)</span>
          <p>Developed responsive UIs, collaborated with designers, ensured cross-browser compatibility, and built reusable components.</p>
        </div>
        <div className="job">
          <h3>Junior Software Engineer – SEVAK DIGITAL TECHNOLOGIES</h3>
          <span>(Feb 2024 – May 2025)</span>
          <p>Built React apps, created RESTful APIs with Node.js/Express, and tested APIs using Postman.</p>
        </div>
        <div className="job">
          <h3>Customer Support Associate – Tech Mahindra</h3>
          <span>(Apr 2022 – Nov 2022)</span>
          <p>Handled customer queries via phone, email, and chat, ensuring client satisfaction.</p>
        </div>
        <div className="job">
          <h3>Computer Operator – Venu Gopal Communication</h3>
          <span>(Aug 2019 – Apr 2022)</span>
          <p>Managed data analysis in Excel and professional documents in MS Word.</p>
        </div>
      </div>
    </section>
  );
}
