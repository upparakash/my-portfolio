import "./Contact.css";

export default function Contact() {
  return (
    <section className="contact">
      <h2>Contact Me</h2>
      <p>If you'd like to collaborate or discuss opportunities, feel free to reach out!</p>

      <div className="contact-row">
        {/* Left column - contact details */}
        <ul>
          <li>📞 8186081185</li>
          <li>
            📧 <a href="mailto:akashuppar1998@gmail.com">akashuppar1998@gmail.com</a>
          </li>
          <li>
            🌍 <a href="https://github.com/upparakash" target="_blank" rel="noreferrer">GitHub Profile</a>
          </li>
          <li>📍 Hyderabad, India</li>
        </ul>

        {/* Right column - Google Map */}
        <div className="map-container">
          <iframe
            title="Google Map - Hyderabad"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.406232225661!2d78.4746129148771!3d17.385044088070373!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb978a19bba9d9%3A0x63d3db7ad7b6a6a!2sHyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1691234567890"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
