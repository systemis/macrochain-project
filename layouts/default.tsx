import React from 'react'
import SideBar from "./SideBar/side-bar"
import styles from '../styles/default.module.scss';
import AppHead from './Head/head';
import { data } from '../data';
import { ExchangeRateBar } from './Components';
export default function DefaultLayout(props:any) {
    return (
        <div className={styles.defaultLayout}>
            <AppHead />
            <SideBar />
            <section className={`${styles.mainLayout}`}>
                <ExchangeRateBar data={data.exchange_rate_list}/>
                <div className={`${styles.contentContainer}`}>
                    <p className={styles.screen_name}>Dashboard</p>
                    <div className="content-layout">
                        {props.children}
                    </div>
                </div>
            </section>
        </div>
    )
}