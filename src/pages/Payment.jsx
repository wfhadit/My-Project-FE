import { useState, useEffect } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { api } from "../api/axios";
import { CountdownTimer } from "../countdown/countdown";
import { useNavigate } from "react-router-dom";

const Payment = () => {
  const nav = useNavigate();
  const [order, setOrder] = useState({});
  const fetchOrder = async () => {
    try {
      const res = await api.get("/order");
      setOrder(res.data.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchOrder();
  }, []);

  return (
    <>
      <Navbar />
      <br />
      <br />
      <br />
      <br />
      <div className="container text-center">
        <h5>Selesaikan pembayaran dalam</h5>
        <h5 className="text-danger">
          <CountdownTimer createdAt={order.created_at} />
        </h5>
        <h6>Batas Akhir Pembayaran</h6>
        <h5>
          {new Date(
            new Date(order.created_at).setDate(
              new Date(order.created_at).getDate() + 1
            )
          )
            .toLocaleString("sv-SE")
            .replace("T", " ")}
        </h5>
        <br />
        <div className="row" data-masonry='{"percentPosition": true }'>
          <div className="col-lg-3 col-sm-4 col-md-3"></div>
          <div className="col-lg-6 col-sm-4 col-md-6">
            <div className="card ">
              <div className="card-body">
                <div className="card-title text-start">
                  {order.payment_method?.toUpperCase()} Virtual Account
                </div>
                <hr />
                <div className="card-text text-start d-flex">
                  Nomor Virtual Account
                  <span className="ms-auto">{order.va_number}</span>
                </div>
                <hr />
                <div className="card-text text-start d-flex">
                  Total Tagihan
                  <span className="ms-auto">
                    Rp{" "}
                    {new Intl.NumberFormat("id-ID").format(order.total_price)}
                  </span>
                </div>
                <hr />
                <button
                  className="btn btn-outline-danger me-2 mb-2"
                  style={{ height: 40, width: 250 }}
                  onClick={() => nav("/history")}
                >
                  Cek Status Pembayaran
                </button>
                <button
                  className="btn btn-danger mb-2"
                  style={{ width: 250, height: 40 }}
                  onClick={() => nav("/search")}
                >
                  Belanja Lagi
                </button>
              </div>
            </div>
          </div>
        </div>
        <br />
        <div className="row" data-masonry='{"percentPosition": true }'>
          <div className="col-lg-3 col-sm-4 col-md-3"></div>
          <div className="col-lg-6 col-sm-4 col-md-6">
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
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Payment;
