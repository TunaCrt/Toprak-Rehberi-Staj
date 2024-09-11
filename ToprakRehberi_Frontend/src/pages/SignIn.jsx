import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import SignNavbar from "../component/SignNavbar";
import axios from "axios";

const SignIn = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); // Hata mesajları için state
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8080/api/register", {
        username: name,
        email,
        password,
      });
      navigate("/login");
    } catch (error) {
      if (error.response && error.response.data) {
        setError(error.response.data); // Hata mesajını al
      } else {
        setError("Kayıt başarısız, lütfen tekrar deneyin.");
      }
    }
  };

  return (
    <>
      <SignNavbar />
      <body style={{ margin: 0, overflow: "hidden" }}>
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
                  <div className="card" style={{ borderRadius: "15px", maxHeight: "570px" }}>
                    <div className="card-body p-5">
                      <h2 className="text-uppercase text-center mb-2">Kayıt Ol</h2>
                      {error && <p className="text-danger">{error}</p>}
                      <form onSubmit={handleRegister}>
                        <div className="form-group mb-3">
                          <label>İsim:</label>
                          <input
                            type="text"
                            className="form-control"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                          />
                        </div>
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
                        <button type="submit" className="btn btn-primary">Kayıt Ol</button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </body>
    </>
  );
};

export default SignIn;
