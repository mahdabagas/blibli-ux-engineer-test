Nama : Bagas Mahda Dhani <br>
Email : bagasmahda@student.ub.ac.id

# Written Test 📖

## 1. Javascript Framework dan Vue

<p align="justify">Javascript framework ialah sebuah kerangka kerja yang menyediakan sekumpulan kode untuk memudahkan dalam pengembangan suatu website. Dengan menggunakan framework, maka kode akan jauh lebih singkat. Namun, kita perlu memahami dokumentasi dan mengikuti aturan dari framework yang kita pakai.</p>

<p align="justify">Vue merupakan salah satu framework javascript yang digunakan untuk membuat tampilan website menjadi interkatif. Vue menyediakan sekumpulan kode yang akan memudahakan dalam penggunaan components, computed properties, data binding, directives, event handling, dll. Vue memiliki beberapa keunggulan seperti mudah untuk digunakan, dokumentasi yang lengkap, Dapat diintegrasikan dengan library lain, dan performa yang baik untuk berbagai jenis website.</p>

## 2. Elipsis

<p align="justify">Elipisis merupakan salah satu value dari properti <code>text-overflow</code>. Elipsis digunakan ketika sebuah teks yang sudah melebihi konten ingin dipotong dan hanya menampilkan (...) saja. Untuk penggunaan Elipsis, diperlukan properti lain seperti : <code>overflow: hidden</code> dan <code>white-space: nowrap</code>.</p>

> [!TIP]
> Selain menggunakan `white-space: nowrap`, kita dapat menggunakan ketiga properti ini untuk mengatur berapa jumlah line teks yang akan ditampilkan dan sisanya akan di potong. Properti tersebut antara lain: `display: -webkit-box;`, `-webkit-box-orient: vertical;`, `-webkit-line-clamp: jumlah_line;`

## 3. Properti Animasi

1. @keyframes <br>
   `@keyframes` digunakan untuk menentukan serangkaian langkah-langkah perubahan pada elemen sepenjang waktu dari satu nilai ke nilai lainnya. Untuk medefinisikan perubahan nilai dapat menggunakan `%` atau kata kunci `from` dan `to`.
2. animation-name <br>
   `animation-name` digunakan untuk menentukan nama `@keyframes` yang akan digunakan untuk animasi.
3. animation-duration <br>
   `animation-duration` digunakan untuk menentukan berapa lama durasi animasi dalam satuan waktu seperti detik atau milidetik.
4. animation-iteration <br>
   `animation-iteration` digunakan untuk menentukan berapa kali animasi akan diulang. Nilai `infinite` akan membuat animasi dijalankan berkali-kali (selamanya).
5. animation-direction <br>
   `animation-direction` digunakan untuk menentukan arah animasi seperti kedepan, kebelakang, atau bergantian.

## 4. Lazy Loading

<p align="justify">
    Lazy loading merupakan teknik untuk menunda inisialisasi suatu elemen atau objek, hingga objek tersebut diperlukan oleh pengguna. Teknik ini meningkatkan performa dan mempercepat waktu membuka halaman website. Contoh penggunaanya, elemen gambar hanya akan dimuat saat pengguna men-scroll elemen tesebut dihalaman website. 
</p>

## 5. Git Commands

1. git remote <br>
   `git remote add <name> <url>` digunakan untuk mengakses repository pada github, gitlab, dll. Dengan ini, kita bisa keep update dan terhubung repository tersebut di laptop/pc kita.
2. git pull <br>
   `git pull <name> <branch>` digunakan untuk mendapat update dari repository yang kita hubungkan dengan remote. Sebelum menggunakan `git pull`, kita dapat menggunakan `git fetch` untuk mengambil perubahan dari repository.
3. git push <br>
   `git pull <name> <branch>` digunakan untuk menyimpan perkerjaan kita dan kita kirim ke repository yang kita hubungkan dengan remote. Sebelum menggunakn `git pull`, kita perlu melakukan `git add` dan `git commit`.
4. git clone <br>
   `git clone <url>` digunakan untuk mendownload atau meng-copy repository ke dalam pc/laptop kita.
5. git branch <br>
   `git branch <nama_branch>` digunakan untuk membuat branch atau cabang lain agar kode utama tidak terganggu.
