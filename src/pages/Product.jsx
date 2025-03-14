import { useParams } from "react-router-dom";
import { api } from "../api/axios";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";

const Product = () => {
  const [count, setCount] = useState(0);
  const [product, setProduct] = useState({});
  const params = useParams();
  const fetchProduct = () => {
    api
      .get("/product/" + params.productID)
      .then((res) => {
        setProduct(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    fetchProduct();
  }, []);
  return (
    <>
      <Navbar />
      <br />
      <br />
      <div className="container pt-5 px-5">
        <div className="row">
          <div className="col p-2">
            <img src={product.image} alt="" className="img-thumbnail " />
          </div>
          <div className="col  p-3 ">
            <h5>{product.nama}</h5>
            <h6>{product.brand}</h6>
            <h6 className="text-danger">Rp. {product.price}</h6>
            <p style={{ textAlign: "justify" }}>{product.description}</p>
          </div>
          <div className="col  p-5">
            <div className="card mb-3 p-2" style={{ width: "17rem" }}>
              <div className="card-body">
                <h5 className="card-title ">Pembelian</h5>
                <div
                  className="btn-group"
                  role="group"
                  aria-label="Basic example"
                >
                  <button
                    type="button"
                    className="btn btn-danger"
                    onClick={() => setCount(count - 1)}
                    disabled={count === 0}
                  >
                    -
                  </button>
                  <button type="button" className="btn btn-danger" disabled>
                    {count}
                  </button>
                  <button
                    type="button"
                    className="btn btn-danger"
                    onClick={() =>
                      setCount((x) => (x < product.amount ? x + 1 : x))
                    }
                    disabled={count === product.amount}
                  >
                    +
                  </button>
                </div>
                <span className="ps-3">Stok : {product.amount}</span>
                <p className="card-text pt-3">
                  Subtotal:
                  <span className="ps-3">Rp. {count * product.price}</span>
                </p>
                <button type="button" className="btn btn-danger">
                  Tambahkan ke Keranjang
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

export default Product;
