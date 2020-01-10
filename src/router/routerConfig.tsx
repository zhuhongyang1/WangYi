import React from 'react'
import RouterView from './RouterView'
import Footer from '../views/footer/footer'
import Zt from '../views/zhuanti/zt'
import Detail from '../views/detail/detail'
import My from '../views/my/my'
import Collect from '../views/collect/collect'
import Address from '../views/address/address'
import Goods from '../views/goods/goods'
export default {
    routes: [{
        path: '/login',
        component: ()=><p>登陆页面</p>
    },{
        path: '/main',
        component: (props:any)=>(<>
            <RouterView routes={props.routes}></RouterView>
            <Footer/>
        </>),
        children: [{
            path: '/main/home',
            component: ()=><p>首页</p>
        },{
            path: '/main/type',
            component: Zt
        },{
            path: '/main/classify',
            component: ()=><p>分类</p>
        },{
            path: '/main/cart',
            component: ()=><p>购物车</p>
        },{
            path: '/main/my',
            component: My
        }]
    },{
        path: '/collect',
        component: Collect
    },{
        path: '/goods',
        component: Goods
    },{
        path: '/address',
        component: Address
    },{
        path: '/topicDetail',
        component: Detail
    },{
        from: '/',
        to: '/login'
    }]
}