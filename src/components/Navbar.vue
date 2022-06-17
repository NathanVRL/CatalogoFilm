<template>

<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Kdam+Thmor+Pro&display=swap" rel="stylesheet">
    
  <nav class="navbar navbar-expand-lg " style="background-color: black;">

    <div class="container-fluid">
      <h1 class=" titolo" style="font-family: 'Kdam Thmor Pro', sans-serif;">NATFLIX</h1>
      <router-link to="/">
          <h1 style="font-family: 'Kdam Thmor Pro', sans-serif;color:acqua">Film</h1></router-link>
      <router-link to="/serie">
          <h1 style="font-family: 'Kdam Thmor Pro', sans-serif;">Serie</h1></router-link>
      <router-link to="/top">
          <h1 style="font-family: 'Kdam Thmor Pro', sans-serif;">top</h1></router-link>

      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
       
       <span class="navbar-toggler-icon"></span>

      </button>



     <div class="btn-group btn btn-success">
        <button type="button" class="btn btn-light">Lingua
         </button>
            <select v-model="selected" @change="languageChanged"  class="btn btn-success dropdown-toggle dropdown-toggle-split">
           <option :value="'it-IT'">Italiano</option>
           <option :value="'en-US'">Inglese</option>
          </select>
          <span>{{selected}}</span>
          

</div>
      <Ricerca/>
    </div>
  </nav>
</template>
<script>
  import Ricerca from './Ricerca.vue'

  export default{
  components:{Ricerca},
  data(){
    return{
      nome:''
    }
  },
  methods:{
languageChanged() {

   this.$router.replace({ query: { value: this.selected } })

    }
  }

}
</script>
<style>

.button {
  display: inline-block;
  padding: 15px 25px;
  font-size: 24px;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  outline: none;
  color: #66CCAA;
  background-color:#fbf7d5;
;
  border: none;
  border-radius: 15px;
  box-shadow: 0 9px #999;
}

.button:hover {background-color:#fbf7d5;}

.button:active {
  background-color:#fbf7d5;
  box-shadow: 0 5px #666;
  transform: translateY(4px);
}
</style>