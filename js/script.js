function calculateLuas() {
    const luasSideLength = parseFloat(document.getElementById('luasSideLength').value);

    if (isNaN(luasSideLength) || luasSideLength <= 0) {
        alert("Please enter a valid positive number for side length.");
        return;
    }

    const luas = luasSideLength * luasSideLength;

    const luasResultElement = document.getElementById('luasResult');
    luasResultElement.innerHTML = `Luas: ${luas}`;
}

function calculateKeliling() {
    const kelilingSideLength = parseFloat(document.getElementById('kelilingSideLength').value);

    if (isNaN(kelilingSideLength) || kelilingSideLength <= 0) {
        alert("Please enter a valid positive number for side length.");
        return;
    }

    const keliling = 4 * kelilingSideLength;

    const kelilingResultElement = document.getElementById('kelilingResult');
    kelilingResultElement.innerHTML = `Keliling: ${keliling}`;
}

function resetForm() {
    var kelilingSideLengthInput = document.getElementById('kelilingSideLength');
    var kelilingResultElement = document.getElementById('kelilingResult');
    var luasSideLengthInput = document.getElementById('luasSideLength');
    var luasResultElement = document.getElementById('kelilingResult');

    if (kelilingSideLengthInput) {
        kelilingSideLengthInput.value = '';
    }

    if (luasSideLengthInput) {
        luasSideLengthInput.value = '';
    }

    if (kelilingResultElement) {
        kelilingResultElement.innerHTML = '';
    }
// 
    if (luasResultElement) {
        luasResultElement.innerHTML = '';
    }
}

