import React, {useEffect} from 'react';
import useStore from '../../util/useStore';
import './address.css'
import { useObserver } from 'mobx-react-lite';
import {History} from 'history'

interface PropsType {
    location: Location,
    history: History
}

const initialState = [
    {
        "id": 1,
        "name":'xxx',
        "phone":15113245678,
        "address": "北京北京市东城区",
        "title":2342132
    },
    {
        "id": 2,
        "name":'王斌',
        "phone":18717658976,
        "address": "天津天津市河西区"
    }
]


let Address: React.FC<PropsType> = (props) =>{
    let store = useStore();
    
    let tuichu = () => {
        props.history.go(-1)
    }

        return useObserver(() => (
            <div className="wrap">
                <div className="header">
                    <div className="left" onClick={()=>{tuichu()}}>&lt;</div>
                    <div className="right">地址管理</div>
                </div>
                <div className="content">
                    {
                        initialState.map((item,index) => {
                            return <div className="block" key={index}>
                                <div className="left">
                                    {item.name}
                                </div>
                                <div className="right">
                                    <div className="l">
                                        <p>{item.phone}</p>
                                        <p>{item.address}</p>
                                        <p>{item.title}</p>
                                    </div>
                                    <div className="r">
                                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyBAMAAADsEZWCAAAALVBMVEVmZmZtbW1ubm5wcHCJiYmKioqOjo6Tk5OUlJSVlZXm5ubn5+fv7+/y8vL////PAON/AAAAa0lEQVQ4y2N4hwsw0F8mgIGBgRWrDAMIoMokMKADNoIy6O5gwCAHgUwoThkGEmWexiFTyDIP+JCpUZmBkXnqh0wRH9shA5dGBe4hSbxlRJJpqEGSOcmBJLMYJS9aIcm8noQkobluoModNAAADGfUnhuYO1kAAAAASUVORK5CYII=" alt=""/>
                                    </div>
                                </div>
                            </div>
                        })
                    }
                </div>
                <div className="footer">
                    +新增地址
                </div>
            </div>
        ));
    
}
export default Address;