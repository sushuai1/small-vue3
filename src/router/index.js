import { createRouter,createWebHashHistory } from "vue-router";

export const constanRouter = [
  {
    path:'/login',
    component:() => import("@/views/login/index.vue")
  },
  {
    path:'/test',
    component:() => import("@/views/test/index.vue")
  }
]

const router = ({
  history:createWebHashHistory(),
  routes:constanRouter
})

export default router;
