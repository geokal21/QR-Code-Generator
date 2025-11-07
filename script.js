const qrText = document.getElementById('qr-text');
const sizes = document.getElementById('sizes');
const generateBtn = document.getElementById('generateBtn');
const downloadBtn = document.getElementById('downloadBtn');
const qrContainer = document.querySelector('.qr-body');

let size = sizes.value;
//
generateBtn.addEventListener('click', (e) => {
    e.preventDefault();
    isEmptyInput();
});

sizes.addEventListener ('change', (e) => {
    size = e.target.value;
    isEmptyInput();
});

downloadBtn.addEventListener ('click', () => {
    let img = document.querySelector ('.qr-body img');

    if (img) {
        let imgAtrr = img.getAttribute ('src');
        downloadBtn.setAttribute ("href", imgAtrr);
        downloadBtn.setAttribute('download', 'QRCode.png');
    } else {
        let canvas = document.querySelector('canvas');
        if (canvas) {
            downloadBtn.setAttribute('href', canvas.toDataURL());
            downloadBtn.setAttribute('download', 'QRCode.png');
        }
    }
});

function isEmptyInput() {
    if (qrText.value.length > 0) {
        generateQRCode();
    } else {
        alert("Enter the text or URL to generate your QR code");
    } 
}

function generateQRCode() {
    qrContainer.innerHTML = "";
    new QRCode(qrContainer, {
        text: qrText.value, 
        height: size,
        width: size,
        colorLight: "#fff",
        colorDark: "#000"
    });
}