<template >

<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
<div class="w3-display-container">

  <img :src="image_path(backdrop_path)" class="sfondo">


<div class="w3-display-topleft w3-container" style="padding-top:20px">
  <img :src="image_path(poster_path)"   class="poster">
</div>



  <div class="info w3-display-topright w3-container" >
    <h1 style="text-align:center ;padding: 10px;font-family: 'Kdam Thmor Pro', sans-serif;color:acqua" >{{name}}</h1>
      <div style="float:right;width:60%;">
        <h4><span style="font-family: 'Kdam Thmor Pro', sans-serif;color:acqua"> Trama:</span>{{trama}}</h4>  
      </div>
    <div style="float:left">


      <h3 style="padding: 10px;" ><span style="font-family: 'Kdam Thmor Pro', sans-serif;color:acqua"
      >GENERI :  </span>
      <span 
      v-for="genere in generi"
      :key="genere.id"

      >{{genere.name}}</span>

      </h3>

      <h3 style="padding: 10px;"><span style="font-family: 'Kdam Thmor Pro', sans-serif;color:acqua">Data di uscita : </span>{{data}}</h3>

      <h3 style="padding: 10px;"><span style="font-family: 'Kdam Thmor Pro', sans-serif;color:acqua"> Valutazione :</span> <Rate/> </h3>

     
            
      <div class="card text-white cre_div" 
      v-for="net in nets"
      :key="net.id"
      >
      <img :src="image_path(net.logo_path)" class="card-img cre_foto" alt="...">



         <a :href="home" class="btn btn-outline-success" style="float:right">Streaming</a>
      </div>
</div>
    

    
         
    </div>
</div>


  <div class="season">
    <div class="col-sm-3"
      v-for="season in seasons"
    :key="season.id"
    >
      <div class="card bg-dark text-white">
      <img :src="image_path(season.poster_path)" class="card-img" alt="...">
        <div class="card-img-overlay">
      <h5 class="card-title" style="font-family: 'Kdam Thmor Pro', sans-serif;color:acqua">{{season.name}}</h5>
  
        </div>
      </div>
    </div>
  </div>

  <div class="altro">
    <TrailerS/>
  </div>

</template>
<script>

  import TrailerS from '../components/TrailerS.vue'

  import Rate from '../components/Rate.vue'

  export default{
  components:{TrailerS,Rate},
   data(){
        
        return{
            api_key:'6f9286d54de4891ea7a5c91779e09786',
            language:'it-IT',
            seasons:[],
            backdrop_path:'',
            creatori:[],
            numeroEp:'',
            numeroSta:'',
            name:'',
            trama:'',
            voto:'',
            foto:'',
            poster_path:'',
            generi:[],
            data:'',
            home:'',
            nets:[]





        }
    },
    methods:{
            async getpost(){
              console.log(this.$route)

              return await fetch('https://api.themoviedb.org/3/tv/'+this.$route.params.id+'?api_key='+this.api_key+'&language='+this.language)
              .then(res =>res.json())
              .then(post=>{
                console.log(post)
            this.backdrop_path=post.backdrop_path
            this.creatori=post.created_by
            this.numeroEp=post.number_of_episods
            this.numeroSta=post.number_of_seasons
            this.seasons=post.seasons
            this.trama=post.overview
            this.voto=post.vote_average
            this.foto=post.poster_path
            this.name=post.original_name
            this.poster_path=post.poster_path
            this.generi=post.genres
            this.data=post.first_air_date
            this.home=post.homepage
            this.nets=post.networks
              })

            

                
            },
            image_path(poster_path)
            {

                return 'https://image.tmdb.org/t/p/original'+poster_path
    
            },

        
        },

    created(){
      this.getpost()

        },
         watch: { 
        '$route.query.value': {
         handler: function(value) {
           this.language=value
           this.getpost()
        },
        deep: true,
        immediate: true
      }
}
        

  }

</script>
<style>
.sfondo{
  width: 100%;
  opacity: 0.5;
}
.stor{

border-radius: 100%;

}

.checked {
  color: orange;
}
.poster{
  
  width: 33%;
  float: left;
  border:5px solid #666;
  border-radius: 20%;
}
.cre_foto{
  border-radius: 100%;

}
.cre_div{
  width: 10%;
  float: right;

  border-radius: 100%;

}
.info{ 
  padding-top: 50px;
  padding-left: 20px;
  text-align: right;
}
.season{
  width: 50%;
  float: left;
  padding-top: 30px;
  padding-left: 50px;
  padding-right:50px;
}
.altro{
  width: 50%;
  float: right;
  padding-top: 30px;
  padding-left: 50px;
  padding-right:50px;
}

</style>
