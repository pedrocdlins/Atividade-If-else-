const listadePalestrante = ["Jéssica","Eduardo","Jason","Michael"]

let listadeCadastro = ["João","Patricia","Pedro","Gabriela","Elizabeth","Bruno","Maria","José","Victor","Seraphine","Enzo","Raphael","Leonardo","Donatello","Michelangelo"]

if (listadeCadastro.length < 100) {
    //É possível cadastrar mais nomes na lista
    console.log ("Cadastro feito com sucesso.")
    } 
    else {
    console.log ("Lista de Cadastro cheia.")
    }

let idade = 18;

if (idade > 18) {
    //Precisa ser +18 anos de idade para se cadastrar
    console.log ("Cadastro feito com sucesso.")
    }
    else {
        console.log ("Precisa ser +18 anos para se cadastrar.")
    }

 const datadoEvento = new Date(2021,12,15);

 if (datadoEvento > new Date()) {
    console.log ("Data inválida, este evento já passou.")
 }
    else {
        console.log ("Parabéns, sua vaga está garantida.")
    }
