import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { useState } from "react";
import { MdOutlineDelete } from "react-icons/md";

const Cart = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <br />
      <br />
      <div className="container p-5">
        <div className="row">
          <div className="col-8 p-2">
            <div className="card">
              <div className="card-body">
                <div className="row">
                  <div className="col-2">
                    <img
                      src="https://images.tokopedia.net/img/cache/700/VqbcmM/2024/10/2/e2912df8-0168-4eaf-80d3-fe5d7c2073ca.png.webp?ect=4g&quo"
                      alt=""
                      className="border rounded"
                      style={{ width: 100, height: 100 }}
                    />
                  </div>
                  <div className="col-6 ">Aerox 9</div>
                  <div className="col-4 ">
                    <h5>Rp. 1.500.000</h5>
                    <div
                      className="btn-group"
                      role="group"
                      aria-label="Basic example"
                    >
                      <button
                        type="button"
                        className="btn btn-danger"
                        onClick={() => setCount(count - 1)}
                      >
                        -
                      </button>
                      <button className="btn btn-danger" disabled>
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
                    <span className="ps-5">
                      <MdOutlineDelete style={{ color: "red" }} size={45} />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-4  p-2">
            <div className="card">
              <div className="card-body text-center">
                <h5 className="card-title">
                  Total Harga: Rp.<span> {count * 1500000}</span>
                </h5>
                <hr />
                <button className="btn btn-danger">Beli Sekarang</button>
              </div>
            </div>
          </div>
          <div className="col-8 p-2">
            <div className="card">
              <div className="card-body">
                <div className="row">
                  <div className="col-2">
                    <img
                      src="https://images.tokopedia.net/img/cache/700/VqbcmM/2024/10/2/e2912df8-0168-4eaf-80d3-fe5d7c2073ca.png.webp?ect=4g&quo"
                      alt=""
                      className="border rounded"
                      style={{ width: 100, height: 100 }}
                    />
                  </div>
                  <div className="col-6 ">Aerox 9</div>
                  <div className="col-4 ">
                    <h5>Rp. 1.500.000</h5>
                    <div
                      className="btn-group"
                      role="group"
                      aria-label="Basic example"
                    >
                      <button
                        type="button"
                        className="btn btn-danger"
                        onClick={() => setCount(count - 1)}
                      >
                        -
                      </button>
                      <button className="btn btn-danger" disabled>
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
                    <span className="ps-5">
                      <MdOutlineDelete style={{ color: "red" }} size={45} />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Cart;
