
import React, { useState } from "react";
import "./Register.css";

const Register: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [agree, setAgree] = useState(false);
  const [promo, setPromo] = useState(true);

  const passwordStrength = [
    password.length >= 8,
    /[A-Z]/.test(password),
    /[0-9]/.test(password),
    /[^A-Za-z0-9]/.test(password),
  ];

  const strengthCount = passwordStrength.filter(Boolean).length;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!agree) {
      alert("Silakan setujui Syarat & Ketentuan terlebih dahulu.");
      return;
    }

    alert("Pendaftaran berhasil dikirim!");
  };

  return (
    <div className="register-page">

      {/* Navbar */}
      <header className="register-navbar">
        <nav className="nav-left">
          <a href="#">Pusat Bantuan</a>
          <a href="#">Masuk</a>
          <a href="#" className="nav-register">Daftar</a>
        </nav>

        <div className="nav-right">
          <button className="language-btn">
            🌐 ID / IDR
          </button>
          <button className="profile-btn">♟</button>
        </div>
      </header>

      {/* Main Content */}
      <main className="register-container">
        <section className="register-card">

          <div className="register-heading">
            <span className="eyebrow">PENDAFTARAN AKUN BARU</span>

            <h1>Mulai Petualangan Anda</h1>

            <p>
              Buat akun Jelajah Dunia gratis dalam hitungan detik
              untuk kemudahan perjalanan.
            </p>
          </div>

          {/* Social Login */}
          <div className="social-login">
            <button type="button" className="social-btn">
              <span className="google-icon">G</span>
              Daftar dengan Google
            </button>

            <button type="button" className="social-btn">
              <span className="apple-icon">●</span>
              Daftar dengan Apple
            </button>
          </div>

          {/* Divider */}
          <div className="form-divider">
            <span></span>
            <p>atau daftar dengan email / nomor HP</p>
            <span></span>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit}>

            {/* Full Name */}
            <div className="form-group">
              <div className="label-row">
                <label htmlFor="fullname">Nama Lengkap</label>
                <span> Sesuai KTP / Paspor </span>
              </div>

              <div className="input-wrapper">
                <span className="input-icon">♙</span>
                <input
                  id="fullname"
                  type="text"
                  placeholder="cth. Raden Budi Santoso"
                  required
                />
              </div>
            </div>

            {/* Email and Phone */}
            <div className="form-row">

              <div className="form-group">
                <label htmlFor="email">Alamat Email Aktif</label>

                <div className="input-wrapper">
                  <span className="input-icon">✉</span>
                  <input
                    id="email"
                    type="email"
                    placeholder="nama@domain.com"
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="phone">
                  Nomor WhatsApp / Ponsel
                </label>

                <div className="input-wrapper">
                  <span className="phone-icon">▤</span>
                  <span className="phone-code">+62</span>
                  <input
                    id="phone"
                    type="tel"
                    placeholder="812-3456-7890"
                    required
                  />
                </div>
              </div>

            </div>

            {/* Password */}
            <div className="form-group password-group">
              <div className="label-row">
                <label htmlFor="password">Buat Kata Sandi</label>

                <span className="password-status">
                  Kekuatan: {
                    strengthCount === 0
                      ? "Belum terisi"
                      : strengthCount <= 2
                      ? "Lemah"
                      : strengthCount === 3
                      ? "Sedang"
                      : "Kuat"
                  }
                </span>
              </div>

              <div className="input-wrapper">
                <span className="input-icon">♙</span>

                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Kombinasi huruf, angka, min. 8 karakter"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  minLength={8}
                  required
                />

                <button
                  type="button"
                  className="toggle-password"
                  onClick={() => setShowPassword(!showPassword)}
                  aria-label="Tampilkan kata sandi"
                >
                  {showPassword ? "◉" : "◎"}
                </button>
              </div>

              <div className="password-strength">
                {passwordStrength.map((valid, index) => (
                  <span
                    key={index}
                    className={valid ? "active" : ""}
                  />
                ))}
              </div>

              <div className="password-info">
                <span>ⓘ</span>
                Minimal 8 karakter dengan kombinasi huruf kapital,
                angka, atau simbol.
              </div>
            </div>

            {/* Checkboxes */}
            <div className="checkbox-group">

              <label className="checkbox-label">
                <input
                  type="checkbox"
                  checked={agree}
                  onChange={(e) => setAgree(e.target.checked)}
                />

                <span>
                  Saya menyetujui{" "}
                  <a href="#">Syarat & Ketentuan</a> serta{" "}
                  <a href="#">Kebijakan Privasi</a> Jelajah Dunia.
                </span>
              </label>

              <label className="checkbox-label">
                <input
                  type="checkbox"
                  checked={promo}
                  onChange={(e) => setPromo(e.target.checked)}
                />

                <span>
                  Kirimkan saya promo tiket pesawat, diskon voucher
                  hotel, serta tips kurasi wisata mingguan pilihan.
                </span>
              </label>

            </div>

            {/* Submit */}
            <button
              type="submit"
              className="submit-btn"
            >
              Daftar Akun Baru <span>→</span>
            </button>

            {/* Security */}
            <div className="security-info">
              <div>
                <span className="security-icon">♢</span>
                Data terenkripsi aman
              </div>

              <strong>BEBAS BIAYA PENDAFTARAN</strong>
            </div>

          </form>

          {/* Login Footer */}
          <div className="register-footer">
            Sudah punya akun Jelajah Dunia?
            <a href="#">Masuk di sini ›</a>
          </div>

        </section>
      </main>

    </div>
  );
};

export default Register;
