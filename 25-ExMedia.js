/*let nota1 = 8;
let nota2 = 4;
let nota3 = 5;
let nota4 = 2;

function media(n1,n2,n3,n4){
    let calcMedia = (n1 + n2 + n3 + n4)/4;
    console.log(`A média dos alunos é: ${calcMedia.toFixed(2)}`);  
    return calcMedia;
}
media(nota1,nota2,nota3,nota4); */

function media(n1,n2,n3,n4){
    try{
        let calcMedia = (n1 + n2 + n3 + n4)/4;
    console.log(`A média dos alunos é: ${calcMedia.toFixed(2)}`);  
    return calcMedia;
    }
    catch (e){
        console.log("Erro ao calcular Media")
        console.log(e);
    }
}



