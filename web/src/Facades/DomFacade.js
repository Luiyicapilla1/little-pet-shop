"use strict";

export class DomFacade{
    static renderPetCard(pets_list){
        const pets_section = document.getElementById('pets_section');

        for (let i = 0; i < pets_list.length; i++) {
            let card = document.createElement('article');
            card.classList.add('card');

            card.innerHTML += `
            <h1>${pets_list[i].name}</h1>
            <a href="/little-pet-shop/web/single-page.html?id=${pets_list[i].id}">
            <img 
                src="public/img/${pets_list[i].img}"
                alt="${pets_list[i].img}"
            />
            </a>
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

    static renderSinglePetPage(single_pet_section, pet){
        let card = document.createElement('card');
        card.classList.add('card');

        card.innerHTML += `
            <h1>${pet.name}</h1>
            <img 
                src="public/img/${pet.img}"
                alt="${pet.img}"
            />
            <p>${pet.status}</p>
        `;
        single_pet_section.appendChild(card);
    }
}