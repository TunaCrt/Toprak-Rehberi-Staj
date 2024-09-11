import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import terrainService from "../../service/terrain.service";

import HomeLayout from "../../component/HomeLayout";

const Terrain = () => {
  /*const handleNavigate = (id, area) => {
    Navigate(`/plantedCrop/${id}`, { state: { area } });
  };*/
  /* terrain Terrain*/
  const [terrainList, setTerrainList] = useState([]);
  const [msg, setMsg] = useState("");
  useEffect(() => {
    init();
  }, []);
  

  const init = () => {
    terrainService
      .getAllTerrain()
      .then((res) => {
        setTerrainList(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const deleteTerrain = (id) => {
    terrainService
      .deleteTerrain(id)
      .then((res) => {
        setMsg("Arazi Başarıyla Silinid");
        init();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <HomeLayout />

      <div className="container mt-8">
        <div className="row">
          <div className="col-md-12">
            <div className="card">
              <div className="card-header fs-3 text-center">
                Arazilerim
                {msg && <p className="fs-4 text-center text-success">{msg}</p>}
              </div>

              <div className="card-body">
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col">Sıra No</th>
                      <th scope="col">Bahçe İsmi</th>
                      <th scope="col">Kullanım Tipi</th>
                      <th scope="col">Toplam alan</th>
                      <th scope="col"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {terrainList.map((p, num) => (
                      <tr>
                        <td>{num + 1}</td>
                        <td>{p.terrainName}</td>
                        <td>{p.terrainType}</td>
                        <td>
                          {p.area} m<sup>2</sup>{" "}
                        </td>
                        {/*<td>{p.status}</td>*/}
                        <td>
                          <Link
                            to={"/plantedCrop/" + p.id}
                            className="btn btn-primary m-1"
                          >
                            Ekim
                          </Link>


                          <Link
                            to={"/terrainDetail/" + p.id}
                            className="btn btn-info m-1"
                          >
                            Detay
                          </Link>

                          <button
                            onClick={() => deleteTerrain(p.id)}
                            className="btn btn-danger ms-1"
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Terrain;
