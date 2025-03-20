import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { useSelector } from "react-redux";

const Checkout = () => {
  const nav = useNavigate();
  const userSelector = useSelector((state) => state.auth);
  const cartSelector = useSelector((state) => state.cart);
  return (
    <>
      <Navbar />
      <br />
      <br />
      <div className="container pt-5 pb-2 px-3">
        <div className="row" data-masonry='{"percentPosition": true }'>
          <div className="col-sm-4 col-lg-8 col-md-8 mb-4">
            <div className="card">
              <div className="card-body">
                <div className="card-title">
                  {userSelector.nama}
                  <span className="ps-5">{userSelector.nomor_hp}</span>
                </div>
                <div className="card-text">{userSelector.alamat}</div>
              </div>
            </div>
            {cartSelector.map((item) => (
              <div className="card mt-3" key={item.product_id}>
                <div className="card-body">
                  <div className="row">
                    <div className="col-sm-4 col-lg-2 col-md-3 ">
                      <img
                        src={item.product_image}
                        alt="item-image"
                        className="border rounded"
                        style={{ width: 100, height: 100 }}
                      />
                    </div>
                    <div className="col-sm-4 col-lg-7 col-md-5 ">
                      {item.product_nama}
                    </div>
                    <div className="col-sm-4 col-lg-3 col-md-4">
                      {item.quantity} x Rp{" "}
                      {new Intl.NumberFormat("id-ID").format(
                        item.product_price
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="col-sm-4 col-lg-4 col-md-4">
            <div className="card">
              <div className="card-body">
                <div className="card-title">Metode Pembayaran</div>
                <div className="card-text">
                  <div className="form-check">
                    <input
                      type="radio"
                      className="form-check-input"
                      name="pembayaran"
                      id="bca"
                      value="bca"
                    />
                    <label htmlFor="bca" className="form-check-label">
                      BCA
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      type="radio"
                      className="form-check-input"
                      name="pembayaran"
                      id="bni"
                      value="bni"
                    />
                    <label htmlFor="bni" className="form-check-label">
                      BNI
                    </label>
                  </div>
                </div>
                <hr />
                <div className="card-title">Ringkasan Pesanan</div>
                <div className="card-text text-start d-flex">
                  Total Harga
                  <span className="ms-auto">
                    Rp{" "}
                    {cartSelector.reduce(
                      (total, item) =>
                        new Intl.NumberFormat("id-ID").format(
                          total + item.product_price * item.quantity
                        ),
                      0
                    )}
                  </span>
                </div>
                <hr />
                <div className="text-center">
                  <button
                    className="btn btn-danger"
                    onClick={() => nav("/payment")}
                  >
                    Bayar Sekarang
                  </button>
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

export default Checkout;
