function ampliar(x){ /*O valor de X é o dá imagem que foi clicada, pois ele está mandando uma imagem para o X*/
    let elemento; elemento =  document.getElementById("ampliadao"); 
    /*uma forma de resumir "document.getElementById("ampliadao")"*/
    elemento.src = x;
}
function texto(nome){ /*significa que ele vai colocar as biografias no id=bio */
    let texto; texto = document.getElementById("js_texto");
    let div_ampliadao; div_ampliadao = document.getElementById("div_ampliadao");

    if(nome=="medo"){
        texto.innerHTML="<h1>Sukkalgir</h1> <p class='p_grande'>A Sukkalgir é uma criatura paranormal de Energia com complemento de Conhecimento, surgindo da tortura através das chamas. Ela foi originada na antiga Suméria através de um processo enlouquecedor que marcava em fogo a pele da vítima os feitos horríveis de seu captor. Inicialmente, Sukkalgir possui as mesmas características de um Existido. Durante sua transformação, a realidade distorce e a luz do ambiente é sugada para seu corpo e, quando transformada, o corpo da Sukkalgir ganha uma forma de Energia e Caos que a vestem com o aspecto de chamas em um tom esverdeado. A grande quantidade de textos espalhados por todo seu corpo se iluminam, assim como seu interior junto deles. Mas em seu caso, as escritas luminosas movem-se e flutuam.</p>";
        div_ampliadao.innerHTML = "<img class='img_criatura_grande' id='ampliadao' src='imagens/Personagens_e_Criaturas/img-energia-p/Criatura_Energia_Sukkalgir_Leve.webp' alt='Criatura de ordem paranormal Enpap'>"
    }
    else if(nome=="energia"){
        texto.innerHTML="<h1>Viajante</h1> <p class='p_grande'>O Viajante é uma criatura paranormal de Energia com complemento de Conhecimento e Medo, sendo originado a partir de anotações de Daniel Hartmann. O Viajante a princípio se mantém completamente invisível, impossibilitando suas presas de terem qualquer reação aos seus ataques, mas quando revelado.O Viajante apresenta um porte físico magro, de membros alongados e um tom de pele esbranquiçado. Sua estatura é bem alta com mais de dois metros e com uma postura encurvada. A cabeça da criatura possui vários rostos mesclados que apresentam diversas feições diferentes, tendo bocas e dentes tortos, com a principal delas esboçando um grande sorriso macabro.</p>"; 
    }
    else if(nome=="morte"){
        texto.innerHTML="<h1>Infecticidio</h1> <p class='p_grande'>O Infecticídio é uma espécie de doença Paranormal de Energia com complemento de Sangue que se manifesta na forma de um vírus digital que infecta aparelhos eletrônicos para então ser capaz de contaminar indivíduos da Realidade. Inicialmente, os Infectados pela doença mudam a cor dos olhos para tons esverdeados~rosados. Posteriormente, seus corpos se deformarão enquanto seus olhos tomam uma forma manchada que brilha cores pulsantes juntamente de seus dentes crescendo e se tornando afiados. Finalmente, o Infectado irá se mesclar à grande horda de outros Infectados, Transformando-se em um enorme amálgama de diversos seres vivos e dispositivos tecnológicos enrolados.</p>"; 
        div_ampliadao.innerHTML = "<img class='img_criatura_grande' id='ampliadao' src='imagens/Personagens_e_Criaturas/img-energia-p/Criatura_Energia_Infecticidio_Leve.webp' alt='Criatura de ordem paranormal Enpap'>"
    }
    else if(nome=="sangue"){
        texto.innerHTML="<h1>Telopsia</h1> <p class='p_grande'>O Telopsia é uma criatura de Energia com complemento de Morte e Medo que surgiu da lenda sobre uma Fita VHS amaldiçoada de mesmo nome que contém uma gravação misteriosa e terrível. Os relatos dos que possuíam a fita se misturaram com relatos falsos de pessoas que apenas queriam atenção. Entretanto, todos aqueles que comprovadamente tinham a fita morreram em seguida.O Telopsia é uma criatura humanoide que veste uma gravata e um longo sobretudo preto sobre o seu corpo esquelético e cadavérico, tendo em sua cabeça uma espécie de televisão antiga onde são transmitidas imagens perturbadoras e enlouquecedoras. Ninguém sabe o que há nas gravações do filme, apenas sabendo-se que seu conteúdo é horrível.</p>"; 
    }
    else if(nome=="conhecimento"){
        texto.innerHTML="<h1>Perturbado de Energia</h1> <p class='p_grande'>Perturbados de Energia são entidades paranormais de Energia que se manifestam a partir de uma alma enlouquecida de forma brusca e agressiva, onde a confusão de sua mente pode ser tão violenta que ela perde a percepção da Realidade antes mesmo de perceber que está morta.Eles são criaturas disformes com longas garras e múltiplos rostos desesperados saindo de seus corpos feitos de um material inconsistente e fantasmagórico, que está em constante mutação[1] e oscila entre estados físicos que é descritos como chamas mutantes que parecem líquidos e evaporam. Assim como muitos outros monstros de Energia, os Perturbados podem ter sua coloração variada, desde tons de azul, roxo e rosa.</p>"; 
        div_ampliadao.innerHTML = "<img class='img_criatura_grande' id='ampliadao' src='imagens/Personagens_e_Criaturas/img-energia-p/Criatura_Energia_Perturbado_Leve.webp' alt='Criatura de ordem paranormal Enpap'>"
    }
}