import React from "react";
import { useState, useEffect } from "react";
import terrainService from "../../service/terrain.service";
import HomeLayout from "../../component/HomeLayout";
import locationService from "../../service/location.Service";

const TerrainAdd = () => {
  const [cities, setCities] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [neighborhoods, setNeighborhoods] = useState([]);
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState("");
  const userId = localStorage.getItem('userId'); // userId'yi localStorage'dan alın

  const [terrain, setTerrain] = useState({
    userId:userId,
    terrainName: "",
    description: "",
    price: "",
    status: "",
    mahalleId: "",
  });
  

  const [msg, setMsg] = useState("");

  useEffect(() => {
    locationService.getAllCities().then((response) => {
      setCities(response.data);
    });
  }, []);

  const handleCityChange = (e) => {
    const cityId = e.target.value;
    setSelectedCity(cityId);

    locationService.getDistrictsByCity(cityId).then((response) => {
      setDistricts(response.data);
      setNeighborhoods([]); 
      setTerrain({ ...terrain, mahalleId: "" });
    });
  };

  const handleDistrictChange = (e) => {
    const districtId = e.target.value;
    setSelectedDistrict(districtId);

    locationService.getNeighborhoodsByDistrict(districtId).then((response) => {
      setNeighborhoods(response.data);
    });
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setTerrain({ ...terrain, [e.target.name]: value });
  };

  const TerrainRegsiter = (e) => {
    e.preventDefault();

    terrainService//
      .saveTerrain(terrain)
      .then((res) => {
        console.log("terrain Added Sucessfully");
        setMsg("Arazi Başarıyla Eklendi");
        setTerrain({
          terrainName: "",
          description: "",
          price: "",
          status: "",
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
    <HomeLayout/>
      <div className="card-header fs-3 text-center mt-7">Arazi Ekle</div>

      <div className="container mt-3">
        <div className="row">
          <div className="col-md-6 ">
            <div className="card">
              {msg && <p className="fs-4 text-center text-success">{msg}</p>}

              <div className="card-body">
                <form onSubmit={(e) => TerrainRegsiter(e)}>
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
                  <div className="mb-3">
                    <label>Şehir Seçin</label>
                    <select
                      name="city"
                      className="form-control"
                      onChange={handleCityChange}
                      value={selectedCity}
                    >
                      <option value="">Şehir Seçin</option>
                      {cities.map((city) => (
                        <option key={city.id} value={city.id}>
                          {city.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="col-md-6 ">
            <div className="card">
              {msg && <p className="fs-4 text-center text-success">{msg}</p>}

              <div className="card-body">
                <form onSubmit={(e) => TerrainRegsiter(e)}>
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
                  {/*<div className="mb-3">
                    <label>Mahalle</label>
                    <input
                      type="text"
                      name="mahalleId"
                      className="form-control"
                      onChange={(e) => handleChange(e)}
                      value={terrain.mahalleId}
                    />
                  </div>*/}

                  <div className="mb-3">
                    <label>İlçe Seçin</label>
                    <select
                      name="district"
                      className="form-control"
                      onChange={handleDistrictChange}
                      value={selectedDistrict}
                      disabled={!selectedCity}
                    >
                      <option value="">İlçe Seçin</option>
                      {districts.map((district) => (
                        <option key={district.id} value={district.id}>
                          {district.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="mb-3">
                    <label>Mahalle Seçin</label>
                    <select
                      name="mahalleId"
                      className="form-control"
                      onChange={handleChange}
                      value={terrain.mahalleId}
                      disabled={!selectedDistrict}
                    >
                      <option value="">Mahalle Seçin</option>
                      {neighborhoods.map((neighborhood) => (
                        <option key={neighborhood.id} value={neighborhood.id}>
                          {neighborhood.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  <button className="btn btn-success col-md-12">
                    Arazi Ekle
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TerrainAdd;






