import React, { useState } from "react";
import "./Login.css";

const Login: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Login submitted");
  };

  return (
    <div className="login-page">
      <div className="login-container">

        <div className="portal-label">
          <span className="portal-icon">♙</span>
          Portal Masuk Jelajah Dunia
        </div>

        <h1>Selamat Datang!</h1>

        <p className="subtitle">
          Masuk ke akun Jelajah Dunia Anda untuk mengelola tiket &
          pemesanan perjalanan.
        </p>

        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label>Alamat Email atau Nomor Ponsel</label>

            <div className="input-wrapper">
              <span className="input-icon">✉</span>
              <input
                type="text"
                placeholder="nama@email.com atau 08123456789"
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label>Kata Sandi</label>

            <div className="input-wrapper">
              <span className="input-icon">♙</span>

              <input
                type={showPassword ? "text" : "password"}
                placeholder="Masukkan kata sandi akun"
                required
              />

              <button
                type="button"
                className="password-toggle"
                onClick={() => setShowPassword(!showPassword)}
                aria-label="Tampilkan atau sembunyikan kata sandi"
              >
                {showPassword ? "◉" : "◎"}
              </button>
            </div>
          </div>

          <div className="form-options">
            <label className="remember">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
              />
              Ingat saya
            </label>

            <a href="/lupa-password">Lupa Kata Sandi?</a>
          </div>

          <button type="submit" className="login-button">
            Masuk Sekarang <span>→</span>
          </button>
        </form>

        <div className="divider">
          <span></span>
          <p>ATAU MASUK DENGAN</p>
          <span></span>
        </div>

        <div className="social-login">
          <button className="social-button" type="button">
            <span className="google-icon">G</span>
            Google
          </button>

          <button className="social-button" type="button">
            <span className="apple-icon">●</span>
            Apple
          </button>
        </div>

        <div className="register-text">
          Belum punya akun?
          <a href="/daftar">Daftar Akun Baru</a>
        </div>

        <div className="security-info">
          <span className="security-icon">♙</span>
          <p>
            Data perjalanan & transaksi Anda terlindungi secara
            terenkripsi 256-bit.
          </p>
        </div>

      </div>
    </div>
  );
};

export default Login;