import React, {useEffect} from 'react';
import useStore from '../../util/useStore';
import './my.css';
import { useObserver } from 'mobx-react-lite';

let My: React.FC = () =>{
    let store = useStore();


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
                        <div className="block">
                            <img src="http://yanxuan.nosdn.127.net/a45c2c262a476fea0b9fc684fed91ef5.png" alt=""/>
                            <p>我的收藏</p>
                        </div>
                        <div className="block">
                            <img src="http://yanxuan.nosdn.127.net/a45c2c262a476fea0b9fc684fed91ef5.png" alt=""/>
                            <p>地址管理</p>
                        </div>
                        <div className="block">
                            <img src="http://yanxuan.nosdn.127.net/a45c2c262a476fea0b9fc684fed91ef5.png" alt=""/>
                            <p>我的订单</p>
                        </div>
                        <div className="block">
                            <img src="http://yanxuan.nosdn.127.net/a45c2c262a476fea0b9fc684fed91ef5.png" alt=""/>
                            <p>周末拼单</p>
                        </div>
                        <div className="block">
                            <img src="http://yanxuan.nosdn.127.net/a45c2c262a476fea0b9fc684fed91ef5.png" alt=""/>
                            <p>优惠券</p>
                        </div>
                        <div className="block">
                            <img src="http://yanxuan.nosdn.127.net/a45c2c262a476fea0b9fc684fed91ef5.png" alt=""/>
                            <p>优选购</p>
                        </div>
                        <div className="block">
                            <img src="http://yanxuan.nosdn.127.net/a45c2c262a476fea0b9fc684fed91ef5.png" alt=""/>
                            <p>我的红包</p>
                        </div>
                        <div className="block">
                            <img src="http://yanxuan.nosdn.127.net/a45c2c262a476fea0b9fc684fed91ef5.png" alt=""/>
                            <p>会员plus</p>
                        </div>
                        <div className="block">
                            <img src="http://yanxuan.nosdn.127.net/a45c2c262a476fea0b9fc684fed91ef5.png" alt=""/>
                            <p>邀请返利</p>
                        </div>
                        <div className="block">
                            <img src="http://yanxuan.nosdn.127.net/a45c2c262a476fea0b9fc684fed91ef5.png" alt=""/>
                            <p>意见反馈</p>
                        </div>
                        <div className="block">
                            <img src="http://yanxuan.nosdn.127.net/a45c2c262a476fea0b9fc684fed91ef5.png" alt=""/>
                            <p>客服咨询</p>
                        </div>
                        <div className="block">
                            <img src="http://yanxuan.nosdn.127.net/a45c2c262a476fea0b9fc684fed91ef5.png" alt=""/>
                            <p>账户安全</p>
                        </div>
                    </div>
                    <div className="claear"></div>
                    <p>退出登录</p>
                </header>
            </div>
        ));
    
}
export default My;