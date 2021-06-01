import React, {useState} from 'react';
import s from './CreationWindow.module.css'
import {creationTasks, openWindowCreate} from "../../redux/tasks-reducer";
import {useDispatch} from "react-redux";

const CreationWindow = () => {
    const dispatch = useDispatch()
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [errorDescr, setErrorDescr] = useState(false)
    const [errorName, setErrorName] = useState(false)

    const createAnApplication = () => {
        dispatch(openWindowCreate(false))
    }
    const create = () => {
        if (name.length && description.length) {
            dispatch(creationTasks({name, description}))
        } else if (name.length) {
            setErrorDescr(true)
        } else if (description.length) {
            setErrorName(true)
        } else if (!name.length && !description.length) {
            setErrorDescr(true)
            setErrorName(true)
        }


    }

    return (
        <div className={s.windowWrap}>
            <div className={s.header}><span className={s.title}>Новая заявка</span>
                <div className={s.close} onClick={createAnApplication}>X</div>
            </div>
            <div className={s.areaWrap}>
                <span className={s.areaTitle}>Название</span>
                <textarea className={!errorName?  s.name : `${s.name} ${s.error}`} value={name} onChange={(e) => {
                    setName(e.currentTarget.value)
                    setErrorName(false)
                }}/>
                <span className={s.areaTitle}>Описание</span>
                <textarea className={!errorDescr?  s.description : `${s.description} ${s.error}`} value={description} onChange={(e) => {
                    setDescription(e.currentTarget.value)
                    setErrorDescr(false)
                }}/>
                <button type='submit' className={`${s.btn} ${s.btnDisabled}`} onClick={create}>Сохранить
                </button>
            </div>

        </div>
    );
};

export default CreationWindow;