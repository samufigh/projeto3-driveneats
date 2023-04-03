let pedidoPronto=false;
let prato=null;
let bebida=null;
let sobremesa=null;
let=valorTotal=null;
let msg="";

function selecionarPrato(caixa){
    let caixaSelecionadaAnteriormente=document.querySelector('.pratos .borda');
    if(caixaSelecionadaAnteriormente!== null){
        caixaSelecionadaAnteriormente.classList.remove('borda');
    }

    let selecionar=caixa;
    selecionar.classList.add("borda");
    fecharPedido();
}

function selecionarBebida(caixa){
    let caixaSelecionadaAnteriormente=document.querySelector('.bebidas .borda');
    if(caixaSelecionadaAnteriormente!== null){
        caixaSelecionadaAnteriormente.classList.remove('borda');
    }

    let selecionar=caixa;
    selecionar.classList.add("borda");
    fecharPedido();
}

function selecionarSobremesa(caixa){
    let caixaSelecionadaAnteriormente=document.querySelector('.sobremesas .borda');
    if(caixaSelecionadaAnteriormente!== null){
        caixaSelecionadaAnteriormente.classList.remove('borda');
    }

    let selecionar=caixa;
    selecionar.classList.add("borda");
    fecharPedido();
}

//verificar se os 3 seletores estao selecionados
function fecharPedido(){

    const pratoSelecionado = document.querySelector('.pratos .borda');   
    const bebidaSelecionada = document.querySelector('.bebidas .borda');
    const sobremesaSelecionada = document.querySelector('.sobremesas .borda');
    
    if (pratoSelecionado!==null){
        if (bebidaSelecionada!==null){
            if(sobremesaSelecionada!==null){
               let botaoFecharPedido = document.querySelector('.botao');
                botaoFecharPedido.classList.add('fecharPedido');

                let conteudo= document.querySelector('.texto1');
                conteudo.innerHTML = "Fechar pedido";

                botaoFecharPedido.disabled=false;
            }
        }
    }

}
function finalizarPedido(){
    const x=document.querySelector('.none');
    x.classList.remove('none');

    //trocar nome do prato
    const pratoSelecionado = document.querySelector('.pratos .borda h1');
    prato=pratoSelecionado.innerHTML;
    const pratoFinal = document.querySelector('.prato h2');
    pratoFinal.innerHTML=prato;
    //trocar preço do prato
    const preco1Selecionado = document.querySelector('.pratos .borda h2 span')
    const preco1 = preco1Selecionado.innerHTML;
    const preco1Final = document.querySelector('.prato h3');
    preco1Final.innerHTML=preco1;


    //trocar nome da bebida
    const bebidaSelecionada = document.querySelector('.bebidas .borda h1');
    bebida=bebidaSelecionada.innerHTML;
    const bebidaFinal = document.querySelector('.bebida h2');
    bebidaFinal.innerHTML=bebida;
    //trocar preço da bebida
    const preco2Selecionado = document.querySelector('.bebidas .borda h2 span')
    const preco2 = preco2Selecionado.innerHTML;
    const preco2Final = document.querySelector('.bebida h3');
    preco2Final.innerHTML=preco2;


    //trocar nome da sobremesa
    const sobremesaSelecionada = document.querySelector('.sobremesas .borda h1');
    sobremesa=sobremesaSelecionada.innerHTML;
    const sobremesaFinal = document.querySelector('.sobremesa h2');
    sobremesaFinal.innerHTML=sobremesa;
    //trocar preço da sobremesa
    const preco3Selecionado = document.querySelector('.sobremesas .borda h2 span')
    const preco3 = preco3Selecionado.innerHTML;
    const preco3Final = document.querySelector('.sobremesa h3');
    preco3Final.innerHTML= preco3;

    //trocar valor total
    valorTotal= Number(preco1)+Number(preco2)+Number(preco3);
    const total = document.querySelector('.total h3');
    total.innerHTML= "R$ "+valorTotal;

    msg = `Olá, gostaria de fazer o pedido: \n - Prato: ${prato} \n- Bebida: ${bebida} \n- Sobremesa: ${sobremesa} \nTotal: R$ ${valorTotal}`;
}

function cancelar(){
    const voltar=document.querySelector('.aux');
    voltar.classList.add('none');
}
function finalizar(){
    window.open("https://wa.me/5519994330867?text=" + encodeURI(msg));
}

