


// // // Jalankan fungsi
// // cetakLaporan(laporan);import { MenjalankanNode } from "./menjalankan_node.js";
// import * as readline from "node:readline/promises";
// import { stdin as input, stdout as output } from "node:process";
//  // console.log(MenjalankanNode());

// const rl = readline.createInterface({ input, output });
 
// const daftar = [{
//   nama: "Teh Celup", harga:5000
// },{
//   nama: "Coca-cola", harga:8000
// }];

// console.table(daftar);
// let pilihYa;
// do {
//     pilihYa = await rl.question("Pilih Menu :");
//     switch (pilihYa) {
//         case "1":
//         // TAMBAH
//         const nama = await rl.question("Nama Produk : ");
//         const harga =Number( await rl.question("Harga Produk : "));
//         daftar.push ({nama, harga});
//         console.log(`Berhasil Bertambah!`);
//         console.table(daftar);
//         break;
        
//         let harga = 0
//         while (true) {
//           let hargaString = await rl.question("Nama Produk : ");
//           harga = Number(hargaString);
//           if (hargaString.trim() !== "" && !isNaN(harga) && harga> 0) {
//             break;
//           }
//           console.log(`Harga gagal ter input`);
//         }
//           daftar.push ({nama, harga});
//           console.log(`Berhasil Bertambah!`);
//           //console.table(daftar);
//           break; //
//         case "2":
//             // LIHAT
//             break;
//         case "3":
//             // CARI
//             break;
//         case "4":
//             // KELUAR
//             console.log(`Dah Lah....`);
//             break;
//         default:
//         console.log(`Pilihan tidak dikenali`);
//         break;
//     }
//   } while (pilihYa  !== "4");


         

Codeshare logo
 ShareSign UpLog In

1
// import * as readline from "node:readline/promises";
2
// import { stdin as input, stdout as output } from "node:process";
3
// const rl = readline.createInterface({ input, output });
4
const daftar = [
5
  {
6
    nama: "Teh Celup",
7
    harga: 5000,
8
  },
9
  {
10
    nama: "Coca-cola",
11
    harga: 8000,
12
  },
13
];
14
//PROSEDUR tampilkanMenu()
15
export function tampilkanMenu() {
16
  console.log(`1 Tambah data 2 Lihat data 3 Cari Data 4 Keluar`);
17
}
18
​
19
//FUNGSI tanyaAngka()
20
// export async function tanyaAngka(rl, pertanyaan) {
21
//   while (true) {
22
//     const jawab = await rl.question(pertanyaan);
23
//     const angka = Number(jawab);
24
//     if (jawab !== "" && angka > 0) {
25
//       return angka;
26
//     }
27
//     console.log("input tidak valid");
28
//   }
29
// }
30
//PROSEDUR tambahData()
31
export async function tambahData(rl) {
32
  const nama = await rl.question("Nama Produk : ");
33
  if (nama === "") {
34
    console.log(`Isi dulu nama Produk!`);
35
    return;
36
  }
37
​
38
  let harga = await rl.question("Harga Produk : ");
39
​
40
  daftar.push({ nama, harga });
41
  console.log(`Berhasil Bertambah!`);
42
  // console.table(daftar);
43
}
44
//PROSEDUR lihatData()
45
​
46
//PROSEDUR cariData()




Netlify
One gateway for every AI model
px
Hide Ads
