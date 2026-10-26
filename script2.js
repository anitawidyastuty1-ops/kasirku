// ATURAN BISNIS:
// Diskon: subtotal >= 500000 -> 10%, >= 200000 -> 5%, selain itu 0%.
// Biaya admin: tunai 0, qris 500, transfer 2500.

// Data contoh
const keranjangA = [{ nama: "Gula 1kg", harga: 16000, qty: 2 }];
const keranjangB = [
  { nama: "Beras 5kg", harga: 65000, qty: 2 },
  { nama: "Minyak 1L", harga: 18000, qty: 3 },
  { nama: "Gula 1kg", harga: 16000, qty: 1 },
];
const keranjangC = [
  { nama: "Beras 5kg", harga: 65000, qty: 5 },
  { nama: "Minyak 1L", harga: 18000, qty: 10 },
];

// 4. Total dengan for...of
function hitungSubtotal(keranjang) {
  let subtotal = 0;
  for (const item of keranjang) {
    subtotal += item.harga * item.qty;
  }
  return subtotal;
}

// 2. if / else if
function hitungDiskonPersen(subtotal) {
  if (subtotal >= 500000) {
    return 10;
  } else if (subtotal >= 200000) {
    return 5;
  } else {
    return 0;
  }
}

// 3. switch
function hitungBiayaAdmin(metode) {
  switch (metode) {
    case "tunai":
      return 0;
    case "qris":
      return 500;
    case "transfer":
      return 2500;
    default:
      return 0;
  }
}

function hitungTotal(keranjang, metode) {
  const subtotal = hitungSubtotal(keranjang);
  const diskonPersen = hitungDiskonPersen(subtotal);
  const diskon = (subtotal * diskonPersen) / 100;
  const admin = hitungBiayaAdmin(metode);
  return { subtotal, diskonPersen, diskon, admin, total: subtotal - diskon + admin };
}

// 5. Uji 3 nilai berbeda
console.log("Uji 1 (tunai):", hitungTotal(keranjangA, "tunai"));
console.log("Uji 2 (qris):", hitungTotal(keranjangB, "qris"));
console.log("Uji 3 (transfer):", hitungTotal(keranjangC, "transfer"));
// for.of
