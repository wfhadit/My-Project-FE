import { useParams } from "react-router-dom";
import { api } from "../api/axios";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { constant } from "../constant";

const Product = () => {
  const [count, setCount] = useState(0);
  const [product, setProduct] = useState({});
  const params = useParams();
  const dispatch = useDispatch();
  const cartSelector = useSelector((state) => state.cart);
  console.log(cartSelector);
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
  const formik = useFormik({
    initialValues: {
      product_id: 0,
      product_nama: "",
      product_image: "",
      product_price: 0,
      quantity: 0,
    },
    onSubmit: async (values) => {
      try {
        console.log(values);
        await api.post("/cart", values);
        const res = await api.get("/cart");
        console.log(res.data.data);
        dispatch({
          type: constant.CART_ADD,
          payload: res.data.data,
        });
      } catch (err) {
        console.log(err);
      }
    },
  });
  useEffect(() => {
    fetchProduct();
  }, []);
  useEffect(() => {
    formik.setValues({
      product_id: product.id,
      product_nama: product.nama,
      product_image: product.image,
      product_price: product.price,
      quantity: count,
    });
  }, [product, count]);

  return (
    <>
      <Navbar />
      <br />
      <br />
      <div className="container mt-5">
        <div className="row" data-masonry='{"percentPosition": true }'>
          <div className="col-sm-4 col-lg-3 col-md-3 mb-4">
            <img src={product.image} alt="" className="img-thumbnail ms-4" />
          </div>
          <div className="col-sm-3 col-lg-4 col-md-4 mb-4 px-3">
            <h5>{product.nama}</h5>
            <h6>{product.brand}</h6>
            <h6 className="text-danger">Rp. {product.price}</h6>
            <p style={{ textAlign: "justify" }}>{product.description}</p>
          </div>
          <div className="col-sm-5 col-lg-4 col-md-5 mb-4 pe-5">
            <div className="card mb-3 p-2">
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
                    onClick={() => setCount(() => setCount(count + 1))}
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
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={formik.handleSubmit}
                >
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
