import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import { api } from "../api/axios";
import { constant } from "../constant";
import { useEffect, useState } from "react";

const Checkout = () => {
  const [loading, setLoading] = useState(false);
  const nav = useNavigate();
  const userSelector = useSelector((state) => state.auth);
  const cartSelector = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      total_price: 0,
      payment_method: "bca",
      items: [
        {
          product_id: 0,
          product_name: "",
          product_image: "",
          product_price: 0,
          quantity: 0,
        },
      ],
    },
    onSubmit: async (values) => {
      try {
        console.log(values);
        await api.post("/order", values);
        dispatch({
          type: constant.CART_REMOVE,
        });
      } catch (err) {
        console.log(err);
      }
    },
  });
  useEffect(() => {
    console.log(formik.values.payment_method);
    if (!formik.values.payment_method) {
      formik.setFieldValue("payment_method", "bca");
    }
    formik.setValues((prevValues) => ({
      ...prevValues,
      total_price: cartSelector.reduce(
        (total, item) => total + item.product_price * item.quantity,
        0
      ),
      items: cartSelector.map((item) => {
        return {
          product_id: item.product_id,
          product_name: item.product_nama,
          product_image: item.product_image,
          product_price: item.product_price,
          quantity: item.quantity,
        };
      }),
    }));
  }, [cartSelector]);
  useEffect(() => {
    const allowCheckout = sessionStorage.getItem("allowCheckout");
    if (!allowCheckout) {
      nav("/cart");
    } else {
      sessionStorage.removeItem("allowCheckout");
    }
  }, []);
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
                      checked={formik.values.payment_method === "bca"}
                      onChange={(e) => {
                        formik.setFieldValue("payment_method", e.target.value);
                      }}
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
                      checked={formik.values.payment_method === "bni"}
                      onChange={(e) => {
                        formik.setFieldValue("payment_method", e.target.value);
                      }}
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
                    {new Intl.NumberFormat("id-ID").format(
                      cartSelector.reduce(
                        (total, item) =>
                          total + item.product_price * item.quantity,
                        0
                      )
                    )}
                  </span>
                </div>
                <hr />
                <div className="text-center">
                  <button
                    className="btn btn-danger"
                    type="submit"
                    disabled={loading}
                    onClick={() => {
                      setLoading(true);
                      sessionStorage.setItem("allowPayment", "true");
                      formik.handleSubmit();
                      setTimeout(() => {
                        setLoading(false);
                        nav("/payment");
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
                          Loading ...
                        </span>
                      </>
                    ) : (
                      "Bayar Sekarang"
                    )}
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
