function ampliar(x){ /*O valor de X é o dá imagem que foi clicada, pois ele está mandando uma imagem para o X*/
    let elemento; elemento =  document.getElementById("ampliadao"); 
    /*uma forma de resumir "document.getElementById("ampliadao")"*/
    elemento.src = x;
}
function texto(nome){ /*significa que ele vai colocar as biografias no id=bio */
    let texto; texto = document.getElementById("js_texto"); 
    if(nome=="medo"){
        texto.innerHTML="<h1>Ajudante</h1> <p>O Ajudante tinha cabelos cinzas de topete raspado nas laterais, com aparência parecida com os outros do vilarejo de Santo Berço, pele cinza, olhos completamente pretos e faixas pretas no rosto, que formam algo parecido com a letra F. O Ajudante era otimista e alegre como os que moram em Santo Berço, se mostrando muito feliz com sua cidade e orgulho por seu mestre Ferreiro. Foi morto pelo Porteiro no fim do episódio onde apareceu.</p>"; 
    }
    else if(nome=="energia"){
        texto.innerHTML="<h1>Rubens</h1> <p>Rubens possui longos cabelos cacheados com uma coloração esbranquiçada, uma pele escura e usa uma camisa bege de manga comprida. É ansioso e inteligente, sendo descrito como o cérebro da dupla por seu parceiro Johnny. Naluti apareceu junto com seu amigo no local onde Erin e Fernando foram levados, após seu sequestro. Foi revelado que Rubens e Johnny também eram agentes da ordem e foram propositalmente sequestrados para descobrir mais sobre o Culto que estavam investigando. O personagem retorna em Ordem Paranormal: Calamidade, fazendo parte da equipe principal da temporada em busca das Relíquias da Calamidade e impedir os planos de Kian.</p>"; 
    }
    else if(nome=="morte"){
        texto.innerHTML="<h1>Amalia</h1> <p> Amalia era uma mulher negra com uma aura em ciano, esta que lhe seguia por desde os seus pés até a cabeça, tendo seus olhos da mesma cor vibrante. Tinha cabelos cacheados, com mechas que apareciam por entre seu capuz, e uma grande cicatriz em seu rosto, formando um tipo de cruz. Ela acabou morrendo durante o último jogo do Anfitrião no 6º episódio de Calamidade, tendo seu corpo tomado por Rubens, que após ter uma conversa com Joui no corpo de Celestine, se deixa ser golpeada, assim, perdendo sua existência.</p>"; 
    }
    else if(nome=="sangue"){
        texto.innerHTML="<h1>Guizo</h1> <p class='p_grande'>Guizo foi um dos membros dos Cinco, grupo de 1997 liderado por Morato Vertaler. Ele era um homem de pele clara com cabelo vermelho vinho, usava uma calça preta rasgada com um cinto contendo alguns objetos, e uma camiseta preta por cima de uma camisa listrada. Além de que tinha vários bolsos espalhados por seu corpo e uma pochete com adesivos. Ele sempre carregava sua câmera para todos os lados, tentando gravar tudo que lhe parecia interessante para postar no seu blog. Ao final da sua investigação, junto de sua equipe, que estava discutindo sobre quem iria fazer a Passagem para Tenebris, Guizo pediu para que ficasse a sós com Dara. Após isso, ele disse que seria uma grande oportunidade ele finalmente ter o contato com tudo que ele queria saber. Assim, ele entra pela passagem da Cidade Impossível, abandonando sua liberdade.</p>"; 
    }
}