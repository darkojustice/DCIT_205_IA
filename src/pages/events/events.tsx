import "./events.css";

export default function Events() {
  return (
    <div className="main events">
      <h1 className="title-text-black">Ongoing Events</h1>
      <p className="body-text-light">Sorry there are no ongoing events</p>

      <h1 className="title-text-black">Upcoming Events</h1>
      <p className="body-text-light">Sorry there are no upcoming events</p>

      <h1 className="title-text-black">Past Events</h1>
      <div className="past-events">
        <img
          src="https://dcs.ug.edu.gh/img/gallery/shortcourse17.08.2021.jpeg"
          alt="event1"
        />
        <img
          src="https://dcs.ug.edu.gh/img/Cyber%20Security.jpg"
          alt="event2"
        />
        <img src="https://dcs.ug.edu.gh/img/event3.jpeg" alt="event3" />
      </div>
    </div>
  );
}
