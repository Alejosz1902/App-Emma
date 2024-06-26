document.addEventListener("DOMContentLoaded", () => {
    const images = {
        boy: ["images/boy1.png", "images/boy2.png", "images/boy3.png", "images/boy4.png"],
        girl: ["images/girl1.png", "images/girl2.png", "images/girl3.png", "images/girl4.png"]
    };

    let currentImageIndex = 0;
    let currentGender = 'boy';

    function updateCharacter() {
        const name = document.getElementById('name').value;
        const gender = document.querySelector('input[name="gender"]:checked').value;
        const color = document.getElementById('color').value;

        if (name) {
            currentGender = gender;
            currentImageIndex = 0;
            document.getElementById('characterDisplay').classList.remove('hidden');
            document.getElementById('characterImage').src = images[gender][currentImageIndex];
            document.getElementById('childName').textContent = name;
            document.getElementById('childName').style.color = color;
        }
    }

    function nextImage() {
        currentImageIndex = (currentImageIndex + 1) % images[currentGender].length;
        document.getElementById('characterImage').src = images[currentGender][currentImageIndex];
    }

    function prevImage() {
        currentImageIndex = (currentImageIndex - 1 + images[currentGender].length) % images[currentGender].length;
        document.getElementById('characterImage').src = images[currentGender][currentImageIndex];
    }

    document.getElementById('characterImage').addEventListener('click', nextImage);
    window.updateCharacter = updateCharacter;
    window.nextImage = nextImage;
    window.prevImage = prevImage;
});
