function copyToClipboard(elementId, buttonElement) {
    const textToCopy = document.getElementById(elementId).innerText;
    const iconElement = buttonElement.querySelector('[class^="icon-"]');
    const originalIconClass = iconElement ? iconElement.className : null;
    
    navigator.clipboard.writeText(textToCopy).then(() => {
        const originalText = buttonElement.textContent.trim(); // Trim untuk menghapus spasi ekstra
        
        // Mengambil hanya teks tanpa ikon
        let textNode = null;
        for(let node of buttonElement.childNodes) {
            if(node.nodeType === Node.TEXT_NODE && node.textContent.trim() !== "") {
                textNode = node;
                break;
            }
        }
        const originalButtonText = textNode ? textNode.textContent.trim() : "Salin";


        if (iconElement) iconElement.className = 'icon-checkmark'; // Ganti dengan ikon centang
        if (textNode) textNode.textContent = ' Disalin!'; else buttonElement.childNodes[buttonElement.childNodes.length -1].textContent = ' Disalin!';

        buttonElement.style.backgroundColor = 'var(--success-color)';
        buttonElement.disabled = true;
        
        setTimeout(() => {
            if (iconElement && originalIconClass) iconElement.className = originalIconClass;
            if (textNode) textNode.textContent = ` ${originalButtonText}`; else buttonElement.childNodes[buttonElement.childNodes.length -1].textContent = ` ${originalButtonText}`;
            
            buttonElement.style.backgroundColor = 'var(--secondary-color)';
            buttonElement.disabled = false;
        }, 2000);
    }).catch(err => {
        console.error('Gagal menyalin teks: ', err);
        // Fallback jika navigator.clipboard tidak didukung atau gagal
        try {
            const textArea = document.createElement("textarea");
            textArea.value = textToCopy;
            textArea.style.position = "fixed"; // Prevent scrolling to bottom of page in MS Edge.
            textArea.style.top = "0";
            textArea.style.left = "0";
            textArea.style.opacity = "0"; // Make it invisible
            document.body.appendChild(textArea);
            textArea.focus();
            textArea.select();
            document.execCommand('copy');
            document.body.removeChild(textArea);

            // Visual feedback (sama seperti di atas)
            const originalText = buttonElement.textContent.trim();
            let textNode = null;
            for(let node of buttonElement.childNodes) {
                if(node.nodeType === Node.TEXT_NODE && node.textContent.trim() !== "") {
                    textNode = node;
                    break;
                }
            }
            const originalButtonText = textNode ? textNode.textContent.trim() : "Salin";

            if (iconElement) iconElement.className = 'icon-checkmark';
            if (textNode) textNode.textContent = ' Disalin!'; else buttonElement.childNodes[buttonElement.childNodes.length -1].textContent = ' Disalin!';

            buttonElement.style.backgroundColor = 'var(--success-color)';
            buttonElement.disabled = true;
            
            setTimeout(() => {
                if (iconElement && originalIconClass) iconElement.className = originalIconClass;
                if (textNode) textNode.textContent = ` ${originalButtonText}`; else buttonElement.childNodes[buttonElement.childNodes.length -1].textContent = ` ${originalButtonText}`;

                buttonElement.style.backgroundColor = 'var(--secondary-color)';
                buttonElement.disabled = false;
            }, 2000);

        } catch (e) {
            alert('Gagal menyalin teks. Browser Anda mungkin tidak mendukung fitur ini atau ada batasan keamanan. Coba salin manual.');
        }
    });
}

// Dinamisasi tahun di footer
document.getElementById('currentYear').textContent = new Date().getFullYear();

// Animasi tombol (opsional, karena CSS sudah menangani hover & active)
// Jika ingin mempertahankan JS untuk animasi tekan yang lebih spesifik:
document.querySelectorAll('.btn, .copy-btn').forEach(button => {
    button.addEventListener('mousedown', function() {
        // CSS :active sudah cukup baik, tapi jika ingin efek JS tambahan:
        // this.style.transform = 'scale(0.97) translateY(1px)'; 
    });
    button.addEventListener('mouseup', function() {
        // this.style.transform = ''; // Reset oleh CSS :hover atau state normal
    });
    button.addEventListener('mouseleave', function() {
        // this.style.transform = ''; // Pastikan reset jika mouse keluar saat ditekan
    });
});

// Menambahkan ikon centang jika belum ada di CSS
// (Pastikan CSS Anda memiliki definisi untuk .icon-checkmark jika menggunakan ini)
const styleSheet = document.createElement("style");
styleSheet.innerText = `.icon-checkmark::before { content: "✔️"; }`; // Ganti dengan SVG atau karakter yang lebih baik jika perlu
document.head.appendChild(styleSheet);
