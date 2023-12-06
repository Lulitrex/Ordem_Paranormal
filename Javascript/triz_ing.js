function ampliar(x){ /*O valor de X é o dá imagem que foi clicada, pois ele está mandando uma imagem para o X*/
    let elemento; elemento =  document.getElementById("ampliadao"); 
    /*uma forma de resumir "document.getElementById("ampliadao")"*/
    elemento.src = x;
}
function texto(nome){ /*significa que ele vai colocar as biografias no id=bio */
    let texto; texto = document.getElementById("js_texto"); 
    if(nome=="medo"){
        texto.innerHTML="<h1>Beatrice Portinari</h1> <p class='p_grande'>Beatrice Portinari was a 23-year-old woman, 1.69 meters tall, with long, shoulder-length brown hair and clearly visible freckles on her face and torso. Beatrice was calm, always sociable and curious, having a very strong curiosity, which could be dangerous. Beatrice tends to be quite kind and cares about others, trying to help them as much as she can. By her side, she is always with her companion and best friend Orpheu, a large and silent urutau. During a fight against the Traveler in the Demon's Mansion, Orpheu ends up being killed by the creature, revealing himself to be a protective barrier created by Clara to block the devastating memories of her daughter implemented by Kian. With this broken block, Beatrice transformed into an Existence, thus ceasing to exist.</p>"; 
    }
    else if(nome=="energia"){
        texto.innerHTML="<h1>Artemis</h1> <p class='p_grande'>Artemis was a woman with fair skin, dark hair and gray eyes. She wore gray pants and a black sleeveless shirt, with a suspender and belt with beige pockets. Artemis also had a black sniper. She had a pet possum that was devoured by Theodore during Calamity. During the battle between the Scribes and the Metallic Dragons under the catacombs of the Domus Aurea, she was killed by Leandro Hans who, after seeing all his friends from his group dead on the ground, went towards Artemis who was on the ground on fire. and writhing in pain, and fired one last shot at her head, exploding and killing her instantly. After that, Boris tries to carry her body, until Kian gets frustrated and stops him from doing so, using a Ritual of Nonexistence on her body, causing it to disappear completely.</p>"; 
    }
}