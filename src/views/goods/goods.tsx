import React, { useEffect } from 'react';
import useStore from '../../util/useStore'
import { useObserver } from 'mobx-react-lite'
import './goods.css'
import {History} from 'history'
interface PropsType {
  location:Location,
  history:History
}

const Goods: React.FC<PropsType> = (props) => {
  let a = props.location.pathname.lastIndexOf('?')
  let store = useStore();
  let { Goods } = store;
  useEffect(() => {
      console.log(props.location.pathname.slice(a+8))
    Goods.goodsData(props.location.pathname.slice(a+8))
    // Detail.talkData({valueId:'',typeId:1,page:props.page,size:props.size})
  }, [])

  let tuichu = () => {
    props.history.go(-1)
  }

  return useObserver(() => (
    <div className="box">
        <div className="header">
            <div className="left" onClick={()=>{tuichu()}}>&lt;</div>
            <div className="right">{Goods.info.name}</div>
        </div>
        <div className="main">
            <div className="banners">
                <img src="http://yanxuan.nosdn.127.net/70d4eceeb3f066bd4ea015fca75f424c.jpg" />
            </div>
            <ul>
                <li><span>☆</span> 30天无忧退货</li>
                <li><span>☆</span> 48小时快速退款</li>
                <li><span>☆</span> 满88元免费邮</li>
            </ul>
            <div className="title">
                <h4>{Goods.info.name}</h4>
                <p>{Goods.info.goods_brief}</p>
                <p>￥  {Goods.info.retail_price}</p>
            </div>
            <div className="mark">
                <span>x {}</span>  选择规格&gt;
            </div>
            <div className="clear"></div>
        </div>
        <div className="bottom">
            <div className="xing">☆</div>
            <div className="car">

            </div>
            <div className="addCart">加入购物车</div>
            <div className="payGoods">立即购买</div>
        </div>
    </div>
  ))
}

export default Goods;