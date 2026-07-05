export default function Footer() {
  return (
    <footer className="border-t border-muted/10 bg-surface px-6 py-16 text-center sm:px-10">
      <p className="font-display text-2xl tracking-wide text-gold uppercase">
        Sandeep<span className="text-text">.Fit</span>
      </p>

      <div className="mt-6 flex flex-col items-center gap-2 font-body text-sm text-muted">
        <a
          href="https://instagram.com/mr_aesthetic_sandp"
          target="_blank"
          rel="noreferrer"
          className="transition-colors duration-300 hover:text-amber"
        >
          @mr_aesthetic_sandp
        </a>
        <p>Human Fitness Gym, Sector 4-6, Dharuhera, Rewari</p>
      </div>

      <p className="mt-10 font-body text-xs text-muted/60">
        © {new Date().getFullYear()} Sandeep Yadav. All rights reserved.
      </p>
    </footer>
  );
}
