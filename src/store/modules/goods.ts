import { goodsType } from '../types/goods'
import {observable,action} from 'mobx'
import {goodsData} from '../../api/goods'

export default class CreateStore{
    @observable
    info:any = [];

    @action
    async goodsData(id:any){
        const res:any = await goodsData(id);
        console.log('goodsData',res)
        this.info = res.info;
    }
}