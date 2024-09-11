import React from "react";
import HomeLayout from "../component/HomeLayout";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import productService from "../service/product.service";

const Products = () => {
  const [productList, setProductList] = useState([]);
  const [msg, setMsg] = useState("");
  useEffect(() => {
    init();
  }, []);
  

  const init = () => {
    productService
      .getAllProduct()
      .then((res) => {
        
        setProductList(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const deleteProduct = (id) => {
    productService
      .deleteProduct(id)
      .then((res) => {
        setMsg("Başarıyla silindi");
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
                Ürün Bilgi Listesi
                {msg && <p className="fs-4 text-center text-success">{msg}</p>}
              </div>

              <div className="card-body">
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col">Sıra No</th>
                      <th scope="col">ürün ismi</th>
                      <th scope="col">Ekim Zamanı</th>
                      
                      <th scope="col">Optimal Sıcaklık</th>
                      
                      <th scope="col">Başarı Oranı</th>
                      <th scope="col"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {productList.map((p, num) => (
                      <tr>
                        <td>{num + 1}</td>
                        <td>{p.productName}</td>
                        <td>{p.plantingSeason}</td>
                        
                        <td>{p.optimalTemperature}</td>

                        <td>{p.successRate} %</td>

                        <td>
                          <Link
                            to={"/productsDetail/" + p.id}
                            className="btn btn-info m-1"
                          >
                            Detay
                          </Link>
                          {
                          <button
                            onClick={() => deleteProduct(p.id)}
                            className="btn btn-danger ms-1"
                          >
                            Delete
                          </button >
                           }
                          
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

export default Products;
