import { goodsType } from '../types/goods'
import {observable,action} from 'mobx'
import {goodsData} from '../../api/goods'

export default class CreateStore{
    @observable
    info:any = [];

    @observable
    attribute:any = [];

    @observable
    gallery:any = [];

    @action
    async goodsinfo(id:any){
        const res:any = await goodsData(id);
        console.log('goodsData',res)
        this.info = res.info;
    }

    @action
    async goodsattribute(id:any){
        const res:any = await goodsData(id);
        this.attribute = res.attribute;
    }

    @action
    async goodsgallery(id:any){
        const res:any = await goodsData(id);
        this.gallery = res.gallery;
    }
}