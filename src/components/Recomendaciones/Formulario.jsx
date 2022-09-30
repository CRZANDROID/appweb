import '../../assets/style/RecomStyles/formulario.css'




function formulario() {
    return (
        <form className="formulario" action="">
            <label for="username">Nombre</label>
            <input type="text" placeholder="Nombre" />
            <label for="username">Correo</label>
            <input type="text" placeholder="Correo" />
            <label for="username">Recomendacion</label>
            <textarea name="mensaje" id="" placeholder="Mensaje" cols="30" rows="10"></textarea>
            <input type="submit"/>
        </form>
    );
  }
  export default formulario;