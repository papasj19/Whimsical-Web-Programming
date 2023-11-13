<script setup>

</script>

<template>
  <main>
    <h1>El Capitan, The "gr8"</h1>
    <div id="caps-list">
      <article class="cap">
        <img src="Photos/merlin_139252443_59985d14-2c8c-4217-be4c-614946b51b56-articleLarge.jpg.webp" alt="ovibacky"  >
        <h2>Two of my fav players</h2>
      </article>
      <article class="cap">
        <img src="Photos/849f1d636db4414cba3d22250ff9f3da.jpg" alt="flexy"  >
        <h2>stay flexxy</h2>
      </article>
      <article class="cap">
        <img src="Photos/WI2US2E4XBE6NEMNCVY2P73K2U.aspx-2.jpeg" alt="ovicelly"  >
        <h2>love a nice celly (celebration)</h2>
      </article>
      <article class="cap">
        <img src="Photos/ovechkin-gtg-celebration7.jpg.webp" alt="ovicelly2"  >
        <h2>cellying hard</h2>
      </article>
      <article class="cap">
        <img src="Photos/Ovechkin-Passes-Jagr.webp" alt="teamcelly"  >
        <h2>cellying with the boys</h2>
      </article>
      <article class="cap">
        <img src="Photos/T.J.-Oshie.jpg" alt="osh"  >
        <h2>anotha one (Oshie)</h2>
      </article>
    </div>
  </main>
</template>

<style scoped>

#caps-list {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  gap: 1.5rem;
  align-items: center;
  flex-wrap: wrap;
}

.cap img {
  max-width: 300px;
  max-height: 450px;
}

</style>