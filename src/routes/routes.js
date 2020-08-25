import Home from '../pages/Home/Home.js'
import Login from '../pages/Login/Login.js'
import Register from '../pages/Register/Register.js'
import Recommend from '../pages/Home/Recommend.js'
import Hot from '../pages/Home/Hot.js'
import Search from '../pages/Home/Search.js'
const routes=[
    {
        path:'/home',
        component:Home,
        children:[
            {
                path:'/home/recommend',
                component:Recommend
            },
            {
                path:'/home/hot',
                component:Hot
            },
            {
                path:'/home/search',
                component:Search,
                auth:true
            },
            {
                path:'/home/',
                redirect:'/home/recommend'
            }
        ]
    },
    {
        path:'/login',
        component:Login
    },
    {
        path:'/register',
        component:Register
    },
    {
        path:'/',
        redirect:'/home'
    }
]
export default routes