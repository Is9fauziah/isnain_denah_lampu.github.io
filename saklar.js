// Variabel Ruang Tamu 

// Saklar
let toggle1Tamu = document.getElementById("toggle1Tamu");
let toggle2Tamu = document.getElementById("toggle2Tamu");
let toggle3Tamu = document.getElementById("toggle3Tamu");
let toggle4Tamu = document.getElementById("toggle4Tamu");
let toggleUtamaTamu = document.getElementById("toggleUtamaTamu");
// Lampu
let lampu1Tamu = document.getElementById("lampu1Tamu");
let lampu2Tamu = document.getElementById("lampu2Tamu");
let lampu3Tamu = document.getElementById("lampu3Tamu");
let lampu4Tamu = document.getElementById("lampu4Tamu");

// Variabel Ruang Keluarga

// Saklar
let toggle1Keluarga = document.getElementById("toggle1Keluarga");
let toggle2Keluarga = document.getElementById("toggle2Keluarga");
let toggle3Keluarga = document.getElementById("toggle3Keluarga");
let toggleUtamaKeluarga = document.getElementById("toggleUtamaKeluarga");
// Lampu
let lampu1Keluarga = document.getElementById("lampu1Keluarga");
let lampu2Keluarga = document.getElementById("lampu2Keluarga");
let lampu3Keluarga = document.getElementById("lampu3Keluarga");

// Variabel Ruang Makan

// Saklar
let toggle1Makan = document.getElementById("toggle1Makan");
let toggleUtamaMakan = document.getElementById("toggleUtamaMakan");
// Lampu
let lampu1Makan = document.getElementById("lampu1Makan");

// Variabel Ruang Tidur

// Saklar
let toggle1Tidur = document.getElementById("toggle1Tidur");
let toggle2Tidur = document.getElementById("toggle2Tidur");
let toggleUtamaTidur = document.getElementById("toggleUtamaTidur");
// Lampu
let lampu1Tidur = document.getElementById("lampu1Tidur");
let lampu2Tidur = document.getElementById("lampu2Tidur");


// potongan kode ini untuk menghidupkan dan mematikan lampu dari tombol saklar biasa satu-satu
function updateLampu(toggle, lampu) {
    if (toggle.checked) {
        lampu.src = "assets/images/on.gif";
    } else {
        lampu.src = "assets/images/off.gif";
    }
}

// potongan kode ini untuk mensinkronkan antara tombol saklar biasa dan saklar utama setiap ruangan
function sinkronSaklar() {
    // Sinkronisasi Ruang Tamu
    if (toggle1Tamu.checked && toggle2Tamu.checked && toggle3Tamu.checked && toggle4Tamu.checked) {
        toggleUtamaTamu.checked = true;
    }
    if (!toggle1Tamu.checked && !toggle2Tamu.checked && !toggle3Tamu.checked && !toggle4Tamu.checked) {
        toggleUtamaTamu.checked = false;
    }

    // Sinkronisasi Ruang Keluarga
    if (toggle1Keluarga.checked && toggle2Keluarga.checked && toggle3Keluarga.checked) {
        toggleUtamaKeluarga.checked = true;
    }
    if (!toggle1Keluarga.checked && !toggle2Keluarga.checked && !toggle3Keluarga.checked) {
        toggleUtamaKeluarga.checked = false;
    }

    // Sinkronisasi Ruang Makan
    if (toggle1Makan.checked) {
        toggleUtamaMakan.checked = true;
    }
    if (!toggle1Makan.checked) {
        toggleUtamaMakan.checked = false;
    }
    
    // Sinkronisasi Ruang Tidur
    if (toggle1Tidur.checked && toggle2Tidur.checked) {
        toggleUtamaTidur.checked = true;
    }
    if (!toggle1Tidur.checked && !toggle2Tidur.checked) {
        toggleUtamaTidur.checked = false;
    }
}

// potongan kode ini untuk memanggil function update lampu dan sinkron saklar
function saklarBiasa() {
    // Update lampu Ruang Tamu
    updateLampu(toggle1Tamu, lampu1Tamu);
    updateLampu(toggle2Tamu, lampu2Tamu);
    updateLampu(toggle3Tamu, lampu3Tamu);
    updateLampu(toggle4Tamu, lampu4Tamu);

    // Update lampu Ruang Keluarga
    updateLampu(toggle1Keluarga, lampu1Keluarga);
    updateLampu(toggle2Keluarga, lampu2Keluarga);
    updateLampu(toggle3Keluarga, lampu3Keluarga);

    // Update lampu Ruang Makan
    updateLampu(toggle1Makan, lampu1Makan);

    // Update lampu Ruang Tidur
    updateLampu(toggle1Tidur,lampu1Tidur);
    updateLampu(toggle2Tidur,lampu2Tidur);

    // pemanggilan sinkronSaklar agar setiap saklar bisa yang bisa di on off bisa langsung tersinkron dengan saklar utamanya
    sinkronSaklar();

}


// Untuk meng-overide semua tombol di Ruang Tamu
function saklarTamu() {
    // potongan kode ini untuk meng-overide semua tombol saklar biasa ke on dan menghidupkan semua lampu
    if (toggleUtamaTamu.checked) {
        toggle1Tamu.checked = true;
        toggle2Tamu.checked = true;
        toggle3Tamu.checked = true;
        toggle4Tamu.checked = true;
        // pemanggilan saklarBiasa dilakukan agar setelah di overide saklar biasa tetap bisa berfungsi 
        saklarBiasa();

    }
    // potongan kode ini untuk meng-overide semua tombol saklar biasa ke off dan mematikan semua lampu
    else {
        toggle1Tamu.checked = false;
        toggle2Tamu.checked = false;
        toggle3Tamu.checked = false;
        toggle4Tamu.checked = false;
        saklarBiasa();
    }
}

// Untuk meng-overide semua tombol di Ruang Keluarga
function saklarKeluarga() {
    if (toggleUtamaKeluarga.checked) {
        toggle1Keluarga.checked = true;
        toggle2Keluarga.checked = true;
        toggle3Keluarga.checked = true;
        saklarBiasa();

    }
    else {
        toggle1Keluarga.checked = false;
        toggle2Keluarga.checked = false;
        toggle3Keluarga.checked = false;
        saklarBiasa();
    }
}

// Untuk meng-overide semua tombol di Ruang Makan
function saklarMakan() {
    if (toggleUtamaMakan.checked) {
        toggle1Makan.checked = true;
        saklarBiasa();
    }
    else {
        toggle1Makan.checked = false;
        saklarBiasa();
    }
}

// Untuk meng-overide semua tombol di Ruang Tidur
function saklarTidur(){
    if(toggleUtamaTidur.checked){
        toggle1Tidur.checked = true;
        toggle2Tidur.checked = true;
        saklarBiasa();
    }
    else{
        toggle1Tidur.checked = false;
        toggle2Tidur.checked = false;
        saklarBiasa();
    }
}