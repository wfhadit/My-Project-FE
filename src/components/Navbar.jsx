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
  const cartSelector = useSelector((state) => state.cart);
  const handlebrand = (brand) => {
    nav(`/search?brand=${brand}`);
  };
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
                    onClick={() => handlebrand("hyperx")}
                    style={{ cursor: "pointer" }}
                  >
                    HyperX
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item text-danger"
                    onClick={() => handlebrand("logitechg")}
                    style={{ cursor: "pointer" }}
                  >
                    LogitechG
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item text-danger"
                    onClick={() => handlebrand("steelseries")}
                    style={{ cursor: "pointer" }}
                  >
                    SteelSeries
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item text-danger"
                    onClick={() => handlebrand("corsair")}
                    style={{ cursor: "pointer" }}
                  >
                    Corsair
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item text-danger"
                    onClick={() => handlebrand("asus")}
                    style={{ cursor: "pointer" }}
                  >
                    Asus
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item text-danger"
                    onClick={() => handlebrand("secretlab")}
                    style={{ cursor: "pointer" }}
                  >
                    Secretlab
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item text-danger"
                    onClick={() => handlebrand("audeze")}
                    style={{ cursor: "pointer" }}
                  >
                    Audeze
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item text-danger"
                    onClick={() => handlebrand("coolermaster")}
                    style={{ cursor: "pointer" }}
                  >
                    Cooler Master
                  </a>
                </li>
              </ul>
            </li>
          </ul>
          <form className="container-fluid pb-1" role="search">
            <div className="input-group ">
              <span className="input-group-text">
                <CiSearch size={20} />
              </span>
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                name="q"
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    nav(`/search?${e.target.value}`);
                  }
                }}
              />
            </div>
          </form>
          <ul className="navbar-nav mb-2 mb-md-0 mt-2">
            <li className="nav-item dropstart mx-auto">
              <IoCartOutline
                size={30}
                color="white"
                onClick={() => nav("/cart")}
                className=" me-3"
                style={{ cursor: "pointer" }}
              />
              <span
                className={`ms-2 position-absolute top-0 start-50 translate-middle badge rounded-pill bg-danger ${
                  cartSelector.length === 0 ? "visually-hidden" : ""
                }`}
              >
                {cartSelector.length}
              </span>
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
