import { collectType } from '../types/collect'
import {observable,action} from 'mobx'
import {collectData} from '../../api/collect'

export default class CreateStore{
    @observable
    list:collectType[] = [];

    @action
    async collectData(obj:object){
        const res:any = await collectData(obj);
        console.log('collectData',res)
        this.list = res;
    }
}