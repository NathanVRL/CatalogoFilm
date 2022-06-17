<template>


<meta name="viewport" content="width=device-width, initial-scale=1">
s
<div class="row">
  <div class="col-sm-2"
    v-for="consigliato in consigliati"
    :key="consigliato.id"
    
    >
    <div class="card" 
    v-if="consigliato.backdrop_path != null">
    <img :src="image_path(consigliato.backdrop_path)" class="d-block w-100" alt="...">
      <div class="card-body">
        <h5 class="card-title">{{consigliato.name}}</h5>
        <Rate/>
      </div>
    </div>
  </div>
</div>

</template>
<script>



  import Rate from '../components/Rate.vue'
export default {


  components:{Rate},
  data(){
        
        return{
            api_key:'6f9286d54de4891ea7a5c91779e09786',
            language:'it-IT',
            page:1,
            consigliati:[]


        }
    },
    computed:{
     
    },
    methods:{

    getpost() {  
                return fetch( 'https://api.themoviedb.org/3/tv/'+this.$route.params.id+'/similar?api_key='+this.api_key+'&language='+this.language+'&page='+this.page)
                    .then(res =>res.json())  
                    .then(post=>{
                        console.log(post)
                        this.consigliati=post.results

                    })

                          

            },
            image_path(posterpath)
            {

                return 'https://image.tmdb.org/t/p/original'+posterpath
    
            },
        },
        
    created(){
        this.getpost()

        },
}
</script>
