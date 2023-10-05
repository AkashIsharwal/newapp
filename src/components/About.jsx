import React, {  useState } from "react";
import Profile from './Image/profile.jpg'



export default function About() {
    const [myStyle, setMyStyle] = useState(
    {
        color: 'black',
        backgroundColor: 'White'
    })
    const [btnText, setBtnText] = useState('Enable Dark Mode')

    const darkMode =() =>{
        if (myStyle.color === 'black'){
            setMyStyle({
                color: 'white',
                backgroundColor: 'black'
            })
            setBtnText('Enable Light Mode')
        }else{
            setMyStyle({
                color: 'black',
                backgroundColor: 'white'
              })
              setBtnText('Enable Dark Mode')
        }
    }

  return (

    <div className="container" style={myStyle}>
        <h1 className="my-3">About Me </h1>
    <div className="accordion" id="accordionExample" style={myStyle}>
    <div className="accordion-item" style={myStyle}>
      <h2 className="accordion-header" id="headingOne">
        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={myStyle}>
          <b>About Me</b>
        </button>
      </h2>
      <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
        <div className="accordion-body">
          <strong>I am Akash Isharwal, a Full Stack Developer. </strong> I'm excited to introduce you to my latest project, a versatile React app designed to simplify text manipulation and analysis. This app offers an intuitive interface where users can effortlessly edit text and perform a variety of useful actions. One of the standout features is the ability to change the case style of the text, enabling users to switch between uppercase, lowercase, and title case with ease. Additionally, the app provides a convenient word and character count feature, making it an excellent tool for writers, students, and professionals looking to assess the length and composition of their content.It also has a eye relaxing dark mode so that one can use this app for a longer period of time. 
        </div>
        <div className="d-flex w-100 justify-content-center">
        <img src={Profile} alt="" className="w-25 h-25 border border-dark rounded-4 mb-4"  />
        </div>
      </div>
    </div>
    <div className="accordion-item" style={myStyle}>
      <h2 className="accordion-header" id="headingTwo">
        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={myStyle}>
          <b>My Details</b>
        </button>
      </h2>
      <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
        <div className="accordion-body">
          <strong>Btech CSE Graduate.</strong> I am from Hisar, Haryana, a recent B.Tech graduate in Computer Science and Engineering from Guru Jambheshwar University of Science & Technology, Hisar - Haryana, with a strong foundation in web development and software engineering. My skill set encompasses a range of technologies, including <strong> HTML, CSS, JavaScript, Bootstrap, jQuery, Ajax, React, Node.js, Express.js, and MongoDB, along with proficiency in C++, Object-Oriented Programming (OOP), and Data Structures and Algorithms (DSA)</strong>. I have hands-on experience creating dynamic web applications and projects, such as e-commerce websites and task management apps. My goal is to leverage my expertise to contribute to innovative tech projects and advance in the industry. 
        </div>
      </div>
    </div>
    <div className="accordion-item"style={myStyle}>
      <h2 className="accordion-header" id="headingThree">
        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={myStyle}>
          <b>Contact Me</b>
        </button>
      </h2>
      <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
        <div className="accordion-body">
          <strong>Please contact me here!</strong> You can reach me at any time via phone at <b>[<a href="tel:+919001408923">+91 9001408923</a>]</b> or by email at <b>[<a href="mailto:akashisharwal18@gmail.com">akashisharwal18@gmail.com</a>]</b>. Additionally, please feel free to connect with me on <a href="https://in.linkedin.com/in/akash-isharwal-2a3ab6205">LinkedIn(Akash)</a>  , where you can find more about my professional journey and stay updated on my latest projects and endeavors. I look forward to hearing from you and potentially collaborating on exciting opportunities in the near future.
        </div>
      </div>
    </div>
  </div>
  <div>
    <button onClick={darkMode} type="button" className="btn btn-primary my-3">{btnText}</button>
  </div>
  </div>
  );
}
