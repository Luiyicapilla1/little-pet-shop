"use strict";

export class DomFacade{
    static renderPetCard(pets_list){
        const pets_section = document.getElementById('pets_section');

        for (let i = 0; i < pets_list.length; i++) {
            pets_section.innerHTML += `
        <article class="card" id="pet-card">
            <h1>${pets_list[i].name}</h1>
            <img src= "public/img/${pets_list[i].img}" />
            <p>${pets_list[i].status}</p>
        </article>
        `;
            this.backgroundByStatus(pets_list[i].status);
        }
    }
    static backgroundByStatus(status){
        const petCard = document.getElementById('pet-card');
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