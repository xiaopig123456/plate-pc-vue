import Index from '../pages/Home'
import About from '../pages/About'

export default [
  {
    path: '/',
    name: 'Index',
    component: Index
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: "*",
    name:'error',
    meta: {layout:false, title: 'Error' },
    component: () => import("../pages/Error"),
    hidden: true
  }
]
