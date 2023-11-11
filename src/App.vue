<template>

  <div id="app">
    <contenu
    name="mon_cv"
    backgroundColor="orange"
    :imageSrc="imagePaths[0]"
    :titreModale="titreModale[0]"
    :langageUsed="langageUsed[0]"
    :projectLink="projectLink[0]"
    :modaleDescription="modaleDescription[0]"
    :creationDate="creationDate[0]">
    </contenu>

    <contenu
    name="espace_commentaire"
    backgroundColor="rose"
    :imageSrc="imagePaths[1]"
    :titreModale="titreModale[1]"
    :langageUsed="langageUsed[1]"
    :projectLink="projectLink[1]"
    :modaleDescription="modaleDescription[1]"
    :creationDate="creationDate[1]">
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
      ],
      modaleDescription: [
        "Voici mon CV créé entièrement avec du HTML et CSS. Il permet de montrer mes anciennes expériences ainsi que mes formations. Vous pourrez y retrouver également mes compétences",
        "Voici un exemple d'espace commentaire que j'ai réalisé en HTML / CSS et JS. Il permet de remplir un message, avec son nom et prénom, et de le rajouter dans la liste au dessus"
      ],
      creationDate: [
        "30/08/2023",
        "17/10/2023",
      ],
    }
  }
}

</script>


<style>



</style>
