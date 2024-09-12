import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import SignNavbar from "../component/SignNavbar";
import axios from "axios";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); // Hata mesajları için state
  const navigate = useNavigate(); // useNavigate kancasını kullanarak yönlendirme işlemi yapıyoruz

  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8080/api/login", {
        email,
        password,
      });

      console.log("API yanıtı:", response.data); // Yanıtı kontrol edin

      // Yanıt doğrudan token olarak dönüyor
      // Bu satırda token'ın yanıtın içinden alınması gerekiyor
      const token = response.data; // İlk kodda: const token = response.data;

      if (token) {
        localStorage.setItem('authToken', token); // Token'ı saklayın
        navigate("/home");
      } else {
        setError("Giriş başarısız");
      }
    } catch (error) {
      console.error("Hata:", error); // Hata ayrıntılarını kontrol edin

      // İlk kodda: setError(error.response?.data?.message || "Giriş başarısız, lütfen tekrar deneyin.");
      if (error.response && error.response.data) {
        setError(error.response.data.message || "Giriş başarısız, lütfen tekrar deneyin."); // Hata mesajını ayarla
      } else {
        setError("Giriş başarısız, lütfen tekrar deneyin.");
      }
    }
  };

  return (
    <>
      <SignNavbar />
      <section className="vh-100 bg-image">
        <div
          className="bg-holder"
          style={{
            backgroundImage: "url(assets/img/illustrations/how-it-works.png)",
            backgroundPosition: "center bottom",
            backgroundSize: "cover",
          }}
        ></div>

        <div className="h-100">
          <div className="container h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                <div className="card" style={{ borderRadius: "15px" }}>
                  <div className="card-body p-5">
                    <h2 className="text-uppercase text-center mb-2">Giriş Yap</h2>
                    {error && <p className="text-danger">{error}</p>}
                    <form onSubmit={handleSignIn}>
                      <div className="form-group mb-3">
                        <label>Email:</label>
                        <input
                          type="email"
                          className="form-control"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                        />
                      </div>
                      <div className="form-group mb-3">
                        <label>Şifre:</label>
                        <input
                          type="password"
                          className="form-control"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          required
                        />
                      </div>
                      <div className="d-flex justify-content-center mt-3">
                      <button type="submit" className="btn btn-primary btn-block btn-lg">Giriş Yap</button>
                    </div>
                      
                    </form>
                    {/*<div className="d-flex justify-content-center mt-3">
                      <a
                        href="http://localhost:8080/oauth2/authorization/google"
                        className="btn btn-outline-danger btn-block btn-lg"
                      >
                        Google ile Giriş Yap
                      </a>
                    </div>*/}
                    
                    <p className="text-center text-muted mt-4 mb-0">
                      Hesabın yok mu?{" "}
                      <Link to="/signIn" className="fw-bold text-body">
                        <u>Kayıt Ol</u>
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SignIn;
