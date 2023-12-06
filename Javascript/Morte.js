function ampliar(x){ /*O valor de X é o dá imagem que foi clicada, pois ele está mandando uma imagem para o X*/
    let elemento; elemento =  document.getElementById("ampliadao"); 
    /*uma forma de resumir "document.getElementById("ampliadao")"*/
    elemento.src = x;
}
function texto(nome){ /*significa que ele vai colocar as biografias no id=bio */
    let texto; texto = document.getElementById("js_texto");
    let div_ampliadao; div_ampliadao = document.getElementById("div_ampliadao");

    if(nome=="medo"){
        texto.innerHTML="<h1>Nidere</h1> <p class='p_grande'>O Nidere, é uma bizarra e distorcida criatura paranormal de formato similar a um lobo de Morte com complemento de Sangue e Medo que habita florestas e ambientes selvagens, sendo responsável por diversos desaparecimentos de campistas. O Nidere é uma brutal criatura extremamente feroz e eficaz em caças. Ele é um enorme lobo retorcido e desfigurado, andando em duas patas, porém, com sua coluna completamente invertida para trás, fazendo-o assim, andar quase como se estivesse de costas. Sua cabeça é a de um crânio de um lobo de ponta cabeça, onde originalmente seria a parte de baixo de sua mandíbula, o Nidere possui dois brilhantes olhos vermelhos.</p>";
            div_ampliadao.innerHTML = "<img class='img_criatura_grande' id='ampliadao' src='imagens/Personagens_e_Criaturas/img-morte-p/Criatura_Morte_Nidere_Leve.webp' alt='Criatura de ordem paranormal, Carente'>"

    }
    else if(nome=="energia"){
        texto.innerHTML="<h1>Succ</h1> <p class='p_grande'>O Succ é uma criatura paranormal de Morte com complemento de Energia, porém de origem incerta. Se manifestava para matar àqueles que ameaçassem a cidade de Santo berço. O Succ possui uma aparência fina e esguia; tendo uma pele cinzenta e enrugada com um grande pescoço em formato de serpente, onde o fim do mesmo leva a uma boca separada em seis sessões. Dela, é notável uma grande extensão similar ao seu pescoço, onde no seu fim está uma segunda boca circular com vários dentes finos e pontiagudos em camadas internas usados para prender suas vítimas. Ele anda com quatro patas parecidas com pequenas patas semi-aracnídeas.</p>"; 
            div_ampliadao.innerHTML = "<img class='img_criatura_grande' id='ampliadao' src='imagens/Personagens_e_Criaturas/img-morte-p/Criatura_Morte_Succ_Leve.webp' alt='Criatura de ordem paranormal, Carente'>"

    }
    else if(nome=="morte"){
        texto.innerHTML="<h1>Carniçal</h1> <p class='p_grande'>O Carniçal, é uma criatura paranormal de Morte com complemento de Conhecimento que surge a partir de uma tentativa fracassada de dar consciência à entidade de Morte na Realidade, por conta do Símbolo Espiral marcado em seu crânio, O Carniçal é um monstro humanoide de porte físico magro e musculoso mediante símbolo presente em sua testa, com cerca de 2 metros de altura. Sua anatomia é similar à da musculatura humana, essa que é formada pelo Lodo Preto que saí de trás de sua cabeça e se entrelaça em tendões. Em sua cabeça possui o resto de um crânio humano apodrecido em seus últimos estágios de decomposição com uma coloração amarronzada. Nele está o Símbolo Espiral cravado em sua testa emanando um brilho vermelho.</p>"; 
            div_ampliadao.innerHTML = "<img class='' id='ampliadao' src='imagens/Personagens_e_Criaturas/img-morte-p/Criatura_Morte_Carnical_Leve.webp' alt='Criatura de ordem paranormal, Carente'>"

    }
    else if(nome=="sangue"){
        texto.innerHTML="<h1>Aracnasita</h1> <p class='p_grande'>A Aracnasita é uma criatura paranormal parasitária de Morte com complemento de Medo que se manifesta a partir de uma aranha da Realidade exposta a um Símbolo de Morte que, após entrar em contato com o Lodo Preto, desenvolveu um comportamento parasitário. Após parasitar uma vítima e consumir sua Energia Potencial, ela fica em tamanho colossal com um rosto cheio de olhos e dentes afiados, com dois pedipalpos enormes. Ela também possui uma bolsa gelatinosa e translúcida acoplada na região das costas, que parece ser como uma bolsa de água quente gosmenta e que surte o mesmo efeito do Lodo em quem entra em contato com ela.</p>"; 
            div_ampliadao.innerHTML = "<img class='img_criatura_grande' id='ampliadao' src='imagens/Personagens_e_Criaturas/img-morte-p/Criatura_Morte_Aracnasita_leve.webp' alt='Criatura de ordem paranormal, Carente'>"

    }
    else if(nome=="conhecimento"){
        texto.innerHTML="<h1>Existidos de Morte</h1> <p>Os Existidos de Morte são uma variante dos Existidos, que por algum motivo foram afetados pelo Elemento de Morte. Ao contrário dos Existidos normais, esses Existidos não possuem uma aparência humana normal e esguia, ao invés disso possui um corpo grande e de músculos definidos, com sua pele cinzenta e seu rosto tendo um aspecto de crânio. Seu corpo possui diversas escritas também, mas agora em formato espiral, e de seus olhos de órbitas vazias derramam Lodo Preto por todo seu corpo, tendo consideravelmente em seus braços.</p>"; 
            div_ampliadao.innerHTML = "<img class='' id='ampliadao' src='imagens/Personagens_e_Criaturas/img-morte-p/Criatura_Morte_Existidos_Leve.webp' alt='Criatura de ordem paranormal, Carente'>"

    }
}