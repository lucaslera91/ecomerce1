import { Link } from "react-router-dom";

function Carusell({items}) {
  const urlBanner = 'https://thumbs.dreamstime.com/b/banner-de-etiqueta-bienvenida-la-cinta-texto-imagen-generada-por-el-equipo-fondo-blanco-aislado-175593848.jpg'
  if(items.length < 1){
      return (
        <div className="spinner-border text-primary" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      )
  }else{
  
      return(
          <div className="border-1 border border-muted m-3 my-4 p-3 shadow bg-white rounded-xl" style={{ borderRadius: '1rem'}}>
              <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
              <ol className="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
              </ol>
              <div className="carousel-inner">
                <div className="carousel-item active" >
                  <Link to={`/`}><img className="d-block w-100" style={{ backgroundColor: '', borderRadius: '2rem', objectFit: 'contain', overflow:'hidden',height: '150px'}} src={urlBanner} alt="Third slide"/></Link>
                </div>
                <div className="carousel-item">
                  <Link to={`/detail/${items[2].id}`}><img className="d-block w-100" style={{ backgroundColor: '', borderRadius: '2rem', objectFit: 'contain', overflow:'hidden',height: '150px'}} src={items[2].picture} alt="First slide"/></Link>
                </div>
                <div className="carousel-item">
                  <Link to={`/detail/${items[1].id}`}><img className="d-block w-100" style={{ backgroundColor:'', borderRadius: '2rem',  objectFit: 'contain', overflow:'hidden', height: '150px'}} src={items[1].picture1} alt="Second slide"/></Link>
                </div>

              </div>
              <a className="carousel-control-prev text-decoration-none" href="#carouselExampleIndicators" role="button" data-slide="prev">
              <i className="fas fa-angle-double-left fa-3x text-dark"></i>
                <span className="sr-only">Previous</span>
              </a>
              <a className="carousel-control-next text-decoration-none" href="#carouselExampleIndicators" role="button" data-slide="next">
              <i className="fas fa-angle-double-right fa-3x text-dark"></i>
                <span className="sr-only">Next</span>
              </a>
            </div>
          </div>
          )
  }
}

export default Carusell;
