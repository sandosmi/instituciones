import school from '../assets/images/school.jpg'
import school1 from '../assets/images/school1.jpg'
import school2 from '../assets/images/school2.jpg'

function Banner() {
    return (
        <div className="container">
           <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={school} className="d-block w-100" width='100' height='360'/>
    </div>
    <div className="carousel-item">
      <img src={school1} className="d-block w-100" width='100' height='360'/>
    </div>
    <div className="carousel-item">
      <img src={school2} className="d-block w-100" width='100' height='360'/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>

        </div>
    );
}
export default Banner;