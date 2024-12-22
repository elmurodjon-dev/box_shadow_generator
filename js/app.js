// DOM elementlarini olish
const horizontalShadow = document.getElementById('horizontal-shadow');
const verticalShadow = document.getElementById('vertical-shadow');
const blurRadius = document.getElementById('blur-radius');
const spreadRadius = document.getElementById('spread-radius');
const shadowColor = document.getElementById('shadow-color');
const shadowOpacity = document.getElementById('shadow-color-opacity');
const box = document.getElementById('box'); // Soyaga qo'llaniladigan element

// Shadowni yangilovchi funksiya
function updateBoxShadow() {
    const hShadow = horizontalShadow.value; // Gorizontal soyani o'lchami
    const vShadow = verticalShadow.value; // Vertikal soyani o'lchami
    const blur = blurRadius.value; // Blur radiusi
    const spread = spreadRadius.value; // Spread radiusi
    const color = shadowColor.value; // Rang
    const opacity = shadowOpacity.value; // Rangning opasiti

    // Rangni RGBA formatiga aylantirish
    const rgbaColor = hexToRgba(color, opacity);

    // Yaratilgan box-shadow qiymati
    const boxShadowValue = `${hShadow}px ${vShadow}px ${blur}px ${spread}px ${rgbaColor}`;

    // Box elementiga shadow qo'llash
    box.style.boxShadow = boxShadowValue;
}

// HEX rangni RGBA formatiga aylantirish funksiyasi
function hexToRgba(hex, opacity) {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `rgba(${r}, ${g}, ${b}, ${opacity})`;
}

// Har bir inputga event listener qo'shish
const inputs = [horizontalShadow, verticalShadow, blurRadius, spreadRadius, shadowColor, shadowOpacity];

inputs.forEach(input => {
    input.addEventListener('input', updateBoxShadow);
});

// Dastlabki shadow qiymatini qo'llash
updateBoxShadow();

