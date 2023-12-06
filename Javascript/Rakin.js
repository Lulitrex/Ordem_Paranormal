
function ampliar(x) { /*O valor de X é o dá imagem que foi clicada, pois ele está mandando uma imagem para o X*/
    let elemento; elemento = document.getElementById("ampliadao");
    /*uma forma de resumir "document.getElementById("ampliadao")"*/
    elemento.src = x;
}
function texto(nome) { /*significa que ele vai colocar as biografias no id=bio */
    let texto; texto = document.getElementById("js_texto");
    if (nome == "medo") {
        texto.innerHTML = "<h1>Thiago Fritz</h1> <p>Thiago era um jornalista de 33 anos que descobriu a Ordo Realitas depois da morte de seu pai,-Arnaldo Fritz, um renomado ator que fazia secretamente parte da organização. Sua primeira missão foi o Caso da Escola Nostradamus, onde iniciou a amizade com Elizabeth Webber.Em seguida, assumiu a liderança do que seria conhecida como a Equipe E durante o Caso de Carpazinha.Após a descoberta de Santo Berço e da descoberta que estava assimilado ao Símbolo, decidiu se sacrificar nas mãos do Deus da Morte para destruir o Parasita de Dimensões.</p > "; 
    }
    else if (nome == "energia") {
        texto.innerHTML = "<h1>Dante</h1> <p class='p_grande'> Dante é um homem de 27 anos com pele pálida e cabelos loiros. Ele é uma pessoa calma e complacente, disposto a fazer de tudo para proteger as pessoas que ama. Dante cresceu no Orfanato Santa Menefreda junto de Beatrice Portinari, com quem ele desenvolveu uma forte ligação. Após o incêndio do orfanato, Dante se voltou ao ocultismo junto de Leonardo Gomes e Jasmin Cristal. Ele acabou sendo manipulado por Kian a realizar a Passagem e foi preso por Erin Parker, uma agente da Ordo Realitas. Dante foi convocado a auxiliar uma equipe no caso do desaparecimento de Elizabeth Webber e, posteriormente, a impedir a Desconjuração. Agora como um agente da Ordo Realitas, após a morte de Beatrice e de outros amigos, Dante precisa procurar as poderosas Relíquias da Calamidade e impedir os planos de Kian.</p>";
    }
    else if (nome == "morte") {
        texto.innerHTML = "<h1>Remus</h1> <p>Remus era um homem de aparência forte, delicada e longos cabelos castanhos, sendo um dos membros da Ordo Calamitas, na antiga Roma. Remus geralmente usava um tom de voz baixo e sereno, sendo também uma pessoa bastante esperta que arquitetava bastante planos. Ele acabou morrendo durante um dos jogos do Anfitrião no 6º episódio, tendo seu corpo tomado por Dante, que acabou se sacrificando, eliminando o imperador Nero em troca da sua própria existência</p>";
    }
    else if (nome == "sangue") {
        texto.innerHTML = "<h1>Arnaldo Fritz</h1> <p class='p_grande'>Arnaldo era um homem de meia idade, descrito como muito amigável e sociável, sendo um ator e um agente importante da Ordo Realitas, que tentava entender o paranormal, descobrindo diversas coisas extremamente importantes no meio do oculto, como a existência do Diabo e como muitas relíquias se comportavam. A busca de Arnaldo, por muito tempo, foi encontrar as relíquias, em busca de resposta de como parar Kian, porém no fim, acabou sendo consumido por uma delas, e se tornando o Anfitrião. Em Sinais do Outro Lado, o jovem Arnaldo Fritz aparece sendo o chefe de Calisto Besatt e proprietário da Café's Pizzaria, uma pizzaria localizada na beira de estrada, que de forma sigilosa era utilizado como instalação para práticas de combate ao paranormal.</p>";
    }
    else if (nome == "conhecimento") {
        texto.innerHTML = "<h1>Wanderley</h1> <p>Wanderley era um homem bastante sociável e despreocupado, mesmo em horário de trabalho, de mais ou menos 40 anos, careca e com uma barba curta preta. Wanderley era um agente da Ordo Realitas que foi mandado junto de Cavalcante Bueno para Tipora analisar algo paranormal na ilha. Os dois se disfarçaram de agentes imobiliários usando o nome de um grupo que era utilizado por ocultistas, a Imobiliária Fachada. Wanderley foi morto pelo Amigo Imaginário durante a batalha na Igreja da ilha, ao ser dissolvido pela criatura.</p>";
    }
}
