
function ampliar(x){ /*O valor de X é o dá imagem que foi clicada, pois ele está mandando uma imagem para o X*/
    let elemento; elemento =  document.getElementById("ampliadao"); 
    /*uma forma de resumir "document.getElementById("ampliadao")"*/
    elemento.src = x;
}
function texto(nome){ /*significa que ele vai colocar as biografias no id=bio */
    let texto; texto = document.getElementById("js_texto"); 
    if(nome=="medo"){
        texto.innerHTML="<h1>Cesar Cohen</h1> <p class='p_grande'>Cesar era um homem esguio, com coluna encurvada, cabelos até os ombros e 30 anos de idade. Além de investigador paranormal, era um programador profissional, sendo muito ágil em questões relacionadas a informática e muito inteligente em geral. Teve sua primeira participação na temporada, O segredo na Floresta, no primeiro episódio, e se manteve vivo até o último episódio de Desconjuração. Em Desconjuração, ele mudou seu nome para Kaiser e durante a temporada foi monstrado que ele tem afinidade com o elemento de Energia. Faleceu ao final datemporada Desconjuração em uma batalha contra Gal e Kian, onde ele se sacrificou para salvar seus parceiros, e foi morto pelo Ritual de Inexistir no hacker, onde desapareceu no ar, deixando de existir.</p>"; 
    }
    else if(nome=="energia"){
        texto.innerHTML="<h1>Miguel Cariad</h1> <p> Miguel é um homem bem alto e forte, na época com 30 anos, cabelo curto e castanho. Ele fazia parte do grupo de investigação paranormal Equipe Kelvin junto de Mariana Larona e Kenan Thomas, sendo um dos melhores investigadores da Ordo Realitas.  Durante uma investigação em Carpazinha, descobriu uma comunidade secreta, o Santo Berço, onde Miguel trair sua propria equipe para salvar a comunidade e assumir o posto de líder dos luzidios. Calango o interpretou durante um episódio que mostrava o passado dá Equipe Kelvin e depois de se tornar o Ferreiro, ele passou a ser interpretado pelo mestre do RPG, Cellbit.</p>"; 
    }
    else if(nome=="morte"){
        texto.innerHTML="<h1>Faustus</h1> <p> Faustus era um homem forte, armadurado e um dos membros da Ordo Calamitas da antiga Roma. Ele também tinha uma crença forte, visto que sempre carregava um colar com uma cruz, esse que era enrolado no cabo de sua espada. Ele teve sua aparição durante os Jogos do Anfitrião, sendo a estátua escolhida por Balu, personagem do Calango. Ele acabou morrendo durante um dos jogos, tendo seu corpo tomado por Balu, que optou por deixar que Faustus inexistisse, ficando apenas sentado abraçado a sua espada, e assim, perdendo sua existência.</p>"; 

    }
    else if(nome=="sangue"){
        texto.innerHTML="<h1>Balu</h1> <p class='p_grande'> Balu é um homem alto, de porte físico relativamente bem definido. Possui cabelos escuros penteados pra trás, e um bigode com um pequeno cavanhaque que não chega totalmente até seu queixo. Ele tem sua primeira participação na temporada de Calamidade, e está vivo até o atual momento do seriado (Sinais do outro lado).  Ele foi um Ex-Agente da Ordo Realitas, que estava afastado há mais ou menos cinco anos e retornou apenas a pedido do Senhor Veríssimo. Um diferencial do Balu é rejeitar usar rituais paranormais e transcender, o paranormal em geral, por conta disso ele não tem afinidade com nenhum elemento mesmo tenho NEX, uma pequena exceção é o seu machado que por ter sido amaldiçoado pelo Diabo, tem o elemento de sangue embutido nele</p>"; 
    }
}