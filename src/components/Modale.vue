<template>

<div id="bloc-modale" class="" v-if='revele'>

    <div class="overlay" v-on:click="toggleModale"></div>
    <div class="modale">
        <button class="btn-modale" v-on:click="toggleModale">X</button>
        <img class="mon-cv-modale" :src="imageSrc" alt="">

    </div>

</div>

</template>


<script>

export default {
    name: 'modale',
    props: ['revele', 'toggleModale', 'imageSrc']
}

</script>


<style scoped>

#bloc-modale {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
}

.overlay{
    background: rgba(0,0,0,0.5);
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
}
.modale{
    background: #f1f1f1;
    color: #333;
    padding: 50px;
    position: fixed;
    background: -webkit-linear-gradient(300deg, #ff2975,#ff901f);
    background: linear-gradient(300deg, #ff2975,#ff901f);
    /* background: -webkit-linear-gradient(300deg, #f222ff,#ff2975);
    background: linear-gradient(300deg, #f222ff,#ff2975); */
}
.btn-modale{
    position: absolute;
    top: 10px;
    right: 10px;
}
.mon-cv-modale{
    height: 100%;
    width: 600px;
}

</style>