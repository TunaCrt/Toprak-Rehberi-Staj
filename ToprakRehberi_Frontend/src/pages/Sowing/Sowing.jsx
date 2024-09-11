import React, { useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import sowingService from "../../service/sowing.service";

const Sowing = () => {
  const { id } = useParams();
  const handlePlantCrop = () => {
    Navigate(
      "/Terrains" /*, { state: { totalPlantedArea, selectedTerrainArea } } */
    );
  };
  //const [msg, setMsg] = useState("");

  const [sowing, setSowing] = useState({
    status: "",
  });
  /*const handleChange = (e) => {
        const value = e.target.value;
        setSowing({ ...sowing, [e.target.name]: value });
      };*/
  const SowingRegister = (e) => {
    e.preventDefault();

    sowingService
      .saveSowing(sowing)
      .then((res) => {
        console.log("terrain Added Sucessfully");
        //setMsg("terrain Added Sucessfully");
        setSowing({
          status: "",
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <>
      <div>
        Sowing {id}
        <form onSubmit={(e) => SowingRegister(e)}>
          <button className="btn btn-primary m-1" onClick={handlePlantCrop}>
            {" "}
            Değerlendir
          </button>
        </form>
        <button
          type="button"
          className="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          Modal Aç
        </button>
        <div
          className="modal fade"
          id="exampleModal"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Değerlendirme
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                Bu, Bootstrap Modal ile oluşturulmuş bir dialog penceresidir.
                <div
                  className="btn-group m-5"
                  role="group"
                  aria-label="Basic radio toggle button group"
                >
                  <input
                    type="radio"
                    className="btn-check"
                    name="btnradio"
                    id="btnradio1"
                  />
                  <label className="btn btn-outline-primary" for="btnradio1">
                    Kötü
                  </label>
                  <input
                    type="radio"
                    className="btn-check"
                    name="btnradio"
                    id="btnradio2"
                  />
                  <label className="btn btn-outline-primary" for="btnradio2">
                    Orta
                  </label>
                  <input
                    type="radio"
                    className="btn-check"
                    name="btnradio"
                    id="btnradio3"
                  />
                  <label className="btn btn-outline-primary" for="btnradio3">
                    Çok İyi
                  </label>
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Kapat
                </button>
                <button type="button" className="btn btn-primary">
                  Değerlendir
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sowing;
