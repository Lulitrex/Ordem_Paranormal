
function ampliar(x){ /*O valor de X é o dá imagem que foi clicada, pois ele está mandando uma imagem para o X*/
    let elemento; elemento =  document.getElementById("ampliadao"); 
    /*uma forma de resumir "document.getElementById("ampliadao")"*/
    elemento.src = x;
}
function texto(nome){ /*significa que ele vai colocar as biografias no id=bio */
    let texto; texto = document.getElementById("js_texto"); 
    if(nome=="medo"){
        texto.innerHTML="<h1>Alexsander Kothe</h1> <p class='p_grande'>Um deuteragonista e personagem chave no primeiro RPG, era um professor de história jovem-adulto com contato direto com os Ocultistas do caso da Escola Nostradamus de Ensino Médio, ajudando eles sem o conhecimento do verdadeiro plano. Depois de descobrir tudo, é vítima de um ritual, tendo todas as memórias do seu dia a dia no trabalho apagadas e sendo expulso logo em seguida com uma falsa acusação de agredir um de seus alunos. Em mais um dia normal no seu apartamento assistindo TV, sua casa é invadida por três membros da Ordo Realitas, Thiago Fritz, Elizabeth Webber e Daniel Hartmann, que o ameaçam por causa da sua participação no caso. Sua relação com seus colegas foi, no geral, muito conturbada. No final da temporada, Alex comete suicídio durante a batalha contra a Degolificada, após ficar completamente insano devido aos vários ocorridos durante a investigação.</p>"; 
    }
    else if(nome=="energia"){
        texto.innerHTML="<h1>Cristopher Cohen</h1> <p>Cristopher Cohen tinha 60 anos, sendo muito forte e alto, com cabelos grisalhos e uma grande queimadura na parte esquerda do rosto. Cristopher era amigo muito próximo de Arnaldo Fritz e conhecia Thiago a muito tempo, sendo dublê de cinema e investigador paranormal, assim como ele. Cris é bem falante e alto astral, sempre querendo o bem estar de todos a sua volta, sempre muito protetor e amigável. Havia uma relação complicada com seu filho Cesar, ocorrendo muitos conflitos entre os dois durante a missão. No final, sacrificou-se para salvar Thiago do interior da Aranha Preta, abalando fortemente a equipe e principalmente seu filho.</p>"; 
    }
    else if(nome=="morte"){
        texto.innerHTML="<h1>Fernando/Luciano</h1> <p class='p_grande'>Fernando é um homem que coabita o corpo de seu marido, pelo acidente ocorrido em uma missão anterior com sua equipe, Tristan e Erin Parker. Fernando tinha a pele negra, um cabelo grande, amarrado e com dreads. Além disso, Fernando possuía vitiligo, que é uma deficiência que faz a pele perder a coloração em alguns pontos. Atualmente é um músico gentil, amável e meio medroso. Luciano é um homem negro e careca, por volta dos 30 ou 40 anos. Sua personalidade é o exato oposto de Fernando, provavelmente por conta de ser ex-militar. Tem um comportamento mais frio e metódico, assumindo o corpo em momentos de crise e atualmente divide o corpo. Luciano salvou seu marido da beira da morte ao fazer um ritual, transferindo a mente desse para seu próprio corpo. Após se tornarem membros da equipe Força D e enfrentarem Gal na tentativa de impedir a Desconjuração, Kian, cuja mente se encontrava armazenada no corpo do ex-militar, tomou conta do corpo e matou Fernando.</p>"; 
    }
    else if(nome=="sangue"){
        texto.innerHTML="<h1>Damir Lukic</h1> <p>Damir é um homem branco de meia-idade careca com um tapa-olho e usando uma camisa vinho com um blazer roxo por cima, segurando uma bengala em sua mão direita. É um homem arrogante, ganancioso e extremamente dependente e apegado a seu irmão Boris, Um homem de meia-idade de cabelos grisalhos e olhos claros, ambos fazem parte do time de Kian, sendo os Marcados dele.</p>"; 
    }
    else if(nome=="conhecimento"){
        texto.innerHTML="<h1>Chico Albuquerque</h1> <p>Chico é um jovem pardo de 1,47 metros de altura, de cabelo longo castanho e olhos da mesma cor com um cavanhaque, um piercing no supercilio e espirais vermelhas em suas bochechas. Como vestimenta ele utiliza uma blusa preta sobreposta de uma manga longa amarela com as pontas dobradas alternadamente, ele também utiliza bombachas pretas junto ao coturno amarrado por uma fivela. Ele possui diversos aparatos tecnológicos presente em diversos pontos de seu traje em conjunto com diversas ferramentas amarradas a sua cintura.</p>"; 
    }
}
