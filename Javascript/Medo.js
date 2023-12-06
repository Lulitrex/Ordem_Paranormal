function ampliar(x){ /*O valor de X é o dá imagem que foi clicada, pois ele está mandando uma imagem para o X*/
    let elemento; elemento =  document.getElementById("ampliadao"); 
    /*uma forma de resumir "document.getElementById("ampliadao")"*/
    elemento.src = x;
}
function texto(nome){ /*significa que ele vai colocar as biografias no id=bio */
    let texto; texto = document.getElementById("js_texto");
    let div_ampliadao; div_ampliadao = document.getElementById("div_ampliadao");

    if(nome=="medo"){
        texto.innerHTML="<h1>Degolificada</h1> <p class='p_grande'>A Degolificada é uma das criaturas paranormais mais temidas do universo. Ela possui todos os Elementos conhecidos, assim sendo comparável a uma manifestação direta do Outro Lado.A variação principal dessa criatura aparenta oscilar entre alguns estados de matéria, ora estando fisicamente visível e ora tendo um certo grau de transparência. Fisicamente tem a aparência de uma menina jovem com cabelos pretos, lisos e longos, que cobrem o seu rosto e percorrem seu corpo até o chão. Sua coluna é retorcida e magra e se inverte na área do abdômen deixando ele fino. Os braços e as pernas parecem pendurar de seu corpo enquanto ela flutua lentamente alguns centímetros acima do chão.</p>";
        div_ampliadao.innerHTML = "<img class='' id='ampliadao' src='imagens/Personagens_e_Criaturas/img-medo-p/Criatura_Medo_Degolificada_Leve.webp' alt='Criatura de ordem paranormal Enpap'>"
    }
    else if(nome=="energia"){
        texto.innerHTML="<h1>Degolificada Devorada</h1> <p>A variação de Sangue, chamada de Degolificada Devorada, possui um corpo curvado extremamente grande e musculoso feito de carne, com braços que possuem dois pares extras que saem do original e menores. O seu cabelo é muito menor comparado ao corpo e membros, e de sua cabeça, a boca se abre de forma perturbadora percorrendo todo seu torso, possuindo por toda essa extensão uma quantidade absurda de dentes, além de ter uma quantidade considerável de sangue pelo corpo.</p>"; 
        div_ampliadao.innerHTML = "<img class='' id='ampliadao' src='imagens/Personagens_e_Criaturas/img-medo-p/Criatura_Medo_Devorada_leve.webp' alt='Criatura de ordem paranormal, Degolificada Decrepita'>"

    }
    else if(nome=="morte"){
        texto.innerHTML="<h1>Degolificada Gnóstica</h1> <p>A variação de Conhecimento, chamada de Degolificada Gnóstica, possui um corpo parecido com sua versão original, mas seus cabelos enrolam o corpo inteiro e formam uma espécie de auréola no topo de sua cabeça que também se assemelham a ornamentos vistos em pinturas de santos. A Degolificada Gnóstoca não possui a boca costurada ou tampada, com ela tentando se abrir das costuras de pele. Possuindo diversos sigilos brilhando em sua pele, junto de uma aura dourada que a percorre.</p>"; 
        div_ampliadao.innerHTML = "<img class='' id='ampliadao' src='imagens/Personagens_e_Criaturas/img-medo-p/Criatura_Medo_Gnostica_leve.webp' alt='Criatura de ordem paranormal, Degolificada Decrepita'>"

    }
    else if(nome=="sangue"){
        texto.innerHTML="<h1>Degolificada Conturbada</h1> <p>A variação de Energia, chamada de Degolificada Conturbada, substitui toda sua forma física e roupas com uma matéria de Energia que brilha em roxo, tendo uma feição que emana desespero, assim como outras criaturas de Energia. O cabelo, ao invés de ser uma extensão de seu corpo, se mescla ao material de Energia e suas raízes agem como chamas que se jogam pra cima e se enrolam ao redor dos braços.</p>"; 
        div_ampliadao.innerHTML = "<img class='' id='ampliadao' src='imagens/Personagens_e_Criaturas/img-medo-p/Criatura_Medo_Conturbada_leve.webp' alt='Criatura de ordem paranormal, Degolificada Conturbada'>"

    }
    else if(nome=="conhecimento"){
        texto.innerHTML="<h1>Degolificada Decrepita</h1> <p>A variação de Morte, chamada de Degolificada Decrépita, é muito parecida com a versão original, mas seu corpo se torna uma fisionomia esquelética nua de cor cinzenta. O rosto vira um crânio com espiral no topo, e dele percorre o lodo preto característico de Morte.</p>"; 
        div_ampliadao.innerHTML = "<img class='' id='ampliadao' src='imagens/Personagens_e_Criaturas/img-medo-p/Criatura_Medo_Decrepita.webp' alt='Criatura de ordem paranormal, Degolificada Decrepita'>"
    }
}