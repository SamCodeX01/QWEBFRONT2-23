
const n1 = 10;
const n2 = 20;
const n3 = 30;
const n4 = 40;

function somar(n1,n2){
    const resultado = n1 + n2;
    console.log(resultado);
}

function multiplicar(m1,m2){
    const resultado = m1 * m2;
    console.log(resultado);
}
multiplicar(n3,n4);

function exibirDataAtual(){
    const data = new Date();
    const hoje = data.getDate();
    const mes = data.getMonth();
    const ano = data.getFullYear();
    const dataCompleta = hoje + mes + ano;
    return dataCompleta;
}

