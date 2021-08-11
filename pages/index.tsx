import Image from 'next/image'
import styles from '../styles/home.module.scss'
import DefaultLayout from '../layouts/default'
import { 
  DashboardDataItem, 
  RankedGroup, 
  LevelBarGroup, 
  DominancePieChart, 
  DashboardChart} from '../layouts/Components';
import { data } from '../data';

console.log('data list', data.admin_data.scholar_data.scholar_list.filter(item => Object.assign({}, {
  name: 'item.scholar_name', 
  time: item.time, 
  unit: item.unit, 
  value: item.value,
})))
export default function Home() {
  return (
    <DefaultLayout>
      <div className={styles.container}>
        <div className={`row ${styles.dataOverviewContainer}`}>
          <div className="col-12 col-sm-12 col-md-12 col-lg-6">
            <div className={`row`}>
              {data.admin_data.dashboard_data_list.map((item, index) => {
                if(index >= 2) return; 
                return (
                  <div 
                    key={`dashboard-item-${index}`}
                    className={`col-12 col-sm-12 col-md-6 col-lg-6 ${styles.overviewDataitemContainer}`}>
                    <DashboardDataItem 
                      title={item.title}
                      value={item.value}
                      last_day_value={item.last_day_value}
                      unit={item.unit}/> 
                  </div>
                )
              })}
            </div>
          </div>
          <div className="col-12 col-sm-12 col-md-12 col-lg-6">
            <div className={`row`}>
                {data.admin_data.dashboard_data_list.map((item, index) => {
                  if(index < 2) return; 
                  return (
                    <div 
                      key={`dashboard-item-${index}`}
                      className={`col-12 col-sm-12 col-md-6 col-lg-6 ${styles.overviewDataitemContainer}`}> 
                      <DashboardDataItem 
                        title={item.title}
                        value={item.value}
                        last_day_value={item.last_day_value}
                        unit={item.unit}/> 
                    </div>
                  )
                })}
              </div>
          </div>
        </div>
        <div className={`row ${styles.chartOverviewContainer}`}>
          <div className={`col-12 col-sm-12 col-md-12 col-lg-9`}>
              <div className={`${styles.chartContainer}`}>
                <div className={`${styles.headerContainer}`}>
                    <p>Daily performance</p>
                    <span>April - Today</span>
                </div>
                <div className={`${styles.legendContainer}`}>
                    <div className={`${styles.childContent}`}>
                      {[{label: 'Today eanings', value: '11.232 SLP', last: '$5.231'}, {label: 'slp per capital', value: '10.421', last: '$4.212'}].map((item, index) => {
                          return (
                            <div 
                              key={`chart-legend-item-${index}`}
                              className={`${styles.legendItem}`}>
                              <div className={`${styles.childContent}`}>
                                <div className={`${styles.spanContainer}`}>
                                    <div style={{
                                      width: '10px', 
                                      height: '10px', 
                                      background: index == 0 ? '#5D46C2' : '#4BDE97', 
                                      float: 'left', 
                                      borderRadius: '10px', 
                                      marginTop: '10px', 
                                      marginRight: '10px', 
                                  }}></div>
                                </div> 
                                <div className={`${styles.contentContainer}`}>
                                  <p 
                                    style={{color: index == 0 ? "#fff" : "#B9B9B9"}}
                                    className={`${styles.label}`}> {item.label} </p> 
                                  <div className={`${styles.valueContainer}`}>
                                    <p 
                                      style={{color: index == 0 ? '#fff' : '#9293a1'}}
                                      className={`${styles.value}`}> {item.value} </p>
                                    <p className={`${styles.last}`}> {item.last}</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          )
                      })}
                    </div>
                </div>
                <DashboardChart />
              </div>
          </div>
          <div className={`col-12 col-sm-12 col-md-12 col-lg-3`}>
              <RankedGroup data={{
                total: `${data.admin_data.scholar_data.total.toString()} scholars`, 
                group_name: `Scholar Leaderboard`, 
                data_list: data.admin_data.scholar_data.scholar_list
              }}/>
          </div>
        </div>
        <div className={`row ${styles.detailsContainer}`}>
          <div className={`col-12 col-sm-12 col-md-12 col-lg-9 ${styles.leftSide}`}>
              <div className={`row`}>
                <div className={`col-12 col-sm-12 col-md-12 col-lg-4`}>
                  <div className={`${styles.itemContainer}`}>
                    <div className={`${styles.headerContainer}`}>
                      <p>Scholars Dominance</p>
                      <span>April - Today</span>
                    </div>
                    <div className={`${styles.contentContainer}`}>
                      <DominancePieChart />
                    </div>
                    <div className={`${styles.scholarLegend}`}>
                      {[
                        {name: 'Scholar A', color: '#9F7DE1'}, {name: 'Scholar B', color: '#ACB9FF'}, 
                        {name: 'Scholar C', color: '#5f4b87'}, {name: 'Scholar C', color: '#000'}, 
                      ].map((item, index) => {
                        return (
                          <div 
                            key={`scholar-item-${index}`}
                            className={`${styles.legendItem}`}>
                              <div style={{
                                width: '10px', 
                                height: '10px', 
                                background: item.color, 
                                float: 'left', 
                                borderRadius: '10px', 
                                marginTop: '10px', 
                                marginRight: '10px', 
                              }}></div>
                              <br />
                              <span>{item.name}</span>
                            </div>
                        )
                      })}
                    </div>
                  </div>
                </div>
                <div className={`col-12 col-sm-12 col-md-12 col-lg-5`}>
                  <div className={`${styles.itemContainer}`}>
                    <div className={`${styles.headerContainer}`}>
                      <p>Number of Axies by Levels</p>
                    </div>
                    <div className={`${styles.contentContainer}`}>
                      <LevelBarGroup data={data.admin_data.number_axies_by_level}/>
                    </div>
                  </div>
                </div>
                <div className={`col-12 col-sm-12 col-md-12 col-lg-3`}>
                  <div className={`${styles.itemContainer}`}>
                    <div className={`${styles.headerContainer}`}>
                      <p>Day Since Operation</p>
                    </div>
                    <div className={`${styles.daySinceOperation}`}>
                      <div className={`${styles.valueContainer}`}>
                          <span>105</span>
                          <span className={`${styles.day}`}>DAYS</span>
                          {/* <p className={`${styles.value} text-justify`}> 105 </p> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
          </div>
          <div className={`col-12 col-sm-12 col-md-12 col-lg-3 ${styles.rightSide}`}>
                <RankedGroup data={{
                  total: `${data.admin_data.manager_data.total.toString()} scholars`, 
                  group_name: `Manager Leaderboard`, 
                  data_list: data.admin_data.manager_data.manager_list
                }}/>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
}
