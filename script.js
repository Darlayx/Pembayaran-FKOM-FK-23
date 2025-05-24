function copyToClipboard(elementId, buttonElement) {
    const textToCopy = document.getElementById(elementId).innerText;
    
    const copyIcon = buttonElement.querySelector('#copyIcon');
    const copiedIcon = buttonElement.querySelector('#copiedIcon');
    const textSpan = buttonElement.querySelector('.copy-text');
    const originalButtonText = textSpan.innerText;

    navigator.clipboard.writeText(textToCopy).then(() => {
        if (copyIcon) copyIcon.style.display = 'none';
        if (copiedIcon) copiedIcon.style.display = 'inline-block';
        textSpan.innerText = 'Disalin!';
        buttonElement.style.backgroundColor = 'var(--success-color)';
        buttonElement.disabled = true;
        
        setTimeout(() => {
            if (copyIcon) copyIcon.style.display = 'inline-block';
            if (copiedIcon) copiedIcon.style.display = 'none';
            textSpan.innerText = originalButtonText;
            buttonElement.style.backgroundColor = 'var(--secondary-color)';
            buttonElement.disabled = false;
        }, 2000);
    }).catch(err => {
        console.error('Gagal menyalin teks: ', err);
        // Fallback
        try {
            const textArea = document.createElement("textarea");
            textArea.value = textToCopy;
            textArea.style.position = "fixed"; 
            textArea.style.top = "0";
            textArea.style.left = "0";
            textArea.style.opacity = "0";
            document.body.appendChild(textArea);
            textArea.focus();
            textArea.select();
            document.execCommand('copy');
            document.body.removeChild(textArea);

            if (copyIcon) copyIcon.style.display = 'none';
            if (copiedIcon) copiedIcon.style.display = 'inline-block';
            textSpan.innerText = 'Disalin!';
            buttonElement.style.backgroundColor = 'var(--success-color)';
            buttonElement.disabled = true;
            
            setTimeout(() => {
                if (copyIcon) copyIcon.style.display = 'inline-block';
                if (copiedIcon) copiedIcon.style.display = 'none';
                textSpan.innerText = originalButtonText;
                buttonElement.style.backgroundColor = 'var(--secondary-color)';
                buttonElement.disabled = false;
            }, 2000);

        } catch (e) {
            alert('Gagal menyalin teks. Browser Anda mungkin tidak mendukung fitur ini. Coba salin manual.');
        }
    });
}

document.getElementById('currentYear').textContent = new Date().getFullYear();

// Animasi tombol (opsional, CSS :active sudah cukup)
document.querySelectorAll('.btn, .copy-btn').forEach(button => {
    button.addEventListener('mousedown', function() {
        // this.style.transform = 'scale(0.97) translateY(1px)'; 
    });
    button.addEventListener('mouseup', function() {
        // this.style.transform = ''; 
    });
    button.addEventListener('mouseleave', function() {
        // this.style.transform = ''; 
    });
});

// Tidak perlu styleSheet lagi untuk icon checkmark karena sudah SVG
