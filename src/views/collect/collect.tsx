import React, {useEffect} from 'react';
import useStore from '../../util/useStore';
import './collect.css'
import { useObserver } from 'mobx-react-lite';
import {History} from 'history'

interface PropsType {
    location: Location,
    history: History
}




let Collect: React.FC<PropsType> = (props) =>{
    let store = useStore();
    let { Collect } = store;
    const typeId = 0;
    const size = 1000;
    useEffect(() => {
        Collect.collectData({typeId,size})
    }, [])

    let tuichu = () => {
        props.history.go(-1)
    }

        return useObserver(() => (
            <div className="wrap">
                <div className="header">
                    <div className="left" onClick={()=>{tuichu()}}>&lt;</div>
                    <div className="right">easyLikeGoods</div>
                </div>
                <div className="main">
                    {
                        Collect.list.map((item,index) => {
                        return <div className="block" key={index}>
                            <div className="left">
                                <img src={item.list_pic_url} alt=""/>
                            </div>
                            <div className="right">
                                <p>{item.name}</p>
                                <p>{item.goods_brief}</p>
                                <p>￥  {item.retail_price}</p>
                            </div>
                        </div>
                        })
                    }
                </div>
            </div>
        ));
    
}
export default Collect;