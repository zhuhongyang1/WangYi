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
    Goods.goodsinfo(props.location.pathname.slice(a+8))
    Goods.goodsattribute(props.location.pathname.slice(a+8))
    Goods.goodsgallery(props.location.pathname.slice(a+8))
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
                  {
                      Goods.gallery.map((item:any,index:any) => {
                        return <div className="ban" key={index}>
                           <img src={item.img_url} alt=""/>
                        </div>
                      })
                  }
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
                <span>x 0</span>  选择规格 &gt;
            </div>
            <div className="clear"></div>
            <div className="goodsparameter">
              <div className="goodstitle">
                -- 商品参数 --
              </div>
              <div className="goodscontent">
                 {
                    Goods.attribute.map((item:any,index:any)=>{
                      return <div className="goodsblock" key={index}>
                          <div className="goodsleft">{item.name}</div>
                          <div className="goodsright">{item.value}</div>
                      </div>
                    })
                 }
              </div>
              <div className="goodspic">
                  {
                      Goods.gallery.map((item:any,index:any) => {
                        return <div className="pic" key={index}>
                          <img src={item.img_url} alt=""/>
                        </div>
                      })
                  }
              </div>
            </div>
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