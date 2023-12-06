function ampliar(x){ /*O valor de X é o dá imagem que foi clicada, pois ele está mandando uma imagem para o X*/
    let elemento; elemento =  document.getElementById("ampliadao"); 
    /*uma forma de resumir "document.getElementById("ampliadao")"*/
    elemento.src = x;
}
function texto(nome){ /*significa que ele vai colocar as biografias no id=bio */
    let texto; texto = document.getElementById("js_texto"); 
    if(nome=="medo"){
        texto.innerHTML="<h1>Beatrice Portinari</h1> <p class='p_grande'> Beatrice Portinari era uma mulher de 23 anos, 1,69 metros de altura, cabelos compridos e castanhos na altura dos ombros, possuindo também sardas bastante visíveis em seu rosto e no torso. Beatrice era calma, sempre sociável e curiosa, tendo uma curiosidade grande, que pode ser perigosa. Beatrice tende a ser bastante gentil e se preocupava com os outros, tentando ajuda-los o máximo que pode. Ao seu lado, sempre está com seu parceiro e melhor amigo Orpheu, um urutau-grande e silencioso. Durante um combate contra o Viajante na Mansão Endiabrada, Orpheu acaba sendo morto pela criatura, revelando-se como uma barreira de proteção criada por Clara para bloquear as memórias devastadoras da filha implementadas por Kian. Com este bloqueio quebrado, Beatrice se transformou em um Existido, deixando assim de existir.</p>"; 
    }
    else if(nome=="energia"){
        texto.innerHTML="<h1>Artemis</h1> <p class='p_grande'>Artemis era uma mulher de pele clara, cabelos escuros e olhos acinzentados. Usava uma calça cinza e uma camisa preta sem mangas, com um suspensório e cinto com bolsos na cor bege. Artemis também tinha uma sniper na cor preta. Tinha um gambá de estimação que foi devorado por Theodore durante Calamidade. Durante a batalha dos Escriptas com os Dragões Metálicos sob as catacumbas da Domus Aurea, ela foi morta por Leandro Hans que, após ver todos os seus amigos de seu grupo mortos no chão, o mesmo foi em direção a Artemis que estava no chão pegando fogo e se contorcendo de dor, e deu um último tiro na sua cabeça, explodindo-a e a matando instantaneamente. Após isso, Boris tenta carregar o seu corpo, até que Kian se frusta e o impede de fazer isso, usando um Ritual de Inexistir em seu corpo, fazendo com que ele desapareça completamente.</p>"; 
    }
}