function show() {
    alert("ANDA MENEKAN TOMBOL BELI");
}

function updateClock() {
    var tanggal = new Date();
    document.getElementById("hasi").innerHTML = tanggal;
}

updateClock();

setInterval(updateClock,1000);