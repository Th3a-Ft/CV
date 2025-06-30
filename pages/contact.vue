<template>
    <form id="formContact" class="flex flex-col items-left bg-gray-100 w-1/2 mx-auto px-6" method="post"
        action="https://formtester.goodbytes.be/post.php">
        <div class="flex flex-row w-2/3">
            <div class="flex flex-col">
                <label for="firstname">Prénom</label>
                <input id="firstname" name="firstname" type="text" class="bg-white">
            </div>
            <div class="flex flex-col pl-6">
                <label for="lastname">Nom</label>
                <input id="lastname" name="lastname" type="text" class="bg-white w-full">
            </div>
        </div>
        <label for="mailObject">Objet du mail</label>
        <input id="mailObject" name="mailObject" type="text" class="bg-white w-1/3">
        <label for="emailAdress">Adresse email</label>
        <input id="emailAdress" name="emailAdress" type="email" class="bg-white w-2/3">
        <label for="emailContent">Votre message</label>
        <textarea id="emailContent" name="emailContent" class="bg-white w-full"></textarea>
        <input type="submit" class="my-6 bg-[#800101] w-1/5 text-white mx-auto">
    </form>

</template>

<script setup>

</script>