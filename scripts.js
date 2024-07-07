/* 
La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat" 
*/ 

document.getElementById('encriptar').addEventListener('click', function() {
    const inputTexto = document.getElementById('inputTexto').value;

    const reemplazarLetras = (texto) => {
        return texto
            .replace(/e/g, 'enter')
            .replace(/i/g, 'imes')
            .replace(/a/g, 'ai')
            .replace(/o/g, 'ober')
            .replace(/u/g, 'ufat');
    };

    const textoTransformado = reemplazarLetras(inputTexto);

    const mensajeEncriptado = document.getElementById('mensaje');
    mensajeEncriptado.innerHTML = `
        <div class="mensaje__box encriptado">
            <p class="mensaje__box__texto3">${textoTransformado}</p>
            <button class="mensaje__box__copiar" id="copiarTexto">Copiar texto</button>
        </div>
    `;

    document.getElementById('copiarTexto').addEventListener('click', function() {
        navigator.clipboard.writeText(textoTransformado).then(() => {
            alert('Texto copiado al portapapeles');
        });
    });
});

document.getElementById('desencriptar').addEventListener('click', function() {
    const inputTexto = document.getElementById('inputTexto').value;

    const revertirLetras = (texto) => {
        return texto
            .replace(/enter/g, 'e')
            .replace(/imes/g, 'i')
            .replace(/ai/g, 'a')
            .replace(/ober/g, 'o')
            .replace(/ufat/g, 'u');
    };

    const textoOriginal = revertirLetras(inputTexto);

    const mensajeEncriptado = document.getElementById('mensaje');
    mensajeEncriptado.innerHTML = `
        <div class="mensaje__box encriptado">
            <p class="mensaje__box__texto3">${textoOriginal}</p>
            <button class="mensaje__box__copiar" id="copiarTexto">Copiar texto</button>
        </div>
    `;

    document.getElementById('copiarTexto').addEventListener('click', function() {
        navigator.clipboard.writeText(textoOriginal).then(() => {
            alert('Texto copiado al portapapeles');
        });
    });
});
