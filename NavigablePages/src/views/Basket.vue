<template>
  <main>
    <center>
      <h1>Futbol With Spencer</h1>
      <p>A quick look at Spencers top teams in Spain</p>
    </center>

    <div>
      <table class="guy">
        <colgroup>
          <col class="column1">
          <col class="column2">
          <col class="column3">
          <col class="column4">
          <col class="column5">
          <col class="column6">
        </colgroup>
        <thead>
        <tr>
          <th>Image</th>
          <th>Team</th>
          <th>Current Place</th>
          <th>Games Attended</th>
          <th>Fav. Player</th>
          <th>Actions</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td><img
              src="Photos/Rcd_espanyol_logo.svg.png"
              width="75" height="100" alt="RCDE"></td>
          <td>RCD Espanyol</td>
          <td>Not In LaLiga</td>
          <td>20ish</td>
          <td>#11 Pere Milla</td>
          <td><button>Favorite</button></td>
        </tr>
        <tr>
          <td><img
              src="Photos/Girona_FC.jpeg"
              width="75" height="100" alt="GFC"></td>
          <td>Girona FC</td>
          <td>2nd Place</td>
          <td>3</td>
          <td>My favorite player left :(</td>
          <td><button>Favorite</button></td>
        </tr>
        <tr>
          <td><img
              src="Photos/fc-barcelona-rugby-logo-8F77CA5AD8-seeklogo.com.png"
              width="75" height="75" alt="FCB"></td>
          <td>FCB</td>
          <td>3rd Place</td>
          <td>1</td>
          <td>Balde</td>
          <td><button>Favorite</button></td>
        </tr>
        </tbody>
        <tfoot>
        <tr>
          <td><img
              src="Photos/Washington_Capitals.svg.png"
              width="75" height="50" alt="FCB"></td>
          <td>Washington Capitals</td>
          <td>They play hockey</td>
          <td>My fav. team</td>
          <td><button class = "AO"><router-link to="/ovi">Ovi</router-link></button></td>
          <td>button</td>
        </tr>
        </tfoot>
      </table>
    </div>
  </main>
</template>

<script setup>
</script>