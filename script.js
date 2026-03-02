let imgBox = document.getElementById("imgBox");
let qrImage = document.getElementById("qrImage");
let qrText = document.getElementById("qrText");

function generateQR() {
    // Check if the input field has a value
    if(qrText.value.length > 0) {
        
        // UPDATED API LINK: Using QuickChart.io instead
        qrImage.src = "https://quickchart.io/qr?text=" + encodeURIComponent(qrText.value) + "&size=200";
        
        // Adds a class to show the image with a smooth transition
        imgBox.classList.add("show-img");
        
    } else {
        // Triggers the shake animation for an empty input
        qrText.classList.add("error");
        
        // Removes the shake animation class after 1 second so it can be re-triggered later
        setTimeout(() => {
            qrText.classList.remove("error");
        }, 1000);
    }
}