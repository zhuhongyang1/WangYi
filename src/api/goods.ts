import request from '../util/request';

// 我的收藏 进详情
export let goodsData = (id: any)=>{
    return  request.get('/api/goods/detail',{id})
}