<template>

    <div class="container">

    <p>Une modale en Vue JS</p>

    <modale v-bind:revele='revele' v-bind:toggleModale='toggleModale'></modale>
    <img class="mon-cv" src="../../Images/Mon_CV.PNG" alt="test" v-on:click='toggleModale'>

    </div>

</template>


<script>
    
    import Modale from './Modale.vue'

    export default {
        name: 'Contenu',
        data(){
            return{
                revele: false
            }
        },
        components: {
            'modale': Modale
        },
        methods: {
            toggleModale: function(){
                this.revele = !this.revele
            }
        }
    }

</script>


<style>

.container{
    background: -webkit-linear-gradient(300deg, #ff2975,#ff901f);
    background: linear-gradient(300deg, #ff2975,#ff901f);
}

.container p{
    color: aqua;
}

.mon-cv{
    height: 100%;
    width: 500px;
}
</style>