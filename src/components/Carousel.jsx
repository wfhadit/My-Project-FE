import { useNavigate } from "react-router-dom";

const Carousel = () => {
  const nav = useNavigate();
  return (
    <div
      id="myCarousel"
      className="carousel slide mb-6"
      data-bs-ride="carousel"
      style={{ position: "relative", top: "56px" }}
    >
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide-to="0"
          className="active"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide-to="1"
          className="active"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide-to="2"
          className="active"
          aria-label="Slide 3"
        ></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <div className="ratio ratio-21x9">
            <img src="https://res.cloudinary.com/dvehysudh/image/upload/ecommerce/fwebp_i30aqb.webp" />
          </div>
          <div className="container">
            <div className="carousel-caption text-start">
              <p>
                <a
                  className="btn btn-lg btn-danger btn-sm"
                  onClick={() => nav("/product/21")}
                >
                  Klik Detail
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="carousel-item active">
          <div className="ratio ratio-21x9">
            <img src="https://res.cloudinary.com/dvehysudh/image/upload/ecommerce/coolermaster_evejzf.jpg" />
          </div>

          <div className="container">
            <div className="carousel-caption">
              <h1>MM730 GAMING MOUSE</h1>
              <p>
                <a
                  className="btn btn-lg btn-danger btn-sm"
                  onClick={() => nav("/product/38")}
                >
                  Cek Produk
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="carousel-item active">
          <div className="ratio ratio-21x9">
            <img src="https://res.cloudinary.com/dvehysudh/image/upload/ecommerce/Keyboard_Category_K70PRO_pysql6.jpg" />
          </div>

          <div className="container">
            <div className="carousel-caption text-end">
              <h2>K70 PRO TKL</h2>
              <p>Keyboard mechanical premium</p>
              <p>
                <a
                  onClick={() => nav("/product/47")}
                  className="btn btn-lg btn-danger btn-sm"
                >
                  Pelajari
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#myCarousel"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#myCarousel"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Carousel;
