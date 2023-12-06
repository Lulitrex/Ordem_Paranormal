function ampliar(x) { /*O valor de X é o dá imagem que foi clicada, pois ele está mandando uma imagem para o X*/
    let elemento; elemento = document.getElementById("ampliadao");
    /*uma forma de resumir "document.getElementById("ampliadao")"*/
    elemento.src = x;
}
function texto(nome) { /*significa que ele vai colocar as biografias no id=bio */
    let texto; texto = document.getElementById("js_texto");
    let div_ampliadao; div_ampliadao = document.getElementById("div_ampliadao");

    if (nome == "medo") {
        texto.innerHTML = "<h1>Enpap-X</h1> <p class='p_grande'>O Enpap-X é uma criatura paranormal de Sangue com complemento de Conhecimento, surgindo da dor e da tortura. Ele pode se manifestar quando uma pessoa é forçada a viver acorrentada e aprisionada, sendo exposta a diversos acontecimentos brutais e paranormais incessantemente, sem poder ter a sua vida encerrada durante o tormento. Inicialmente, essa criatura avermelhada possui as mesmas características de um Existido Musculoso, sendo este extremamente forte e resistente. Quando transformado, o Enpap-X brilha em um vermelho forte. Suas textos se iluminam assim como seu olho direito. Além disso, essa monstruosidade adquire um porte físico colossal e extremamente resistente, seus quatro grandes braços ficam ainda mais musculosos e sua mão toma uma aparência mais grotesca e agressiva, possuindo garras longas na ponta de seus dedos.</p>";
    }
    else if (nome == "energia") {
        texto.innerHTML = "<h1>Carente</h1> <p class='p_grande'>O Carente, é uma criatura de Sangue com complemento de Morte, fruto do livro de Daniel Hartmann Contos de uma Criatura Carente, sobre uma criatura que devora órgãos internos de mulheres que foram mães graças à sua inveja de seres que recebem amor até mesmo antes de nascerem.Essa criatura se apresenta como um menino na faixa dos 8 anos, que possui cabelos castanhos cortados e não possui rosto, tendo apenas um espaço vazio cheio de cortes com sua carne interna rastejando por dentro onde deveria estar sua face Após ser convidada pra dentro de um recinto, ela se torna um gigante monstro perturbador na faixa dos três metros de altura e com um corpo de um insectoide sangrento com diversos braços por todo seu corpo, esses que possuem mãos e garras de diferentes tipos, com 4 pares de braços e duas pernas.</p>";
        div_ampliadao.innerHTML = "<img class='img_criatura_grande' id='ampliadao' src='imagens/Personagens_e_Criaturas/img-sangue-p/Criatura_Sangue_Carente_Leve.webp' alt='Criatura de ordem paranormal, Carente'>"
    }
    else if (nome == "morte") { 
        texto.innerHTML = "<h1>Mulher Afogada</h1> <p class='p_grande'>A Mulher Afogada é uma criatura paranormal de Sangue com complemento de Energia e Medo que se manifesta a partir de mulheres que morreram em afogamentos brutais e trágicos, seja de forma acidental ou assassinada. A Mulher Afogada inicialmente se mostra como uma espécie de líquido de Sangue, sendo viscoso e avermelhado, com seu material mucoso sendo semelhante a gosma vista em resíduos de Zumbis de Sangue quando mortos. Quando livre dos encanamentos, sua forma física se assemelha a um corpo feminino nu de porte grande que derrete nessa mesma gosma de uma forma em que seus órgãos pútridos pareçam derreter junto. Tem a cabeça com um rosto totalmente desfigurado e com dentes extremamente compridos e afiados, dando-lhe uma grande força de mordida que facilmente deceparia um membro humano, além de no topo da cabeça possuir tentáculos que se assemelham a cabelos trançados feitos de vísceras.</p>";
    }
    else if (nome == "sangue") {
        texto.innerHTML = "<h1>Minotauro</h1> <p class='p_grande'>O Minotauro é uma criatura paranormal de Sangue que habita labirintos. Essa criatura é uma das primeiras a ter sido presa numa espécie de cativeiro para ser estudada por investigadores paranormais. Porém, até hoje ninguém sabe quais os exatos motivos de alguém prender essa besta e mantê-la viva em algum lugar. Essa criatura é extremamente semelhante ao mito grego: um corpo humanoide e musculoso vestido por uma fina camada de pelos, imitando um touro, sendo sua cabeça totalmente no formato de um touro, com dois grandes chifres ensanguentados. Apesar disso, seu rosto é mais parecido com a carcaça do rosto de um boi, com seu focinho completamente absente de pele ou carne, também tendo o formato dos dentes parecido com o esqueleto do animal.</p>";
        div_ampliadao.innerHTML = "<img class='img_criatura_grande' id='ampliadao' src='imagens/Personagens_e_Criaturas/img-sangue-p/Criatura_Sangue_Minotauro_Leve.webp' alt='Criatura de ordem paranormal, Minotauro'>"
    }
    else if (nome == "conhecimento") {
        texto.innerHTML = "<h1>Zumbi de Sangue</h1> <p class='p_grande'>Os Zumbis de Sangue são criaturas paranormais de Sangue, originando-se de cadáveres que foram mortos brutalmente e deixados abandonados em uma área com a Membrana enfraquecida. Eles servem como uma passagem para a entidade de Sangue devorá-los e tomar o controle de sua forma física. A média do tempo de transformação de um Zumbi de Sangue é irregular, dependendo do ambiente afetado pelo paranormal em que ela ocorre ou então informações passadas da vítima como, caso a pessoa, quando viva, possuía um alto nível de Exposição Paranormal; sofreu uma morte extremamente dolorosa e brutal; ou teve seu cadáver completamente devorado pelo Sangue. Decorrente disso, pode se tornar um Zumbi de Sangue ainda mais brutal e animalesco, assim como um Bestial.</p>";
    }
}