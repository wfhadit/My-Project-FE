import { useNavigate } from "react-router-dom";
import Logo from "../assets/Untitled-9.svg";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { UserLogin } from "../redux/middlewares/auth-middleware";
import { constant } from "../constant";
import { useFormik } from "formik";

const Login = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
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
      email: "",
      password: "",
    },
    onSubmit: async (values) => {
      const result = await dispatch(UserLogin(values));
      setToastMessage(result.message);
      showToast();
      if (result.status === constant.success) {
        setTimeout(() => {
          navigate("/");
        }, 1000);
      }

      console.log(result);
    },
  });

  return (
    <>
      <div className="container col-xl-10 col-xxl-8 px-4 py-5">
        <div className="row align-items-center g-lg-5 py-5">
          <div className="col-lg-7 text-center text-lg-start">
            <img src={Logo} alt="" />
          </div>
          <div className="col-md-10 mx-auto col-lg-5">
            <form className="p-4 p-md-5 border rounded-3 bg-body-tertiary">
              <div className="form-floating mb-3">
                <input
                  type="email"
                  className="form-control"
                  id="floatingInput"
                  placeholder="name@example.com"
                  onChange={(e) =>
                    formik.setFieldValue("email", e.target.value)
                  }
                />
                <label htmlFor="floatingInput">Email</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="password"
                  className="form-control"
                  id="floatingPassword"
                  placeholder="Password"
                  onChange={(e) =>
                    formik.setFieldValue("password", e.target.value)
                  }
                />
                <label htmlFor="floatingPassword">Password</label>
              </div>
              <button
                id="liveToastBtn"
                className="w-100 btn btn-lg btn-dark"
                type="submit"
                disabled={loading}
                onClick={(e) => {
                  e.preventDefault();
                  setLoading(true);
                  formik.handleSubmit();
                  setTimeout(() => {
                    setLoading(false);
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
                  "Login"
                )}
              </button>
              <hr className="my-4" />
              <small className="text-body-secondary">
                No account yet?{" "}
                <a href="/register" className="text-primary">
                  Register
                </a>{" "}
                for free!
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
    </>
  );
};

export default Login;
