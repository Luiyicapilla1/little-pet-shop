"use strict";
import {PetService} from "./src/services/PetService.js";
import {DomFacade} from "./src/Facades/DomFacade.js";

const pets_section = document.getElementById('pets_section');
const pet_form = document.getElementById('pet_form');

document.addEventListener('DOMContentLoaded', async function (){
    let pets_list = await PetService.getPets();
    DomFacade.renderPetCard(pets_list);
});

pet_form.addEventListener('submit', async function (){
    const namePet = document.getElementById('name').value;
    const img = document.getElementById('img').value;
    const type = document.getElementById('type').value;
    const desc = document.getElementById('desc').value;
    const status = document.getElementById('status').value;

    await PetService.createPet(namePet, img, type, desc, status);
});

