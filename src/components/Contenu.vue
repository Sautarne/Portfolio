<template>

    <div id="container" :class="cssClass">

        <modale :revele='revele' :toggleModale='toggleModale' :imageSrc="imageSrc"></modale>

        <img :src="imageSrc" alt="" v-on:click='toggleModale'>
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
        methods: {
            toggleModale: function(){
                this.revele = !this.revele
            }
        },
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