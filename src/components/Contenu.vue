<template>
<div id="projets"></div>
    <div id="container" :class="cssClass">
        <div class="contenu-modale">

            <modale
                :revele='revele'
                :toggleModale='toggleModale'
                :imageSrc="imageSrc"
                :backgroundColor='backgroundColor'
                :projectLink="projectLink"
                :modaleDescription="modaleDescription"
                :creationDate="creationDate"
                :siteLink="siteLink">
            </modale>
            <img :src="imageSrc" alt="" v-on:click='toggleModale'>
            <p>{{ titreModale }}</p>
            <p v-bind="$attrs">{{ langageUsed }}</p>
            <div  class="project-link">
                <a :href="projectLink" target="_blank" :class="btnClass">&lt;code&gt;</a>
                <a :href="siteLink" target="_blank" :class="btnClass">site</a>
            </div>
            
        </div>
    </div>

</template>


<script>
    
    import Modale from './Modale.vue'

    export default {
        name: 'Contenu',
        props: [
            'imageSrc',
            'backgroundColor',
            'titreModale',
            'langageUsed',
            'projectLink',
            'modaleDescription',
            'creationDate',
            'siteLink',
            ],
        data(){
            return{
                revele: false
            }
        },
        components: {
            'modale': Modale
        },
        /*Permet d'afficher ou de cacher la boite modale*/
        methods: {
            toggleModale: function(){
                this.revele = !this.revele
            }
        },
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

#container{
    color: white;
    height: 700px;
    display: flex;
    align-items: center;
    justify-content: center;
}
.contenu-modale{
    width: 1300px;
    padding-left: 50px;
    display: grid;
    grid-template-columns: 540px 760px;
    grid-auto-rows: minmax(3, auto);
    font-size: 2.5em;
    font-family: var(--police-neon);
    letter-spacing: 2px;
    line-height: 1.5em;
}
.contenu-modale p, .project-link{
    padding-left: 100px;
}
a {
    text-decoration: none;
    color: white;
    padding: 0px 5px 4px 8px;
    margin: 0 50px 0 0;
    border: solid white;
    border-radius:30px;
}
.orange-background{
    background: -webkit-linear-gradient(300deg, #ff2975,#ff901f);
    background: linear-gradient(300deg, #ff2975,#ff901f);
}
.rose-background{
    background: -webkit-linear-gradient(300deg, #8C1EFF,#0D0126);
    background: linear-gradient(300deg, #8C1EFF,#0D0126);
}
img{
    height: 601px;
    width: 517px;
    border-radius: 20px;
    grid-column: 1;
    grid-row: 1 / 4;
    cursor: pointer;
}
img:hover{
    box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.3);
}
</style>