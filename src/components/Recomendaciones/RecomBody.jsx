import Formulario from "./Formulario"
import "../../assets/style/RecomStyles/RecomBody.css"
import Redes from "../bodyParts/redes";




function RecomBody() {
    return (
      <section className='RecomBody'>
        <div className="title-contact"><h3>RECOMENDACIONES</h3></div>
        <div className="formulario-img"><Formulario></Formulario><div className="img-recom"></div></div>
          <div className="abutus">About Us</div>
          <div className="textAbout">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy</div>
      </section>
    );
  }
  export default RecomBody;