import React from 'react';
import './toDoList.css';
import { ToDoItem } from './';
import { IToDoItem, ToDoListProps } from './_types';
import { TextButton } from '../stories/textButton';

const ToDoList: React.FC<ToDoListProps> = ({ title, items, addItem, removeItem, transitionItem }) => {

    const createItem = () => {

        const newItem: IToDoItem = {
            id: Math.random(),
            title: '',
            isEdit: true
        }
        addItem(newItem);
    }

    return (
        <div className="toDoListContainer">
            <header className="toDoListHeader">
                <h3>{title}</h3>
            </header>
            <div>
                {items.map((item, i) => <ToDoItem
                    key={`key${item.title}_${i}`}
                    item={item}
                    transitionItem={(item) => transitionItem(item)}
                    addItem={(item) => addItem(item)}
                    removeItem={(item) => removeItem(item)} />)}
            </div>


            <TextButton
                onClick={() => createItem()}
                text="Add"
            />

        </div>
    )
}

export { ToDoList };