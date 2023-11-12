<template>

<div id="bloc-modale" class="" :backgroundColor='backgroundColor' v-if='revele'>

    <div class="overlay" v-on:click="toggleModale"></div>
    <div class="modale" :class="cssClass">
        <button class="btn-modale" :class="btnClass" v-on:click="toggleModale">X</button>
        <img class="mon-cv-modale" :src="imageSrc" alt="">
        <p>{{ modaleDescription }}</p>
        <p>Date de création: {{ creationDate }}</p>
        <div>
            <a :href="projectLink" target="_blank" :class="btnClass">&lt;code&gt;</a>
            <a :href="siteLink" href="../../projects/Mon_CV-main/index.html" target="_blank" :class="btnClass">site</a>
        </div>

    </div>

</div>

</template>


<script>

export default {
    name: 'modale',
    props: [
        'revele',
        'projectLink',
        'toggleModale',
        'imageSrc',
        'backgroundColor',
        'modaleDescription',
        'creationDate',
        'siteLink',
        ],
    computed: {
            /*Permet le changement de fond sur les différents contenus*/
            cssClass() {
                return this.backgroundColor === 'orange' ? 'orange-background' : 'rose-background';
            },
            /*Permet le changement de fond des boutons*/
            btnClass() {
                return this.backgroundColor === 'orange' ? 'orange-background' : 'rose-background' ;
            }
        }
}

</script>


<style scoped>

#bloc-modale {
    color: white;
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
    padding: 50px;
    position: fixed;
    display: grid;
    grid-template-columns: 600px 700px;
    grid-auto-rows: minmax(3, auto);
    font-family: var(--police-Noto);
    border-radius: 20px;
}
.btn-modale{
    color: white;
    position: absolute;
    top: 15px;
    right: 15px;
    width: 25px;
    height: 25px;
    border-radius: 30%;
    border: none;
}  
a{
    color: white;
    font-size: 1.2em;
    text-decoration: none;
    padding: 0px 5px 4px 8px;
    margin: 0 50px 0 0;
    border: solid white;
    border-radius:30px;
}
.modale div, .modale p{
    padding-left: 100px;
    font-size: 0.6em;
}
img{
    grid-column: 1;
    grid-row: 1 / 4;
    border-radius: 20px;
}
.mon-cv-modale{
    height: 100%;
    width: 600px;
}
.orange-background{
    background: -webkit-linear-gradient(300deg, #ff2975,#ff901f);
    background: linear-gradient(300deg, #ff2975,#ff901f);
}
.rose-background{
    background: -webkit-linear-gradient(300deg, #8C1EFF,#0D0126);
    background: linear-gradient(300deg, #8C1EFF,#0D0126);
}
</style>