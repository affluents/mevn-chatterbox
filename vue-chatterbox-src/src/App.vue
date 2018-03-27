<template>
  <div id="app">
    <nav class="navbar">
        <span id="nav_text" class="navbar-brand mb-0 mx-auto unselectable">ChatterBox</span>
    </nav>
    <router-view/>
  </div>
</template>

<script>
import Login from "./components/Login";

export default {
  name: "App",
  components: {
    Login
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Pacifico");
@import url("https://fonts.googleapis.com/icon?family=Material+Icons");

html, body {
  background-color: #FFE9E3;
  height: 100%;
}

.navbar {
  height: 3.5em;
  background:linear-gradient(132deg, #A9ECA2, #005E7C, #1CA2BB,#58DADA);
  background-size: 600% 600%;
	animation: Gradient 15s ease infinite;
}

@keyframes Gradient { 
  0%{background-position:0% 50%}
  50%{background-position:100% 50%}
  100%{background-position:0% 50%}
}
.navbar-brand {
  color: rgb(248, 248, 248);
  text-shadow: 2px 1px rgba(215, 212, 219, 0.979);
  font-family: "Pacifico";
  font-size: 170%;
  font-weight: 300%;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-image: "/src/images/background.jpg";
  display: flex;
  height: 100%;
  flex-direction: column;
}

.unselectable {
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
</style>
