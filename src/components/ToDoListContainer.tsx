import React, { useContext } from "react"
import { ToDoList } from "."
import { ItemContext, ItemContextType } from "./context"

const ToDoListContainer: React.FC = () => {

    const {
        incompleteItems,
        addIncompleteItem,
        removeIncompleteItem,
        inProgressItems,
        addInProgressItem,
        removeInProgressItem,
        doneItems,
        addDoneItems,
        removeDoneItems
    } = useContext(ItemContext) as ItemContextType

    return (
        <div className="App-Lists">
            <ToDoList
                addItem={addIncompleteItem}
                removeItem={removeIncompleteItem}
                title="Incomplete Items"
                items={incompleteItems} />
            <ToDoList
                addItem={addInProgressItem}
                removeItem={removeInProgressItem}
                title="In Progress"
                items={inProgressItems} />
            <ToDoList
                addItem={addDoneItems}
                removeItem={removeDoneItems}
                title="Done"
                items={doneItems} />
        </div>
    )
}

export default ToDoListContainer;