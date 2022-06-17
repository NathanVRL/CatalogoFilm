<template>
  <div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner" 
  
  :v-for="sfondo in sfondi"
  >
    <div class="carousel-item active" data-bs-interval="10000">
      <img :src="image_path(sfondo.file_path)" class="d-block w-100" alt="...">
      <div class="carousel-caption d-none d-md-block">
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
</template>

<script>
export default {

  data(){
        
        return{
            api_key:'6f9286d54de4891ea7a5c91779e09786',
            language:'it-IT',
            page:1,
            sfondi:[]


        }
    },
    computed:{
     
    },
    methods:{

    getpost() {  
                return fetch( 'https://api.themoviedb.org/3/tv/'+this.$route.params.id+'/images?api_key='+this.api_key+'&language=en-US')
                    .then(res =>res.json())  
                    .then(post=>{
                        console.log(post)
                        this.sfondi=post.backdrops

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

<style>

</style>