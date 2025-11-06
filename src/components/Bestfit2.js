import img1 from "../images/c1.jpg"
import img2 from "../images/c3.jpg"
import img3 from "../images/c2.jpg"
import img4 from "../images/c4.jpg"

function Bestfit2()
{
  return(
     <div className="popular__container">
            <div className="course__card">
                <img src={img1} alt="Course Image"></img>
                <h3>2025 Python Data Visulaization Masterclass</h3>
                <p>Col Steele</p>
                <p>4.0 ⭐⭐⭐⭐</p>
                <p>449 <del>1499</del></p>
            </div>

            <div className="course__card">
                <img src={img2}alt="Course Image"></img>
                <h3>Basic To Advance Programming With EMC</h3>
                <p>Agnel John</p>
                <p>4.0 ⭐⭐⭐⭐</p>
                <p>599 <del>1299</del></p>
            </div>

            <div className="course__card">
                <img src={img3} alt="Course Image"></img>
                <h3>Web Development Bootcamp 2025</h3>
                <p>A2D Learning</p>
                <p>3.0 ⭐⭐⭐</p>
                <p>350 <del>1899</del></p>
            </div>

            <div className="course__card">
                <img src={img4}alt="Course Image"></img>
                <h3>Master UI/UX Designing with Figma</h3>
                <p>Puma Technovation</p>
                <p>2.0 ⭐⭐</p>
                <p>700 <del>1999</del></p>
            </div>

            <div className="course__card">
                <img src={img1} alt="Course Image"></img>
                <h3>Web Development Bootcamp 2025</h3>
                <p>A2D Learning</p>
                <p>3.0 ⭐⭐⭐</p>
                <p>350 <del>1899</del></p>
            </div>

            <div className="course__card">
                <img src={img2} alt="Course Image"></img>
                <h3>Basic To Advance Programming With EMC</h3>
                <p>Agnel John</p>
                <p>4.0 ⭐⭐⭐⭐</p>
                <p>599 <del>1299</del></p>
            </div>

            <div className="course__card">
                <img src={img3} alt="Course Image"></img>
                <h3>2025 Python Data Visulaization Masterclass</h3>
                <p>Col Steele</p>
                <p>4.0 ⭐⭐⭐⭐</p>
                <p>449 <del>1499</del></p>
            </div>

            <div className="course__card">
                <img src={img4} alt="Course Image"></img>
                <h3>Master UI/UX Designing with Figma</h3>
                <p>Puma Technovation</p>
                <p>2.0 ⭐⭐</p>
                <p>700 <del>1999</del></p>
            </div>

        </div>

  )
}
export default Bestfit2