<template>
  <header class="position-fixed w-100">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Rick and Morty</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse " id="navbarSupportedContent">
          <ul class="navbar-nav mb-lg-0">
            <li>
              <button class="btn alarm btn-sm  fw-bold d-flex align-items-center" @click="$emit('clicktext')"><i class="fa-solid fa-radiation fa-2x me-2"></i> {{ testoBottone }}</button>
            </li>
           
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: "Header",
  props: ["testoBottone"],
  
};
</script>

<style scoped lang="scss">
header{
  z-index: 1;
  .collapse{
    justify-content: center;
    margin-right: 100px ;
  }

  .alarm{
    text-shadow: 0 0 100px;
    animation: animate 2s infinite linear;

    @keyframes animate {

      0%,
      100% {background: red;
      };
      50% {background: yellow;
        box-shadow: 0 0 25px 10px yellow;}
    }
  }
}
</style>