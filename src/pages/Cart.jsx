import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { useState } from "react";
import { MdOutlineDelete } from "react-icons/md";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
const Cart = () => {
  const [count, setCount] = useState(0);
  const cartSelector = useSelector((state) => state.cart);
  const nav = useNavigate();
  console.log(cartSelector.product_price);
  console.log(setCount);
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
                    <div className="col-2">
                      <img
                        src={item.product_image}
                        alt=""
                        className="border rounded"
                        style={{ width: 100, height: 100 }}
                      />
                    </div>
                    <div className="col-6 ">{item.product_nama}</div>
                    <div className="col-4 ">
                      <h5>Rp. {item.product_price}</h5>
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
                      <span className="ps-5">
                        <MdOutlineDelete style={{ color: "red" }} size={45} />
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
                  Total Harga: Rp.
                  <span> {count * cartSelector.product_price}</span>
                </h5>
                <hr />
                <button
                  className="btn btn-danger"
                  onClick={() => nav("/checkout")}
                >
                  Beli Sekarang
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
