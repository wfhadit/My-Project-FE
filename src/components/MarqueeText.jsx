import Marquee from "react-fast-marquee";

const MarqueeText = () => {
  return (
    <>
      <div className="container mt-5">
        <br />
        <hr />
      </div>
      <div className="container">
        <h1 className="fw-bold text-danger">PARTNER GAMING</h1>
        <h1 className="fw-bold">TERBAIK DI INDONESIA</h1>
      </div>
      <div className="container">
        <hr />
      </div>
      <div className="container pt-3">
        <Marquee speed={20} direction="right" gradient={false}>
          <div className="mx-5">
            <h5 className="fw-bold text-danger">200 JUTA+</h5>
            <p>Lebih dari 200 juta produk telah terjual ke seluruh Indonesia</p>
          </div>
          <div className="mx-5">
            <h5 className="fw-bold text-danger">SEJAK 1996</h5>
            <p>Pelopor penjualan aksesoris gaming</p>
          </div>
          <div className="mx-5">
            <h5 className="fw-bold text-danger">150 TOKO+</h5>
            <p>Memiliki 150 toko offline di seluruh Indonesia</p>
          </div>
          <div className="mx-5">
            <h5 className="fw-bold text-danger">RANKING 10</h5>
            <p>Termasuk dalam 10 besar perusahaan Fortune global</p>
          </div>
          <div className="mx-5">
            <h5 className="fw-bold text-danger">2 TAHUN+ GARANSI</h5>
            <p>Semua produk dijamin memiliki garansi 2 tahun</p>
          </div>
        </Marquee>
      </div>
      <div className="container">
        <hr />
      </div>
    </>
  );
};

export default MarqueeText;
