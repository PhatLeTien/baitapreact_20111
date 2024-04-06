function BT01() {
  return (
    <div id="carouselExample" className="carousel slide">
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselExample" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExample" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExample" data-bs-slide-to="2" aria-label="Slide 3"></button>
        <button type="button" data-bs-target="#carouselExample" data-bs-slide-to="3" aria-label="Slide 4"></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={require("./images/hinh1.png")} className="d-block w-100" alt="banner 1" />
        </div>
        <div className="carousel-item">
          <img src={require("./images/hinh2.png")} className="d-block w-100" alt="banner 2" />
        </div>
        <div className="carousel-item">
          <img src={require("./images/hinh3.png")} className="d-block w-100" alt="banner 3" />
        </div>
        <div className="carousel-item">
          <img src={require("./images/hinh4.png")} className="d-block w-100" alt="banner 4" />
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default BT01;
