function ampliar(x){ /*O valor de X é o dá imagem que foi clicada, pois ele está mandando uma imagem para o X*/
    let elemento; elemento =  document.getElementById("ampliadao"); 
    /*uma forma de resumir "document.getElementById("ampliadao")"*/
    elemento.src = x;
}
function texto(nome){ /*significa que ele vai colocar as biografias no id=bio */
    let texto; texto = document.getElementById("js_texto"); 
    if(nome=="medo"){
        texto.innerHTML="<h1>Helper</h1> <p>The Helper had gray hair with a pompadour shaved on the sides, with an appearance similar to the others in the village of Santo Berço, gray skin, completely black eyes and black stripes on his face, which form something similar to the letter F. The Helper was optimistic and cheerful. like those who live in Santo Berço, showing themselves to be very happy with their city and proud of their master Ferreiro. He was killed by the Porter at the end of the episode where he appeared.</p>"; 
    }
    else if(nome=="energia"){
        texto.innerHTML="<h1>Rubens</h1> <p>Rubens has long curly hair with a whitish color, dark skin and wears a long-sleeved beige shirt. He is eager and intelligent, being described as the brains of the duo by his partner Johnny. Naluti appeared together with his friend at the place where Erin and Fernando were taken, after their kidnapping. It was revealed that Rubens and Johnny were also agents of the order and were purposely kidnapped to find out more about the Cult they were investigating. The character returns in Paranormal Order: Calamity, being part of the main team of the season in search of the Calamity Relics and stopping Kian's plans.</p>"; 
    }
    else if(nome=="morte"){
        texto.innerHTML="<h1>Amalia</h1> <p>Amalia was a black woman with a cyan aura, which followed her from her feet to her head, with her eyes the same vibrant color. She had curly hair, with locks that appeared between her hood, and a large scar on her face, forming a type of cross. She ended up dying during the Host's last game in the 6th episode of Calamity, having her body taken over by Rubens, who after having a conversation with Joui in Celestine's body, allows herself to be struck, thus losing her existence.</p>"; 
    }
    else if(nome=="sangue"){
        texto.innerHTML="<h1>Guizo</h1> <p class='p_grande'>Guizo was one of the members of Cinco, a 1997 group led by Morato Vertaler. He was a light-skinned man with wine red hair, wore ripped black pants with a belt containing some objects, and a black t-shirt over a striped shirt. In addition, he had several pockets spread across his body and a fanny pack with stickers. He always carried his camera everywhere, trying to record everything that seemed interesting to post on his blog. At the end of his investigation, with his team, who were discussing who would make the Passage to Tenebris, Guizo asked him to be alone with Dara. After that, he said it would be a great opportunity for him to finally have contact with everything he wanted to know. Thus, he enters through the passage of the Impossible City, abandoning his freedom.</p>"; 
    }
}