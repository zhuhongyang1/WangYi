import React from 'react'
import RouterView from './RouterView'
import Footer from '../views/footer/footer'
export default {
    routes: [{
        path: '/login',
        component: ()=><p>登陆页面</p>
    },{
        path: '/main',
        component: (props:any)=>(<>
            <Footer/>
            <RouterView routes={props.routes}></RouterView>
        </>),
        children: [{
            path: '/main/home',
            component: ()=><p>首页</p>
        },{
            path: '/main/classify',
            component: ()=><p>分类</p>
        },{
            path: '/main/cart',
            component: ()=><p>购物车</p>
        },{
            path: '/main/my',
            component: ()=><p>我的</p>
        }]
    },{
        from: '*',
        to: '/login'
    }]
}