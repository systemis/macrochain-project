import React, {useEffect} from "react";
import { useRouter } from 'next/router';
import styles from "../../styles/components/side-bar.module.scss";
import default_styles from "../../styles/default.module.scss";

function NavItem({icon, link_name, name, color, isShow}: {
    icon: string, 
    link_name: string, 
    name: string, 
    color?:string, 
    isShow?:boolean | false}) {
    return (
        <li>
            <a href={link_name}>
                <i style={{color: color}}>
                    <img 
                        src={icon} 
                        alt="sidebaricon" 
                        width={30}
                        height={30}/>
                </i>
                <span className={styles.links_name}>{name}</span>
            </a>
            <span className={styles.tooltip}>{name}</span>
            <div className={`${styles.rightSpan} ${isShow ? styles.show : ''}`}></div>
        </li>
    )
}

export default function SideBar(){
    const router = useRouter(); 
    useEffect(function(){
        let sidebar = document.querySelector(`.${styles.sideBar}`);
        let closeBtn = document.querySelector(`#${styles.btn}`);
        let mainLayout = document.querySelector(`.${default_styles.mainLayout}`)
        closeBtn?.addEventListener('click', ()=> {
            sidebar?.classList.toggle(styles.open);
            mainLayout?.classList.toggle(default_styles.open);
        })
    });
    // ${styles.open}
    return (
        <div className={`${styles.sideBar}`}>
            <div className={styles.logoDetails}>
                <img 
                    src="logo.png" 
                    alt="app logo" 
                    height={40}
                    width={40} />
                <div className={styles.logo_name}>
                    MAROAXIE
                    <p>SYSTEM</p>
                </div>
                <i className="bx bx-menu" id={styles.btn} ></i>
            </div>
            <ul className={styles.navList}>
                <NavItem 
                    icon="homeicon.png" 
                    link_name="/" 
                    name="Dashboard"
                    isShow={router.pathname == '/' ? true : false}/>
                <NavItem 
                    icon="radioicon.png" 
                    link_name="/live-performance" 
                    name="Live Performance"/>
                <NavItem 
                    icon="papericon.png" 
                    link_name="/reports" 
                    name="Reports"/>
                <NavItem 
                    icon="settingsicon.png" 
                    link_name="/axies-accounts" 
                    name="Axies Accounts"/>
            </ul>
        </div>
    );
}