import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { MdOutlineDelete } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { constant } from "../constant";
import { api } from "../api/axios";
const Cart = () => {
  const [counts, setCounts] = useState({});
  const [loading, setLoading] = useState(false);
  const cartSelector = useSelector((state) => state.cart);
  const nav = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    const initial = {};
    cartSelector.forEach((item) => {
      initial[item.product_id] = item.quantity;
    });
    setCounts(initial);
  }, [cartSelector]);

  return (
    <>
      <Navbar />
      <br />
      <br />
      <div className="container p-5">
        <div className="row" data-masonry='{"percentPosition": true }'>
          <div className="col-sm-4 col-lg-8 col-md-8">
            {cartSelector.map((item) => {
              const cnt = counts[item.product_id] || 1;
              return (
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
                            disabled={cnt === 1}
                            onClick={async () => {
                              const newCnt = cnt - 1;
                              setCounts({
                                ...counts,
                                [item.product_id]: newCnt,
                              });
                              dispatch({
                                type: constant.CART_UPDATE,
                                payload: {
                                  product_id: item.product_id,
                                  quantity: newCnt,
                                },
                              });
                              try {
                                await api.post("/cart", {
                                  product_id: item.product_id,
                                  product_nama: item.product_nama,
                                  product_image: item.product_image,
                                  product_price: item.product_price,
                                  quantity: newCnt,
                                  stock: item.stock,
                                });
                              } catch (err) {
                                console.log(err);
                              }
                            }}
                          >
                            -
                          </button>
                          <button className="btn btn-danger" disabled>
                            {cnt}
                          </button>
                          <button
                            type="button"
                            className="btn btn-danger"
                            disabled={cnt === item.stock}
                            onClick={async () => {
                              const newCnt = cnt + 1;
                              setCounts({
                                ...counts,
                                [item.product_id]: newCnt,
                              });
                              dispatch({
                                type: constant.CART_UPDATE,
                                payload: {
                                  product_id: item.product_id,
                                  quantity: newCnt,
                                },
                              });
                              try {
                                await api.post("/cart", {
                                  product_id: item.product_id,
                                  product_nama: item.product_nama,
                                  product_image: item.product_image,
                                  product_price: item.product_price,
                                  quantity: newCnt,
                                  stock: item.stock,
                                });
                              } catch (err) {
                                console.log(err);
                              }
                            }}
                          >
                            +
                          </button>
                        </div>
                        <span className="ps-2">
                          <MdOutlineDelete
                            style={{ color: "red", cursor: "pointer" }}
                            size={30}
                            onClick={async () => {
                              dispatch({
                                type: constant.CART_REMOVE,
                                payload: item.product_id,
                              });

                              try {
                                await api.delete("/cart/" + item.product_id);
                              } catch (err) {
                                console.log(err);
                              }
                            }}
                          />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
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
                  disabled={loading || cartSelector.length === 0}
                  onClick={() => {
                    setLoading(true);
                    sessionStorage.setItem("allowCheckout", true);
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
