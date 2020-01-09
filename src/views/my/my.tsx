import React, {useEffect} from 'react';
import useStore from '../../util/useStore';
import './my.css';
import { useObserver } from 'mobx-react-lite';
import {History} from 'history'

interface PropsType {
    location: Location,
    history: History,
    name: any
}

const initialState = [
    {
      "id": 1,
      "name": "我的收藏",
      "pic":"http://yanxuan.nosdn.127.net/a45c2c262a476fea0b9fc684fed91ef5.png"
    },
    {
      "id": 2,
      "name": "地址管理",
      "pic":"http://yanxuan.nosdn.127.net/a45c2c262a476fea0b9fc684fed91ef5.png"
    },
    {
      "id": 3,
      "name": "我的订单",
      "pic":"http://yanxuan.nosdn.127.net/a45c2c262a476fea0b9fc684fed91ef5.png"
    },
    {
      "id": 4,
      "name": "周末拼单",
      "pic":"http://yanxuan.nosdn.127.net/a45c2c262a476fea0b9fc684fed91ef5.png"
    },
    {
      "id": 5,
      "name": "优惠券",
      "pic":"http://yanxuan.nosdn.127.net/a45c2c262a476fea0b9fc684fed91ef5.png"
    },
    {
      "id": 6,
      "name": "优选购",
      "pic":"http://yanxuan.nosdn.127.net/a45c2c262a476fea0b9fc684fed91ef5.png"
    },
    {
      "id": 7,
      "name": "我的红包",
      "pic":"http://yanxuan.nosdn.127.net/a45c2c262a476fea0b9fc684fed91ef5.png"
    },
    {
      "id": 8,
      "name": "会员plus",
      "pic":"http://yanxuan.nosdn.127.net/a45c2c262a476fea0b9fc684fed91ef5.png"
    },
    {
      "id": 9,
      "name": "邀请返利",
      "pic":"http://yanxuan.nosdn.127.net/a45c2c262a476fea0b9fc684fed91ef5.png"
    },
    {
      "id": 10,
      "name": "意见反馈",
      "pic":"http://yanxuan.nosdn.127.net/a45c2c262a476fea0b9fc684fed91ef5.png"
    },
    {
      "id": 11,
      "name": "客服咨询",
      "pic":"http://yanxuan.nosdn.127.net/a45c2c262a476fea0b9fc684fed91ef5.png"
    },
    {
      "id": 12,
      "name": "账户安全",
      "pic":"http://yanxuan.nosdn.127.net/a45c2c262a476fea0b9fc684fed91ef5.png"
    }
  ]


let My: React.FC<PropsType> = (props) =>{
    let store = useStore();
    
    let goTz = (name:any) => {
        if(name === "我的收藏"){
            props.history.push('/collect')
        }else if(name === "地址管理"){
            props.history.push('/address')
        }else{
            alert("还未解锁，请耐心等候")
        }
        localStorage.setItem('token','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoxNiwiaWF0IjoxNTc4NTU0NDU5fQ.R2t5gzU5M1qxZKSQLiEdyIVGKaPB5E4zeefVwB0m0Ow')
    }

        return useObserver(() => (
            <div className="wrap">
                <header>
                    <div className="top">
                        <div className="left"></div>
                        <div className="right">
                            <p>15323807313</p>
                            <p>普通用户</p>
                        </div>
                    </div>
                    <div className="nav">
                        {/* <div className="block" onClick={()=>{goTz()}}>
                            <img src="http://yanxuan.nosdn.127.net/a45c2c262a476fea0b9fc684fed91ef5.png" alt=""/>
                            <p>我的收藏</p>
                        </div> */}
                        {
                            initialState.map((item,index) => {
                                return <div className="block" onClick={()=>goTz(item.name)} key={index}>
                                <img src={item.pic} alt=""/>
                                <p>{item.name}</p>
                            </div>
                            })
                        }
                    </div>
                    <div className="claear"></div>
                    <p>退出登录</p>
                </header>
            </div>
        ));
    
}
export default My;