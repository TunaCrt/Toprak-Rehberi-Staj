import React from "react";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import PlantedCropService from "../../service/PlantedCrop.service";
import { useNavigate, useParams } from "react-router-dom";
import terrainService from "../../service/terrain.service";
import product2Service from "../../service/product2.service";
import HomeLayout from "../../component/HomeLayout";

const PlantedCrop = () => {
  const [plantedCropList, setPlantedCropList] = useState([]);
  const [plantedCropList2, setPlantedCropList2] = useState([]);
  const [totalPlantedArea, setTotalPlantedArea] = useState(0);
  const [selectedTerrainArea, setSelectedTerrainArea] = useState(0);
  const [terrainList, setTerrainList] = useState([]);
  const [productList, setProductList] = useState([]); // Ürün listesi için state
  const [rating, setRating] = useState("");
  const [selectedProductId, setSelectedProductId] = useState(null); // Seçilen ürünün ID'si


  const { id } = useParams();
  const location = useLocation();
  const { area } = location.state || { area: 0 };
  const handleEvaluation = async (selectedPlantedCropId) => {
    try {
      await product2Service.addSowing2(selectedProductId, rating); // `productId` ve `rating` kullanarak POST isteği gönder
      deleteTerrain(selectedPlantedCropId);
      window.location.reload();
      setMsg("Değerlendirme başarıyla kaydedildi!");
    } catch (error) {
      console.error("Değerlendirme kaydedilirken hata oluştu:", error);
    }
  };

  useEffect(() => {
    // Tüm ürünleri al
    PlantedCropService.getAllPlantedCrop()
      .then((res) => {
        setProductList(res.data); // Ürünleri state'e kaydet
      })
      .catch((error) => {
        console.log(error);
      });

    // Tüm terrain'leri al
    terrainService
      .getAllTerrain()
      .then((res) => {
        setTerrainList(res.data);
        const selectedTerrain = res.data.find(
          (terrain) => terrain.id === parseInt(id)
        );
        if (selectedTerrain) {
          setSelectedTerrainArea(selectedTerrain.area);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  useEffect(() => {
    // Tarlaya göre ekilen ürünleri al
    PlantedCropService.getPlantedCropsByTerrainId(id)
      .then((res) => {
        setPlantedCropList2(res.data);
        calculateTotalPlantedArea(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  const calculateTotalPlantedArea = (crops) => {
    const totalArea = crops.reduce((sum, crop) => sum + crop.plantedArea, 0);
    setTotalPlantedArea(totalArea);
  };

  const handlePlantCrop = () => {
    navigate(`/plantedCropAdd/${id}`, {
      state: { totalPlantedArea, selectedTerrainArea },
    });
  };
  const init = () => {
    PlantedCropService.getPlantedCropsByTerrainId(id)
      .then((res) => {
        setPlantedCropList2(res.data);
        calculateTotalPlantedArea(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const deleteTerrain = (id) => {
    PlantedCropService.deletePlantedCrop(id)
      .then((res) => {
        setMsg("Başarıyla silindi");
        init();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const navigate = useNavigate();
  const [msg, setMsg] = useState("");

  // Ürün adını almak için yardımcı bir fonksiyon
  const getProductName = (plantedCropId) => {
    const product = productList.find((p) => p.id === plantedCropId);
    return product ? product.productName : "Ürün Adı Yok";
  };
  const getProductId = (productName) => {
    const product = productList.find((p) => p.productName === productName);
    return product ? product.id : "Ürün ID'si Yok";
  };
  const getProductId2 = (plantedCropId) => {
    const product = productList.find((p) => p.id === plantedCropId);
    return product ? product.id : "Ürün Adı Yok";
  };

  return (
    <>
    <HomeLayout/>
      <div className="container mt-8">
        <div className="row">
          <div className="col-md-12">
            <div className="card">
              <div className="card-header fs-3 text-center">
                Araziye Yapılan Ekimler
                {msg && <p className="fs-4 text-center text-success">{msg}</p>}
              </div>

              <div className="card-body">
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col">Sıra No</th>
                      <th scope="col">Ürün Adı</th>
                      <th scope="col">Ekim Tarihi</th>
                      <th scope="col">Ekilen Alan</th>
                      <th scope="col"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {plantedCropList2.map((p, num) => (
                      <tr key={p.id}>
                        <td>{num + 1}</td>
                        <td>{getProductName(p.id)}</td>{" "}
                        {/* Ürün adını eşleştir */}
                        <td>{p.plantingDate}</td>
                        <td>{p.plantedArea}</td>
                        <td>
                          <button
                            type="button"
                            className="btn btn-primary"
                            data-bs-toggle="modal"
                            data-bs-target="#evaluationModal"
                            onClick={() => setSelectedProductId(p.productId)} 
                          >
                            Hasat et ve değerlendir
                          </button>
                          {/* Değerlendirme Modal */}
                          <div
                            className="modal fade"
                            id="evaluationModal"
                            tabIndex="-1"
                            aria-labelledby="evaluationModalLabel"
                            aria-hidden="true"
                          >
                            <div className="modal-dialog">
                              <div className="modal-content">
                                <div className="modal-header">
                                  <h5
                                    className="modal-title"
                                    id="evaluationModalLabel"
                                  >
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
                                  Lütfen bu ürünün hasatı hakkında bilgilendirme
                                  yapınız!
                                  <div className="btn-group m-5" role="group">
                                    <input
                                      type="radio"
                                      className="btn-check"
                                      name="btnradio"
                                      id="btnradio1"
                                      onClick={() => setRating("Kötü")}
                                    />
                                    <label
                                      className="btn btn-outline-primary"
                                      htmlFor="btnradio1"
                                    >
                                      Kötü
                                    </label>
                                    <input
                                      type="radio"
                                      className="btn-check"
                                      name="btnradio"
                                      id="btnradio2"
                                      onClick={() => setRating("Orta")}
                                    />
                                    <label
                                      className="btn btn-outline-primary"
                                      htmlFor="btnradio2"
                                    >
                                      Orta
                                    </label>
                                    <input
                                      type="radio"
                                      className="btn-check"
                                      name="btnradio"
                                      id="btnradio3"
                                      onClick={() => setRating("Çok İyi")}
                                    />
                                    <label
                                      className="btn btn-outline-primary"
                                      htmlFor="btnradio3"
                                    >
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
                                  <button
                                    type="button"
                                    className="btn btn-primary"
                                    onClick={() => handleEvaluation(p.id)}
                                  >
                                    Değerlendir
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>

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
                    <tr>
                      <td colSpan="6">
                        {totalPlantedArea} + {selectedTerrainArea}
                      </td>
                    </tr>
                  </tbody>
                </table>
                <tr>
                  <button
                    className="btn btn-success m-1"
                    onClick={handlePlantCrop}
                  >
                    {" "}
                    Bu tarlaya ekim yap
                  </button>
                </tr>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PlantedCrop;
