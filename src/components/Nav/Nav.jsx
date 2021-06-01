import React from 'react';
import s from './Nav.module.css'
import {NavLink} from "react-router-dom";
import logo from '../../assets/img/logo.png'
import base from '../../assets/img/base.png'
import applications from '../../assets/img/applications.png'
import staff from '../../assets/img/staff.png'
import client from '../../assets/img/client.png'
import assets from '../../assets/img/assets.png'
import setting from '../../assets/img/setting.png'


const Nav = () => {
    return (
        <div className={s.header}>
            <img src={logo} alt="" className={s.logo}/>
            <NavLink to='/base' activeClassName={s.active}><img src={base} alt="base" className={s.img}/> <div className={s.text}>База знаний</div></NavLink>
            <NavLink to='/applications' activeClassName={s.active}><img src={applications} alt="applications" className={s.img}/><div className={s.text}>Заявки</div></NavLink>
            <NavLink to='/staff' activeClassName={s.active}><img src={staff} alt="staff" style={{width: '26px', height: '20px'}}/><div className={s.text}>Сотрудники</div></NavLink>
            <NavLink to='/client' activeClassName={s.active}><img src={client} alt="client" style={{width: '25px', height: '25px'}}/><div className={s.text}>Клиенты</div></NavLink>
            <NavLink to='/assets' activeClassName={s.active}><img src={assets} alt="assets" style={{width: '25px', height: '25px'}}/><div className={s.text}>Активы</div></NavLink>
            <NavLink to='/setting' activeClassName={s.active}><img src={setting} alt="setting" style={{width: '25px', height: '25px'}}/><div className={s.text}>Настройки</div></NavLink>
        </div>
    );
};

export default Nav;