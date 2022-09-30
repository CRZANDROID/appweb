
import '../assets/style/body.css'
import Titles from "./bodyParts/titulos"



function body() {
  return (
    <section className='body'>
        <div><div className='title-center'><Titles></Titles></div></div>
        <div className="img-body"></div>
        <a href="#"><div className="rectangul-1"></div></a>
        <a href="#"><div className="rectangul-2"></div></a>
        <div className="rectangul-3"></div>
        <div className="rectangul-4"></div>
        <div className="nav"></div>
    </section>
  );
}
export default body;