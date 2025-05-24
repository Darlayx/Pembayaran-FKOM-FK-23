:root {
    --primary-accent-color: #007AFF; /* Biru iOS sebagai aksen utama (lebih modern) */
    --background-color: #F9F9FB; /* Latar belakang sangat terang, hampir putih */
    --card-background-color: #FFFFFF;
    --text-primary-color: #1D1D1F; /* Hitam pekat untuk teks utama (ala Apple) */
    --text-secondary-color: #6E6E73; /* Abu-abu untuk teks sekunder */
    --text-tertiary-color: #8A8A8E; /* Abu-abu lebih terang */
    --border-color: #E5E5EA; /* Border yang sangat halus */
    --button-secondary-bg: #EFEFF4; /* Latar tombol sekunder */
    --button-secondary-text: #000000; /* Teks tombol sekunder */
    --success-color: #34C759; /* Hijau iOS */
    
    --card-shadow: 0 2px 8px rgba(0, 0, 0, 0.06); /* Shadow lebih subtle */
    --border-radius-main: 10px; 
    --border-radius-small: 6px;
    --transition-speed: 0.25s;
}

/* Basic Reset & Font */
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

body {
    font-family: 'Poppins', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif; /* Tambahkan fallback system fonts */
    line-height: 1.6;
    background-color: var(--background-color);
    color: var(--text-primary-color);
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    font-size: 15px; /* Sedikit perkecil base font size */
}

.container {
    width: 90%;
    max-width: 960px; /* Max width sedikit dikurangi untuk kesan lebih fokus */
    margin: 0 auto; 
    padding: 0 15px;
}

/* SVG Icons Styling */
.section-icon {
    margin-right: 8px; 
    vertical-align: middle; 
    width: 18px; /* Ukuran ikon disesuaikan dengan font judul seksi */
    height: 18px;
    fill: var(--primary-accent-color); 
}

.btn-icon {
    margin-right: 6px; /* Margin ikon di tombol */
    vertical-align: middle;
    width: 16px; /* Ukuran ikon di tombol */
    height: 16px;
}
.btn-primary .btn-icon{
    fill: var(--card-background-color); /* Ikon putih untuk tombol primary */
}
.btn-secondary .btn-icon{
    fill: var(--text-primary-color); /* Ikon warna teks untuk tombol secondary */
}


/* Header */
header {
    background-color: var(--card-background-color); /* Header dengan warna card */
    color: var(--text-primary-color);
    padding: 1.5rem 0; 
    text-align: center;
    border-bottom: 1px solid var(--border-color); /* Border halus di bawah header */
    margin-bottom: 30px;
}

header h1 {
    font-weight: 600; 
    font-size: 1.4rem; /* Ukuran font judul utama (disamakan dengan section-title) */
    margin-bottom: 0.15rem; 
}
header .subtitle {
    font-weight: 400;
    font-size: 0.9rem; /* Perkecil subtitle */
    color: var(--text-secondary-color);
    opacity: 1; /* Hapus opacity, kontrol via warna */
}

/* Cards & Content Sections */
.card {
    background-color: var(--card-background-color);
    padding: 25px; /* Padding dalam card */
    margin-bottom: 25px;
    border-radius: var(--border-radius-main);
    box-shadow: var(--card-shadow);
}
.content-section { /* Untuk seksi yang mungkin tidak pakai card tapi butuh margin */
    margin-bottom: 30px;
}


/* Section Titles */
.section-title {
    color: var(--text-primary-color);
    margin-bottom: 18px; 
    padding-bottom: 0; /* Hapus padding bawah, border ditiadakan untuk kesan bersih */
    border-bottom: none; /* Hapus border bawah */
    font-weight: 600; /* Font weight lebih tebal dari teks biasa */
    font-size: 1.25rem; /* Ukuran font judul seksi diperkecil */
    display: flex;
    align-items: center;
    line-height: 1.3; /* Mengurangi line height agar lebih compact jika 2 baris */
}

/* Info Block */
.info-block {
    margin-bottom: 20px;
    padding-bottom: 20px;
    border-bottom: 1px solid var(--border-color);
}
.info-block:last-child {
    border-bottom: none;
    margin-bottom: 0;
    padding-bottom: 0;
}

.info-block h3 {
    color: var(--text-primary-color);
    margin-bottom: 8px;
    font-weight: 500; /* Font weight standar untuk subjudul */
    font-size: 1rem; 
}

.info-block p {
    margin-bottom: 8px;
    font-size: 0.9rem; 
    color: var(--text-secondary-color);
}
.info-block p strong {
    color: var(--text-primary-color);
    font-weight: 500;
}

.info-block code {
    background-color: var(--background-color); /* Latar code lebih netral */
    padding: 3px 6px;
    border-radius: var(--border-radius-small);
    font-family: 'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, Courier, monospace;
    color: var(--text-secondary-color);
    border: 1px solid var(--border-color);
    font-size: 0.85rem;
}

.note {
    font-size: 0.85rem;
    color: var(--text-tertiary-color);
    background-color: transparent; /* Transparan untuk note */
    padding: 8px 0; /* Padding vertikal saja */
    border-radius: 0;
    border-left: none; /* Hapus border kiri */
    border-top: 1px dashed var(--border-color); /* Garis putus-putus di atas */
    margin-top: 15px;
}

/* Copy Button */
.copy-btn {
    background-color: var(--button-secondary-bg);
    color: var(--button-secondary-text);
    border: 1px solid var(--border-color);
    padding: 6px 10px; 
    border-radius: var(--border-radius-small);
    cursor: pointer;
    font-size: 0.8rem; 
    font-weight: 500;
    margin-left: 8px;
    transition: background-color var(--transition-speed) ease, transform 0.1s ease;
    display: inline-flex;
    align-items: center;
}
.copy-btn .btn-icon { 
    fill: var(--button-secondary-text); 
}
.copy-btn:hover {
    background-color: #E5E5EA; /* Sedikit lebih gelap saat hover */
}
.copy-btn:active {
    transform: scale(0.97);
}

/* Support Section */
.support-section p {
    font-size: 0.9rem; 
    color: var(--text-secondary-color);
    margin-bottom: 15px;
}

/* Buttons (General & Specific) */
.btn {
    display: inline-flex; 
    align-items: center;
    justify-content: center;
    padding: 9px 18px; 
    text-decoration: none;
    border-radius: var(--border-radius-small); 
    font-weight: 500; 
    font-size: 0.85rem; 
    text-align: center;
    transition: background-color var(--transition-speed) ease, opacity var(--transition-speed) ease, transform var(--transition-speed) ease;
    border: none; 
    cursor: pointer;
}
.btn:hover {
    opacity: 0.85;
}
.btn:active {
    transform: scale(0.98);
    opacity: 1;
}

.btn-primary { /* Tombol dengan warna aksen utama */
    background-color: var(--primary-accent-color);
    color: var(--card-background-color);
}
.btn-primary:hover {
    background-color: #0062CC; /* Warna hover lebih gelap untuk primary */
}

.btn-secondary { /* Tombol netral/sekunder */
    background-color: var(--button-secondary-bg);
    color: var(--button-secondary-text);
    border: 1px solid var(--border-color);
}
.btn-secondary:hover {
    background-color: #E0E0E5;
}

.btn-whatsapp { /* Menggunakan style .btn-primary */
    width: auto; /* Tidak full width by default */
    max-width: none; 
    margin-top: 10px;
    display: inline-flex; /* Agar tidak full width jika teks pendek */
}


/* Semester Access */
.semester-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); 
    gap: 20px; 
}

.semester-card { /* Card styling sudah ada di atas */
    display: flex;
    flex-direction: column;
    transition: box-shadow 0.3s ease; /* Hanya transisi shadow */
}
.semester-card:hover {
    box-shadow: 0 4px 12px rgba(0,0,0,0.08); /* Shadow hover sedikit lebih jelas */
}

.semester-card h3 {
    color: var(--text-primary-color);
    margin-bottom: 8px;
    font-weight: 600;
    font-size: 1.1rem; 
    border-bottom: none; /* Hapus border bawah */
    padding-bottom: 0;
}
.semester-status {
    font-size: 0.8rem; 
    color: var(--text-tertiary-color);
    margin-bottom: 12px;
}
.update-date { 
    color: var(--text-secondary-color); 
    font-weight: 500;
}

.links {
    display: flex;
    flex-direction: column;
    gap: 8px; 
    margin-top: auto; 
}


/* Footer */
footer {
    background-color: var(--background-color); /* Footer dengan warna background utama */
    color: var(--text-tertiary-color);
    text-align: center;
    padding: 1.5rem 0;
    margin-top: auto; 
    border-top: 1px solid var(--border-color); /* Border halus di atas footer */
}
footer p {
    font-size: 0.85rem;
    opacity: 1; /* Hapus opacity */
}

/* Responsive Adjustments */
@media (max-width: 768px) {
    body {
        font-size: 14px; /* Base font lebih kecil di mobile */
    }
    .container {
        width: 95%;
    }
    header {
        padding: 1.2rem 0; 
        margin-bottom: 20px;
    }
    header h1 {
        font-size: 1.3rem; 
    }
    header .subtitle {
        font-size: 0.85rem;
    }
    .card, .content-section {
        padding: 20px; 
        margin-bottom: 20px;
    }
    .section-title {
        font-size: 1.15rem; 
        margin-bottom: 15px;
    }
    .info-block p, .support-section p {
        font-size: 0.85rem;
    }
    .semester-grid {
        grid-template-columns: 1fr; 
    }
    .btn {
        padding: 8px 16px; 
        font-size: 0.8rem;
    }
    .copy-btn {
        padding: 5px 8px;
        font-size: 0.75rem;
    }
    .section-icon {
        width: 16px;
        height: 16px;
    }
}

@media (max-width: 480px) {
    header h1 {
        font-size: 1.2rem;
    }
    header .subtitle {
        font-size: 0.8rem;
    }
    .card, .content-section {
        padding: 15px;
    }
    .section-title {
        font-size: 1.1rem; 
    }
    .info-block h3 {
        font-size: 0.95rem;
    }
    .semester-card h3 {
        font-size: 1rem;
    }
    .btn {
        font-size: 0.75rem;
        padding: 7px 14px;
    }
}
