const SevenCategories = () => {
  return (
    <>
      <div className="container">
        <br />
        <hr />
      </div>
      <div className="container">
        <h1 className="text-danger">TEMUKAN PRODUK</h1>
        <h1>TERATAS DARI KAMI</h1>
      </div>
      <div className="container">
        <hr />
        <br />
      </div>
      <div className="container">
        <div className="row gap-3">
          <div className="col ratio ratio-4x3 border border-danger">
            <img
              src="https://images.secretlab.co/turntable/tr:n-w_450/R22PU-Stealth_02.jpg"
              alt=""
            />
            <p className="p-1">KURSI GAMING</p>
          </div>
          <div className="col">
            <div className="row ratio ratio-4x3 border border-danger">
              <img
                src="https://assets.corsair.com/image/upload/c_pad,q_85,h_360,w_360/products/Gaming-Mice/CH-9304211-NA/Gallery/Scimitar_ELITE_BLK_01.webp"
                alt=""
              />
              <p className="p-1">MOUSE</p>
            </div>
            <br />
            <div className="row ratio ratio-4x3 border border-danger">
              <img
                src="https://dlcdnwebimgs.asus.com/gain/3C403FED-60E2-47A8-B974-5EB76DAEEEDA/w717/h525"
                alt=""
              />
              <p className="p-1">MONITOR</p>
            </div>
          </div>
          <div className="col">
            <div className="row ratio ratio-4x3 border border-danger">
              <img
                src="https://hyperx.com/cdn/shop/files/hyperx_alloy_rise_us_7g7a3aa_23aba_angle_2_1080x.jpg?v=1736382557"
                alt=""
              />
              <p className="p-1">KEYBOARD</p>
            </div>
            <br />
            <div className="row ratio ratio-4x3 border border-danger">
              <img
                src="https://resource.logitechg.com/w_692,c_lpad,ar_4:3,q_auto,f_auto,dpr_2.0/d_transparent.gif/content/dam/gaming/en/products/f710/f710-gallery-1.png?v=1"
                alt=""
              />
              <p className="p-1">CONTROLLER</p>
            </div>
          </div>
          <div className="col">
            <div className="row ratio ratio-4x3 border border-danger">
              <img
                src="https://resource.logitechg.com/w_692,c_lpad,ar_4:3,q_auto,f_auto,dpr_2.0/d_transparent.gif/content/dam/gaming/en/products/g733/gallery/g733-white-gallery-1.png?v=1"
                alt=""
              />
              <p className="p-1">HEADSET</p>
            </div>
            <br />
            <div className="row ratio ratio-4x3 border border-danger">
              <img
                src="https://hyperx.com/cdn/shop/files/hyperx_pulsefire_mat_rgb_3_angled_1080x.jpg?v=1730148137"
                alt=""
              />
              <p className="p-1">DESKMAT</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SevenCategories;
