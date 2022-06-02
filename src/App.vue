<template>
  <div id="app">
    <Header @clicktext="clicktext" :testoBottone="testoBottone" />
    <main class="text-center">
      <div v-if="nascondi && personaggi.length">
        <Personaggi :personaggi="personaggi" />
      </div>
      <h1 v-else>Clicca a tu rischio e pericolo sul bottone in alto</h1>
    </main>
  </div>
</template>


<script>
import axios from "axios";
import Header from "./components/Header.vue";
import Personaggi from "./components/Personaggi.vue";
export default {
  name: "App",
  components: {
    Header,
    Personaggi,
  },
  data() {
    return {
      p: "",
      personaggi: [],
      testoBottone: "SCOPRI I PERSONAGGI",
      nascondi: false,
    };
  },
  methods: {
    getCharacters() {
      axios.get("https://rickandmortyapi.com/api/character/").then((res) => {
        this.personaggi = res.data.results;
      });
    },
    clicktext() {
      if (this.nascondi == false) {
        this.nascondi = true;
        this.testoBottone = "INVASIONE ALIENA!";
      } else if (this.nascondi == true) {
        this.nascondi = false;
        this.testoBottone = "SCOPRI I PERSONAGGI";
      }
    },
  },
  mounted() {
    this.getCharacters();
  },
};
</script>

<style lang="scss">
@import "./assets/sass/App.scss";
body{
  background: red;
}
main{
padding: 100px 0 ;
}

</style>
