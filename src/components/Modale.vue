<template>

<div id="bloc-modale" class="" :backgroundColor='backgroundColor' v-if='revele'>

    <div class="overlay" v-on:click="toggleModale"></div>
    <div class="modale" :class="cssClass">
        <button class="btn-modale" :class="btnClass" v-on:click="toggleModale">X</button>
        <img class="mon-cv-modale" :src="imageSrc" alt="">
        <p>{{ modaleDescription }}</p>
        <p>Date de création: {{ creationDate }}</p>
        <div>
            <a :href="projectLink" target="_blank">&lt;code&gt;</a>
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
        ],
    computed: {
            /*Permet le changement de fond sur les différents contenus*/
            cssClass() {
                return this.backgroundColor === 'orange' ? 'orange-background' : 'rose-background';
            },
            /*Permet le changement de fond des boutons*/
            btnClass() {
                return this.backgroundColor === 'orange' ?'rose-background' : 'orange-background' ;
            }
        }
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
    padding: 50px;
    position: fixed;
    display: grid;
    grid-template-columns: 600px 700px;
    grid-auto-rows: minmax(3, auto);
}
.btn-modale{
    position: absolute;
    top: 15px;
    right: 15px;
    width: 25px;
    height: 25px;
    border-radius: 30%;
    border: none;
}  
a{
    text-decoration: none;
    color: white;
}
.modale a, .modale p{
    padding-left: 100px;
    text-decoration: none;
    font-size: 0.6em;
}
img{
    grid-column: 1;
    grid-row: 1 / 4;
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