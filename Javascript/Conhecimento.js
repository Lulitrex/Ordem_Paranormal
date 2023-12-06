function ampliar(x){ /*O valor de X é o dá imagem que foi clicada, pois ele está mandando uma imagem para o X*/
    let elemento; elemento =  document.getElementById("ampliadao"); 
    /*uma forma de resumir "document.getElementById("ampliadao")"*/
    elemento.src = x;
}
function texto(nome){ /*significa que ele vai colocar as biografias no id=bio */
    let texto; texto = document.getElementById("js_texto");
    let div_ampliadao; div_ampliadao = document.getElementById("div_ampliadao");

    if(nome=="medo"){
        texto.innerHTML="<h1>Estrangeiro</h1> <p class='p_grande'>O Estrangeiro é uma misteriosa criatura de Conhecimento com complemento de Energia e Medo, tendo uma natureza desconhecida e sendo extremamente inteligente. Suas aparições são sempre relatadas como abduções, e sua presença sempre causa interferência em dispositivos digitais e desconforto. O Estrangeiro é uma criatura humanoide magra, de 2 metros e meio de altura, tendo seu rosto coberto pelo que parece ser uma máscara cinza de formato bem similar a uma cabeça humana, com dois grandes olhos verdes e uma divisão que separa a máscara em dois. veste uma capa esverdeada e por baixo  grandes ombreiras.veste em seu torso uma roupa metálica esverdeada com diversos detalhes em preto e, da cintura para baixo, um enorme manto que cobre todo seu corpo e suas pernas.</p>";
        div_ampliadao.innerHTML = "<img class='' id='ampliadao' src='imagens/Personagens_e_Criaturas/img-conhecimento-p/Criatura_Conhecimento_Estrangeiro_Leve.webp' alt='Criatura de ordem paranormal, Estrangeiro'>"
    }
    else if(nome=="energia"){
        texto.innerHTML="<h1>Espreitador</h1> <p class='p_grande'> O Espreitador é uma criatura paranormal de Conhecimento com complemento de Medo que se manifesta através de cantos escuros e frestas, observando aqueles marcados por ele enquanto presente nesses lugares. Ele é uma criatura curvada com a pele rugosa e pelancada de tom acinzentado. Pelo  seu corpo existem vários olhos bizarros de tamanhos diferentes com uma cor amarela e pupilas que se multiplicam com o passar do tempo. No topo de sua cabeça há a maior concentração de olhos menores, também possuindo um olho de tamanho grande no interior de sua boca repleta de dentes tortos e compridos, o que o faz produzir um som engasgado enquanto respira. Ele possui pernas curtas com um pé deformada, já seus braços são maiores e com dedos desproporcionalmente longos.</p>"; 
        div_ampliadao.innerHTML = "<img class='img_criatura_grande' id='ampliadao' src='imagens/Personagens_e_Criaturas/img-conhecimento-p/Criatura_Conhecimento_Espreitador_Leve.webp' alt='Criatura de ordem paranormal, Espreitador'>"
    }
    else if(nome=="morte"){
        texto.innerHTML="<h1>Parasita de Culpa</h1> <p class='p_grande'>O Parasita de Culpa é uma criatura disforme de Conhecimento com complemento de Morte, Sangue e Medo, sendo o resultado dos experimentos do Terceiro Hoteleiro em uma entidade pacífica com a capacidade de se alimentar dos sonhos de outros indivíduos.O Parasita de Culpa é uma criatura capaz de criar pesadelos e ilusões de qualquer pessoa baseados em informações e sentimentos não resolvidos na mente dos hospedeiros para criar situações desesperadoras. No mundo real um Parasita de Culpa tem um corpo preto que se assemelha a vários tentáculos pequenos com um principal como se fossem seu pescoço e rosto. A criatura em geral se assemelha bastante ao Lodo Preto.</p>"; 
        div_ampliadao.innerHTML = "<img class='' id='ampliadao' src='imagens/Personagens_e_Criaturas/img-conhecimento-p/Criatura_Conhecimento_Parasita_Leve.webp' alt='Criatura de ordem paranormal, Parasita de Culpa'>"
    }
    else if(nome=="sangue"){
        texto.innerHTML="<h1>Rastejador Sombrio</h1> <p>O Rastejador Sombrio é uma maligna criatura de Conhecimento com complemento de Sangue que é manifestada pelo medo de ser perseguido. Aqueles que se encontraram com o Rastejador relatam terem visto uma estranha figura vestindo um sobretudo se escondendo na escuridão, os perseguindo sem nunca mostrar seu rosto, e finalmente quando revelado, se mostrando como uma terrível e assustadora criatura. Mesmo com alguns relatos, não são muitos aqueles que sobrevivem ao encontro do Rastejador.</p>"; 
        div_ampliadao.innerHTML = "<img class='' id='ampliadao' src='imagens/Personagens_e_Criaturas/img-conhecimento-p/Criatura_Conhecimento_Rastejador_Leve.webp' alt='Criatura de ordem paranormal, Rastejador Sombrio'>"
    }
        else if(nome=="conhecimento"){
        texto.innerHTML="<h1>Existido de Conhecimento</h1> <p>Os Existidos são criaturas de Conhecimento diferentes das demais, onde alguém se torna um Existido a partir do momento que ele entende o Outro Lado por completo, após lembrar da Verdade Impossível, incapaz de esquecê-la novamente. Existidos são comumente representados possuindo uma pele pálida e amarelada, com centenas de palavras e frases de medo em idiomas diferentes tatuadas por todas as extremidades de seus corpos.Ao sentir-se ameaçado ou perturbado, os textos nos corpos dessas criaturas se iluminam, assim como seu interior, com seus olhos antes vazios agora em um grande amarelo, da mesma forma que suas bocas.</p>"; 
    }
}