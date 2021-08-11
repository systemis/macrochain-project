import React from 'react';
import styles from '../../../styles/components/level-bar-group.module.scss';

export default function LevelBarGroup({data}: {data: any[]}) {
    if(data.length == 0) return null; 
    var max_value = 0; 
    for(let i = 0; i < data.length; i++) {
        if(data[i].value > max_value) {
            max_value = data[i].value; 
        }
    }

    return (
        <div className={`${styles.levelBarGroupContainer}`}>
            <div className="childContainer">
                {data.map((item, index) => {
                    return (
                        <div 
                            key={`level-item-container-${index}`} 
                            className={`${styles.levelItemContainer}`}
                            style={{
                                paddingTop: '10px', 
                            }}>
                            <div 
                                className={`${styles.lavelBar}`}
                                style={{
                                    width: Math.floor((item.value/max_value)*100).toString() + "%", 
                                    background: 'rgba(34,75,70,255)', 
                                    height: '42px', 
                                    borderRadius: '2px', 
                                    position: 'relative'
                                }}>
                                    <p style={{
                                        fontFamily: 'IBM Plex Sans', 
                                        fontStyle: 'normal', 
                                        fontWeight: 'bold', 
                                        fontSize: '13px', 
                                        lineHeight: '16px', 
                                        display: 'flex', 
                                        alignItems: 'center', 
                                        letterSpacing: '1.5px', 
                                        textTransform: 'uppercase', 
                                        color: '#FFFFFF', 
                                        top: '35%', 
                                        left: '20px', 
                                        position: 'absolute'
                                    }}>{item.tag_name}</p>
                            </div>
                        </div>  
                    );
                })}
            </div>
        </div>
    );
}