import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { MdSkipPrevious } from "react-icons/md";
import { MdSkipNext } from "react-icons/md";

const Search = () => {
  return (
    <>
      <Navbar />
      <br />
      <br />
      <div className="container pt-5 px-5">
        <div className="row ">
          <div className="col-3 border bg-light rounded p-3">
            <h5>Kategori</h5>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="kursi"
              />
              <label className="form-check-label" htmlFor="kursi">
                Kursi
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="mouse"
              />
              <label className="form-check-label" htmlFor="mouse">
                Mouse
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="keyboard"
              />
              <label className="form-check-label" htmlFor="keyboard">
                Keyboard
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="headset"
              />
              <label className="form-check-label" htmlFor="headset">
                Headset
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="monitor"
              />
              <label className="form-check-label" htmlFor="monitor">
                Monitor
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="controller"
              />
              <label className="form-check-label" htmlFor="controller">
                Controller
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="deskmat"
              />
              <label className="form-check-label" htmlFor="deskmat">
                Deskmat
              </label>
            </div>
            <hr />
            <h5>Brand</h5>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="hyperx"
              />
              <label className="form-check-label" htmlFor="hyperx">
                HyperX
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="logitechg"
              />
              <label className="form-check-label" htmlFor="logitechg">
                LogitechG
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="steelseries"
              />
              <label className="form-check-label" htmlFor="steelseries">
                SteelSeries
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="corsair"
              />
              <label className="form-check-label" htmlFor="corsair">
                Corsair
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="mouse"
              />
              <label className="form-check-label" htmlFor="mouse">
                Asus
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="secretlab"
              />
              <label className="form-check-label" htmlFor="secretlab">
                Secretlab
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="audeze"
              />
              <label className="form-check-label" htmlFor="audeze">
                Audeze
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="coolermaster"
              />
              <label className="form-check-label" htmlFor="coolermaster">
                Cooler Master
              </label>
            </div>
            <hr />
            <h5>Urutkan</h5>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="hargatertinggi"
              />
              <label className="form-check-label" htmlFor="hargatertinggi">
                Harga Tertinggi
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="hargaterendah"
              />
              <label className="form-check-label" htmlFor="hargaterendah">
                Harga Terendah
              </label>
            </div>
          </div>
          <div className="col-9">
            <div className="row row-cols-5 row-cols-md-5 g-2 py-2">
              <div className="col">
                <div className="card custom-card">
                  <img
                    src="https://images.tokopedia.net/img/cache/200-square/VqbcmM/2024/10/2/e2912df8-0168-4eaf-80d3-fe5d7c2073ca.png"
                    alt="mouse steelseries"
                    className="card-img-top"
                  />
                  <div className="card-body">
                    <h6 className="card-title">Aerox 9</h6>
                    <p className="card-text">Steelseries</p>
                  </div>
                  <div className="card-footer">
                    <small>Rp 2.600.000</small>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card">
                  <img
                    src="https://images.tokopedia.net/img/cache/200-square/VqbcmM/2023/7/20/66ec3400-d2af-4f0a-ba40-c2e391d7cfb1.jpg.webp?ect=4g"
                    alt="mouse steelseries"
                    className="card-img-top"
                  />
                  <div className="card-body">
                    <h6 className="card-title">Aerox 9</h6>
                    <p className="card-text">Steelseries</p>
                  </div>
                  <div className="card-footer">
                    <small>Rp 2.600.000</small>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card">
                  <img
                    src="https://images.tokopedia.net/img/cache/200-square/VqbcmM/2024/10/2/e2912df8-0168-4eaf-80d3-fe5d7c2073ca.png"
                    alt="mouse steelseries"
                    className="card-img-top"
                  />
                  <div className="card-body">
                    <h6 className="card-title">Aerox 9</h6>
                    <p className="card-text">Steelseries</p>
                  </div>
                  <div className="card-footer">
                    <small>Rp 2.600.000</small>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card">
                  <img
                    src="https://images.tokopedia.net/img/cache/200-square/VqbcmM/2024/10/2/e2912df8-0168-4eaf-80d3-fe5d7c2073ca.png"
                    alt="mouse steelseries"
                    className="card-img-top"
                  />
                  <div className="card-body">
                    <h6 className="card-title">Aerox 9</h6>
                    <p className="card-text">Steelseries</p>
                  </div>
                  <div className="card-footer">
                    <small>Rp 2.600.000</small>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card">
                  <img
                    src="https://images.tokopedia.net/img/cache/200-square/VqbcmM/2024/10/2/e2912df8-0168-4eaf-80d3-fe5d7c2073ca.png"
                    alt="mouse steelseries"
                    className="card-img-top"
                  />
                  <div className="card-body">
                    <h6 className="card-title">Aerox 9</h6>
                    <p className="card-text">Steelseries</p>
                  </div>
                  <div className="card-footer">
                    <small>Rp 2.600.000</small>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card">
                  <img
                    src="https://images.tokopedia.net/img/cache/200-square/VqbcmM/2024/10/2/e2912df8-0168-4eaf-80d3-fe5d7c2073ca.png"
                    alt="mouse steelseries"
                    className="card-img-top"
                  />
                  <div className="card-body">
                    <h6 className="card-title">Aerox 9</h6>
                    <p className="card-text">Steelseries</p>
                  </div>
                  <div className="card-footer">
                    <small>Rp 2.600.000</small>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card">
                  <img
                    src="https://images.tokopedia.net/img/cache/200-square/VqbcmM/2024/10/2/e2912df8-0168-4eaf-80d3-fe5d7c2073ca.png"
                    alt="mouse steelseries"
                    className="card-img-top"
                  />
                  <div className="card-body">
                    <h6 className="card-title">Aerox 9</h6>
                    <p className="card-text">Steelseries</p>
                  </div>
                  <div className="card-footer">
                    <small>Rp 2.600.000</small>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card">
                  <img
                    src="https://images.tokopedia.net/img/cache/200-square/VqbcmM/2024/10/2/e2912df8-0168-4eaf-80d3-fe5d7c2073ca.png"
                    alt="mouse steelseries"
                    className="card-img-top"
                  />
                  <div className="card-body">
                    <h6 className="card-title">Aerox 9</h6>
                    <p className="card-text">Steelseries</p>
                  </div>
                  <div className="card-footer">
                    <small>Rp 2.600.000</small>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card">
                  <img
                    src="https://images.tokopedia.net/img/cache/200-square/VqbcmM/2024/10/2/e2912df8-0168-4eaf-80d3-fe5d7c2073ca.png"
                    alt="mouse steelseries"
                    className="card-img-top"
                  />
                  <div className="card-body">
                    <h6 className="card-title">Aerox 9</h6>
                    <p className="card-text">Steelseries</p>
                  </div>
                  <div className="card-footer">
                    <small>Rp 2.600.000</small>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card">
                  <img
                    src="https://images.tokopedia.net/img/cache/200-square/VqbcmM/2024/10/2/e2912df8-0168-4eaf-80d3-fe5d7c2073ca.png"
                    alt="mouse steelseries"
                    className="card-img-top"
                  />
                  <div className="card-body">
                    <h6 className="card-title">Aerox 9</h6>
                    <p className="card-text">Steelseries</p>
                  </div>
                  <div className="card-footer">
                    <small>Rp 2.600.000</small>
                  </div>
                </div>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-auto pt-3">
                <nav aria-label="Page navigation">
                  <ul className="pagination">
                    <li className="page-item">
                      <a href="#" className="page-link text-black">
                        <MdSkipPrevious />
                      </a>
                    </li>
                    <li className="page-item">
                      <a href="#" className="page-link text-black">
                        <MdSkipNext />
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Search;
