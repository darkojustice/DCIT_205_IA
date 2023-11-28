import "./footer.css";
import navigation from "./navigation";

export default function Footer() {
  return (
    <div className="main footer flex">
      {navigation.map((nav: any) => {
        return (
          <div className="footer-column">
            <h1
              className="title-text"
              style={{ margin: "20px 5px ", textAlign: "left" }}
            >
              {nav.title}
            </h1>
            <ul>
              {nav.links.map((nav: any) => {
                return (
                  <li className="link">
                    <a className="link" href={nav.href}>
                      {nav.name}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        );
      })}
      <div
        className="footer"
        style={{
          background: "transparent",
          justifyContent: "start",
          gap: "20px",
          flexWrap: "wrap",
        }}
      >
        <div>
          <h1 className="title-text">Newsletter</h1>
          <p className="body-text" style={{ color: "#ccc" }}>
            Stay up to date with our latest news
          </p>
          <div className="flex">
            <input type="text" className="input" />
            <button className="nl-submit">Go!</button>
          </div>
        </div>

        <div className="" style={{ marginLeft: "20px" }}>
          <h1 className="title-text">Contact Us</h1>
          <div className="" style={{ display: "flex", gap: "20px" }}>
            <div>
              <h1
                className="title-text"
                style={{ margin: 0, textAlign: "left", fontSize: "19px" }}
              >
                Phone & email
              </h1>
              <p className="body-text-white">+233 501 382 035</p>
              <p className="body-text-white">+233 559 145 698</p>
              <p className="body-text-white">dcs@ug.edu.gh</p>
            </div>
            <div>
              <h1
                className="title-text"
                style={{ margin: 0, textAlign: "left", fontSize: "19px" }}
              >
                Location
              </h1>
              <p className="body-text-white">University Of Ghana, Legon</p>
              <p className="body-text-white">Campus</p>
              <p className="body-text-white">Opposite Mathematics</p>
              <p className="body-text-white">Department</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
