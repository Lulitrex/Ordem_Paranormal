function ampliar(x){ /*O valor de X é o dá imagem que foi clicada, pois ele está mandando uma imagem para o X*/
    let elemento; elemento =  document.getElementById("ampliadao"); 
    /*uma forma de resumir "document.getElementById("ampliadao")"*/
    elemento.src = x;
}
function texto(nome){ /*significa que ele vai colocar as biografias no id=bio */
    let texto; texto = document.getElementById("js_texto"); 
    if(nome=="medo"){
        texto.innerHTML="<h1>Elizabeth Webber</h1> <p class='p_grande'>Elizabeth era uma mulher esguia, de 1,70 metros de altura, cabelos negros e tinha 28 anos de idade quando ingressou na Ordo Realitas. Além de investigadora paranormal, ela era cientista forense. Liz tendia a ser rude e fria com todos, obcecada com suas teorias, e contando apenas com seus amigos mais próximos. Ela tinha um notório problema com alcoolismo. Durante seu encontro com o monstro conhecido como Deus da Morte, ela envelheceu décadas em apenas alguns segundos, terminando a missão com 50 anos de idade. Após a morte de seu amigo Thiago Fritz, a agente começou a investigar a misteriosa Ordem da Desconjuração. Durante a investigação, porém, ela acabou sendo capturada pelos Escriptas e, posteriormente, morta por Gal usando a espada de Joui Jouki para desferir o golpe mortal.</p>"; 
    }
    else if(nome=="energia"){
        texto.innerHTML="<h1>Carina Leone</h1> <p class='p_grande'>Carina Leone é uma mulher alta de pele clara e aspecto juvenil possuindo olhos verdes e cabelos castanhos, com mechas tingidas em ciano. Dispondo diversas tatuagens espalhadas por seu corpo, entre elas um filtro dos sonhos e diversas flores em seus braços, um rato perto de sua mão esquerda e um enorme dragão em suas costas. Carina usa uma calça escura com correntes penduradas, além de uma camisa preta de gola alta. Calçando suas botas altas assemelhando-se a um coturno, além de uma jaqueta de couro cinzenta e um pingente em forma da cabeça de um leão, o brasão da família Leone. Após ultrapassar a barreira de 50% de Exposição Paranormal no final do 3º episódio de Calamidade, Carina conecta-se a sua Marca e o elemento de Conhecimento, fazendo com que ao entrar em combate, seus olhos se tornam dourados e sua mecha em ciano se modifica a um tom brilhante e dourado.</p>"; 
    }
    else if(nome=="morte"){
        texto.innerHTML="<h1>Gaius</h1> <p>Gaius era um homem velho, pálido, com marcas de velhice estampadas em seu rosto, como enormes olheiras flácidas e testa enrugada, lhe despondo um semblante mais cansado. Tinha um cabelo curto e grisalho, acobertado por um capuz e uma barba media. Na decisão da Reliquia de caos de escolher seu portador, Gaius foi sugado pela Relíquia de Energia e se amalgamou com O Anfitrião, se transformando um parte dele, o Amphitruo.</p>"; 
    }
    else if(nome=="sangue"){
        texto.innerHTML="<h1>Bárbara Lima</h1> <p>Bárbara era uma mulher de pele clara com cabelos loiros medianos, que ultrapassavam seus ombros, com olhos escuros e sardas e queimaduras de sol em suas bochechas e nariz. Ela usava um longo vestido marrom e branco, com detalhes de flores na parte de baixo, juntamente com uma cinta preta, ela também vestia uma espécie de capa esverdeada presa por um cordão. Ela foi uma das protagonistas principais de o Secredo na ilha e acabou por ser morta pelo Amigo Imaginário na igreja da ilha de Tipora. </p>"; 
    }
    else if(nome=="conhecimento"){
        texto.innerHTML="<h1>Carol</h1> <p>Carol era uma agente de nivel D vista na Estação Igneus, se deparando com as cobaias sobreviventes. Era uma mulher branca ruiva que usava óculos, vestindo um casaco de frio roxo devido ao clima da Estação Igneus. Ela acabou sendo morta pela ameaça que rondava a estação, o Nidere. Carol é a personagem que morrendo em menos de 2 horas e meia depois de sua estreia.</p>"; 
    }
}