import { detailType } from '../types/detail'
import {talkType} from '../types/talk'
import {observable,action} from 'mobx'
import {detailData,talkData} from '../../api/detail'

export default class CreateStore{
    @observable
    one:any = {}

    @observable
    arr:detailType[] = []

    @action
    async detailData(obj:object){
        const res:any = await detailData(obj);
        this.one = res;
        this.arr = [res]
        console.log(this.arr)
    }

    @observable
    talk:talkType[] = []

    @action
    async talkData(obj:object){
        const res:any = await talkData(obj);
        console.log(res)
        this.talk = res;
        
    }
}