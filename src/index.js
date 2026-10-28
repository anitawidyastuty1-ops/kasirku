// Data laporan toko
const laporan = {
  namaToko: "Toko Berkah Warung (Kasir+)",
  kasir: "Mbak Sri",
  produk: [
    {
      nama: "Minyak Goreng Sania 2L",
      hargaJual: 37000,
      margin: 4000,
      stokGudang: 10,
      ambangBatas: 5
    },
    {
      nama: "Beras Ramos 5kg",
      hargaJual: 72000,
      margin: 7000,
      stokGudang: 15,
      ambangBatas: 5
    },
    {
      nama: "Gula Pasir 1kg",
      hargaJual: 16000,
      margin: 2000,
      stokGudang: 3,
      ambangBatas: 5
    }
  ]
};

// Fungsi format angka ke Rupiah
function formatRupiah(angka) {
  return "Rp " + angka.toLocaleString("id-ID");
}

function cetakLaporan(data) {
  const garisPemisah = "==================================================";
  const garisTitik = "--------------------------------------------------";

  console.log(`garisPemisah`);
  console.log(`LAPORAN HARIAN POS: ${data.namaToko}`);
  console.log(`Kasir Bertugas: ${data.kasir}`);
  console.log(garisPemisah);

  let totalEstimasiAset = 0;
  let barangButuhPerhatian = 0;

  data.produk.forEach((item) => {
    // Penentuan status berdasarkan sisa stok
    const perluRestock = item.stokGudang <= item.ambangBatas;
    const status = perluRestock ? "⚠️ Perlu Restock" : "✔️ Aman";

    if (perluRestock) {
      barangButuhPerhatian++;
    }

    // Akumulasi nilai aset (stok * harga jual)
    totalEstimasiAset += item.stokGudang * item.hargaJual;

    console.log(`Produk      : ${item.nama}`);
    console.log(`Harga Jual  : ${formatRupiah(item.hargaJual)} (Margin: ${formatRupiah(item.margin)})`);
    console.log(`Stok Gudang : ${item.stokGudang} unit| Status: ${status}`);
    console.log(`garisTitik`);
  });

  console.log(`Total Estimasi Aset Toko : ${formatRupiah(totalEstimasiAset)}`);
  console.log(`Barang Butuh Perhatian   : ${barangButuhPerhatian} item`);
  console.log(`garisPemisah`);
}

// Jalankan fungsi
cetakLaporan(laporan);