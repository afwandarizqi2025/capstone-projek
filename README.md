<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Website Desa Ngarak RT 04B RW 01</title>
    <style>
        /* --- CSS DASAR --- */
        :root {
            --primary-color: #2E7D32; /* Hijau Desa */
            --secondary-color: #4CAF50;
            --accent-color: #FFC107;
            --text-color: #333;
            --bg-color: #f4f4f4;
        }

        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }

        body {
            background-color: var(--bg-color);
            color: var(--text-color);
            line-height: 1.6;
        }

        a { text-decoration: none; color: inherit; }
        ul { list-style: none; }

        /* --- HEADER --- */
        header {
            background-color: var(--primary-color);
            color: white;
            padding: 15px 0;
            position: sticky;
            top: 0;
            z-index: 1000;
            box-shadow: 0 2px 5px rgba(0,0,0,0.1);
        }

        .container {
            width: 90%;
            max-width: 1100px;
            margin: auto;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .logo h1 { font-size: 1.5rem; }
        .logo span { font-size: 0.9rem; font-weight: normal; opacity: 0.9; }

        nav ul { display: flex; gap: 20px; }
        nav ul li a:hover { color: var(--accent-color); transition: 0.3s; }

        /* --- HERO SECTION --- */
        .hero {
            background: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('https://source.unsplash.com/1600x900/?village,countryside');
            background-size: cover;
            background-position: center;
            height: 400px;
            display: flex;
            justify-content: center;
            align-items: center;
            text-align: center;
            color: white;
        }

        .hero-content h2 { font-size: 2.5rem; margin-bottom: 10px; }
        .btn {
            display: inline-block;
            background: var(--accent-color);
            color: #333;
            padding: 10px 20px;
            border-radius: 5px;
            margin-top: 10px;
            font-weight: bold;
            transition: 0.3s;
        }
        .btn:hover { background: #e0a800; }

        /* --- SECTION UMUM --- */
        .section { padding: 50px 0; }
        .section-title {
            text-align: center;
            margin-bottom: 30px;
            color: var(--primary-color);
            border-bottom: 2px solid var(--secondary-color);
            display: inline-block;
            padding-bottom: 5px;
        }

        /* --- KARTU APARATUR --- */
        .grid-card {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 20px;
        }

        .card {
            background: white;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 2px 5px rgba(0,0,0,0.1);
            text-align: center;
        }

        .card h3 { color: var(--primary-color); margin-bottom: 10px; }
        .role { font-weight: bold; color: var(--secondary-color); }

        /* --- FOOTER --- */
        footer {
            background: #222;
            color: white;
            text-align: center;
            padding: 20px 0;
            margin-top: 20px;
        }

        /* Responsif Mobile */
        @media (max-width: 768px) {
            .container { flex-direction: column; gap: 15px; }
            nav ul { font-size: 0.9rem; gap: 15px; }
            .hero h2 { font-size: 1.8rem; }
        }
    </style>
</head>
<body>

    <!-- HEADER & NAVIGASI -->
    <header>
        <div class="container">
            <div class="logo">
                <h1>Desa Ngarak</h1>
                <span>RT 04B RW 01</span>
            </div>
            <nav>
                <ul>
                    <li><a href="#">Beranda</a></li>
                    <li><a href="#profil">Profil</a></li>
                    <li><a href="#pemerintah">Pemerintah</a></li>
                    <li><a href="#kontak">Kontak</a></li>
                </ul>
            </nav>
        </div>
    </header>

    <!-- BANNER UTAMA (HERO) -->
    <section class="hero">
        <div class="hero-content">
            <h2>Selamat Datang di Website Resmi</h2>
            <p>Desa Ngarak RT 004B RW 001  dusun 01 desa ngarak cileungsi-、Membangun Negeri dari Rumah</p>
            <a href="#informasi" class="btn">Lihat Informasi Terbaru</a>
        </div>
    </section>

    <!-- PROFIL DESA -->
    <section id="profil" class="section container">
        <div style="text-align: center;">
            <h2 class="section-title">Profil Wilayah</h2>
            <p>Desa Ngarak merupakan salah satu wilayah yang berada di bawah koordinasi RW 01. Wilayah RT 04B dikenal dengan kondusifitas dan gotong royong warganya.</p>
            <br>
            <div class="grid-card" style="margin-top: 20px;">
                <div class="card">
                    <h3>Luas Wilayah = 6155000 per-segi</h3>
                    <p>-</p>
                </div>
                <div class="card">
                    <h3>Jumlah Kepala Keluarga 6.479</h3>
                    <p>-</p>
                </div>
                <div class="card">
                    <h3>Jumlah Penduduk 21091</h3>
                    <p>-</p>
                </div>
            </div>
        </div>
    </section>

    <!-- PEMERINTAHAN RT/RW -->
    <section id="pemerintah" class="section" style="background-color: #e9e9e9;">
        <div class="container">
            <h2 class="section-title" style="display:block; text-align:center;">Struktur Pemerintahan</h2>
            <p style="text-align: center; margin-bottom: 20px;">Berikut adalah daftar aparat pemerintah RT 004B dan RW 001.dusun 01</p>
            
            <div class="grid-card">
                <!-- RW 01 -->
                <div class="card">
                    <div style="background: #ddd; height: 80px; width: 80px; border-radius: 50%; margin: 0 auto 15px auto; display: flex; align-items: center; justify-content: center; color: #555;">FOTO</div>
                    <h3>[Nama Ketua RW]</h3>
                    <p class="role">Ketua RW 01</p>
                    <p>Sadih</p>
                </div>

                <!-- RT 04B -->
                <div class="card">
                    <div style="background: #ddd; height: 80px; width: 80px; border-radius: 50%; margin: 0 auto 15px auto; display: flex; align-items: center; justify-content: center; color: #555;">FOTO</div>
                    <h3>[Nama Ketua RT]</h3>
                    <p class="role">Ketua RT 04B</p>
                    <p>Tajudin</p>
                </div>

                <!-- Sekrtaris -->
                <div class="card">
                    <div style="background: #ddd; height: 80px; width: 80px; border-radius: 50%; margin: 0 auto 15px auto; display: flex; align-items: center; justify-content: center; color: #555;">FOTO</div>
                    <h3>[Nama Sekrtaris]</h3>
                    <p class="role">Sekretaris RT 04B</p>
                    <p>Samin</p>
                </div>

                <!-- Bendahara -->
                <div class="card">
                    <div style="background: #ddd; height: 80px; width: 80px; border-radius: 50%; margin: 0 auto 15px auto; display: flex; align-items: center; justify-content: center; color: #555;">FOTO</div>
                    <h3>[Nama Bendahara]</h3>
                    <p class="role">Bendahara RT 04B</p>
                    <p>Iyanriyanto</p>
                </div>
            </div>
        </div>
    </section>

    <!-- INFORMASI / BERITA -->
    <section id="informasi" class="section container">
        <h2 class="section-title">Informasi & Pengumuman</h2>
        <div class="grid-card">
            <div class="card" style="text-align: left;">
                <span style="background: red; color: white; padding: 2px 5px; font-size: 0.8rem; border-radius: 3px;">PENTING</span>
                <h3 style="margin-top: 10px;">Jadwal Ronda Malam</h3>
                <p style="font-size: 0.9rem; color: #666;">Tanggal: Setiap Jumat Malam</p>
                <p>Mohon di beritahukan kepada setiap para warga untuk partisipasi dalam ronda malam hari Jumat.</p>
            </div>
            <div class="card" style="text-align: left;">
                <span style="background: blue; color: white; padding: 2px 5px; font-size: 0.8rem; border-radius: 3px;">KEGIATAN</span>
                <h3 style="margin-top: 10px;">kerja Bakti</h3>
                <p style="font-size: 0.9rem; color: #666;">Tanggal: Setiap Sabtu </p>
                <p>Membersihkan lingkungan RT. titik kumpul di rumah pak RT.</p>
            </div>
        
        

            
        </div>

    </section>

    <!-- KONTAK -->
    <section id="kontak" class="section container" style="text-align: center;">
        <h2 class="section-title">Hubungi Kami</h2>
        <p>Anda memiliki keluhan atau saran? Hubungi kami di:</p>
        <div style="margin-top: 20px;">
            <p><strong>Alamat Komplek RT:</strong> [komplek rt 004B rw 001 dusun 01 desa nargrak cileungsi kabupaten bogor]</p>
            <p><strong>WhatsApp:</strong> [Nomor Telepon = 0838m1154 2445]</p>
            
        </div>
    </section>

    <!-- FOOTER -->
    <footer>
        <p>&copy; 2026 Desa Ngarak RT 04B RW 01. All Rights Reserved.</p>
    </footer>

</body>
</html>
