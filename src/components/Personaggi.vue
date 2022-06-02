<template>
   <section id="products" >
      <div class="container">
        <div class="row">
          <div class="col-12 col-md-3" v-for="(personaggio, index) in personaggi" :key="index">
            <div class="card m-3">
              <img :src="personaggio.image" class="img-fluid" :alt="personaggio.name">
              <p><span class="fw-bold"> Nome:</span> {{ personaggio.name }}</p>
              <p><span class="fw-bold">Specie:</span> {{ personaggio.species }}</p>
              <p><span class="fw-bold">Genere: </span>{{ personaggio.gender }}</p>
              <p><span class="fw-bold">Tipo:</span> {{ personaggio.type || '-' }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
</template>

<script>
export default {
    name:"Personaggi",
    props:['personaggi']
}
</script>

<style scoped lang="scss">
.card{
  box-shadow: 10px 10px 20px -5px black;
}
</style>