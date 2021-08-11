import React from 'react';
import styles from '../../../styles/components/dashboard-data-item.module.scss';
import { IDashboardDataItem } from '../../../data';
export default function DashboardDataItem(
    {
        title, value, last_day_value, unit
    }: IDashboardDataItem
){
    const render_icon = () => {
        switch(title) {
            case 'all time earnings': 
                return {
                    icon: 'barcharticon.png', 
                    color: '#2F49D1'
                }
            case 'total clamable': 
                return {
                    icon: 'analyticsicon.png', 
                    color: '#AE7014'
                };
            case 'total employees': 
                return {
                    icon: 'people.png', 
                    color: '#9170F1'
                };
            default: 
                return {
                    icon: 'teamicon.png', 
                    color: '#76B7C7'
                };
        }
    }

    return (
        <div className={styles.dashboardDataItem}> 
            <div className={styles.iconContainer}>
                    <span style={{background: render_icon().color}} />
                        <img 
                            src={render_icon().icon}
                            alt="icon" 
                            height={30}
                            width={30}
                            className={`${styles.iconImage}`}/>
            </div>
            <div className={styles.dataContainer}>
                <div className={styles.child}>
                    <p className={styles.title}>{title}</p>
                    <p className={styles.value}>{value}</p>
                    {last_day_value ? <p className={styles.last}> $214 </p> : null}
                </div>
                {/* {last_day_value ?? <p> {last_day_value} </p>} */}
            </div>
        </div>
    )
}