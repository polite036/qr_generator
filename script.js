let imgBox = document.getElementById("imgBox");
let qrImage = document.getElementById("qrImage");
let qrText = document.getElementById("qrText");

function generateQR() {
    if(qrText.value.length > 0) {
        qrImage.src = "https://quickchart.io/qr?text=" + encodeURIComponent(qrText.value) + "&size=200";      
        imgBox.classList.add("show-img");
        
    } else {
        qrText.classList.add("error");
        setTimeout(() => {
            qrText.classList.remove("error");
        }, 1000);
    }
}
