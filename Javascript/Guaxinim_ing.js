function ampliar(x){ /*O valor de X é o dá imagem que foi clicada, pois ele está mandando uma imagem para o X*/
    let elemento; elemento =  document.getElementById("ampliadao"); 
    /*uma forma de resumir "document.getElementById("ampliadao")"*/
    elemento.src = x;
}
function texto(nome){ /*significa que ele vai colocar as biografias no id=bio */
    let texto; texto = document.getElementById("js_texto"); 
    if(nome=="medo"){
        texto.innerHTML="<h1>Arthur Cervero</h1> <p>Arthur Cervero, a citizen of Carpazinha, joined Team E to help with the mission, but during the  murder investigation, he lost his father and gang mates. In the process, he lost his arm fighting against the Minerador in Santo Berço. Upon joining Ordo Realitas, he faced the kidnapping of Elizabeth Webber by the Cult of Knowledge, resulting in significant losses. After transcending in Ordem Paranormal Desconjuração, Arthur gained an affinity with the element of blood, with a white streak in his hair and sharp teeth. He is currently alive in Calamidade Part 1 and is expected to continue his story in Calamidade Part 2. </p>"; 
    }
    else if(nome=="energia"){
        texto.innerHTML="<h1>Marius</h1> <p>Marius was a tall and strong man, being one of the members of the ancient Ordo Calamitas in Rome. He was always seen wearing large black armor that covers his entire body, with his face being blocked by the armor's helmet visor. Marius was quite quiet and largely brutish, speaking rarely, and the times he did speak, he uttered a single word. Marius ended up dying during one of the Host's games in the 6th episode, allowing himself to be killed by Faustus and having his neck cut by the General's sword, thus losing his existence.</p>"; 
    }
    else if(nome=="morte"){
        texto.innerHTML="<h1>Alexandre/Xande</h1> <p class='p_grande'>Alexandre was a young white man with blue eyes, with long brown hair that reached his shoulders, and one of the members of Cinco, a 1997 group led by Morato. He wore a yellow shirt and a black blouse with the sleeves rolled up, along with black shorts with knee pads and a backwards cap and several pockets around his body with various accessories. He carried with him a baseball bat with coiled chains connecting his arm to it, and a yellow skateboard with metal trim around the edges. At the end of his investigation, Xande decided to sacrifice himself for the team so that they could enter the Varminho TV Tower connection. Therefore, he ended up being sadly tortured by the Foreigner and melted by the being, losing all his memories and everything he once was.</p>"; 
    }
}