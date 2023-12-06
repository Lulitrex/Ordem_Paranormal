function ampliar(x) { /*O valor de X é o dá imagem que foi clicada, pois ele está mandando uma imagem para o X*/
    let elemento; elemento = document.getElementById("ampliadao");
    /*uma forma de resumir "document.getElementById("ampliadao")"*/
    elemento.src = x;
}
function texto(nome) { /*significa que ele vai colocar as biografias no id=bio */
    let texto; texto = document.getElementById("js_texto");
    if (nome == "medo") {
        texto.innerHTML = "<h1>Thiago Fritz</h1> <p>Thiago was a 33 year old journalist who discovered Ordo Realitas after the death of his father, Arnaldo Fritz, a renowned actor secretly part of the organization. His first mission was the Case of Escola Nostradamus, where he started a friendship with Elizabeth Webber. He then took over the leadership of what would be known as Team E during the Case of Carpazinha. After the discovery of Santo Berço and finding out that he was assimilated into the Symbol, he decided to sacrifice himself at the hands of the God of Death to destroy the Parasita de Dimensões.</p > "; 
    }
    else if (nome == "energia") {
        texto.innerHTML = "<h1>Dante</h1> <p class='p_grande'> Dante is a 27-year-old man with fair skin and blond hair. He is a calm and complacent person, willing to do anything to protect his people he loves. Dante grew up at the Santa Menefreda Orphanage with Beatrice Portinari, with whom he developed a strong bond. After the fire at the orphanage, Dante turned to the occult with Leonardo Gomes and Jasmin Cristal. He ended up being manipulated by Kian to carry out the Passage and was arrested by Erin Parker, an agent of the Ordo Realitas. Dante was called to assist a team in the case of Elizabeth Webber's disappearance and, later, to stop the Conjuring. Now as an agent of the Ordo Realitas, after the death of Beatrice and others friends, Dante must seek out the powerful Relics of Calamity and stop Kian's plans.</p>";
    }
    else if (nome == "morte") {
        texto.innerHTML = "<h1>Remus</h1> <p>Remus was a man of strong, delicate appearance and long brown hair, being one of the members of the Ordo Calamitas, in ancient Rome. Remus generally used a low tone of voice and serene, being also a very smart person who devised a lot of plans. He ended up dying during one of the Host's games in the 6th episode, having his body taken over by Dante, who ended up sacrificing himself, eliminating Emperor Nero in exchange for his own existence.</p>";
    }
    else if (nome == "sangue") {
        texto.innerHTML = "<h1>Arnaldo Fritz</h1> <p class='p_grande'>Arnaldo was a middle-aged man, described as very friendly and sociable, being an actor and an important agent of the Ordo Realitas, which tried to understanding the paranormal, discovering several extremely important things in the occult, such as the existence of the Devil and how many relics behaved. Arnaldo's quest, for a long time, was to find the relics, in search of an answer on how to stop Kian, but in the end, he ended up being consumed by one of them, and becoming the Host. In Sinais do Outro Lado, the young Arnaldo Fritz appears as the boss of Calisto Besatt and owner of Café's Pizzaria, a pizzeria located on the side of the road, which in a way secret was used as an installation for practices to combat the paranormal.</p>";
    }
    else if (nome == "conhecimento") {
        texto.innerHTML = "<h1>Wanderley</h1> <p>Wanderley was a very sociable and carefree man, even during working hours, around 40 years old, bald and with a short black beard. Wanderley was an agent of Ordo Realitas who was sent with Cavalcante Bueno to Tipora to analyze something paranormal on the island. The two disguised themselves as real estate agents using the name of a group that was used by occultists, Imobiliária Fachada. Wanderley was killed by Amigo Imaginário during the battle in the island's Church, when dissolved by the creature.</p>";
    }
}


