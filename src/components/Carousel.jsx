const Carousel = () => {
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
            <img src="https://dlcdnwebimgs.asus.com/gain/CC1A1C6D-5B76-4664-80FE-4F32B38A8105/fwebp" />
          </div>
        </div>
        <div className="carousel-item active">
          <div className="ratio ratio-21x9">
            <img src="https://a.storyblok.com/f/281110/1920x1070/c8c75bb1ba/2-mm730-image.jpg" />
          </div>

          <div className="container">
            <div className="carousel-caption">
              <h1>Another example headline.</h1>
              <p>
                Some representative placeholder content for the second slide of
                the carousel.
              </p>
              <p>
                <a href="#" className="btn btn-lg btn-danger">
                  Learn more
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="carousel-item active">
          <div className="ratio ratio-21x9">
            <img src="https://assets.corsair.com/image/upload/f_auto,q_auto/pages/keyboard-lp/Keyboard_Category_K70PRO.png" />
          </div>

          <div className="container">
            <div className="carousel-caption text-end">
              <h1>One more for good measure</h1>
              <p>
                Some representative placeholder content for the third slide of
                this carousel
              </p>
              <p>
                <a href="#" className="btn btn-lg btn-danger">
                  Browse gallery
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
