import {createRouter, createWebHistory} from 'vue-router'
import Movie from "../views/Movie.vue"
import InfoFilm from "../views/InfoFilm.vue"
import InfoSerie from "../views/InfoSerie.vue"
import Login from "../views/Login.vue"
import Serie from "../views/Serie.vue"
import Top from "../views/Top.vue"


const router = createRouter({
    history:createWebHistory(),
    routes:[
    {
      path:'/',
      name:'movies',
      component:Movie,
    },
    {
      path:'/infoFilm/:id',
      name:'infofilm',
      component:InfoFilm
    },
    {
      path:'/infoSerie/:id',
      name:'infoserie',
      component:InfoSerie
    },

    {
      path:'/serie/',
      name:'serie',
      component:Serie
    },
    {
      path:'/login',
      name:'login',
      component:Login,
      meta:{
        requiresAuth:true,
      }
    },    
    {
      path:'/top',
      name:'top',
      component:Top,
    },


    ]
    
  })


  export default router