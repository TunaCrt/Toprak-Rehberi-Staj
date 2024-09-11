import React from "react";
import HomeLayout from "../component/HomeLayout";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <HomeLayout />

      <div className="row mb-3 g-6 mt-6 m-5">
        
        <div className="col-md">
          <div className="card" style={{ backgroundColor: "#58b05c" }}>
            <div className="d-flex">
              <div>
                <img
                  className="card-img card-img-left"
                  src="assets/img/gallery/arazi.jfif"
                  alt=""

                  style={{height:220, width:250}}
                />  
                
              </div>
              <div>
                <div className="card-body">
                  <h5 className="card-title">Ekim Yap</h5>
                  <p className="card-text">
                    Ekim yapın
                  </p>
                  <p className="card-text">
                  <Link to={"/terrains"} className="btn btn-success">
              Ekim
            </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md">
          <div className="card" style={{ backgroundColor: "#58b05c" }}>
            <div className="d-flex">
              <div>
                <div className="card-body">
                  <h5 className="card-title">Arazilerim</h5>
                  <p className="card-text">
                    Arazilerinizi buradan kontrol edin
                  </p>
                  <p className="card-text">
                  <Link to={"/terrains"} className="btn btn-success ">
              Arazilerim
            </Link>
                  </p>
                </div>
              </div>
              <div style={{flexGrow:1 , textAlign:"right"}}>
                <img
                  className="card-img card-img-right"
                  src="assets/img/gallery/arazi.jfif"
                  alt=""
                  style={{height:220, width:250}}

                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row mb-12 g-6 mt-5 m-5">
        <div className="col-md">
          <div className="card" style={{ backgroundColor: "#58b05c" }}>
            <div className="d-flex">
            <div style={{flexGrow:1 , textAlign:"right"}}>
                <img
                  className="card-img card-img-left"
                  src="assets/img/gallery/arazi.jfif"
                  alt=""

                  style={{height:220, width:250}}

                />
              </div>
              <div>
                <div className="card-body" >
                  <h5 className="card-title">Ürünler</h5>
                  <p className="card-text">
                  Ürünler hakkında bilgi al ve bulunduğun alandaki en verimli ürünü bul

                  </p>
                  <p className="card-text">
                  <Link to={"/products"} className="btn btn-success">
              Ürünler
            </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md">
          <div className="card" style={{ backgroundColor: "#58b05c" }}>
            <div className="d-flex">
              <div>
                <div className="card-body">
                  <h5 className="card-title">Arazi Ekle</h5>
                  <p className="card-text">
                  Arazi Ekle                                        
                  </p>
                  <p className="card-text">
                  <Link
                            to={"/terrainAdd/" }
                            className="btn btn-success"
                          >
                            Arazi Ekle
                          </Link>
                  </p>
                </div>
              </div>
              <div style={{flexGrow:1 , textAlign:"right"}}>
                <img
                  className="card-img card-img-right"
                  src="assets/img/gallery/arazi.jfif"
                  alt=""

                  style={{height:220, width:250}}

                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
