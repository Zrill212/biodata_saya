let biodata = {
    nama: "Azriel Anwar F",
    usia:  "17 Tahun",
    sekolah: "SMKN 4 Tasikmalaya",
    kelas: "XI PPLG 4",
    alamat: "Jl. Padasuka Nagrak",
    hobi: "Main Game",
    profil:"https://play-lh.googleusercontent.com/dB871HGe4u27jK6S8WztToQhRyy1Z417PrIKjhcywPAq1P8WO6oc3z25NhoTqdd4K-w=w526-h296-rw",
};


// let nama = ["Azriel", "XI PPLG 4", "alamat", "hobi"];
// let a = nama.map(function (x) {
//   if (x == "XI PPLG 4") {
//     return x;
//   } else if (x == "Azriel") {
//     return x;
//   } else {
//     return "tidak ada";
//   }
// });
// console.log(a); 

const potoSaya = document.querySelector(".poto-saya");
potoSaya.src = biodata.profil;
const title = document.querySelector(".title");
const nama = document.querySelector(".nama");
const usia = document.querySelector(".usia");
const kelas = document.querySelector(".kelas");
const sekolah = document.querySelector(".sekolah");
const alamat = document.querySelector(".alamat");
const hobi = document.querySelector(".hobi");
nama.innerHTML = "Nama : " + biodata.nama;
usia.innerHTML = "Usia : " + biodata.usia;
kelas.innerHTML = "Kelas : " + biodata.kelas;
sekolah.innerHTML = "Sekolah : " + biodata.sekolah;
alamat.innerHTML = "Alamat : " + biodata.alamat;
hobi.innerHTML = "Hobi : " + biodata.hobi;
title.innerHTML = "Biodata Saya";
console.log(document);