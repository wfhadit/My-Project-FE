import { useNavigate } from "react-router-dom";
import { login } from "../api/auth";
import Logo from "../assets/Untitled-9.svg";
import { useState } from "react";
const Login = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await login(form);
      const token = response.data.token;
      if (token) {
        localStorage.setItem("token", token);

        setLoading(true);
        setTimeout(() => {
          navigate("/");
        }, 1000);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container col-xl-10 col-xxl-8 px-4 py-5">
      <div className="row align-items-center g-lg-5 py-5">
        <div className="col-lg-7 text-center text-lg-start">
          <img src={Logo} alt="" />
        </div>
        <div className="col-md-10 mx-auto col-lg-5">
          <form
            className="p-4 p-md-5 border rounded-3 bg-body-tertiary"
            onSubmit={handleSubmit}
          >
            <div className="form-floating mb-3">
              <input
                type="email"
                className="form-control"
                id="floatingInput"
                placeholder="name@example.com"
                name="email"
                value={form.email}
                onChange={handleChange}
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
                value={form.password}
                onChange={handleChange}
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
                "Login"
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

export default Login;
