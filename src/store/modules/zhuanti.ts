import { zhuantiType } from '../types/zhuanti'
import {observable,action} from 'mobx'
import {zhuantiData} from '../../api/zhuanti'

export default class CreateStore{
    @observable
    list:zhuantiType[] = [];

    @action
    async zhuantiData(obj:object){
        const res:any = await zhuantiData(obj);
        console.log(res)
        this.list = res.data;
    }
}