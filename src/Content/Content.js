import React from 'react'
import './Content.css'
const Content = (props) => {
    return(
        <div className="Head">
        <div className="Parent1">
           <div className="Child1">
           <section className="First-section">
           <div className="Imagee">
           <img className="Image" src="/images/mypic.jpg" alt="my-profile-pic"/>
           </div>
           <div className="Name">
           <h1 className="Text">Muhammad Usama</h1>
           </div>
           </section>
           <hr className="Line"/>
           <h1 className="Data">Experience</h1>
           <section className="Experience">
               <div className="One">
               <p className="University">Bellatrix Technologies.Ltd</p>
               </div>
               <div className="Two">
               <p className="University">August 2020 to Till now</p>
               </div>
           </section>
           <hr className="Line"/>
           <h1 className="Data">Personal Information</h1>
           <section className="Second-section">
           <div className="Info">
           <p className="Infos">Father Name</p>
           <p className="Infos">Address</p>
           <p className="Infos" style={{paddingTop:'5vh'}}>Date of Birth</p>
           <p className="Infos">Phone</p>
           <p className="Infos">E-Mail</p>
           </div>      
           <div className="Infoo">
           <p className="Infos">Muhammad Safdar</p>
           <p className="Infos">Opposite J.M.S Club Offices Road
           Khaur Company Distt. Attock</p>
           <p className="Infos" style={{paddingTop:'1vh'}}>April 8, 1996</p>
           <p className="Infos">+923109000033</p>
           <p className="Infos" style={{color:'purple'}}><u>mohammad.usama441@gmail.com</u></p>
           </div>
           </section>
           <hr className="Line"/>
           <h1 className="Data">Education</h1>
           <section className="Education">
               <div className="One">
    <p className="Bacholer">Bacholer in Computer Science BS(CS)</p>
    <p className="University">COMSATS University Islamabad(Wah Campus)</p>
    <p className="Bacholer">Intermediate</p>
    <p className="University">Dr. Rashad Degree College Khaur Company</p>
    <p className="Bacholer">Matriculation</p>
               </div>
               <div className="Two">
    <p className="Bacholer">2015-2019</p>
    <p className="Bacholer" style={{color:'white'}}>2015-2019</p>
    <p className="Bacholer" style={{color:'white'}}>2015-2019</p>
    <p className="Bacholer">2012-2014</p>
    <p className="Bacholer" style={{color:'white'}}>2015-2019</p>
     <div style={{paddingTop:'1px'}}>
    <p className="Bacholer">2012</p></div>              
               </div>
           </section>
           <hr className="Line"/>
           <h1 className="Data">Development Skills</h1>
           <section className="Skills">
               <div className="Onee">
               <p className="Bacholer">Front-end</p>
               <ul>
               <li className="University">
               React js
               </li>
               <li className="University">
               React-Redux
               </li>
               <li className="University">
               HTML5,CSS3
               </li>
               <li className="University">
                Bootstrap 4               
               </li>
               <li className="University">
                   API's Intergration        
               </li>
               <li className="University">
                <strong>Themes:</strong>Coreui,Tabular               
               </li>
               <li className="University">
                <strong>Git&Github</strong>               
               </li>
               </ul>
               <p className="Bacholer">Back-end</p>
               <ul>
               <li className="University">
               Firebase
               </li>
               </ul>
               </div>
           </section>
           </div>
           <div className="Child2">
           <h2>Futher Skills</h2>
           <br/>
           <div className="Onee">
           <p className="Bacholer"><b>Personal Skills</b></p>
           <ul>
            <li className="University">Team Work</li>
            <li className="University">Communication</li>
            <li className="University">Time Management</li>
            <li className="University">Quick learner</li>
           </ul>
           </div>
           <br/>
           <div className="Onee">
           <p className="Bacholer"><b>Projects</b></p>
           <ul>
            <li className="University">Admin Panel</li>
            <li className="University">Burger Builder</li>
            <li className="University">Child Tracking</li>
            <li className="University">Lands</li>
            <li className="University">My Portfolio</li>
           </ul>
           </div>
           <br/>
           <div className="Onee">
           <p className="Bacholer"><b>References</b></p>
           <ul>
            <li style={{width:'10vw',listStyle:'none'}}><a 
            href="https://react-my-burger-2f446.web.app/?fbclid=IwAR0ZaRhvzzm9EyQar5r1YoCl6ayqcdRiH8dZe_rSGc0lwZFeWm0a5XSS0sM">
            Burger Builder</a></li>
           </ul>
           </div>
           </div> 
        </div>
        </div>
    )
}

export default Content;