function ampliar(x) { /*O valor de X é o dá imagem que foi clicada, pois ele está mandando uma imagem para o X*/
    let elemento; elemento = document.getElementById("ampliadao");
    /*uma forma de resumir "document.getElementById("ampliadao")"*/
    elemento.src = x;
}
function texto(nome) { /*significa que ele vai colocar as biografias no id=bio */
    let texto; texto = document.getElementById("js_texto");
    if (nome == "medo") {
        texto.innerHTML = "<h1>Cesar Cohen</h1> <p class='p_grande'>Cesar was a slender man, with a curved spine, shoulder-length hair, and 30 years old.In addition to being a paranormal investigator, he was a professional programmer, very agile in computer - related matters, and generally intelligent.He had his first appearance in the season O Segredo na Floresta, in the first episode, and survived until the last episode of Desconjuração. In Desconjuração, he changed his name to Kaiser, and during the season, it was shown that he has an affinity for the Energy element.He died at the end of the Desconjuração season in a battle against Gal and Kian, where he sacrificed himself to save his partners and was killed by the Ritual of Nonexistence in the hacker, disappearing into the air, ceasing to exist.</p > "; 
    }
    else if (nome == "energia") {
        texto.innerHTML = "<h1>Miguel Cariad</h1> <p>Miguel was a tall and strong man, at the time around 30 years old, with short brown hair. He was part of the paranormal investigation group Team Kelvin alongside Mariana Larona and Kenan Thomas, being one of the top investigators of the Ordo Realitas. During an investigation in Carpazinha, he discovered a secret community, the Holy Cradle, where Miguel betrayed his own team to save the community and assume the leadership of the luzidios. Calango portrayed him in an episode that showed the past of Team Kelvin, and after becoming the Ferreiro, he was portrayed by the RPG master, Cellbit</p>";
    }
    else if (nome == "morte") {
        texto.innerHTML = "<h1>Faustus</h1> <p>Faustus was a strong, armored man and a member of the Ordo Calamitas in ancient Rome. He also had strong beliefs, always carrying a necklace with a cross, which was wrapped around the hilt of his sword. He made an appearance during the Games of the Host, being the statue chosen by Balu, a character played by Calango. He ended up dying during one of the games, his body taken over by Balu, who chose to let Faustus cease to exist, leaving only a seated figure embracing his sword, thus losing his existence.</p>";

    }
    else if (nome == "sangue") {
        texto.innerHTML = "<h1>Balu</h1> <p class='p_grande'> Balu is a tall man, relatively well-defined in his physique. He has dark hair slicked back and a mustache with a small goatee that doesn't fully reach his chin. He made his first appearance in the Calamity season and is alive up to the current moment in the series (Signs from the other side). He was a former Agent of the Ordo Realitas, who had been away for about five years and returned only at the request of Senhor Veríssimo. A distinguishing feature of Balu is his rejection of using paranormal rituals and transcending the paranormal in general. Because of this, he has no affinity with any element despite having NEX. A small exception is his axe, which, having been cursed by the Devil, has the element of blood embedded in it.</p>";
    }
}