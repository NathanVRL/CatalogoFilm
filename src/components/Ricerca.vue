<template>


    <form class="form-inline my-2 my-lg-0">
    <div style="float:left">
    <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search " v-model="nome">
    </div>
   <div style="float:right">
   <a class="btn btn-outline-success my-2 my-sm-0 colbottone" type="submit"  @click="ricerca" >cerca</a>
   </div>
   </form>
</template>
<script >   


 export default{

    data(){ 
        },
        computed: {
        },
        methods:{

           
            ricerca(){
              this.$router.replace({ query: { name: this.nome } }) 

            }
        },
            
        
        
    }
</script>