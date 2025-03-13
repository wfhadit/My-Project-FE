import { useDispatch, useSelector } from "react-redux";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { BiEdit } from "react-icons/bi";
import { useFormik } from "formik";
import { UserUpdate } from "../redux/middlewares/auth-middleware";

const Profile = () => {
  const userSelector = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      nama: userSelector.nama,
      email: userSelector.email,
      jenis_kelamin: userSelector.jenis_kelamin,
      tanggal_lahir: useSelector.tanggal_lahir,
      alamat: userSelector.alamat,
      nomor_hp: userSelector.nomor_hp,
      file: null,
    },
    onSubmit: async (values) => {
      const res = await dispatch(UserUpdate(values));
      console.log(res);
    },
  });

  return (
    <>
      <Navbar />
      <br />
      <br />
      <br />
      <br />
      <div className="container p-5">
        <div className="row" data-masonry='{"percentPosition": true }'>
          <div className="col-sm-6 col-lg-2 col-md-4 mb-4">
            <div className="card text-center">
              <div className="p-2">
                <img
                  src={userSelector.foto}
                  alt="profile-picture"
                  style={{ width: "100px", height: "100px" }}
                  className="img-thumbnail"
                />
              </div>
              <div className="card-body">
                <label
                  htmlFor="formFile"
                  className="btn btn-danger btn-sm"
                  style={{ width: "100px", height: "30px" }}
                >
                  Pilih Foto
                </label>
                <input
                  type="file"
                  style={{ display: "none" }}
                  id="formFile"
                  accept="image/*"
                  onChange={(e) => {
                    formik.setFieldValue("file", e.target.files[0]);
                    if (e.target.files[0]) {
                      formik.submitForm();
                    }
                  }}
                />
              </div>
            </div>
          </div>
          <div className="col-sm-4 col-lg-5 col-md-4 mb-4">
            <div className="card">
              <div className="card-body">
                <p>
                  Nama : <span>{userSelector.nama}</span>
                  <span className="ps-2">
                    <BiEdit
                      type="button"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal1"
                    />
                  </span>
                </p>
                <p>
                  Tanggal Lahir: <span>{userSelector.tanggal_lahir}</span>
                  <span className="ps-2">
                    <BiEdit
                      type="button"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal2"
                    />
                  </span>
                </p>
                <p>
                  Jenis Kelamin: <span>{userSelector.jenis_kelamin}</span>
                  <span className="ps-2">
                    <BiEdit
                      type="button"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal3"
                    />
                  </span>
                </p>
                <form onSubmit={formik.handleSubmit}>
                  <div
                    className="modal fade"
                    id="exampleModal1"
                    tabIndex="-1"
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                  >
                    <div className="modal-dialog">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h1
                            className="modal-title fs-5"
                            id="exampleModalLabel"
                          >
                            Ubah Nama
                          </h1>
                          <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                          ></button>
                        </div>

                        <div className="modal-body">
                          <div className="mb-3">
                            <label
                              htmlFor="ubahnama"
                              className="col-form-label"
                            >
                              Nama :
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="ubahnama"
                              defaultValue={formik.values.nama}
                              onChange={(e) =>
                                formik.setFieldValue("nama", e.target.value)
                              }
                            />
                          </div>
                        </div>
                        <div className="modal-footer">
                          <button
                            type="submit"
                            className="btn btn-danger"
                            data-bs-dismiss="modal"
                          >
                            Simpan
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
                <form onSubmit={formik.handleSubmit}>
                  <div
                    className="modal fade"
                    id="exampleModal2"
                    tabIndex="-1"
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                  >
                    <div className="modal-dialog">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h1
                            className="modal-title fs-5"
                            id="exampleModalLabel"
                          >
                            Ubah Tanggal Lahir
                          </h1>
                          <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                          ></button>
                        </div>
                        <div className="modal-body">
                          <div className="mb-3">
                            <label
                              htmlFor="ubatanggal"
                              className="col-form-label"
                            >
                              Tanggal Lahir :
                            </label>
                            <input
                              type="date"
                              className="form-control"
                              id="ubahtanggal"
                              defaultValue={formik.values.tanggal_lahir}
                              onChange={(e) =>
                                formik.setFieldValue(
                                  "tanggal_lahir",
                                  e.target.value
                                )
                              }
                            />
                          </div>
                        </div>
                        <div className="modal-footer">
                          <button
                            type="submit"
                            className="btn btn-danger"
                            data-bs-dismiss="modal"
                          >
                            Simpan
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
                <form onSubmit={formik.handleSubmit}>
                  <div
                    className="modal fade"
                    id="exampleModal3"
                    tabIndex="-1"
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                  >
                    <div className="modal-dialog">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h1
                            className="modal-title fs-5"
                            id="exampleModalLabel"
                          >
                            Ubah Jenis Kelamin
                          </h1>
                          <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                          ></button>
                        </div>
                        <div className="modal-body">
                          <div className="form-check">
                            <input
                              type="radio"
                              className="form-check-input"
                              id="kelamin1"
                              name="kelamin"
                              value="Pria"
                              onChange={(e) =>
                                formik.setFieldValue(
                                  "jenis_kelamin",
                                  e.target.value
                                )
                              }
                            />
                            <label
                              htmlFor="kelamin1"
                              className="form-check-label"
                            >
                              Pria
                            </label>
                          </div>
                          <div className="form-check">
                            <input
                              type="radio"
                              className="form-check-input"
                              id="kelamin2"
                              name="kelamin"
                              value="Wanita"
                              onChange={(e) =>
                                formik.setFieldValue(
                                  "jenis_kelamin",
                                  e.target.value
                                )
                              }
                            />
                            <label
                              htmlFor="kelamin2"
                              className="form-check-label"
                            >
                              Wanita
                            </label>
                          </div>
                        </div>
                        <div className="modal-footer">
                          <button
                            type="submit"
                            className="btn btn-danger"
                            data-bs-dismiss="modal"
                          >
                            Simpan
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>

          <div className="col-sm-6 col-lg-5 col-md-4 mb-4">
            <div className="card">
              <div className="card-body">
                <p>
                  Email : <span>{userSelector.email}</span>
                  <span className="ps-2">
                    <BiEdit
                      type="button"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal4"
                    />
                  </span>
                </p>
                <p>
                  Nomor HP : <span>{userSelector.nomor_hp}</span>
                  <span className="ps-2">
                    <BiEdit
                      type="button"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal5"
                    />
                  </span>
                </p>
                <p>
                  Alamat: <span>{userSelector.alamat}</span>
                  <span className="ps-2">
                    <BiEdit
                      type="button"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal6"
                    />
                  </span>
                </p>
                <form onSubmit={formik.handleSubmit}>
                  <div
                    className="modal fade"
                    id="exampleModal4"
                    tabIndex="-1"
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                  >
                    <div className="modal-dialog">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h1
                            className="modal-title fs-5"
                            id="exampleModalLabel"
                          >
                            Ubah Email
                          </h1>
                          <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                          ></button>
                        </div>
                        <div className="modal-body">
                          <div className="mb-3">
                            <label
                              htmlFor="ubahemail"
                              className="col-form-label"
                            >
                              Email :
                            </label>
                            <input
                              type="email"
                              className="form-control"
                              id="ubahemail"
                              defaultValue={formik.values.email}
                              onChange={(e) => {
                                formik.setFieldValue("email", e.target.value);
                              }}
                            />
                          </div>
                        </div>
                        <div className="modal-footer">
                          <button
                            type="submit"
                            className="btn btn-danger on"
                            data-bs-dismiss="modal"
                          >
                            Simpan
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
                <form onSubmit={formik.handleSubmit}>
                  <div
                    className="modal fade"
                    id="exampleModal5"
                    tabIndex="-1"
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                  >
                    <div className="modal-dialog">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h1
                            className="modal-title fs-5"
                            id="exampleModalLabel"
                          >
                            Ubah Nomor
                          </h1>
                          <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                          ></button>
                        </div>
                        <div className="modal-body">
                          <div className="mb-3">
                            <label
                              htmlFor="ubahnomor"
                              className="col-form-label"
                            >
                              Nomor :
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="ubahnomor"
                              defaultValue={formik.values.nomor_hp}
                              onChange={(e) =>
                                formik.setFieldValue("nomor_hp", e.target.value)
                              }
                            />
                          </div>
                        </div>
                        <div className="modal-footer">
                          <button
                            type="submit"
                            className="btn btn-danger"
                            data-bs-dismiss="modal"
                          >
                            Simpan
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
                <form onSubmit={formik.handleSubmit}>
                  <div
                    className="modal fade"
                    id="exampleModal6"
                    tabIndex="-1"
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                  >
                    <div className="modal-dialog">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h1
                            className="modal-title fs-5"
                            id="exampleModalLabel"
                          >
                            Ubah Alamat
                          </h1>
                          <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                          ></button>
                        </div>
                        <div className="modal-body">
                          <div className="mb-3">
                            <label
                              htmlFor="ubahalamat"
                              className="col-form-label"
                            >
                              Alamat :
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="ubahalamat"
                              defaultValue={formik.values.alamat}
                              onChange={(e) =>
                                formik.setFieldValue("alamat", e.target.value)
                              }
                            />
                          </div>
                        </div>
                        <div className="modal-footer">
                          <button
                            type="submit"
                            className="btn btn-danger"
                            data-bs-dismiss="modal"
                          >
                            Simpan
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Profile;
