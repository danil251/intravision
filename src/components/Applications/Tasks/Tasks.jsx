import React from 'react';
import s from './Tasks.module.css'
import {formation} from "../../../assets/formation";
import {useDispatch, useSelector} from "react-redux";
import {fetchTask, openWindowCreate} from "../../../redux/tasks-reducer";

const Tasks = ({id, Name, statusId, executorName, priorityId}) => {
    const dispatch = useDispatch()
    const statuses = useSelector(state => state.tasks.statuses)
    const priorities = useSelector(state => state.tasks.priorities)

    const formId = formation.formID(id)
    const formName = formation.formName(Name)
    const status = formation.formStatuses(statuses, statusId)
    const priority = formation.formPriorities(priorities, priorityId)
    const openLink = () => {
        dispatch(fetchTask(id))
        dispatch(openWindowCreate(false))
    }
    return (
        <tr onClick={openLink}>
            <td>
                <div className={s.priority} style={{background: `${priority.rgb}`}}/>
                {formId}</td>
            <td>{formName}</td>
            <td>
                <div className={s.status}
                     style={{background: `${status.rgb}`}}>{status.name.length > 10 ? status.name.substr(0, 12) + ' ...' : status.name}</div>
            </td>
            <td>{executorName}</td>
        </tr>
    );
};

export default Tasks;