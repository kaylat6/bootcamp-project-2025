import React from "react";
import style from "./comment.module.css";
import {IComment} from "../database/blogSchema";

type CommentProps = {
  comment: IComment;
};

function parseCommentTime(time: Date) {
  const date = new Date(time);
  const options: Intl.DateTimeFormatOptions = {
    month: "long",
    day: "2-digit",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  };

  return date.toLocaleString("en-US", options);
}

function Comment({ comment }: CommentProps) {
  return (
    <div className={style.comment}>
      <h4>{comment.user}</h4>
      <p>{comment.comment}</p>
      <span>{parseCommentTime(comment.time)}</span>
    </div>
  );
}

export default Comment;
