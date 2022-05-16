import React, {useState} from 'react';
import s from './ChangeWindow.module.css'
import {openWindowChange, putTasks} from "../../redux/tasks-reducer";
import {useDispatch, useSelector} from "react-redux";
import {formation} from "../../assets/formation";
import CommentItem from "./CommentItem/CommentItem";


const ChangeWindow = ({windowIsOpen}) => {

  const dispatch = useDispatch()
  const task = useSelector(state => state.tasks.task)
  const property = useSelector(state => state.tasks)
  const [comment, setComment] = useState('')

  const [openStatus, setOpenStatus] = useState(false)
  const [openUsers, setOpenUsers] = useState(false)


  const statusHandler = (idStatus) => {
    const executorId = task.executorId
    const statusId = idStatus
    const id = task.id
    const body = {id, comment, executorId, statusId}
    dispatch(putTasks(body, id))
    setOpenStatus(false)
  }
  const usersHandler = (idUser) => {
    const executorId = idUser
    const statusId = task.statusId
    const id = task.id
    const body = {id, comment, executorId, statusId}
    dispatch(putTasks(body, id))
    setOpenUsers(false)

  }
  const saveHandler = () => {
    const executorId = task.executorId
    const statusId = task.statusId
    const id = task.id
    const body = {id, comment, executorId, statusId}
    dispatch(putTasks(body, id))
    setComment('')
  }

  const comments = task && task.lifetimeItems.map(m => m.comment !== '' ?
    <CommentItem key={m.id} comment={m.comment} createdAt={m.createdAt}/> : null)
  const tags = task.tags && task.tags.map(m => <div className={s.tags} key={m.id}>{m.name}</div>)
  const statusItem = property.statuses.map(m => <div className={s.statusItem} onClick={(e) => {
    statusHandler(m.id)
  }}
                                                     key={m.id} id={m.id}>
    <div className={s.color} style={{background: `${m.rgb}`}}/>
    {m.name}</div>)

  const usersItem = property.users.map(m => <div className={s.usersItem} onClick={(e) => {
    usersHandler(m.id)
  }} key={m.id} id={m.id}>{m.name}</div>)

  const titleForm = formation.formID(task.id)
  const date = formation.formResolution(task.resolutionDatePlan)

  const createAnApplication = () => {
    dispatch(openWindowChange(false))
  }

  const createMarkup = () => {
        return { __html: task.description}
  }
  return (
    <div className={windowIsOpen ? s.windowWrap : s.winnWrap}>
      <div className={s.header}><span className={s.title}>№ {titleForm}</span>
        <div className={s.taskName}>{task.name}</div>
        <div className={s.close} onClick={createAnApplication}>X</div>
      </div>
      <div className={s.bodyWrap}>
        <div className={s.areaWrap}>
          <span className={s.areaTitle}>Описание</span>
          <div className={s.description} dangerouslySetInnerHTML={createMarkup()}/>
          <span className={s.areaTitle}>Добавление комментариев</span>
          <textarea value={comment} onChange={(e) => {
            setComment(e.currentTarget.value)
          }}/>
          <button className={s.btn} onClick={saveHandler} disabled={!comment.length}>Сохранить</button>
          {task.lifetimeItems.length ? <div>
            <div className={s.comment}>
              <div className={s.avatar}/>
              <span className={s.name}>{task.initiatorName}</span>
            </div>
            {comments}</div> : <div/>}


        </div>
        <div className={s.right}>

          <div onClick={() => setOpenStatus(!openStatus)} className={s.status}>
            <div className={s.color} style={{background: `${task.statusRgb}`}}/>
            {task.statusName}</div>
          {openStatus ? <div className={s.statusWrap}>{statusItem}</div> : null}

          <div className={s.span}>Заявитель</div>
          <div className={s.valueSpan}>{task.initiatorName}</div>

          <div className={s.span}>Исполнитель</div>
          <div onClick={() => setOpenUsers(!openUsers)} className={s.users}>
            {task.executorName}</div>
          {openUsers ? <div className={s.statusWrap}>{usersItem}</div> : null}

          <div className={s.span}>Приоритет</div>
          <div className={s.valueSpan}>{task.priorityName}</div>
          <div className={s.span}>Срок</div>
          <div className={s.valueSpan}>{date}</div>
          <div className={s.span}>Теги</div>
          <div className={s.tagsWrap}>{tags}</div>
        </div>
      </div>
    </div>
  );
};

export default ChangeWindow;
