import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { MdSkipPrevious } from "react-icons/md";
import { MdSkipNext } from "react-icons/md";
import { useNavigate, useSearchParams } from "react-router-dom";
import { api } from "../api/axios";
import { useEffect, useState } from "react";

const Search = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [products, setProducts] = useState([]);
  const nav = useNavigate();
  const [totalPage, setTotalPage] = useState(0);
  const [page, setPage] = useState(1);
  const brand = searchParams.get("brand");
  const category = searchParams.get("category");
  const price = searchParams.get("price");
  const q = searchParams.get("q");
  const fetchProducts = () => {
    api
      .get(`/search`, { params: { page, brand, category, price, q } })
      .then((res) => {
        setProducts(res.data.data);
        setTotalPage(res.data.total_pages);
        console.log(res.data.data);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    fetchProducts();
  }, [page, brand, category, price, q]);

  const handleFilterChange = (key, value) => {
    const params = new URLSearchParams(searchParams);
    if (params.get(key) === value) {
      params.delete(key);
    } else {
      params.set(key, value);
    }
    params.delete("q");
    setSearchParams(params);
  };
  return (
    <>
      <Navbar />
      <br />
      <br />
      <div className="container pt-5 px-5">
        <div className="row " data-masonry='{"percentPosition": true }'>
          <div className="col-sm-2 col-lg-3 col-md-3 mb-2 border bg-light rounded p-3">
            <h5>Kategori</h5>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="kursi"
                checked={searchParams.get("category") === "kursi"}
                onChange={() => handleFilterChange("category", "kursi")}
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
                checked={searchParams.get("category") === "mouse"}
                onChange={() => handleFilterChange("category", "mouse")}
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
                checked={searchParams.get("category") === "keyboard"}
                onChange={() => handleFilterChange("category", "keyboard")}
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
                checked={searchParams.get("category") === "headset"}
                onChange={() => handleFilterChange("category", "headset")}
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
                checked={searchParams.get("category") === "monitor"}
                onChange={() => handleFilterChange("category", "monitor")}
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
                checked={searchParams.get("category") === "controller"}
                onChange={() => handleFilterChange("category", "controller")}
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
                checked={searchParams.get("category") === "deskmat"}
                onChange={() => handleFilterChange("category", "deskmat")}
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
                checked={searchParams.get("brand") === "hyperx"}
                onChange={() => handleFilterChange("brand", "hyperx")}
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
                checked={searchParams.get("brand") === "logitechg"}
                onChange={() => handleFilterChange("brand", "logitechg")}
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
                checked={searchParams.get("brand") === "steelseries"}
                onChange={() => handleFilterChange("brand", "steelseries")}
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
                checked={searchParams.get("brand") === "corsair"}
                onChange={() => handleFilterChange("brand", "corsair")}
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
                id="asus"
                checked={searchParams.get("brand") === "asus"}
                onChange={() => handleFilterChange("brand", "asus")}
              />
              <label className="form-check-label" htmlFor="asus">
                Asus
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="secretlab"
                checked={searchParams.get("brand") === "secretlab"}
                onChange={() => handleFilterChange("brand", "secretlab")}
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
                checked={searchParams.get("brand") === "audeze"}
                onChange={() => handleFilterChange("brand", "audeze")}
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
                checked={searchParams.get("brand") === "coolermaster"}
                onChange={() => handleFilterChange("brand", "coolermaster")}
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
                checked={searchParams.get("price") === "asc"}
                onChange={() => handleFilterChange("price", "asc")}
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
                checked={searchParams.get("price") === "desc"}
                onChange={() => handleFilterChange("price", "desc")}
              />
              <label className="form-check-label" htmlFor="hargaterendah">
                Harga Terendah
              </label>
            </div>
          </div>
          <div className="col-sm-4 col-lg-9 col-md-9 mb-4">
            <div className="row row-cols-2 row-cols-md-5 g-2 py-2">
              {products.map((product) => (
                <div className="col" key={product.id}>
                  <div
                    className="card custom-card"
                    onClick={() => nav(`/product/${product.id}`)}
                    style={{ cursor: "pointer" }}
                  >
                    <img
                      src={product.image}
                      alt="mouse steelseries"
                      className="card-img-top"
                    />
                    <div className="card-body">
                      <h6 className="card-title">{product.nama}</h6>
                      <p className="card-text">{product.brand}</p>
                    </div>
                    <div className="card-footer">
                      <small>
                        Rp{" "}
                        {new Intl.NumberFormat("id-ID").format(product.price)}
                      </small>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="row justify-content-center">
              <div className="col-auto pt-3">
                <nav aria-label="Page navigation">
                  <ul className="pagination">
                    <li className="page-item">
                      <button
                        className="btn btn-dark"
                        onClick={() => setPage(page - 1)}
                        style={{ cursor: "pointer" }}
                        disabled={page === 1}
                      >
                        <MdSkipPrevious />
                      </button>
                    </li>
                    <li className="page-item">
                      <button
                        className="btn btn-dark"
                        onClick={() => setPage(page + 1)}
                        style={{ cursor: "pointer" }}
                        disabled={totalPage === 0 || page >= totalPage}
                      >
                        <MdSkipNext />
                      </button>
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
