<template>

<div class="bloc-modale" v-if='revele'>

    <div class="overlay" v-on:click="toggleModale"></div>
    <div class="modale">
        <button class="btn-modale" v-on:click="toggleModale">X</button>
        <p>Le contenu de la modale</p>
        <img class="mon-cv-modale" src="../../Images/Mon_CV.PNG" alt="test">

    </div>

</div>

</template>


<script>

export default {
    name: 'modale',
    props: ['revele', 'toggleModale']
}

</script>


<style scoped>

.bloc-modale {
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
    top: 10%;
    bottom: 10%;
}

.btn-modale{
    position: absolute;
    top: 10px;
    right: 10px;
}
.bloc-modale p{
    color: red;
}

.mon-cv-modale{
    height: 100%;
    width: 600px;
}

</style>