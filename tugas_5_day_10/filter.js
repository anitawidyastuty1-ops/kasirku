const produk = [
  { nama: "Jakarta-Tokyo", harga: 5000000, stok: 10 },
  { nama: "Tokyo-Jakarta", harga: 4800000, stok: 10 },
  { nama: "Jakarta-Moscow", harga: 8000000, stok: 5 },
  { nama: "Jakarta-Kuala Lumpur", harga: 1500000, stok: 20 },
  { nama: "Jakarta-Singapore", harga: 2000000, stok: 15 },
];

function saringStokMenipis(daftar) {
  return daftar.filter((p) => p.stok > 5);
}

const hasil = saringStokMenipis(produk);
if (hasil.length === 0) console.log("Tidak ditemukan");
else console.table(hasil);
