<template>
  <main>
    <h1>Castles</h1>
    <div id="castle-list">
      <article class="castle">
        <img src="Photos/castell.jpg" alt="castle1"  >
          <h2>Cool Castle</h2>
      </article>
      <article class="castle">
        <img src="Photos/xativa-14-e1491899190816.jpg" alt="castle2"  >
          <h2>Cool Castle number 2</h2>
      </article>
      <article class="castle">
        <img src="Photos/images.jpeg" alt="castle3"  >
        <h2>Not a castle but in our city :)</h2>
      </article>
      <article class="castle">
        <img src="Photos/1585147623.jpg" alt="castle4"  >
        <h2>Castle + Beach = super cool</h2>
      </article>
      <article class="castle">
        <img src="Photos/1585147765.jpg" alt="castle4"  >
        <h2>Castles are cool</h2>
      </article>
    </div>
  </main>
</template>

<style scoped>

#castle-list {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  gap: 1.5rem;
  align-items: center;
  flex-wrap: wrap;
}

h1 {
  display: block;
  text-align: center;
}

.castle {
  width: 150px;
}

.castle img {
  max-width: 150px;
  max-height: 300px;
}

@media (min-width: 801px) {
  h1 {
    text-align: start;
  }
}

</style>

<script setup>
</script>