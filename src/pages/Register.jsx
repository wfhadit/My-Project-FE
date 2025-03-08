import { useNavigate } from "react-router-dom";
import Logo from "../assets/Untitled-9.svg";
import { useState } from "react";
import { api } from "../api/axios";
import { useFormik } from "formik";
import { constant } from "../constant";

const Register = () => {
  const [loading, setLoading] = useState(false);
  const nav = useNavigate();
  const formik = useFormik({
    initialValues: {
      nama: "",
      email: "",
      password: "",
    },
    onSubmit: async (values) => {
      const res = await api
        .post("/register", values)
        .then(() => constant.success)
        .catch((err) => err.message);

      console.log(res);
      if (res === constant.success) {
        setLoading(true);
        setTimeout(() => {
          nav("/login");
        }, 1000);
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
          <form
            className="p-4 p-md-5 border rounded-3 bg-body-tertiary"
            onSubmit={formik.handleSubmit}
          >
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
            </div>
            <button
              className="w-100 btn btn-lg btn-dark"
              type="submit"
              disabled={loading}
            >
              {loading ? (
                <>
                  <span
                    className="spinner-border spinner-border-sm"
                    aria-hidden="true"
                  ></span>
                  <span role="status">Loading...</span>
                </>
              ) : (
                "Register"
              )}
            </button>
            <hr className="my-4" />
            <small className="text-body-secondary">
              By clicking Register, you agree to the terms of use.
            </small>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
