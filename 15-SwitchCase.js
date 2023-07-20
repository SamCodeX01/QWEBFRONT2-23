const fruta = "Mamão";

/*if(fruta == "Mamão"){
    console.log("O preço do mamão é de R$ 10,00/unidade");
}

else if(fruta == "Banana"){
    console.log("O preço da maçã é de R$ 50,00/kg");
}

else if(fruta == "Maçã"){
    console.log("O preço da maçã é de R$ 0,99/unidade ");
}
else{
    console.log("A fruta informada não está disponível");
}*/

switch(fruta)
    {
        case "Mamão":
            console.log("O preço do mamão é de R$ 10,00/unidade");
        break;

        case "Banana":
            console.log("O preço da maçã é de R$ 50,00/kg");
        break;

        case "Maçã":
            console.log("O preço da maçã é de R$ 0,99/unidade ");
        break;

        default:
            console.log("Quitanda do Samuel");
            console.log("Fruta não encontrada no sistema! Tente Novamente...");
        break;
    }

