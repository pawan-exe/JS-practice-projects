const qrContainer = document.querySelector(".qr-container");
const qrTextInput = document.querySelector(".qr-text");
const generateQrBtn = document.querySelector(".generate-qr-btn");
const errorMessage = document.querySelector(".error-message");

generateQrBtn.addEventListener("click", () => {
  validateInputField();
});

function validateInputField() {
  console.log(qrTextInput.value);
  if (qrTextInput.value.trim().length > 0) {
    generateQRCode();
  } else {
    errorMessage.textContent = "Enter text or use some URL to generate QR code";
  }
}

function generateQRCode() {
  qrContainer.innerHTML = "";

  new QRCode(qrContainer, {
    text: qrTextInput.value,
    height: 400,
    width: 400,
    colorLight: "#fff",
    colorDark: "#000",
  });
  qrTextInput.value = "";
  errorMessage.value = "";
}
