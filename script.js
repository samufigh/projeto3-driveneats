function selecionarPrato(caixa){
    let caixaSelecionadaAnteriormente=document.querySelector('.pratos .borda');
    if(caixaSelecionadaAnteriormente!== null){
        caixaSelecionadaAnteriormente.classList.remove('borda');
    }

    let selecionar=caixa;
    selecionar.classList.add("borda");
}

function selecionarBebida(caixa){
    let caixaSelecionadaAnteriormente=document.querySelector('.bebidas .borda');
    if(caixaSelecionadaAnteriormente!== null){
        caixaSelecionadaAnteriormente.classList.remove('borda');
    }

    let selecionar=caixa;
    selecionar.classList.add("borda");
}

function selecionarSobremesa(caixa){
    let caixaSelecionadaAnteriormente=document.querySelector('.sobremesas .borda');
    if(caixaSelecionadaAnteriormente!== null){
        caixaSelecionadaAnteriormente.classList.remove('borda');
    }

    let selecionar=caixa;
    selecionar.classList.add("borda");
}