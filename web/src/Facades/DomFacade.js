"use strict";

export class DomFacade{
    static renderPetCard(pets_list){
        const pets_section = document.getElementById('pets_section');

        for (let i = 0; i < pets_list.length; i++) {
            let card = document.createElement('article');
            card.classList.add('card');

            card.innerHTML += `
            <h1>${pets_list[i].name}</h1>
            <img src= "public/img/${pets_list[i].img}" />
            <p>${pets_list[i].status}</p>
        `;
            this.backgroundByStatus(card, pets_list[i].status);
            pets_section.appendChild(card);
        }
    }
    static backgroundByStatus(petCard, status){
        switch (status) {
            case 'available':
                petCard.style.backgroundColor = 'green';
                break;
            case 'pending':
                petCard.style.backgroundColor = 'yellow';
                break;
            case 'sold':
                petCard.style.backgroundColor = 'red';
                break;
        }
    }
}