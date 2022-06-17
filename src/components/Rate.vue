<template>


<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">




<span 
v-if="voto >2"
class="fa fa-star checked"></span>

<span 
v-if="voto >4"
class="fa fa-star checked"></span>

<span 
v-if="voto >6"
class="fa fa-star checked"></span>

<span 
v-if="voto >8"
class="fa fa-star checked"></span>

<span 
v-if="voto >10"
class="fa fa-star checked"></span>

<span class="fa fa-star"
v-if="voto <10"
></span>

<span class="fa fa-star"
v-if="voto <8"
></span>

<span class="fa fa-star"
v-if="voto <6"
></span>

<span class="fa fa-star"
v-if="voto <4"
></span>

<span class="fa fa-star"
v-if="voto <2"
></span>



<Consigliati/>

</template>
<script>


  export default{


   data(){
        
        return{
            api_key:'6f9286d54de4891ea7a5c91779e09786',
            language:'it-IT',
            seasons:{},
            voto:'',




        }
    },
    methods:{

            async Getpost(){
            const res = await fetch('https://api.themoviedb.org/3/tv/'+this.$route.params.id+'?api_key='+this.api_key+'&language='+this.language)
            const post = await res.json()
            console.log(post)
            this.voto=post.vote_average
          

            

                
            },
        },

    created(){
      this.Getpost()

        }

  }

</script>
<style >

.stor{

border-radius: 100%;

}

.checked {
  color: orange;
}

</style>