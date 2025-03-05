import { useNavigate } from "react-router-dom";
const Row = () => {
  const navigate = useNavigate();

  return (
    <>
      <br />
      <div className="container">
        <div className="row column-gap-3">
          <div className="col ratio ratio-1x1">
            <div className="top-50 text-white text-center z-1">
              <p className="fw-bold">Headphone Premium</p>
              <button className="btn btn-danger">Beli Sekarang</button>
            </div>
            <img
              src="https://www.audeze.com/cdn/shop/files/MM-100Series_HomePageBanner_a755afa1-459a-4b9e-8cb8-9a5323d74ca4_2000x.jpg?v=1681340288"
              alt=""
            />
          </div>
          <div className="col ratio ratio-1x1">
            <div className="top-50 text-white text-center z-1">
              <p className="fw-bold">Audio Berkualitas</p>
              <button
                className="btn btn-danger"
                onClick={() => navigate("/product")}
              >
                Lihat Detail
              </button>
            </div>
            <img
              src="https://www.audeze.com/cdn/shop/files/HomeBanner_2000x.png?v=1727447236"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Row;
