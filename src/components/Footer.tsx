export default function Footer() {
  return (
    <footer className="border-t border-rule py-8 text-sm text-muted">
      <p>
        &copy; {new Date().getFullYear()} Hossain Ahmmed Taufiq. Built with
        Next.js and Tailwind CSS.
      </p>
    </footer>
  );
}
