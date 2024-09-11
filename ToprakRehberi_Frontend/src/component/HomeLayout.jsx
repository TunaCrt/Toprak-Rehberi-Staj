import React from "react";
import { Link, useNavigate } from "react-router-dom";

const HomeLayout = () => {
  const navigate = useNavigate(); // useNavigate kancasını kullanarak yönlendirme işlemi yapıyoruz

  const handleLogout = async () => {
    try {
      const response = await fetch('/api/logout', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include' // Çerezlerin (cookies) gönderilmesini sağlar
      });

      if (response.ok) {
        // Çıkış işlemi başarılı ise yönlendir
        localStorage.removeItem('authToken'); // Eğer token'ı localStorage'dan kaldırmak istiyorsanız
        navigate('/login'); // useNavigate ile yönlendirme
      } else {
        console.error('Çıkış yapılırken bir hata oluştu');
      }
    } catch (error) {
      console.error('Çıkış yapılırken bir hata oluştu', error);
    }
  };

  return (
    <>
      <nav
        className="navbar navbar-expand-lg navbar-light fixed-top py-3 bg-light opacity-85"
        data-navbar-on-scroll="data-navbar-on-scroll"
      >
        <div className="container">
          <div className="navbar-brand">
            <img
              className="d-inline-block align-top img-fluid"
              src="/assets/img/gallery/logo-icon.png"
              alt=""
              width="50"
            />
            <Link to={"/"} className="text-theme font-monospace fs-4 ps-2">
              Toprak Rehberi
            </Link>
          </div>
          <button
            className="navbar-toggler collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse border-top border-lg-0 mt-4 mt-lg-0"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item px-2">
                <div aria-current="page">
                  <Link to={"/terrains"} className="nav-link fw-medium">
                    Arazilerim
                  </Link>
                </div>
              </li>
              <li className="nav-item px-2">
                <div aria-current="page">
                  <Link to={"/terrainAdd/"} className="nav-link fw-medium">
                    Arazi Ekle
                  </Link>
                </div>
              </li>
              <li className="nav-item px-2">
                <div aria-current="page">
                  <Link to={"/products"} className="nav-link fw-medium">
                    Ürünler
                  </Link>
                </div>
              </li>
              <li className="nav-item px-2">
                <button
                  className="btn btn-outline-danger ms-2"
                  onClick={handleLogout}
                >
                  Çıkış Yap
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default HomeLayout;
