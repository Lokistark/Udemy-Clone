import saleimage from "../images/sale-image.jpg"

function Saleimg()
{
  return(
    <div className="sale__image">
        <img src={saleimage} alt="Sale Image"></img>
        <div className="sale-image__offer">
             <h2>Udemy Flash Sale! 24 Hours To Save</h2>
             <p>Get the top Courses for just 499. Just one day to save but a lifetime to learn </p>
        </div>
    </div>

  )
}
export default Saleimg