import { useSelector } from "react-redux";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";
import { useAuth } from "../hoc/auth-provider";
import { useLocation } from "react-router-dom";

export const History = () => {
  const location = useLocation();
  const { fetchData } = useAuth();
  const orderSelector = useSelector((state) => state.order);
  const [show, setShow] = useState(null);

  useEffect(() => {
    fetchData();
  }, [location.pathname]);

  return (
    <>
      <Navbar />
      <br />
      <br />
      <br />
      <br />
      <div className="container">
        <div className="row " data-masonry='{"percentPosition": true }'>
          <div className="col-sm-4 col-lg-2 col-md-2 "></div>
          <div className="col-sm-4 col-lg-8 col-md-8 ">
            {orderSelector.map((item) => (
              <div
                className="card mb-2"
                key={item.id}
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
                style={{ cursor: "pointer" }}
                onClick={() => setShow(item)}
              >
                <div className="card-body">
                  <div className="row ">
                    <div className="col-sm-4 col-lg-6 col-md-6">
                      {item.order_unique_id.toUpperCase()}
                    </div>
                    <div
                      className={`col-sm-4 col-lg-6 col-md-6 text-end ${
                        item.status === "settlement"
                          ? "text-success"
                          : "text-warning"
                      }`}
                    >
                      {item.status.toUpperCase()}
                    </div>
                  </div>
                  <div className="row ">
                    <div className="col-sm-4 col-lg-6 col-md-6">
                      {item.created_at}
                    </div>
                    <div className="col-sm-4 col-lg-6 col-md-6 text-end">
                      Rp{" "}
                      {new Intl.NumberFormat("id-ID").format(item.total_price)}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="col-sm-4 col-lg-2 col-md-2 "></div>
        </div>
        <div className="row" data-masonry='{"percentPosition": true }'>
          <div className="col-sm-4 col-lg-2 col-md-2"></div>
          <div className="col-sm-4 col-lg-8 col-md-8">
            <div className="card">
              <div className="card-body text-start">
                <div className="card-title ">Cara Pembayaran</div>
                <hr />
                <div className="card-text">
                  1. Pergi ke link
                  <span className="ms-1">
                    <a
                      href="https://simulator.sandbox.midtrans.com/"
                      className="text-danger"
                      target="_blank"
                    >
                      payment
                    </a>
                  </span>
                </div>
                <div className="card-text">2. Pilih Virtual Account</div>
                <div className="card-text">
                  3. Pilih Bank yang dituju VA Cth. BNI VA / BCA VA
                </div>
                <div className="card-text">
                  4. Masukkan nomor virtual account
                </div>
                <div className="card-text">5. Klik Inquire</div>
                <div className="card-text">6. Klik Pay</div>
              </div>
            </div>
          </div>
          <div className="col-sm-4 col-lg-2 col-md-2"></div>
        </div>
      </div>
      <Footer />
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby=" exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg">
          {show && (
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">
                  {show.order_unique_id.toUpperCase()}
                </h1>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <div className="container">
                  <div className="row">
                    <div className="col-sm-4 col-lg-6 col-md-6">
                      <h5>{show.payment_method.toUpperCase()}</h5>
                    </div>
                    <div
                      className={`col-sm-4 col-lg-6 col-md-6 text-end ${
                        show.status === "settlement"
                          ? "text-success"
                          : "text-warning"
                      }`}
                    >
                      <h5>{show.status.toUpperCase()}</h5>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-4 col-lg-6 col-md-6">
                      <h5>{show.va_number}</h5>
                    </div>
                    <div className="col-sm-4 col-lg-6 col-md-6 text-end">
                      <h5>
                        Rp{" "}
                        {new Intl.NumberFormat("id-ID").format(
                          show.total_price
                        )}
                      </h5>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-4 col-lg-6 col-md-6">
                      <h5>{show.created_at}</h5>
                    </div>
                  </div>
                </div>
              </div>
              {show.items.map((product) => (
                <div className="modal-footer" key={product.id}>
                  <div className="container">
                    <div className="row">
                      <div className="col-sm-4 col-lg-6 col-md-6">
                        <img
                          src={product.product_image}
                          alt=""
                          className="border rounded"
                          style={{ width: 100, height: 100 }}
                        />
                      </div>
                      <div className="col-sm-4 col-lg-6 col-md-6 text-end">
                        <h5>{product.product_name}</h5>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-sm-4 col-lg-6 col-md-6">
                        <h5>{product.quantity}x</h5>
                      </div>
                      <div className="col-sm-4 col-lg-6 col-md-6 text-end">
                        <h5>
                          Rp{" "}
                          {new Intl.NumberFormat("id-ID").format(
                            product.product_price
                          )}
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};
