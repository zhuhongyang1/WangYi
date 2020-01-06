import React from 'react';
import { NavLink } from 'react-router-dom'
import './footer.css'
import './iconfont/iconfont.css'
export interface FooterOption {
    // text?: string;
    // icon?: string;
    // onClick?: () => void;
    // type?: 'normal' | 'default' | 'danger';
    // size?: 'sm' | 'xm' | 'lg';
    // href?: string;
    // target?: string;
    // defalutCls?: string;
    // loading?: boolean;
    // style?: React.CSSProperties;
    // className?: string;
}

export default class footer extends React.Component<FooterOption, any>{
    static defaultProps = {
        // defalutCls: 'keep-btn',
        // loading: false,
        // type: 'default',
        // size: 'xm'
    }
    constructor(props: FooterOption) {
        super(props);
    }
    render() {
        return <footer>
            <NavLink to='/main/home'>
                <dl>
                    <dt><i className='iconfont icon-caidaniconshouyehui'></i></dt>
                    <dd>首页</dd>
                </dl>
            </NavLink>
            <NavLink to='/main/type'>
                <dl>
                    <dt><i className='iconfont icon-icon_clone'></i></dt>
                    <dd>专题</dd>
                </dl>
            </NavLink>
            <NavLink to='/main/classify'>
                <dl>
                    <dt><i className='iconfont icon-icon-'></i></dt>
                    <dd>分类</dd>
                </dl>
            </NavLink>
            <NavLink to='/main/cart'>
                <dl>
                    <dt><i className='iconfont icon-icon_cart'></i></dt>
                    <dd>购物车</dd>
                </dl>
            </NavLink>
            <NavLink to='/main/my'>
                <dl>
                    <dt><i className='iconfont icon-icon-mine'></i></dt>
                    <dd>我的</dd>
                </dl>
            </NavLink>



        </footer>
    }
}
