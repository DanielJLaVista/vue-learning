//Create Vue app:
const app = Vue.createApp();

//connect vue to html
app.mount("css-selector");
//e.g.
app.mount("#div-id");
//selector should be unique as each vue app can only be connected to one html element

//also need to include the script in html
<script src="app.js" defer></script>

//vue special props
//on event
v-on: click

//for a list
v-for

//interpolation
{{ }}

//v-bind
v-bind