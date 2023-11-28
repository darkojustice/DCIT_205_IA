import "./rs.css";

export default function ResearchGroups() {
  const member = (img: string, name: string, position: string) => {
    return (
      <div className="member">
        <img src={img} />
        <h1>{name}</h1>
        <p className="body-text-light">{position}</p>
      </div>
    );
  };
  return (
    <div className="main">
      <h1 className="title-text-black">Research Groups</h1>
      <h1 className="title-text-black">Computer Science Department</h1>
      <div className="rs">
        {member(
          "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          "Jew Larbi",
          "Head od Department"
        )}
        {member(
          "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          "Kester Osei",
          "Assistant"
        )}
        {member(
          "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1600",
          "Jude Bunney",
          "Head of Affairs"
        )}
        {member(
          "https://images.pexels.com/photos/874158/pexels-photo-874158.jpeg?auto=compress&cs=tinysrgb&w=1600",
          "Prince Essandor",
          "Head of Finance"
        )}
        {member(
          "https://images.pexels.com/photos/874158/pexels-photo-874158.jpeg?auto=compress&cs=tinysrgb&w=1600",
          "Prince Essandor",
          "Head of Finance"
        )}
        {member(
          "https://images.pexels.com/photos/874158/pexels-photo-874158.jpeg?auto=compress&cs=tinysrgb&w=1600",
          "Prince Essandor",
          "Head of Finance"
        )}
      </div>
      <h1 className="title-text-black">IT department</h1>
      <div className="rs">
        {member(
          "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          "Jew Larbi",
          "Head od Department"
        )}
        {member(
          "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          "Kester Osei",
          "Assistant"
        )}
        {member(
          "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1600",
          "Jude Bunney",
          "Head of Affairs"
        )}
        {member(
          "https://images.pexels.com/photos/874158/pexels-photo-874158.jpeg?auto=compress&cs=tinysrgb&w=1600",
          "Prince Essandor",
          "Head of Finance"
        )}
        {member(
          "https://images.pexels.com/photos/874158/pexels-photo-874158.jpeg?auto=compress&cs=tinysrgb&w=1600",
          "Prince Essandor",
          "Head of Finance"
        )}
        {member(
          "https://images.pexels.com/photos/874158/pexels-photo-874158.jpeg?auto=compress&cs=tinysrgb&w=1600",
          "Prince Essandor",
          "Head of Finance"
        )}
      </div>
    </div>
  );
}
