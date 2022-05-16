import React from 'react';
import s from './Applications.module.css'
import {useDispatch, useSelector} from "react-redux";
import Tasks from "./Tasks/Tasks";
import {openWindowChange, openWindowCreate} from "../../redux/tasks-reducer";
import CreationWindow from "../CreationWindow/CreationWindow";
import ChangeWindow from "../ChangeWindow/ChangeWindow";
import Preloader from "../Preloader/Preloader";


const Applications = () => {
  const dispatch = useDispatch()
  const tasks = useSelector(state => state.tasks.tasks)
  const window1 = useSelector(state => state.tasks)
  const tasksItem = tasks.map(t => <Tasks id={t.id} key={t.id} statusId={t.statusId} Name={t.name}
                                          statusName={t.statusName} executorName={t.executorName}
                                          priorityId={t.priorityId}/>)

  const createAnApplication = () => {
    dispatch(openWindowChange(false))
    dispatch(openWindowCreate(true))
  }

  // const widthWin = window.innerWidth - 105 + 'px'
  // const style = window1.windowCreateIsOpen || window1.windowChangeIsOpen ? window.innerWidth > 1700 ?
  //   {width: `${widthWin}`} : {width: `calc(${widthWin} + 400px)`} : {width: `100%`}

  return (
    <div className={s.wrap}>
      {window1.preloader ? <Preloader/> : ''}
      <button className={s.btn} onClick={createAnApplication}>Создать заявку</button>
      <table>
        <thead>
        <tr>
          <th className={s.th}>ID</th>
          <th>Название</th>
          <th>Статус</th>
          <th>Исполнитель</th>
        </tr>
        </thead>
        <tbody>
        {tasksItem}
        </tbody>
      </table>
      <CreationWindow windowIsOpen={window1.windowCreateIsOpen}/>
      <ChangeWindow windowIsOpen={window1.windowChangeIsOpen}/>
    </div>
  );
};

export default Applications;
