import './Header.css';
import myself from "../images/myself1.jpg";
import twitter from "../images/Twitter Icon.png";
import fb from "../images/Facebook Icon.png";
import ig from "../images/Instagram Icon.png";
import github from "../images/GitHub Icon.png";


export default function Header() {
  return(
    <main className="main">
        <div className="card">
            
            <img src={myself} alt="myself" className="myself" />
            
            <h2 className="name">Michael Azilinon</h2>
            
            <p className="occupation">Frontend Developer</p>
            
            <p className="website">ma.dev.com</p>

            <div className="buttons">
                <a href="mailto:azilinon.michael@gmail.com">
                    <button className="email">
                        Email
                    </button>
                </a>

                <a href="https://www.linkedin.com/in/michael-azilinon-a909381b5/" target="_blank">
                    <button className="linkedin">
                        LinkedIn
                    </button>
                </a>
            </div>

            <section class="about">
                <h3>About</h3>
                <p class="about2">A frontend developer with a particular interest in 
                making things simple and automating daily tasks.
                Also an enthusiastic statistician who likes to deal with big amounts of data, while 
                carrying out neat and fitting analysis.
                </p>
            </section>

            <section class="about">
                <h3>Interests</h3>
                <p class="about2">Quality god-friendly music, Good cooking, Stylish interior,
                1 dog, Learning advantageous skills, Discussing lesser-known historical and 
                scientific topics 
                </p>
            </section>

            <footer>
               <a href="https://twitter.com/?lang=cs"  target="_blank" className="socials-icon-link"> 
                <img src={twitter} alt="twicon" className="socials-icon" /> 
               </a>
               
               <a href="https://facebook.com/?lang=cs"  target="_blank" className="socials-icon-link"> 
                <img src={fb} alt="twicon" className="socials-icon" /> 
               </a>
               
               <a href="https://www.instagram.com/michaelazilinon/"  target="_blank" className="socials-icon-link"> 
                <img src={ig} alt="twicon" className="socials-icon" /> 
               </a>
               
               <a href="https://github.com/michael11plus"  target="_blank" className="socials-icon-link"> 
                <img src={github} alt="ghicon" className="socials-icon" /> 
               </a>
               

               </footer>
        </div>     
    </main>    
    

)
}