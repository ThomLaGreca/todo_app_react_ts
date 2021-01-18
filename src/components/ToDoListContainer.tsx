import React, { useContext } from "react"
import { ToDoList } from "."
import { ItemContext, ItemContextType } from "./context"

const ToDoListContainer: React.FC = () => {

    const {
        incompleteItems,
        addIncompleteItem,
        removeIncompleteItem,
        transitionIncompleteItem,
        inProgressItems,
        addInProgressItem,
        removeInProgressItem,
        transitionInProgressItem,
        doneItems,
        addDoneItem,
        removeDoneItem
    } = useContext(ItemContext) as ItemContextType

    return (
        <div className="App-Lists">
            <ToDoList
                addItem={addIncompleteItem}
                removeItem={removeIncompleteItem}
                title="Incomplete Items"
                items={incompleteItems}
                transitionItem={transitionIncompleteItem} />
            <ToDoList
                addItem={addInProgressItem}
                removeItem={removeInProgressItem}
                title="In Progress"
                items={inProgressItems}
                transitionItem={transitionInProgressItem} />
            <ToDoList
                addItem={addDoneItem}
                removeItem={removeDoneItem}
                title="Done"
                items={doneItems}
                transitionItem={removeDoneItem} />
        </div>
    )
}

export default ToDoListContainer;