import { useState } from "react";
import "../faq/faq.css";

export default function Tips() {
  // Tips items state
  const [openIndex, setOpenIndex] = useState(null);
  const [tipsAndInfo] = useState([
    {
      title: "Managing Faculty or Staff Bio Pages",
      desc: "Faculty and staff members can manage their bio pages by logging into the CS Portals site and editing their current page. For more information, visit the CS Faculty & Staff Info page [1].",
      isOpen: false,
    },
    {
      title: "Submitting Events to the CS Website Calendar",
      desc: "Faculty members can refer to the Website User Guide for Faculty provided by the UMD Department of Computer Science for instructions on submitting events for publication and managing the CS website calendar. For more details, visit [Website User Guide for Faculty | UMD Department of Computer Science Technical FAQ][4].",
      isOpen: false,
    },
    {
      title: "Accessing Campus Network from Residences",
      desc: "Students with their own computers can access the campus network from campus residences without additional steps.",
      isOpen: false,
    },
    {
      title: "Faculty and Staff Resources",
      desc: "The University of Virginia School of Engineering and Applied Science provides resources and links for faculty and staff. For more information, visit [CS Faculty & Staff Info | University of Virginia School of Engineering and Applied Science][2].",
      isOpen: false,
    },
    {
      title: "Student Email Password Reset",
      desc: "To reset your student email password or access your account, visit the Columbus State Community College Information Technology page [5].",
      isOpen: false,
    },
    {
      title: "Computer Science Major Requirements",
      desc: "The requirements for the computer science major typically include completing specific courses in programming, algorithms, data structures, and computer systems, among others. Additionally, students may need to fulfill credit hour requirements and maintain a certain GPA.",
      isOpen: false,
    },
    {
      title: "Programming Languages Taught",
      desc: "The department teaches a variety of programming languages, including but not limited to Java, C++, Python, and JavaScript.",
      isOpen: false,
    },
    {
      title: "Difference Between Computer Science and Information Systems",
      desc: "Computer science focuses on the theoretical and practical aspects of computing, including programming, algorithms, and data structures, while information systems emphasize the application of technology in business settings, such as database management and enterprise systems.",
      isOpen: false,
    },
  ]);

  // Toggling tips
  const toggleTip = (index: any) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Render tips items
  const renderTips = () => {
    return tipsAndInfo.map((item, index) => (
      <div className="faq-wrapper" key={index} onClick={() => toggleTip(index)}>
        <div className="faq-title-wrapper">
          <h1 className="faq-title">{item.title}</h1>
          <h1 className="faq-title">{openIndex === index ? "-" : "+"}</h1>
        </div>
        {openIndex === index && (
          <p className="faq-body body-text-light">{item.desc}</p>
        )}
      </div>
    ));
  };

  return (
    <div className="main">
      <h1 className="title-text-black">Tips of The Year</h1>
      {renderTips()}
    </div>
  );
}
