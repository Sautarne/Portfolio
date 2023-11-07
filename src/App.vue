<!--
Mettre en place le texte dans le composants Contenu
Faire en sorte qu'on définisse le texte dans App.vue pour permettre d'avoir un texte personnalisé sur chaque contenu
(faire suremenet une liste comme les sources d'images)
-->

<template>
  <div id="app">
    <contenu
    name="mon_cv"
    :imageSrc="imagePaths[0]"
    backgroundColor="orange"
    :titreModale="titreModale[0]"
    :langageUsed="langageUsed[0]"
    :projectLink="projectLink[0]">
    </contenu>

    <contenu
    name="espace_commentaire"
    :imageSrc="imagePaths[1]"
    backgroundColor="rose"
    :titreModale="titreModale[1]"
    :langageUsed="langageUsed[1]"
    :projectLink="projectLink[1]">
    </contenu>
  </div>


</template>


<script>

import Contenu from './components/Contenu.vue';

export default {
  name: 'App',
  components: {
    'contenu': Contenu,
},
  data(){
    return{
      imagePaths: [
        "../../Images/Mon_CV.PNG",
        "../../Images/Espace-commentaire.png",
      ],
      titreModale: [
        "Mon CV",
        "Un espace commentaire",
      ],
      langageUsed: [
        "HTML / CSS",
        "HTML / CSS / JS",
      ],
      projectLink: [
        "https://github.com/Sautarne/Mon_CV",
        "https://github.com/Sautarne/Espace-commentaire",
      ]
    }
  }
}

</script>


<style>



</style>
