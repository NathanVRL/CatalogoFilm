<template >

<meta name="viewport" content="width=device-width, initial-scale=1">

<iframe width="560" height="315" :src="trailer" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen v-if="link != ''"></iframe>

</template>
<script>
  export default{
   data(){
        return{
            api_key:'6f9286d54de4891ea7a5c91779e09786',
            language:'it-IT',
            link:'',
            trailer:'https://www.youtube.com/embed/'
        }
    },
    methods:{
            async getpost(){
              
              return await fetch('https://api.themoviedb.org/3/tv/'+this.$route.params.id+'/videos?api_key='+this.api_key+'&language='+this.language)
              .then(res =>res.json())
              .then(post=>{
                  console.log(post)
                  this.link=post.results[0].key
                  this.trailer=this.trailer+this.link
              })

            

                
            },

        
        },

    created(){
      this.getpost()

        },

  }

</script>