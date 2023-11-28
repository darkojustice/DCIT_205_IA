import "./sotd.css";

export default function Sotd() {
  return (
    <div className="main sotd">
      <h1 className="headline-text">Site of The Day</h1>
      <p className="body-text-light" style={{ textAlign: "center" }}>
        Explore the captivating blend of stunning visuals, seamless navigation,
        and engaging content that defines creativity at its whole
      </p>

      <iframe
        src="https://jewtechx.github.io/portfolio"
        className="iframe"
      ></iframe>
      <a
        href="https://jewtechx.github.io/portfolio"
        className="body-text-white"
      >
        View in a New Tab
      </a>
    </div>
  );
}
