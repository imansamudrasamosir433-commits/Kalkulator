let screen = document.getElementById("screen");

// Menampilkan angka atau simbol di layar
function display(value) {
    if (screen.value === "Error") screen.value = "";
    screen.value += value;
}

// Menghapus seluruh layar
function clearScreen() {
    screen.value = "";
}

// Menghapus karakter terakhir (Backsapce)
function deleteLastNode() {
    screen.value = screen.value.slice(0, -1);
}

// Melakukan kalkulasi matematika
function calculate() {
    try {
        // Menggunakan eval() untuk memproses string matematika
        // Pastikan input hanya karakter matematika yang valid
        screen.value = eval(screen.value);
    } catch (error) {
        screen.value = "Error";
    }
}
