<template>

    <div class="container">

    <p>Une modale en Vue JS</p>

    <modale v-bind:revele='revele' v-bind:toggleModale='toggleModale'></modale>
    <button class="btn-toggle" v-on:click='toggleModale' >Ouvre la modale</button>

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
.container p{
    color: aqua;
}
</style>