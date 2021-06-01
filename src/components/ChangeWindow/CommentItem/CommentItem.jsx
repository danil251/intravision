import React from 'react';
import {formation} from "../../../assets/formation";
import s from './CommentItem.module.css'

const CommentItem = ({comment, createdAt}) => {
    const date = formation.formDate(createdAt)
    return (
        <div>
            {comment !== null ?
                <div className={s.commentWrap}><span className={s.date}>{date} прокоментировал</span><span
                    className={s.comment}>{comment}</span></div> : null}
        </div>

    );
};

export default CommentItem;