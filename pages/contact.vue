<template>
    <form class="flex flex-col items-left bg-gray-100 w-1/2 mx-auto px-6" @submit.prevent="hello">
        <div class="flex flex-row w-2/3">
            <div class="flex flex-col">
                <label for="firstname">Prénom</label>
                <textarea v-model="form.firstname" id="firstname" class="bg-white"></textarea>
            </div>
            <div class="flex flex-col pl-6">
                <label for="lastname">Nom</label>
                <textarea v-model="form.lastname" id="lastname" class="bg-white w-full"></textarea>
            </div>
        </div>
        <label for="mailObject">Objet du mail</label>
        <textarea v-model="form.mailObject" id="mailObject" class="bg-white w-1/3"></textarea>
        <label for="emailAdress">Adresse email</label>
        <textarea v-model="form.emailAdress" id="emailAdress" class="bg-white w-2/3"></textarea>
        <label for="emailContent">Votre message</label>
        <textarea v-model="form.emailContent" id="emailContent" class="bg-white w-full"></textarea>
        <input type="submit" class="my-6 bg-[#800101] w-1/5 text-white mx-auto">

    </form>
    <div v-if="displayAnswer">
        <p>Bonjour, {{ form.firstname }} {{ form.lastname }}</p>
        <p>Vous m'avez contacté à propos de {{ form.mailObject }}</p>
        <p>Pour rappel, voici le contenu de votre message :</p>
        <p class="bg-gray-100">{{ form.emailContent }}</p>
        <p>Je vous répondrais dès que possible sur cette adresse mail : {{ form.emailAdress }}</p>
    </div>

</template>

<script setup>
import { ref } from 'vue';

function displayAnswer(){
    if(firstname!=null){
       
    }
}

const form = ref({
    firstname: " ",
    lastname: " ",
    mailObject: " ",
    emailAdress: " ",
    emailContent: ""
})

function hello() {
    console.log(form.name)
}
</script>