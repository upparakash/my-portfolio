import "./Projects.css";

export default function Projects() {
  return (
    <section className="projects">
      <h2>Projects</h2>
      <div className="projects-grid">
        <article className="card">
          <h3>School Management System</h3>
          <p>
            Built with React Vite & React Native (frontend), Node.js & MySQL (backend). 
            Features: Student/Teacher CRUD, Timetable, Library, Dashboard, AWS S3 file upload, JWT auth, WebSockets.
          </p>
        </article>
        <article className="card">
          <h3>Home Services App</h3>
          <p>
            React Native app for booking local services (plumbing, cleaning, etc). 
            Features: service provider dashboard, Google Maps tracking, Razorpay/Stripe payments, 
            Firebase notifications, AWS EC2 + S3 deployment.
          </p>
        </article>
      </div>
    </section>
  );
}
