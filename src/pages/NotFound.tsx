const NotFound = () => (
  <div
    className="flex min-h-screen items-center justify-center"
    style={{ background: "#000033", fontFamily: "Inter, sans-serif" }}
  >
    <div className="text-center px-6">
      <h1
        className="mb-4 font-bold uppercase"
        style={{ fontFamily: "Oswald, sans-serif", color: "#FFFFFF", fontSize: 48 }}
      >
        404
      </h1>
      <p className="mb-6 text-base" style={{ color: "rgba(255,255,255,0.75)" }}>
        The page you were looking for is not available.
      </p>
      <a
        href="/"
        className="inline-flex items-center rounded-full px-6 py-3 text-xs font-bold uppercase"
        style={{ background: "#E8670A", color: "#FFFFFF", letterSpacing: "0.08em", textDecoration: "none" }}
      >
        Return Home
      </a>
    </div>
  </div>
);

export default NotFound;
