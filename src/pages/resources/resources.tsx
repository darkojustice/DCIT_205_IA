import "./resources.css";

export default function Resources() {
  const box = (image: string, name: string, desc: string) => {
    return (
      <div className="box">
        <img src={image} />
        <h1 className="title-text-black">{name}</h1>
        <p className="body-text-">{desc}</p>
      </div>
    );
  };
  return (
    <div className="main resources">
      {box(
        "https://balme.ug.edu.gh/images/2021/08/31/ir3.png",
        "UGSpace",
        "UGSpace archives and makes visible UG’s research output: theses, inaugural lectures, UG journals and links to research articles."
      )}
      {box(
        "https://balme.ug.edu.gh/images/2021/08/31/off1.png",
        "Off - Campus Access",
        "Provides access to the library's resources when not connected to the University of Ghana network."
      )}
      {box(
        "https://balme.ug.edu.gh/images/2021/08/31/exam1.png",
        "Past Exam Paper",
        "Downloadable PDFs of University of Ghana’s past examination papers."
      )}
      {box(
        "https://balme.ug.edu.gh/images/2021/08/31/soft1.png",
        "Software Installation Request",
        "EndNote & Mendeley are softwares for managing your references."
      )}
      {box(
        "https://balme.ug.edu.gh/images/2021/08/31/ebook3.jpg",
        "Electronic Books",
        "The library provides access to thousands of e-books in a variety of subject areas."
      )}
      {box(
        "https://balme.ug.edu.gh/images/2021/08/31/research2.png",
        "Research Guides",
        "Teaching, learning and research resources compiled by Subject Librarians."
      )}
      {box(
        "https://balme.ug.edu.gh/images/2021/08/31/eds1.png",
        "Search UGCat and Databases",
        "Search the UGCat and all academic databases simultaneously."
      )}
    </div>
  );
}
