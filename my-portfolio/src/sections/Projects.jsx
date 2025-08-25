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
        <article className="card">
          <h3>HomeFood (UK Product)</h3>
          <p>
            A React Native app connecting users with homemade and healthy meals prepared by
            local chefs across the UK.
            Features: real-time food listing, chef profiles, location-based search,
            secure payments via Razorpay, order tracking, customer reviews,
            and AWS-powered cloud deployment for scalability.
          </p>
        </article>
        <article className="card">
  <h3>Flames Calculator</h3>
  <p>
    A fun React Native app that predicts relationship compatibility using the classic 
    FLAMES (Friends, Love, Affection, Marriage, Enemy, Sibling) game. 
    Features: interactive name input, instant results with animations, 
    and a simple, engaging UI for users of all ages.
  </p>
</article>
<article className="card">
  <h3>SIP Calculator</h3>
  <p>
    A React Native app for calculating investment growth and profit through 
    Systematic Investment Plans. 
    Features: monthly/annual SIP input, real-time profit projection, 
    interactive charts, ROI analysis, and a clean user-friendly UI 
    for financial planning.
  </p>
</article>

      </div>
    </section>
  );
}
