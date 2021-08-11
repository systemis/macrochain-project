import React from 'react';
import styles from '../../../styles/components/ranked-group.module.scss';

export default function RankedGroup({data}: {data: {
    total: string, 
    group_name: string, 
    data_list: any[], 
}}){
    console.log(data.data_list);
    function sort_data(data_list: any[]){
        for(let i = 0; i < data_list.length; i++){
            for(let j = i + 1; j < data_list.length; j++) {
                if(data_list[i]['value'] < data_list[j]['value']) {
                    const tmp = data_list[i];
                    data_list[i] = data_list[j];
                    data_list[j] = tmp; 
                }
            }
        }

        var result: any[] = []; 
        var colors: Object[] = [
            {tooltip_color: '#7433FF', color: '#5F2EEA'}, 
            {tooltip_color: '#5887FF', color: '#0061F7'}, 
            {tooltip_color: '#F55B5D', color: '#F178B6'}, 
            {tooltip_color: '#4BDE97', color: '#4BDE97'}, 
            {tooltip_color: '#FFAC32', color: '#FFB648'}, 
        ]; 
        for(let i =0; i < data_list.length; i++) {
            result.push({
            ...data_list[i], 
            color: colors[i], 
            })
        }
        
        return result; 
    }

    return (
        <div className={`${styles.rankedGroupContainer}`}>
            <p className={`${styles.groupName}`}>{ data.group_name }</p>
            <p className={`${styles.groupTotal}`}> Total: {data.total}</p>
            <div className={`${styles.dataContainer}`}> 
                {sort_data(data.data_list).map((item, index) => {
                return (
                    <div key={`scholar-item-${index}`} className={`${styles.rankedItemContainer}`}> 
                        <div className={`${styles.childContainer}`}>
                            <div className={`${styles.leftSide}`}>
                            <p className={`${styles.rankedItemName}`}>{item.name}</p>
                            <p className={`${styles.rankedItemTime}`}>{`${item.time} ${item.unit}`}</p>
                            </div>
                            <div className={`${styles.rightSide}`}>
                            <div className={`${styles.rankedNameContainer}`}>
                                <p className={`${styles.rankedNameLabel}`}>
                                {`#${index}`}
                                </p>
                            </div>
                            <div className={`${styles.valueContainer}`}>
                                <div 
                                className={`${styles.tooltip}`} 
                                style={{background: item.color.tooltip_color}}>
                                </div> 
                                <p 
                                    className={`${styles.valueLabel}`}
                                    style={{color: item.color.color}}>
                                    {`+${item.value}`}
                                </p> 
                            </div>
                            </div>
                        </div>
                        <div className={`${styles.border}`} />
                    </div>
                )
                })}
            </div>
        </div>
    );
}