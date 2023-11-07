<template>

    <div id="container" :class="cssClass">
        <div class="contenu-modale">
            <modale :revele='revele' :toggleModale='toggleModale' :imageSrc="imageSrc"></modale>
            <img :src="imageSrc" alt="" v-on:click='toggleModale'>
            <p>TEST</p>
            <p>TEST</p>
            <p>TEST</p>
        </div>

    </div>

</template>


<script>
    
    import Modale from './Modale.vue'

    export default {
        name: 'Contenu',
        props: ['imageSrc', 'backgroundColor'],
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
    width: 1160px;
    display: flex;
    flex-direction: row;
}
.contenu-modale p{
    padding-left: 100px;
}
.orange-background{
    background: -webkit-linear-gradient(300deg, #ff2975,#ff901f);
    background: linear-gradient(300deg, #ff2975,#ff901f);
}
.rose-background{
    background: -webkit-linear-gradient(300deg, #f222ff,#ff2975);
    background: linear-gradient(300deg, #f222ff,#ff2975);
}
img{
    height: 601px;
    width: 517px;
    padding-left: 50px;
}
</style>