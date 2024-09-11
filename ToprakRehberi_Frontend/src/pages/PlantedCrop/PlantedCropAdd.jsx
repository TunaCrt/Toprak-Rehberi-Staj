import React, { useState, useEffect } from "react";
import HomeLayout from "../../component/HomeLayout";
import locationService from "../../service/location.Service";
import PlantedCropService from "../../service/PlantedCrop.service";
import terrainService from "../../service/terrain.service";
import product2Service from "../../service/product2.service";
import { Link, useLocation } from "react-router-dom";

const PlantedCropAdd = () => {
    const location = useLocation();

    // location.state içinden totalPlantedArea ve selectedTerrainArea değerlerini çekiyoruz
    const { totalPlantedArea, selectedTerrainArea } = location.state || {
        totalPlantedArea: 0,
        selectedTerrainArea: 0,
    };

    const [cities, setCities] = useState([]);
    const [districts, setDistricts] = useState([]);
    const [neighborhoods, setNeighborhoods] = useState([]);
    const [selectedCity, setSelectedCity] = useState("");
    const [selectedDistrict, setSelectedDistrict] = useState("");

    const [terrains, setTerrains] = useState([]); // Terrains için durum
    const [products, setProducts] = useState([]); // Products için durum

    const [selectedTerrain, setSelectedTerrain] = useState(""); // Seçilen terrain
    const [selectedProduct, setSelectedProduct] = useState(""); // Seçilen product

    // Bugünün tarihi varsayılan ekim tarihi olarak ayarlanıyor
    const today = new Date().toISOString().split('T')[0];

    const [plantedCrop, setPlantedCrop] = useState({
        terrainId: "",
        productId: "",
        plantingDate: today, // Bugünün tarihi varsayılan olarak ayarlanıyor
        plantedArea: "",
        harvestDate: "",
        status: "",
        mahalleId: "",
    });
    

    useEffect(() => {
        init();
    }, []);

    const init = () => {
        terrainService.getAllTerrain().then((res) => {
            setTerrains(res.data);
        }).catch((error) => {
            console.log(error);
        });

        product2Service.getAllProduct2().then((res) => {
            setProducts(res.data);
        }).catch((error) => {
            console.log(error);
        });

        locationService.getAllCities().then((res) => {
            setCities(res.data);
        }).catch((error) => {
            console.log(error);
        });
    };

    const [msg, setMsg] = useState("");

    const handleCityChange = (e) => {
        const cityId = e.target.value;
        setSelectedCity(cityId);

        locationService.getDistrictsByCity(cityId).then((response) => {
            setDistricts(response.data);
            setNeighborhoods([]);
            setPlantedCrop({ ...plantedCrop, mahalleId: "" });
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
        setPlantedCrop({ ...plantedCrop, [e.target.name]: value });
    };

    const handleTerrainChange = (e) => {
        setSelectedTerrain(e.target.value);
        setPlantedCrop({ ...plantedCrop, terrainId: e.target.value });
    };

    const handleProductChange = (e) => {
        setSelectedProduct(e.target.value);
        setPlantedCrop({ ...plantedCrop, productId: e.target.value });
    };

    const TerrainRegister = (e) => {
        e.preventDefault();

        const remainingArea = selectedTerrainArea - totalPlantedArea;
        const plantedArea = parseFloat(plantedCrop.plantedArea);

        if (selectedTerrainArea < totalPlantedArea) {
            setMsg("Hata: Ektiğiniz alan tarlanızın alanından büyük olamaz!");
            return;
        }

        // Ekilen alan, seçilen arazinin kalan alanını geçemez
        if (plantedArea > remainingArea) {
            setMsg("Hata: Ekilen alan, seçilen arazinin kalan alanından büyük olamaz!");
            return;
        }

        PlantedCropService.savePlantedCrop(plantedCrop)
            .then((res) => {
                console.log("Araziye başarıyla ürün ekildi");
                setMsg("Araziye başarıyla ürün ekildi");
                setPlantedCrop({
                    terrainId: "",
                    productId: "",
                    plantingDate: today, // Formu sıfırlarken bugünün tarihini kullanıyoruz
                    plantedArea: "",
                    harvestDate: "",
                    status: "",
                    mahalleId: "",
                });
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const remainingArea = selectedTerrainArea - totalPlantedArea;

    return (
        <>
            <HomeLayout />
            <div className="card-header fs-3 text-center mt-7">Araziye ürün ekimi yap</div>

            <div className="container mt-3">
                <div className="row">
                    <div className="col-md-6">
                        <div className="card">
                            {msg && <p className="fs-4 text-center text-success">{msg}</p>}

                            <div className="card-body">
                                <form onSubmit={(e) => TerrainRegister(e)}>
                                    <div className="mb-3">
                                        <label>Araziyi seç</label>
                                        <select
                                            name="terrain_id"
                                            className="form-control"
                                            onChange={handleTerrainChange}
                                            value={selectedTerrain}
                                        >
                                            <option value="">Arazi seç</option>
                                            {terrains.map((terrain) => (
                                                <option key={terrain.id} value={terrain.id}>
                                                    {terrain.terrainName}
                                                </option>
                                            ))}
                                        </select>
                                    </div>

                                    <div className="mb-3">
                                    <label>Ekilen Ürünü Seç: <Link to={"/products"} className="btn btn-sm btn-success">
              Toprak Rehberi
            </Link></label>
                                        <select
                                            name="product_id"
                                            className="form-control"
                                            onChange={handleProductChange}
                                            value={selectedProduct}
                                        >
                                            <option value="">Ürün seç</option>
                                            {products.map((product) => (
                                                <option key={product.id} value={product.id}>
                                                    {product.productName}
                                                </option>
                                            ))}
                                        </select>
                                    </div>

                                    
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="card">
                            {msg && <p className="fs-4 text-center text-success">{msg}</p>}

                            <div className="card-body">
                                <form onSubmit={(e) => TerrainRegister(e)}>
                                    {/*<div className="mb-3">
                                        <label>Harvest Date</label>
                                        <input
                                            type="date" // Tarih seçici kullanarak tarih formatını zorunlu kıldım
                                            name="harvestDate"
                                            className="form-control"
                                            onChange={(e) => handleChange(e)}
                                            value={plantedCrop.harvestDate}
                                        />
                                    </div>*/}
{/*<div className="mb-3">
                                        <label>Status</label>
                                        <input
                                            type="text"
                                            name="status"
                                            className="form-control"
                                            onChange={(e) => handleChange(e)}
                                            value={plantedCrop.status}
                                        />
                                    </div>*/}
                                    <div className="mb-3">
                                        <label>Planting Date</label>
                                        <input
                                            type="date" // Tarih seçici kullanarak tarih formatını zorunlu kıldım
                                            name="plantingDate"
                                            className="form-control"
                                            onChange={(e) => handleChange(e)}
                                            value={plantedCrop.plantingDate}
                                        />
                                    </div>

                                    <div className="mb-3">
                                    <label>
                                            Ekilen Alan ( Ekilmemiş alan:{" "}
                                            {remainingArea < 0 ? 0 : remainingArea} )
                                        </label>
                                        <input
                                            type="text"
                                            name="plantedArea"
                                            className="form-control"
                                            onChange={(e) => handleChange(e)}
                                            value={plantedCrop.plantedArea}
                                        />
                                    </div>
                                    
                                    <button className="btn btn-success col-md-12">
                                        Add Planted Crop
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

export default PlantedCropAdd;
