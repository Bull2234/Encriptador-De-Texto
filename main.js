let texto = "";
let PonerTexto = "";
let copiatexto = "";

function EncriptarCadena(cadena) {
    let matriz = [
        ["e", "enter"],
        ["i", "imes"],
        ["a", "ai"],
        ["o", "ober"],
        ["u", "ufat"],
    ];
    cadena = cadena.toLowerCase();
    for (let i = 0; i < matriz.length; i++) {
        if (cadena.includes(matriz[i][0])) {
            cadena = cadena.replaceAll(matriz[i][0], matriz[i][1]);
        }
    }
    return cadena;
}

function DesEncriptarCadena(cadena) {
    let matriz = [
        ["enter", "e"],
        ["imes", "i"],
        ["ai", "a"],
        ["ober", "o"],
        ["ufat", "u"],
    ];
    cadena = cadena.toLowerCase();
    for (let i = 0; i < matriz.length; i++) {
        if (cadena.includes(matriz[i][0])) {
            cadena = cadena.replaceAll(matriz[i][0], matriz[i][1]);
        }
    }
    return cadena;
}

function Encriptar() {
    texto = document.getElementById("txtarea");
    if (texto.value.trim() === "") {
        alert("Por favor, ingresa un texto para Encriptar.");
        texto.style.backgroundColor = "#41B8BD";
    } else {
        texto.style.backgroundColor = "#ffffff";
        copiatexto = EncriptarCadena(texto.value);
        PonerTexto = document.querySelector(".txt2");
        PonerTexto.innerHTML = copiatexto;
        texto.value = "";
        PonerTexto.style.backgroundImage = "none";
        let ocultar = document.querySelector(".contenedorparrafo");
        ocultar.style.display = "none";
    }
}

function Desencriptar() {
    texto = document.getElementById("txtarea");
    if (texto.value.trim() === "") {
        alert("Por favor, ingresa un texto para Desencriptar.");
        texto.style.backgroundColor = "#FFB8BD";
    } else {
        texto.style.backgroundColor = "#ffffff";
        copiatexto = DesEncriptarCadena(texto.value);
        PonerTexto = document.querySelector(".txt2");
        PonerTexto.innerHTML = copiatexto;
        texto.value = "";
    }
}

function Copiar() {
    texto = document.getElementById("Texto2");
    if (texto.value.trim() === "") {
        alert("Campo vacio.");
        texto.style.backgroundColor = "#C9FFE5";
    } else {
        var blob = new Blob([texto.value], { type: "text/plain" });

        // Escribir el objeto `Blob` en el portapapeles
        navigator.clipboard
            .write([new ClipboardItem({ "text/plain": blob })])
            .then(
                function () {
                    // Mostrar mensaje de éxito
                    alert("¡Texto copiado al portapapeles!");
                },
                function () {
                    // Mostrar mensaje de error
                    alert("Error al copiar al portapapeles.");
                }
            );
    }
}
