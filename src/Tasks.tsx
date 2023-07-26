import React from "react";

type TaskType = {
    taskId: number
    title: string
    isDone: boolean
}

type  TasksType = {
    title: string
    tasks: TaskType []
    students: string []
}

type TasksPropsType = {
    data: TasksType
}

export const Tasks: React.FC<TasksPropsType> = (props) => {
    return (
        <div>
            <h3>{props.data.title}</h3>
            <ul>
                {props.data.tasks.map(task => <li><input key={task.taskId} type="checkbox"
                                                         checked={task.isDone}/><span>{task.title}</span></li>)}
            </ul>
            <br/>
            <ul>
                {props.data.students.map(student => <li>{student}</li>)}
            </ul>


        </div>
    )

}