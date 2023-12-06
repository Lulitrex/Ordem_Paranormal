function ampliar(x){ /*O valor de X é o dá imagem que foi clicada, pois ele está mandando uma imagem para o X*/
    let elemento; elemento =  document.getElementById("ampliadao"); 
    /*uma forma de resumir "document.getElementById("ampliadao")"*/
    elemento.src = x;
}
function texto(nome){ /*significa que ele vai colocar as biografias no id=bio */
    let texto; texto = document.getElementById("js_texto"); 
    if(nome=="medo"){
        texto.innerHTML="<h1>Arthur Cervero</h1> <p>Arthur Cervero, um cidadão de Carpazinha, se juntou a Equipe E para ajudar na missão, mas durante a investigação de assassinato, perdeu seu pai e companheiros de gangue. Na busca também, perdeu seu braço lutando contra o Minerador em Santo Berço. Ao se unir à Ordo Realitas, enfrentou o sequestro de Elizabeth Webber pelo Culto do Conhecimento, resultando em perdas significativas. Arthur apos transcender em Ordem paranormal desconjuração teve sua afinidade com o elemento de sangue, onde ganhou uma mecha branca no cabelo e dentes afiados. Ele está atualmente vivo em calamidade parte 1, e deve continuar sua historia em calamidade parte 2</p>"; 
    }
    else if(nome=="energia"){
        texto.innerHTML="<h1>Marius</h1> <p>  Marius era um homem alto e forte, sendo um dos membros da antiga Ordo Calamitas na Roma. Ele era sempre visto usando uma grande armadura de cor preta que cobre todo seu corpo, sendo que seu rosto é bloqueado pelo visor do capacete da armadura. Marius era bastante quieto e por grande parte bruto, falando poucas vezes, e nas vezes que fala, pronuncia uma palavra única. Marius acabou morrendo durante um dos jogos do Anfitrião no 6º episódio, se deixando ser morto por Faustus e tendo seu pescoço cortado pela espada do General, assim, perdendo sua existência.</p>"; 
    }
    else if(nome=="morte"){
        texto.innerHTML="<h1>Alexandre/Xande</h1> <p class='p_grande'> Alexandre era um jovem branco de olhos azuis, com cabelos longos e castanhos que descem até seus ombros, e um dos membros dos Cinco, grupo de 1997 liderado por Morato. Ele usava uma camisa amarela e uma blusa preta com as mangas arregaçadas, junto de uma bermuda preta com joelheiras e um boné virado pra trás e diversos bolsos ao redor de seu corpo com diversos acessórios. Ele carregava consigo um taco de Baseball com correntes enroladas que ligam seu braço a ele, e um skate amarelo com detalhes de metal nas bordas. Ao final de sua investigação, Xande decidiu se sacrificar pela equipe para que eles pudessem entrar na conexão da Torre da TV Varminho. Sendo assim, ele acabou sendo tristemente torturado pelo Estrangeiro e derretido pelo ser, perdendo todas as suas memórias e tudo o que ele um dia já foi.</p>"; 
    }
}