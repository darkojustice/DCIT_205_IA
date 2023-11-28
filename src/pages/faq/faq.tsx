import { useState } from "react";
import "./faq.css";

export default function Faq() {
  // FAQ items state
  const [openIndex, setOpenIndex] = useState(null);

  const [faqItems] = useState([
    {
      title:
        "How can I appear in the faculty or staff sections of the website?",
      desc: "Information on appearing in the faculty or staff sections of the website should be available on the department's website or can be obtained by contacting the department directly.",
      isOpen: false,
    },
    {
      title: "How do I add an event to the CS website calendar?",
      desc: "Information on adding events to the CS website calendar should be available on the department's website or can be obtained by contacting the department directly.",
      isOpen: false,
    },
    {
      title: "What research opportunities are available to undergraduates?",
      desc: "Departmental research laboratories are available to undergraduates working on research projects supervised by faculty",
      isOpen: false,
    },
    {
      title: "How do I access the campus network from campus residences?",
      desc: "Students with their own computers have access to the campus network from campus residences",
      isOpen: false,
    },
    {
      title: "Do I need to buy my own computing equipment?",
      desc: "Students do not need to buy their own computing equipment. The department provides support through facilities maintained by the university's Division of Information Technology (DoIT) and its own instructional laboratories",
      isOpen: false,
    },
    {
      title: "What are the requirements for the computer science major?",
      desc: "The requirements for the computer science major typically include completing specific courses in programming, algorithms, data structures, and computer systems, among others. Additionally, students may need to fulfill credit hour requirements and maintain a certain GPA",
      isOpen: false,
    },
    {
      title: "What programming languages do you teach?",
      desc: "The department teaches a variety of programming languages, including but not limited to Java, C++, Python, and JavaScript",
      isOpen: false,
    },
    {
      title: "What are the requirements for the computer science major?",
      desc: "Computer science focuses on the theoretical and practical aspects of computing, including programming, algorithms, and data structures, while information systems emphasize the application of technology in business settings, such as database management and enterprise systems",
      isOpen: false,
    },
  ]);

  // Toggling faq
  const toggleFaq = (index: any) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Render FAQ items
  const renderFaqs = () => {
    return faqItems.map((item, index) => (
      <div className="faq-wrapper" key={index} onClick={() => toggleFaq(index)}>
        <div className="faq-title-wrapper">
          <h1 className="faq-title">{item.title}</h1>
          <h1 className="faq-title">{openIndex === index ? "-" : "+"}</h1>
        </div>
        {openIndex === index && (
          <p className="faq-body body-text-light">{item.desc}</p>
        )}{" "}
      </div>
    ));
  };

  return (
    <div className="main">
      <h1 className="title-text-black">Frequently Asked Questions</h1>
      {renderFaqs()}
    </div>
  );
}
