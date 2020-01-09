import request from '../util/request';

// 省市
export let zhuantiData = (params: any)=>{
    return  request.get('/topic/list')
}