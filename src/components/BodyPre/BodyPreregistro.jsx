import Titles from "../bodyParts/titulos.jsx";
import PresBox from "./PreComps/PresBox";
import "../../assets/style/BodyStyles/BodyPre/PreStyles.css"

function BodyPreregistro() {
    return (
        <section className='body-preregistro'>
            <div className="pre-fondo"></div>
            <div>
                <div className="login-wrapper">
                    <form>
                        <h1>Preregistro de un piloto de carreras</h1>
                        <PresBox></PresBox>
                    </form>
                </div>
            </div>
        </section>
    );
}
export default BodyPreregistro;