import "../../assets/style/headerStyles/menu.css"
import {Link} from "react-router-dom";



function menu() {
    return (
        <div><nav class="menu">
        <ul>
        <li><Link to="/">Home</Link></li>
          <li><Link to="/Preregistro">Preregistro</Link></li>
            <li><a href="#">Mas Carros</a></li>
            <li><a href="#">Informacion del Carro</a></li>
          </ul>
      </nav></div>
    );
  }
  export default menu;