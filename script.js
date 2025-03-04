// Fungsi untuk memulai VR
document.getElementById('start-button').addEventListener('click', function() {
    document.getElementById('start-screen').style.display = 'none';
    document.getElementById('vr-scene').style.display = 'block';
});

function showDescription(objId) {
    let desc = document.getElementById('desc-' + objId);
    if (desc.getAttribute('visible') === "true") {
        desc.setAttribute('visible', "false");
    } else {
        desc.setAttribute('visible', "true");
    }
}
// Fungsi untuk berpindah ke titik navigasi
function moveTo(x, y, z) {
    document.getElementById("cameraRig").setAttribute("position", { x: x, y: y, z: z });
}

function showDescription(id) {
    let desc = document.getElementById("desc-" + id);
    let clone = document.getElementById("clone-"+ id);
    let isVisible = desc.getAttribute("visible");
    let sound = desc.components.sound;

    if (!isVisible) {
        desc.setAttribute("visible", true);
        clone.setAttribute("visible", true);
        desc.emit("showText"); // Memicu animasi deskripsi
        clone.emit("showText"); // Memicu animasi duplikat artefak
        sound.playSound(); // Memainkan suara
    } else {
        desc.emit("hideText"); // Memicu animasi menghilang
        clone.emit("hideText"); // Memicu animasi menghilang
        setTimeout(() => {
            desc.setAttribute("visible", false);
            clone.setAttribute("visible", false);
        }, 500); // Sembunyikan setelah animasi selesai
        sound.stopSound(); // Menghentikan suara
    }
}

