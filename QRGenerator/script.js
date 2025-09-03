const wrapper = document.querySelector('.wrapper'),
qrInput = wrapper.querySelector('.form input'),
qrImg = wrapper.querySelector('.qr-code img'),
generateBtn = wrapper.querySelector('.form button');

generateBtn.addEventListener('click', () => {
    let qrValue = qrInput.value;
    if(!qrValue) return; //if the input field is empty then return from here
    generateBtn.innerText = 'Generating QR Code...';
    // get a QR code of user entered value using the QRserver api and passing api returned image src to qr image
    qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=170x170&data=${qrValue}`
    qrImg.addEventListener('load', () => {
        wrapper.classList.add('active');
        generateBtn.innerText = 'Generate QR Code';
    });
});

qrInput.addEventListener('keyup', () => {
    if(!qrInput.value){
        wrapper.classList.remove('active');
    }
})