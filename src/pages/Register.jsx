import { useNavigate } from "react-router-dom";
import Logo from "../assets/Untitled-9.svg";
import { useState } from "react";
import { api } from "../api/axios";
import { useFormik } from "formik";
import * as Yup from "yup";
import YupPassword from "yup-password";

const Register = () => {
  YupPassword(Yup);
  const [loading, setLoading] = useState(false);
  const nav = useNavigate();
  const [toastMessage, setToastMessage] = useState("");
  const showToast = () => {
    const toastEl = document.getElementById("liveToast");
    if (toastEl) {
      const toast = new window.bootstrap.Toast(toastEl);
      toast.show();
    }
  };
  const formik = useFormik({
    initialValues: {
      nama: "",
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      nama: Yup.string().min(3).max(20).required(),
      email: Yup.string().email().required(),
      password: Yup.string()
        .matches(/[0-9]/, "password must contain at least one number")
        .matches(/[a-z]/, "password must contain at least one lowercase letter")
        .matches(/[A-Z]/, "password must contain at least one uppercase letter")
        .min(6)
        .max(20)
        .required(),
    }),
    onSubmit: async (values) => {
      try {
        const res = await api.post("/register", values);
        setToastMessage(res.data.message);
        showToast();
        setTimeout(() => {
          nav("/login");
        }, 1000);
        return res.data.message;
      } catch (err) {
        setToastMessage("Invalid input data");
        showToast();
        return err.response.data;
      }
    },
  });

  return (
    <div className="container col-xl-10 col-xxl-8 px-4 py-2">
      <div className="row align-items-center g-lg-5 py-5">
        <div className="col-lg-7 text-center text-lg-start">
          <img src={Logo} alt="" />
        </div>
        <div className="col-md-10 mx-auto col-lg-5">
          <form className="p-4 p-md-5 border rounded-3 bg-body-tertiary">
            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control"
                id="floatingText"
                placeholder="nama"
                name="nama"
                onChange={(e) => formik.setFieldValue("nama", e.target.value)}
              />
              <label htmlFor="floatingText">Nama</label>
              <span className="text-danger">{formik.errors.nama}</span>
            </div>
            <div className="form-floating mb-3">
              <input
                type="email"
                className="form-control"
                id="floatingInput"
                placeholder="name@example.com"
                name="email"
                onChange={(e) => formik.setFieldValue("email", e.target.value)}
              />
              <label htmlFor="floatingInput">Email</label>
              <span className="text-danger">{formik.errors.email}</span>
            </div>
            <div className="form-floating mb-3">
              <input
                type="password"
                className="form-control"
                id="floatingPassword"
                placeholder="Password"
                name="password"
                onChange={(e) =>
                  formik.setFieldValue("password", e.target.value)
                }
              />
              <label htmlFor="floatingPassword">Password</label>
              <span className="text-danger">{formik.errors.password}</span>
            </div>
            <button
              className="w-100 btn btn-lg btn-dark"
              type="submit"
              disabled={loading}
              onClick={(e) => {
                e.preventDefault();
                setLoading(true);
                formik.handleSubmit();
                setTimeout(() => {
                  setLoading(false);
                  if (Object.keys(formik.errors).length > 0) {
                    setToastMessage("Invalid input data");
                    showToast();
                  }
                }, 1000);
              }}
            >
              {loading ? (
                <>
                  <span
                    className="spinner-border spinner-border-sm"
                    aria-hidden="true"
                  ></span>{" "}
                  <span role="status">Loading...</span>
                </>
              ) : (
                "Register"
              )}
            </button>
            <hr className="my-4" />
            <small className="text-body-secondary">
              Have an account?{" "}
              <a href="/login" className="text-primary">
                Sign in
              </a>{" "}
              here!
            </small>
          </form>
        </div>
      </div>
      <div className="toast-container position-fixed bottom-0 end-0 p-3">
        <div
          id="liveToast"
          className="toast"
          role="alert"
          aria-live="assertive"
          aria-atomic="true"
        >
          <div className="toast-header">
            <strong className="me-auto">Message</strong>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="toast"
              aria-label="Close"
            ></button>
          </div>
          <div className="toast-body">{toastMessage}</div>
        </div>
      </div>
    </div>
  );
};

export default Register;
