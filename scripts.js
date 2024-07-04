/* 
La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat" 
*/ 

document.getElementById('encriptar').addEventListener('click', function(){
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
        <div class="mensaje__box">
            <p class="mensaje__box__texto3">${textoTransformado}</p>
        </div>
    `;
});
