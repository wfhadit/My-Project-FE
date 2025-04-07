import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { MdOutlineDelete } from "react-icons/md";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
const Cart = () => {
  const [loading, setLoading] = useState(false);
  const cartSelector = useSelector((state) => state.cart);
  const nav = useNavigate();

  return (
    <>
      <Navbar />
      <br />
      <br />
      <div className="container p-5">
        <div className="row" data-masonry='{"percentPosition": true }'>
          <div className="col-sm-4 col-lg-8 col-md-8">
            {cartSelector.map((item) => (
              <div className="card mb-2" key={item.product_id}>
                <div className="card-body">
                  <div className="row">
                    <div className="col-sm-4 col-lg-2 col-md-3">
                      <img
                        src={item.product_image}
                        alt=""
                        className="border rounded"
                        style={{ width: 100, height: 100 }}
                      />
                    </div>
                    <div className="col-sm-4 col-lg-6 col-md-4">
                      {item.product_nama}
                    </div>
                    <div className="col-sm-4 col-lg-4 col-md-5 ">
                      <h5>
                        Rp{" "}
                        {new Intl.NumberFormat("id-ID").format(
                          item.product_price
                        )}
                      </h5>
                      <div
                        className="btn-group"
                        role="group"
                        aria-label="Basic example"
                      >
                        <button
                          type="button"
                          className="btn btn-danger"
                          onClick={() => item.quantity - 1}
                        >
                          -
                        </button>
                        <button className="btn btn-danger" disabled>
                          {item.quantity}
                        </button>
                        <button
                          type="button"
                          className="btn btn-danger"
                          onClick={() => item.quantity + 1}
                        >
                          +
                        </button>
                      </div>
                      <span className="ps-2">
                        <MdOutlineDelete style={{ color: "red" }} size={30} />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="col-sm-4 col-lg-4 col-md-4">
            <div className="card">
              <div className="card-body text-center">
                <h5 className="card-title">
                  Total Harga: Rp{" "}
                  {new Intl.NumberFormat("id-ID").format(
                    cartSelector.reduce(
                      (total, item) =>
                        total + item.product_price * item.quantity,
                      0
                    )
                  )}
                </h5>
                <hr />
                <button
                  className="btn btn-danger"
                  disabled={loading}
                  onClick={() => {
                    setLoading(true);
                    setTimeout(() => {
                      setLoading(false);
                      nav("/checkout");
                    }, 1000);
                  }}
                >
                  {loading ? (
                    <>
                      <span
                        className="spinner-border spinner-border-sm"
                        aria-hidden="true"
                      ></span>
                      <span role="status" className="ms-2">
                        Loading...
                      </span>
                    </>
                  ) : (
                    "Beli Sekarang"
                  )}
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

export default Cart;
