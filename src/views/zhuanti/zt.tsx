import React, { useEffect } from 'react';
import useStore from '../../util/useStore'
import { useObserver } from 'mobx-react-lite'
import styles from './zt.module.scss'
// import {History} from 'history'
// const page = 4;
// const size = 5;
// interface PropsType {
//   location:Location,
//   history:History
// }

const Zhuanti: React.FC = () => {
  let store = useStore();
  let { Zhuanti } = store;
  useEffect(() => {
    Zhuanti.zhuantiData({})
  }, [Zhuanti])
  return useObserver(() => (
    <div className={styles.box}>
      {
        Zhuanti.list.map((item, index) => {
          return <a href={'/topicDetail/'+item.id} key={index}>
            <img src={item.scene_pic_url} alt="" />
            <div className={styles.con1}>{item.title}</div>
            <div className={styles.con2}>{item.subtitle}</div>
            <p className={styles.con3}>{item.price_info}元起</p>
          </a>
        })
      }
    </div>
  ))
}

export default Zhuanti;
