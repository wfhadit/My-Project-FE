import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { BiEdit } from "react-icons/bi";

const Profile = () => {
  return (
    <>
      <Navbar />
      <br />
      <br />
      <br />
      <br />
      <div className="container p-5">
        <div className="row">
          <div className="col-2">
            <div className="card text-center">
              <div className="p-2">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/a/ac/Default_pfp.jpg"
                  alt=""
                  style={{ width: "100px", height: "100px" }}
                  className="img-thumbnail"
                />
              </div>
              <div className="card-body">
                <label htmlFor="formFile" className="btn btn-danger btn-sm">
                  Pilih Foto
                </label>
                <input type="file" style={{ display: "none" }} id="formFile" />
              </div>
            </div>
          </div>
          <div className="col-5">
            <div className="card">
              <div className="card-body">
                <p>
                  Nama : <span>John Doe</span>
                  <span className="ps-2">
                    <BiEdit
                      type="button"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal1"
                    />
                  </span>
                </p>
                <p>
                  Tanggal Lahir: <span>01/01/1995</span>
                  <span className="ps-2">
                    <BiEdit
                      type="button"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal2"
                    />
                  </span>
                </p>
                <p>
                  Jenis Kelamin: <span>Pria</span>
                  <span className="ps-2">
                    <BiEdit
                      type="button"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal3"
                    />
                  </span>
                </p>
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
                        <h1 className="modal-title fs-5" id="exampleModalLabel">
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
                        <form>
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
                            />
                          </div>
                        </form>
                      </div>
                      <div className="modal-footer">
                        <button type="button" className="btn btn-danger">
                          Simpan
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
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
                        <h1 className="modal-title fs-5" id="exampleModalLabel">
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
                        <form>
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
                            />
                          </div>
                        </form>
                      </div>
                      <div className="modal-footer">
                        <button type="button" className="btn btn-danger">
                          Simpan
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
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
                        <h1 className="modal-title fs-5" id="exampleModalLabel">
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
                        <form>
                          <div className="form-check">
                            <input
                              type="radio"
                              className="form-check-input"
                              id="kelamin1"
                              name="kelamin"
                              value="Pria"
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
                            />
                            <label
                              htmlFor="kelamin2"
                              className="form-check-label"
                            >
                              Wanita
                            </label>
                          </div>
                        </form>
                      </div>
                      <div className="modal-footer">
                        <button type="button" className="btn btn-danger">
                          Simpan
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-5">
            <div className="card">
              <div className="card-body">
                <p>
                  Email : <span>johndoe@mail.com</span>
                  <span className="ps-2">
                    <BiEdit
                      type="button"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal4"
                    />
                  </span>
                </p>
                <p>
                  Nomor HP : <span>085299998888</span>
                  <span className="ps-2">
                    <BiEdit
                      type="button"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal5"
                    />
                  </span>
                </p>
                <p>
                  Alamat: <span>Jln. Galungan 70, Cikarang, Bekasi</span>
                  <span className="ps-2">
                    <BiEdit
                      type="button"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal6"
                    />
                  </span>
                </p>
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
                        <h1 className="modal-title fs-5" id="exampleModalLabel">
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
                        <form>
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
                            />
                          </div>
                        </form>
                      </div>
                      <div className="modal-footer">
                        <button type="button" className="btn btn-danger">
                          Simpan
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
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
                        <h1 className="modal-title fs-5" id="exampleModalLabel">
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
                        <form>
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
                            />
                          </div>
                        </form>
                      </div>
                      <div className="modal-footer">
                        <button type="button" className="btn btn-danger">
                          Simpan
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
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
                        <h1 className="modal-title fs-5" id="exampleModalLabel">
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
                        <form>
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
                            />
                          </div>
                        </form>
                      </div>
                      <div className="modal-footer">
                        <button type="button" className="btn btn-danger">
                          Simpan
                        </button>
                      </div>
                    </div>
                  </div>
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

export default Profile;
