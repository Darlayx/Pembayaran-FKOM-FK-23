function copyToClipboard(elementId, buttonElement) {
    const textToCopy = document.getElementById(elementId).innerText;
    
    navigator.clipboard.writeText(textToCopy).then(() => {
        // Sukses menyalin
        const originalText = buttonElement.innerText;
        buttonElement.innerText = 'Disalin!';
        buttonElement.style.backgroundColor = 'var(--success-color)'; // Warna hijau untuk feedback
        
        setTimeout(() => {
            buttonElement.innerText = originalText;
            buttonElement.style.backgroundColor = 'var(--secondary-color)'; // Kembalikan warna asli
        }, 2000); // Kembalikan teks tombol setelah 2 detik
    }).catch(err => {
        // Gagal menyalin
        console.error('Gagal menyalin teks: ', err);
        alert('Gagal menyalin teks. Coba salin manual.');
    });
}

// Tambahkan event listener untuk animasi tombol saat ditekan
document.querySelectorAll('.btn, .copy-btn').forEach(button => {
    button.addEventListener('mousedown', function() {
        this.style.transform = 'scale(0.95) translateY(0)';
    });
    button.addEventListener('mouseup', function() {
        // Untuk .btn, kembalikan ke translateY(-2px) jika hover, jika tidak, biarkan default
        if (this.classList.contains('btn') && this.matches(':hover')) {
            this.style.transform = 'translateY(-2px)';
        } else {
            this.style.transform = '';
        }
    });
    // Untuk memastikan transform kembali normal jika mouse keluar saat ditekan
    button.addEventListener('mouseleave', function() {
         if (this.classList.contains('btn') && this.matches(':hover')) {
            this.style.transform = 'translateY(-2px)';
        } else {
            this.style.transform = '';
        }
    });
});