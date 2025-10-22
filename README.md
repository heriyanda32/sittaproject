SITTA - Sistem Informasi Tracking dan Bahan Ajar
Proyek ini merupakan simulasi sistem berbasis web untuk mengelola data bahan ajar dan melacak pengiriman menggunakan teknologi dasar web (HTML, CSS, dan JavaScript).
Dibuat sebagai bagian dari tugas pemrograman web.

Fitur Utama
1. Login Sistem
Validasi login menggunakan data dummy.
Simulasi penyimpanan sesi login menggunakan localStorage.
Otomatis redirect ke dashboard setelah login berhasil.
2. Dashboard
Menampilkan greeting (sapaan) sesuai waktu.
Menampilkan total bahan ajar dan pengiriman berdasarkan data dari data.js.
Dilengkapi dengan tombol Logout yang menghapus sesi login.
3. Informasi Bahan Ajar (stok.html)
Menampilkan daftar bahan ajar (judul, jenis, stok, harga).
Dapat menambah data bahan ajar baru secara dinamis (langsung tampil di halaman tanpa reload).
4. Tracking Pengiriman (tracking.html)
Pengguna dapat mencari Nomor DO (Delivery Order).
Menampilkan detail pengiriman: penerima, ekspedisi, status, tanggal, serta progress bar visual.
Struktur Folder
sitta-project/ └── sitta-ordering/ ├── login.html ├── dashboard.html ├── tracking.html ├── stok.html ├── js/ │ └── data.js └── css/ └── styles.css

Teknologi yang Digunakan
Teknologi	Deskripsi
HTML5	Struktur dan tampilan halaman
CSS3	Desain dan layout
JavaScript (Vanilla)	Logika interaktif & manipulasi DOM
LocalStorage	Simulasi penyimpanan data login di browser
GitHub Pages	Hosting gratis untuk proyek web statis
Website
https://heriyanda32.github.io/sittaproject/sitta-project/login.html
Login
Email: mahasiswa@ut.ac.id Password: password123
