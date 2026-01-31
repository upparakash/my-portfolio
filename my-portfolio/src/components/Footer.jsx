import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <span>© {new Date().getFullYear()} Akash Uppar • Built with React  Vite</span>
      <a
  href="https://github.com/upparakash"
  target="_blank"
  rel="noreferrer"
  style={{ color: "var(--accent)" }}
>
  GitHub
</a>

    </footer>
  );
}
