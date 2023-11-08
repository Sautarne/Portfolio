<template>

    <div id="container" :class="cssClass">
        <div class="contenu-modale">

            <modale
                :revele='revele'
                :toggleModale='toggleModale'
                :imageSrc="imageSrc"
                :backgroundColor='backgroundColor'
                :projectLink="projectLink"
                :modaleDescription="modaleDescription"
                :creationDate="creationDate">
            </modale>

            <img :src="imageSrc" alt="" v-on:click='toggleModale'>
            <p>{{ titreModale }}</p>
            <p>{{ langageUsed }}</p>
            <div>
                <a :href="projectLink" target="_blank">&lt;code&gt;</a>
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
        /*Permet le changement de fond sur les différents contenus*/
        computed: {
            cssClass() {
                return this.backgroundColor === 'orange' ? 'orange-background' : 'rose-background';
            }
        }
    }

</script>


<style scoped>

#container{
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
    font-family: var(--police-pixel);
    letter-spacing: 2px;
    line-height: 1.5em;
}
.contenu-modale p, .contenu-modale div{
    padding-left: 100px;
    text-decoration: none;
}
a {
    text-decoration: none;
    color: white;
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
    grid-column: 1;
    grid-row: 1 / 4;
}
img:hover{
    box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.3);
}
</style>