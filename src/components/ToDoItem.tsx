import React, { useState } from 'react';
import './toDoItem.css';
import { ToDoItemProps } from './_types';
import { BiLike } from 'react-icons/bi';
import { FcCancel } from 'react-icons/fc';
import { FaTimesCircle } from 'react-icons/fa';
import { MdDone } from 'react-icons/md'

const ToDoItem: React.FC<ToDoItemProps> = ({ item, addItem, removeItem, transitionItem }) => {

    const [itemIsInEdit, setItemIsInEdit] = useState(item.isEdit);
    const [itemTitle, setItemTitle] = useState(item.title);

    function confirmEdit() {
        setItemIsInEdit(false);
        addItem({ title: itemTitle, isEdit: false, id: item.id })
    }

    function cancelEdit() {
        setItemIsInEdit(false);
    }

    function onEnter(event: React.KeyboardEvent){
        if(event.key === "Enter"){
            confirmEdit();   
        }
    }

    if (itemIsInEdit) {
        return (
            <div className="toDoItemContainer">
                <input value={itemTitle} onChange={(e) => setItemTitle(e.target.value)} onKeyPress={onEnter} />
                <button
                    onClick={() => confirmEdit()}
                    className="toDoItemAccept">
                    <BiLike color={'green'} size={25} />
                </button>
                <button
                    onClick={() => cancelEdit()}
                    className="toDoItemCancel">
                    <FcCancel color={'red'} size={25} />
                </button>
            </div>
        )
    } else {
        return (

            <button
                onClick={() => setItemIsInEdit(true)}
                className="toDoItemContainer">
                <h3>{item.title}</h3>
                <>
                    <button
                        onClick={() => removeItem({ title: itemTitle, isEdit: false, id: item.id })}
                        className="toDoItemDelete">
                        <FaTimesCircle color={'red'} size={25} />
                    </button>
                    <button
                        onClick={() => transitionItem({ title: itemTitle, isEdit: false, id: item.id })}
                        className="toDoItemDone">
                        <MdDone color={'green'} size={25} />
                    </button>
                </>
            </button>


        )
    }

}

export { ToDoItem }; 