import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { useState } from "react";

const Product = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <Navbar />
      <br />
      <br />
      <div className="container pt-5 px-5">
        <div className="row">
          <div className="col p-2">
            <img
              src="https://images.tokopedia.net/img/cache/700/VqbcmM/2024/10/2/e2912df8-0168-4eaf-80d3-fe5d7c2073ca.png.webp?ect=4g&quo"
              alt=""
              className="img-thumbnail "
            />
          </div>
          <div className="col  p-3 ">
            <h5>Aerox 9</h5>
            <h6>SteelSeries</h6>
            <h6 className="text-danger">Rp. 1.500.000</h6>
            <p style={{ textAlign: "justify" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            </p>
          </div>
          <div className="col  p-5">
            <div className="card mb-3 p-2" style={{ width: "17rem" }}>
              <div className="card-body">
                <h5 className="card-title ">Pembelian</h5>
                <div
                  className="btn-group"
                  role="group"
                  aria-label="Basic example"
                >
                  <button
                    type="button"
                    className="btn btn-danger"
                    onClick={() => setCount(count - 1)}
                    disabled={count === 0}
                  >
                    -
                  </button>
                  <button type="button" className="btn btn-danger" disabled>
                    {count}
                  </button>
                  <button
                    type="button"
                    className="btn btn-danger"
                    onClick={() => setCount(count + 1)}
                  >
                    +
                  </button>
                </div>
                <span className="ps-3">Stok : 14</span>
                <p className="card-text pt-3">
                  Subtotal: <span className="ps-3">Rp. {count * 1500000}</span>
                </p>
                <button type="button" className="btn btn-danger">
                  Tambahkan ke Keranjang
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Product;
