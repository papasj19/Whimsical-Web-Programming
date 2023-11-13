<template>
  <main>
    <h1>Contact</h1>

    <article>
      <center>
      <section class = "top">
        <address> <!-- Assuming that these addresses are to contact the team responsible for the website http://html5doctor.com/the-address-element/-->
          <div>
            <strong>PAPASJ INDUSTRIES</strong>
            <p>Carrer Reus</p>
            <p>Barcelona, Espana</p>
          </div>
          <ul>
            <li>Email: <a href="mailto:spencerjames.johnson@students.salle.url.edu">spencerjames.johnson@students.salle.url.edu</a></li>
            <li>US-Phone: +1(989)-545-9391</li>
          </ul>
          </address>
        </section>
      </center>
      <section>
        <h2>Contact form</h2>
        <form>
          <fieldset>
            <legend>Personal data</legend>
            <div>
              <label for="name">Name</label>
              <input type="text" id="name" name="name">
            </div>
            <div>
              <label for="email">Email</label>
              <input type="text" id="email" name="email">
            </div>
            <div>
              <label for="date">Date</label>
              <input type="text" id="date" name="date">
            </div>
          </fieldset>
          <div>
            <label for="phone">Phone</label>
            <input type="text" id="phone" name="phone">
          </div>
          <div>
            <label for="message">Message</label>
            <input type="text" id="message" name="message">
          </div>
        </form>
        <button>Send</button>
      </section>
    </article>

  </main>

  <footer>
    <img src="Photos/IMG_7440.jpg" alt="cellybros" class = "celbro" >
    <h3>Me and my Little bro cellying</h3>
    <a href="https://github.com/papasj19">Personal Showcase</a><br>
  </footer>
</template>

<style>

img.celbro {
  padding-top: 100px;
  max-width: 500px;
  max-height: 1000px;
  display: block;
  margin-left: auto;
  margin-right: auto;
}

h2 {
  display: block;
  text-align: left;
}

h3 {
  display: block;
  text-align: center;
  padding-bottom: 50px;
}

h1 {
  display: block;
  text-align: center;
}

section.top{
  display: block;
  text-align: center;

}

</style>
<script setup>
</script>