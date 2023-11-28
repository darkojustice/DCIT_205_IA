import React from 'react'

export default function Progammes() {
    //programmes
    const programmes = function(title,desc,link){
        return (
            <div className='wrapper'>
                    <a href='#' className='title-text link'>{title}</a>
                    <p className='body-text'>{desc}</p>
                    <a href={link} className='link' style={{color:"goldenrod"}} >Read More</a>
             </div>
        )
    }

  return (
    <div className='main' style={{marginTop:"20px"}}>
        <div className='programmes-banner'>
            <img src='https://dcs.ug.edu.gh/img/about-img2.jpeg' className='img'/>

            <div className='flex'>
                {programmes("Short Courses","Our eight week intensive certificate course is open to senior high school graduates, tertiary students, school graduates, workers and the general public. ","#")}
                {programmes("Undergraduate Programmes","Open the door to sought-after technology careers with a world-class Bachelor of Science in Computer Science degree. ","#")}
                {programmes("Mphil and Msc programmes","Embrace world class gradate education with unique blend of cutting-edge research and industry experience.","#")}
                {programmes("PhD programmes","Our PHDs lead the effort to extend the boundaries of knowledge through quality and industry relevant research.","#")}
            </div>
        </div>
    </div>
  )
}
