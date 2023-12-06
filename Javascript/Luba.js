function ampliar(x){ /*O valor de X é o dá imagem que foi clicada, pois ele está mandando uma imagem para o X*/
    let elemento; elemento =  document.getElementById("ampliadao"); 
    /*uma forma de resumir "document.getElementById("ampliadao")"*/
    elemento.src = x;
}
function texto(nome){ /*significa que ele vai colocar as biografias no id=bio */
    let texto; texto = document.getElementById("js_texto"); 
    if(nome=="medo"){
        texto.innerHTML="<h1>Daniel Hartmann</h1> <p>Daniel era um famoso escritor de contos de terror, ao descobrir que suas obras estavam tendo efeitos reais no afinamento da membrana, decidiu se juntar à Ordo Realitas para combater o mal que criou. Sua única missão foi o caso da Escola Nostradamus, aonde foi tragicamente morto pela Degolificada. Suas contos tem incluenciado mais eventos no ordem já os monstros criados por ele ainda aparecem.</p>"; 
    }
    else if(nome=="energia"){
        texto.innerHTML="<h1>Joui Jouki</h1> <p class='p_grande'>Joui era um ginasta olímpico que, depois de ser salvo de uma criatura paranormal por Elizabeth Webber e Thiago Fritz, resolveu juntar-se à Ordem. Durante sua primeira missão, o Caso de Carpazinha, criou um laço muito forte com todos aqueles que acabariam por ser conhecidos como a Equipe E. Dada a destruição de Santo Berço, Mudou sua personalidade leve de atleta por uma mais fria. Durante a investigação sobre a Ordem da Desconjuração, Joui se torna um membro da Seita das Máscaras como forma de sacrifício para proteger seus amigos, abdicando de sua existência. Porém, Joui retorna em Calamidade e sendo responsável pelo assassinato de vários escriptas. Joui acaba se reencontrando com Dante e Arthur, durante a missão das relíquias da calamidade, se unindo a equipe abutres. Durante a batalha final contra Kian, Joui é espancado até a morte.</p>"; 
    }
    else if(nome=="morte"){
        texto.innerHTML="<h1>Celestine</h1> <p>Celestine era uma mulher de pele clara e uma aura azul em sua volta que lhe seguia desde os seus pés até a cabeça, sendo da mesma cor que seus olhos. Ela tinha cabelos curtos e loiros jogados para o lado direito de seu rosto e usava uma longa túnica com as mangas compridas que terminavam em um par de luvas. Após ser a vencedora dos jogos do Anfitrião, Celestine é emboscada por Veritus, incorporado por Kian. Vendo essa situação, Joui a incorpora, aceitando a proposta do Anfitrião, usando a Máscara do Desespero, e assim, se tornando a Magistrada.</p>"; 
    }
}