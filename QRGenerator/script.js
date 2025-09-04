// code modern js
const wrapper = document.querySelector(".wrapper"),
  qrInput = wrapper.querySelector(".form input"),
  qrImg = wrapper.querySelector(".qr-code img"),
  generateBtn = wrapper.querySelector(".form button");

async function generateQRCode(value) {
  try {
    setButtonState("loading");
    const response = await fetch(
      `https://api.qrserver.com/v1/create-qr-code/?size=170x170&data=${encodeURIComponent(value)}`
    );
    
    if (!response.ok) throw new Error("QR API failed");

    const blob = await response.blob();
    qrImg.src = URL.createObjectURL(blob);
    

    qrImg.onload = () => {
      wrapper.classList.add("active");
      setButtonState("ready");
    };
    
  } catch (error) {
    console.error(error);
    setButtonState("error");
  }
}

function setButtonState(state) {
  if (state === "loading") generateBtn.innerText = "Generating QR Code...";
  if (state === "ready") generateBtn.innerText = "Generate QR Code";
  if (state === "error") generateBtn.innerText = "Error! Try Again";
}

generateBtn.addEventListener("click", () => {
  const value = qrInput.value.trim();
  if (!value) return;
  generateQRCode(value);
});

let debounceTimer;
qrInput.addEventListener("input", () => {
  clearTimeout(debounceTimer);
  debounceTimer = setTimeout(() => {
    if (!qrInput.value.trim()) {
      wrapper.classList.remove("active");
    }
  }, 300);
});
