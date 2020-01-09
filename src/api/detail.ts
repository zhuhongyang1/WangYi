import request from '../util/request';

export let detailData = (params: any)=>{

    let index = window.location.pathname.lastIndexOf("\/");
    let ind = window.location.pathname.substring(index + 1, window.location.pathname.length);

    return  request.get('/topic/detail',{id:ind})
}

export let talkData = (params: any)=>{
    return  request.get('/topic/detail',{valueId:params.valueId,typeId:params.typeId,page:params.page,size:params.size})
}