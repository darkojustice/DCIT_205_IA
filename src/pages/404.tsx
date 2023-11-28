import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="not-found">
      <div className="overlay"></div>
      <h1 className="title-text">404</h1>
      <h1 className="title-text">Page Not Found</h1>
      <Link to={"/"} className="link">
        Return Back Home {"\u2192"}
      </Link>
    </div>
  );
}
