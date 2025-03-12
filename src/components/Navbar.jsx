import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { UserLogout } from "../redux/middlewares/auth-middleware";
import { IoCartOutline } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { TbLogout } from "react-icons/tb";

const Navbar = () => {
  const nav = useNavigate();
  const dispatch = useDispatch();
  const userSelector = useSelector((state) => state.auth);
  console.log(userSelector);
  return (
    <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-black ">
      <div className="container-fluid">
        <a
          className="navbar-brand"
          onClick={() => nav("/")}
          style={{ cursor: "pointer" }}
        >
          Toko Lama
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
          aria-controls="navbarCollapse"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="navbar-collapse collapse" id="navbarCollapse">
          <ul className="navbar-nav mb-2 mb-md-0">
            <li className="nav-item dropdown">
              <a
                className="nav-link active dropdown-toggle"
                aria-current="page"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Brands
              </a>
              <ul className="dropdown-menu bg-black">
                <li>
                  <a
                    className="dropdown-item text-danger"
                    onClick={() => nav("/search")}
                    style={{ cursor: "pointer" }}
                  >
                    HyperX
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item text-danger"
                    onClick={() => nav("/search")}
                    style={{ cursor: "pointer" }}
                  >
                    LogitechG
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item text-danger"
                    onClick={() => nav("/search")}
                    style={{ cursor: "pointer" }}
                  >
                    SteelSeries
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item text-danger"
                    onClick={() => nav("/search")}
                    style={{ cursor: "pointer" }}
                  >
                    Corsair
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item text-danger"
                    onClick={() => nav("/search")}
                    style={{ cursor: "pointer" }}
                  >
                    Asus
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item text-danger"
                    onClick={() => nav("/search")}
                    style={{ cursor: "pointer" }}
                  >
                    Secretlab
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item text-danger"
                    onClick={() => nav("/search")}
                    style={{ cursor: "pointer" }}
                  >
                    Audeze
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item text-danger"
                    onClick={() => nav("/search")}
                    style={{ cursor: "pointer" }}
                  >
                    Cooler Master
                  </a>
                </li>
              </ul>
            </li>
          </ul>
          <form className="container-fluid" role="search">
            <div className="input-group ">
              <span className="input-group-text">
                <CiSearch size={20} />
              </span>
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
            </div>
          </form>
          <ul className="navbar-nav mb-2 mb-md-0 ">
            <li className="nav-item dropstart mx-auto">
              <IoCartOutline
                size={40}
                color="white"
                onClick={() => nav("/cart")}
                className=" me-3"
              />
            </li>
          </ul>
          {userSelector.id ? (
            <>
              <ul className="navbar-nav mb-2 mb-md-0 ">
                <li className="nav-item dropstart mx-auto">
                  <a
                    className="nav-link active dropdown "
                    aria-current="page"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <img
                      src={userSelector.foto}
                      alt="profile-picture"
                      className="rounded-circle me-1"
                      width="40"
                      height="40"
                    />
                  </a>
                  <ul className="dropdown-menu bg-black">
                    <li>
                      <a
                        className="dropdown-item text-danger"
                        onClick={() => nav("/profile")}
                      >
                        Profile
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item text-danger"
                        onClick={async () => {
                          await dispatch(UserLogout());
                          nav("/login");
                        }}
                      >
                        <TbLogout size={25} color="red" /> Logout
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </>
          ) : (
            <>
              <button
                className="btn btn-outline-danger me-2"
                onClick={() => nav("/login")}
              >
                Login
              </button>
              <button
                className="btn btn-danger"
                onClick={() => nav("/register")}
              >
                Register
              </button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
