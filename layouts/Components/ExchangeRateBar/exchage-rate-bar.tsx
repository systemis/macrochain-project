import React, {useEffect} from 'react';
import styles from '../../../styles/components/exchange-rate-bar.module.scss';

export default function ExchangeRateBar({data}: {data: any[]}) {
    function getDistance(last_day_value: number, value:number){
        // console.log(last_day_value, value);
        // return Math.round((value-last_day_value)/value * 100)*100;
        return Number(Number((value-last_day_value)/value * 100).toFixed())
    }

    useEffect(function() {
        const root = document.documentElement;
        const marqueeElementsDisplayed = getComputedStyle(root).getPropertyValue("--marquee-elements-displayed");
        const marqueeContent = document.querySelector(`ul.${styles.marqueeContent}`);
        
        root.style.setProperty("--marquee-elements", marqueeElementsDisplayed.length.toString());
        
        for(let i=0; i<marqueeElementsDisplayed.length; i++) {
          marqueeContent?.appendChild(marqueeContent.children[i].cloneNode(true));
        }
    })

    return (
        <div className={styles.marquee}>
            <ul className={styles.marqueeContent}>
                {data.map((item, index) => {
                    return (
                        <li key={`exchange-rate-item-${index}`}>
                            <i><span>{`${item.currency}${item.unit}: `}</span> </i>
                            <i><span>{item.value}</span> </i>
                            <i style={{
                                color: getDistance(item.last_day_value, item.value) > 0 ? "green" : "red", 
                                paddingLeft: '10px'
                            }}>
                                <span> 
                                    {getDistance(item.last_day_value, item.value).toString()}%
                                </span>
                            </i>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}