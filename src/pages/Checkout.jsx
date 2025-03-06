import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Checkout = () => {
  return (
    <>
      <Navbar />
      <br />
      <br />
      <div className="container p-5">
        <div className="row ">
          <div className="col-8">
            <div className="card">
              <div className="card-body">
                <div className="card-title">
                  John Doe
                  <span className="ps-5">085210002000</span>
                </div>
                <div className="card-text">
                  Jl. Lingkar, Pondok Cina, Kecamatan Beji, Kota Depok, Jawa
                  Barat 16424
                </div>
              </div>
            </div>
            <div className="card mt-3">
              <div className="card-body">
                <div className="row">
                  <div className="col-2 ">
                    <img
                      src="https://images.tokopedia.net/img/cache/700/VqbcmM/2024/10/2/e2912df8-0168-4eaf-80d3-fe5d7c2073ca.png.webp?ect=4g&quo"
                      alt="aerox-9"
                      className="border rounded"
                      style={{ width: 100, height: 100 }}
                    />
                  </div>
                  <div className="col-7 ">Aerox 9</div>
                  <div className="col-3 ">1 x Rp.1.500.000</div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-4">
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
                <div className="card-text">
                  Total Harga <span className="ps-5">Rp. 1.500.000</span>
                </div>
                <hr />
                <button className="btn btn-danger" style={{ width: "300px" }}>
                  Bayar Sekarang
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

export default Checkout;
