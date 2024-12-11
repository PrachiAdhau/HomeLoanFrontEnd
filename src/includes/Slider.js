
 import '../../node_modules/bootstrap/dist/js/bootstrap.js'
import '../../node_modules/bootstrap/dist/css/bootstrap.css'

function Slider() {
  return (

    <div id="carouselExampleRide" className="carousel slide" data-bs-ride="true">
    <div className="carousel-inner">
      <div className="carousel-item active">
        <img src="https://homeloans.sbi/images/DIWALI_BANNER_1.jpg" className="d-block w-100" alt="..."/>
      </div>
      <div className="carousel-item">
        <img src="https://homeloans.sbi/images/1.jpg" className="d-block w-100" alt="..."/>
      </div>
      <div className="carousel-item">
        <img src="https://homeloans.sbi/images/1_new.png" className="d-block w-100" alt="..."/>

    <div>
      <div id="carouselExample" className="carousel slide">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="/assets/first.jpg" className="d-block w-100"  alt="first image" />
          </div>
          <div className="carousel-item">
            <img src="/assets/second.jpg" className="d-block w-100" alt="second image" />
          </div>
          <div className="carousel-item">
            <img src="/assets/fourth.jpg" className="d-block w-100" alt="fourth image" />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>

      </div>
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div>
  );
}

export default Slider;


