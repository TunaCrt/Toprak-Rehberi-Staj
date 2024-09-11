import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import terrainService from "../../service/terrain.service";
import { useNavigate, useParams } from "react-router-dom";
import HomeLayout from "../../component/HomeLayout";

const TerrainDetail = () => {
  const [terrain, setTerrain] = useState({
    id: "",
    terrainName: "",
    description: "",
    price: "",
    status: "",
  });
  const navigate = useNavigate();

  const { id } = useParams();
  console.log(id);
  const [msg, setMsg] = useState("");
  useEffect(() => {
    terrainService
      .getTerrainById(id)
      .then((res) => {
        setTerrain(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleChange = (e) => {
    const value = e.target.value;
    setTerrain({ ...terrain, [e.target.name]: value });
  };

  return (
    <>
      <HomeLayout />
      <div className="container mt-7">
        <div className="row">
          <div className="col-md-6 ">
            <div className="card">
              <div className="card-header fs-3 text-center">
                Tarla detay sayfası
              </div>
              {msg && <p className="fs-4 text-center text-success">{msg}</p>}

              <div className="card-body">
                <div className="mb-3">
                  <label>Enter Terrain Name</label>
                  <input
                    type="text"
                    name="terrainName"
                    className="form-control"
                    onChange={(e) => handleChange(e)}
                    value={terrain.terrainName}
                  />
                </div>

                <div className="mb-3">
                  <label>terrainType</label>
                  <input
                    type="text"
                    name="terrainType"
                    className="form-control"
                    onChange={(e) => handleChange(e)}
                    value={terrain.terrainType}
                  />
                </div>
                <div className="mb-3">
                  <label>adaNo</label>
                  <input
                    type="text"
                    name="adaNo"
                    className="form-control"
                    onChange={(e) => handleChange(e)}
                    value={terrain.adaNo}
                  />
                </div>
                <div className="mb-3">
                  <label>parselNo</label>
                  <input
                    type="text"
                    name="parselNo"
                    className="form-control"
                    onChange={(e) => handleChange(e)}
                    value={terrain.parselNo}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 ">
            <div className="card">
              <div className="card-header fs-3 text-center">
                Tarla detay sayfası
              </div>
              {msg && <p className="fs-4 text-center text-success">{msg}</p>}

              <div className="card-body">
                <div className="mb-3">
                  <label>Enter Description</label>
                  <input
                    type="text"
                    name="description"
                    className="form-control"
                    onChange={(e) => handleChange(e)}
                    value={terrain.description}
                  />
                </div>
                <div className="mb-3">
                  <label>Enter area</label>
                  <input
                    type="text"
                    name="area"
                    className="form-control"
                    onChange={(e) => handleChange(e)}
                    value={terrain.area}
                  />
                </div>
                <div className="mb-3">
                  <label>Enter Status</label>
                  <input
                    type="text"
                    name="status"
                    className="form-control"
                    onChange={(e) => handleChange(e)}
                    value={terrain.status}
                  />
                </div>
                <div className="mb-3">
                  <label>Mahalle</label>
                  <input
                    type="text"
                    name="mahalleId"
                    className="form-control"
                    onChange={(e) => handleChange(e)}
                    value={terrain.mahalleId}
                  />
                </div>
                <Link
                  to={"/editTerrain/" + terrain.id}
                  className="btn btn-info m-1"
                >
                  Güncelle
                </Link>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TerrainDetail;
