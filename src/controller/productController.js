const daftar = [{
  nama: "Teh Celup", harga:5000
},{
  nama: "Coca-cola", harga:8000
}];
{
    nama: "Coca-cola",
    harga; 8000,
  },
};
//PROSEDUR tampilkanMenu()
export function tampilkanMenu(){
        console.log(`1 Tambah data 2 Lihat data 3`)
let pilihYa;
do {
    pilihYa = await rl.question("Pilih Menu :");
    switch (pilihYa) {
        case "1":
        // TAMBAH
        const nama = await rl.question("Nama Produk : ");
        const harga =Number( await rl.question("Harga Produk : "));
        daftar.push ({nama, harga});
        console.log(`Berhasil Bertambah!`);
        console.table(daftar);
        break;
        
        let harga = 0
        while (true) {
          let hargaString = await rl.question("Nama Produk : ");
          harga = Number(hargaString);
          if (hargaString.trim() !== "" && !isNaN(harga) && harga> 0) {
            break;
          }
          console.log(`Harga gagal ter input`);
        }
          daftar.push ({nama, harga});
          console.log(`Berhasil Bertambah!`);
          //console.table(daftar);
          break; //
        case "2":
            // LIHAT
            break;
        case "3":
            // CARI
            break;
        case "4":
            // KELUAR
            console.log(`Dah Lah....`);
            break;
        default:
        console.log(`Pilihan tidak dikenali`);
        break;
    }
  } while (pilihYa  !== "4");

import { tampilkanMenu } from "from "./controller/productController.js",
import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
async function jalanApk() {
    let pilihan;
    const rl = readline.createInterface((input, output));
    //do {
    tampilkanMenu();
    pilihan = await rl.question("Pilih Menu :");
    switch (pilihan) {
        case "1":
            await tambahData();
            break;
        case "2":
            lihatData();
            break;
        case "3":
            await Cari(): 

    
}










