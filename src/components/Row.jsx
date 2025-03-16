import { useNavigate } from "react-router-dom";
const Row = () => {
  const nav = useNavigate();

  return (
    <>
      <br />
      <div className="container">
        <div
          className="row column-gap-3"
          data-masonry='{"percentPosition": true }'
        >
          <div className="col ratio ratio-1x1">
            <div className="top-50 text-white text-center z-1">
              <p className="fw-bold">Headphone Premium</p>
              <button
                className="btn btn-danger btn-sm"
                onClick={() => nav("/product/35")}
              >
                Beli Sekarang
              </button>
            </div>
            <img
              src="https://res.cloudinary.com/dvehysudh/image/upload/ecommerce/audeze_1_aqdnnq.jpg"
              alt=""
            />
          </div>
          <div className="col ratio ratio-1x1">
            <div className="top-50 text-white text-center z-1">
              <p className="fw-bold">Audio Berkualitas</p>
              <button
                className="btn btn-danger btn-sm"
                onClick={() => nav("/product/34")}
              >
                Lihat Detail
              </button>
            </div>
            <img
              src="https://res.cloudinary.com/dvehysudh/image/upload/ecommerce/HomeBanner_2000x_1_qdxdvj.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Row;
