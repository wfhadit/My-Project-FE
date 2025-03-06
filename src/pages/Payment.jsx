import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Payment = () => {
  return (
    <>
      <Navbar />
      <br />
      <br />
      <br />
      <div className="container text-center">
        <h5>Selesaikan pembayaran dalam</h5>
        <h5 className="text-danger">23:59:59</h5>
        <h6>Batas Akhir Pembayaran</h6>
        <h5>Jumat, 7 Maret 2025 15:39</h5>
        <br />
        <div className="row">
          <div className="col-3"></div>
          <div className="col-6">
            <div className="card ">
              <div className="card-body">
                <div className="card-title text-start">BCA Virtual Account</div>
                <hr />
                <div className="card-text text-start d-flex">
                  Nomor Virtual Account
                  <span className="ms-auto">9881671134877613</span>
                </div>
                <hr />
                <div className="card-text text-start d-flex">
                  Total Tagihan
                  <span className="ms-auto">Rp. 1.500.000</span>
                </div>
                <hr />
                <button
                  className="btn btn-outline-danger me-2"
                  style={{ height: 40, width: 250 }}
                >
                  Cek Status Pembayaran
                </button>
                <button
                  className="btn btn-danger"
                  style={{ width: 250, height: 40 }}
                >
                  Belanja Lagi
                </button>
              </div>
            </div>
          </div>
        </div>
        <br />
        <div className="row">
          <div className="col-3"></div>
          <div className="col-6">
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
