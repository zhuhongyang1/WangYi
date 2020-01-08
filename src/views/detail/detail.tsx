import React, { useEffect } from 'react';
import useStore from '../../util/useStore'
import { useObserver } from 'mobx-react-lite'
import {History} from 'history'
import styles from './detail.module.scss'
interface PropsType {
  location:Location,
  history:History,
  page:1,
  size:5
}

const Detail: React.FC<PropsType> = (props) => {

  let store = useStore();
  let { Detail } = store;
  useEffect(() => {
    Detail.detailData({})
    // Detail.talkData({valueId:'',typeId:1,page:props.page,size:props.size})
  }, [])

  return useObserver(() => (
    <div>
      <div className={styles.con}>
        {
          Detail.arr.map((item, index) => <div key={index}>
            <div className={styles.top}><span  className={styles.left} onClick={()=>{
             props.history.go(-1)
            }}>&lt;</span><span>{item.title}</span></div>
            <div dangerouslySetInnerHTML={{__html:item.content}}></div>
          </div>)
        }
      </div>
      <div>

      </div>
    </div>
  ))
}

export default Detail;