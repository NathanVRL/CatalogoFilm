<template>


  <div class="row cc"  >
    <div class="col-sm-3   " 
    v-for="movie in movies"
    :key="movie.id"

    >
      <div style="background-color: white">
        <div class="card-body">
         <div class="container attributiFilm" >
           <img  name="imagine" v-bind:src="image_path(movie.poster_path)" class=" immaginifilm card-img-top image foto" >
            <div class="overlay">
             <div class="text">
        <h1 class="nomeFilm">{{movie.name}}</h1>
            </div>
           </div>
          </div>
        
        <div class="attributiFilm">

        <div style="height:120px ">
        <h1 class="nomeFilm" style="font-family: 'Kdam Thmor Pro', sans-serif;color:acqua" >{{movie.name}}</h1>
        </div>
         <div class="bordo"></div>
        <h1 class="nomeFilm" style="font-family: 'Kdam Thmor Pro', sans-serif;color:acqua" v-if="language=='en-US'" >views {{movie.popularity}}</h1>
        <h1 class="nomeFilm" style="font-family: 'Kdam Thmor Pro', sans-serif;color:acqua" v-if="language=='it-IT'">vissualizazioni {{movie.popularity}}</h1>
        <p class="bordo"></p>
        <h1 class="nomeFilm" style="font-family: 'Kdam Thmor Pro', sans-serif;color:acqua" > {{movie.vote_average}}/10</h1>

        <p class="bordo"></p>        
        <p class="datarilascio">rilasciato il {{movie.first_air_date}}</p>

        <router-link 
        :key="movie.id"
        :to="{name:'infoserie', params:{id:movie.id},component:'InfoSerie'}"
        
        >
          <button  class="button"  :type="serie" >SHOW MORE</button>
        </router-link>


        </div>
        </div>
      </div>

    </div>

</div>

    <button type="button" class="btn btn-outline-primary" id="carica" v-on:click="newGetpost()" >Vai Avanti con il catalogo</button>


  

</template>

<script >
export default{
  data(){
        
        return{
            api_key:'6f9286d54de4891ea7a5c91779e09786',
            page:1,
            movies:[],
            addPage:[],
            filsuc:[],
            query:''


        }
    },
    computed:{
     
    },
    methods:{

    getpost() { 
            if(this.$route.query.value=== 'it-IT'){
              this.language=this.$route.query.value
            } 
            else if(this.$route.query.value=== 'en-US') {
              this.language=this.$route.query.value
            } 
            else{
              this.language='it-IT'
            }
            if(this.query==undefined){
              return fetch( 'https://api.themoviedb.org/3/trending/tv/day?api_key='+this.api_key+'&language='+this.language)
              .then(res =>res.json())  
              .then(post=>{
              this.movies=post.results
              console.log(this.movies)
                    })
            }else{

             return fetch( 'https://api.themoviedb.org/3/search/tv?api_key='+this.api_key+'&language='+this.language+'&page='+this.page+'&query='+this.query)
              .then(res =>res.json())  
              .then(post=>{
              this.movies=post.results
console.log(this.movies)
                    })

            }
            },
                
            image_path(poster_path)
            {

                return 'https://image.tmdb.org/t/p/original'+poster_path
    
            },
        async newGetpost(){
            this.page+=1
            const res = await fetch('https://api.themoviedb.org/3/trending/tv/day?api_key='+this.api_key+'&language='+this.language+'&page='+this.page)
            const post = await res.json()
            console.log(post)
            this.addPage = post.results
            for (let i = 0; i < 20; i++) {
            this.movies.push(this.addPage[i])
                
            }

        },
        sos(){
           this.$router.replace({ query: { type: this.type} })
        }

        },
        
    created(){
        this.getpost()

        },
         watch: { 
        '$route.query.name': {
         handler: function(name) {
           this.query=name
           this.getpost()
        },
        deep: true,
        immediate: true
      }
}
        

}
</script>
<style>
.container {
  position: relative;
  width: 50%;
  border-radius: 100%;
}

.image {
  display: block;
  width: 100%;
  height: auto;
  border-radius: 100%;
}

.overlay {
  position: absolute;
  bottom: 100%;
  left: 0;
  right: 0;
  background-color: black;
  overflow: hidden;
  width: 100%;
  height: 0;
  transition: .5s ease;
}

.container:hover .overlay {
  bottom: 0;
  height: 100%;
}

.text {
  white-space: nowrap; 
  color: black;
  font-size: 20px;
  position: absolute;
  overflow: hidden;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
}
.button {
  display: inline-block;
  padding: 15px 25px;
  font-size: 24px;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  outline: none;
  color: #CCDDFF;
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
.foto{
  border-radius: 80px 80px 80px 80px;
}
.attributiFilm{

  margin-top: 20px;
  margin-bottom: 20px;

}
.bordo{
  border-bottom-style:solid;
  border-width: 4px;
  border-color: aqua;
}
.cc{
  margin-left: 0!important;
  margin-right:0!important;
}
.cards{
  margin-top: 0!important;
  margin-bottom:0!important;
}
</style>