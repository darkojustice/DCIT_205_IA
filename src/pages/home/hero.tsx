import React from "react";
import { Link } from "react-router-dom";

export default function Hero() {
  //short courses
  const pushdown_style = {
    marginTop: "100px",
  };

  const course = (img: string, title: string, body: string, pushdown = 0) => {
    return (
      <div className="wrapper" style={pushdown == 1 ? pushdown_style : null}>
        <img src={img} className="img" />
        <div className="text-wrapper">
          <a
            href="#"
            style={{ textDecoration: "none", color: "black" }}
            className="title-text link"
          >
            {title}
          </a>
          <p className="body-text">{body}</p>
        </div>
      </div>
    );
  };
  return (
    <div className="main hero">
      {/* main */}
      <h1 className="headline-text">
        Gateway-Computer Science for <br />
        Innovators and Makers
      </h1>

      <div className="short-courses">
        {course(
          "https://dcs.ug.edu.gh/img/short_courses_images/Web%20Dev.png",
          "Introduction to web programming",
          "Understand the fundamentals of web technologies and create web-based applications with latest technologies"
        )}
        {course(
          "https://dcs.ug.edu.gh/img/short_courses_images/Mobile%20App%20Dev.jpg",
          "Mobile App Development",
          "We proivide world class technologies for Mobile App Development using the mobile-first worklight by IBM",
          1
        )}
        {course(
          "https://dcs.ug.edu.gh/img/short_courses_images/Cyber%20Security.jpg",
          "Information Security & Ethical Hacking",
          "Learn the various techniques used to secure a computer system from attacks through hacking",
          1
        )}
        {course(
          "https://dcs.ug.edu.gh/img/short_courses_images/CCNA.png",
          "Computer Network Fundamentals [CCNA]",
          "We provide training for students to become a Cisco Certified Associate (CCNA)"
        )}
        <div className="overlay"></div>
      </div>

      <div className="events">
        <img
          src="https://dcs.ug.edu.gh/img/gallery/PHOTO-2019-03-04-14-42-37.jpg"
          alt="event img"
        />

        <div className="events-text">
          <h1 className="title-text-black">Sectional Events</h1>
          <p className="body-text-light">
            Programmes, seminars and events organized by the department
          </p>
          <Link to={"events"} className="link">
            View upcoming and ongoing events
          </Link>
        </div>
      </div>
    </div>
  );
}
