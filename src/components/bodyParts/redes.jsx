import facebook from "../../assets/img/redes/facebook-f.svg"
import instagram from "../../assets/img/redes/instagram.svg"
import pinterest from "../../assets/img/redes/pinterest-p.svg"
import "../../assets/style/BodyStyles/Redes.css"

function redesbody() {
    return (

            <div className='redes'><div className="redes-img">
              <a href="#"><img src={facebook} alt="" /></a>
              <a href="#"><img src={instagram} alt="" /></a>
              <a href="#"><img src={pinterest} alt="" /></a>
              </div></div>

    );
  }

export default redesbody