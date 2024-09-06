$(document).ready(() => {
    const botao = $('button');
    const compra = $('#compra');

    let cont = 0

    botao.click(function() {
        cont += 1

        compra.html(`<p>${cont}</p>`)
    });
});