// free QR code generator api = QR server API ("https://api.qrserver.com/v1/create-qr-code/")


const qrText = document.getElementById("qrText");
const generateBtn = document.getElementById("generateBtn");
const qrImage = document.getElementById("qrImage");
const downloadBtn = document.getElementById("downloadBtn");

generateBtn.addEventListener("click", generateQR);

function generateQR() {

    let text = qrText.value.trim();

    if (text === "") {
        alert("Please enter some text");
        return;
    }

    qrImage.src =
        `https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=${encodeURIComponent(text)}`;

    qrImage.style.display = "block";
    downloadBtn.style.display = "block";


}

downloadBtn.addEventListener("click", function () {

    const link = document.createElement("a");

    link.href = qrImage.src;
    link.download = "QRCode.png";

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});