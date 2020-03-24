/*  This file is a part of Decury.
*   Copyleft 2020  Decury contributors
*
*   This program is free software: you can redistribute it and/or modify
*   it under the terms of the GNU Affero General Public License as published by
*   the Free Software Foundation, either version 3 of the License, or
*   (at your option) any later version.
*
*   This program is distributed in the hope that it will be useful,
*   but WITHOUT ANY WARRANTY; without even the implied warranty of
*   MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
*   GNU Affero General Public License for more details.
*
*   You should have received a copy of the GNU Affero General Public License
*   along with this program.  If not, see <https://www.gnu.org/licenses/>.
*/

import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

import Home from './pages/Home.vue'
import Dashboard from './pages/Dashboard.vue'
import Streams from './pages/Streams.vue'
import Classroom from './pages/Classroom.vue'
import Homework from './pages/Homework.vue'
import Lessons from './pages/Lessons.vue'
import Exams from './pages/Exams.vue'
import Grades from './pages/Grades.vue'
import Settings from './pages/Settings.vue'
import About from './pages/About.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/Dashboard',
      component: Dashboard
    },
    {
      path: '/Streams',
      component: Streams
    },
    {
      path: '/Classroom',
      component: Classroom
    },
    {
      path: '/Homework',
      component: Homework
    },
    {
      path: '/Lessons',
      component: Lessons
    },
    {
      path: '/Exams',
      component: Exams
    },
    {
      path: '/Grades',
      component: Grades
    },
    {
      path: '/Settings',
      component: Settings
    },
    {
      path: '/About',
      component: About
    }
  ],
  mode: 'history'
});

new Vue({
  router,
  render: h => h(App)

}).$mount('#app');
