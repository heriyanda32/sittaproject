// js/data.js

// Data dummy bahan ajar
const dataBahanAjar = [
  { id: "BA001", judul: "Bahan Ajar Matematika Dasar", jenis: "Buku Cetak", stok: 120, harga: 25000 },
  { id: "BA002", judul: "Bahan Ajar Bahasa Inggris", jenis: "Buku Cetak", stok: 80, harga: 20000 },
  { id: "BA003", judul: "Modul Pemrograman Web", jenis: "Modul", stok: 45, harga: 30000 }
];

// Data dummy pengiriman (akan dipakai di tracking)
const dummyDeliveries = [
  { doNumber: "DO2025001", nama: "Rani", status: "Dalam Pengiriman", ekspedisi: "JNT", tanggal: "2025-10-20" },
  { doNumber: "DO2025002", nama: "Ari", status: "Sudah Dikirim", ekspedisi: "JNE", tanggal: "2025-10-18" }
];