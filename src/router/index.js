import Vue from "vue"
import VueRouter from "vue-router"
import Calendar from '../components/views/Calendar.vue'
import Day01 from '../components/days/Day01.vue'
import Day02 from '../components/days/Day02.vue'
import Day03 from '../components/days/Day03.vue'

let days = [ Day01, Day02, Day03]

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Calendar',
    component: Calendar
  }
]

for (let i = 1; i <= days.length; i++) {
  routes.push({
    path: '/day/' + i,
    component: days[i - 1]
  })
}

const router = new VueRouter({
  routes
})


export default router

