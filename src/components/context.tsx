import React, { createContext } from 'react';
import { useCollection } from './_hooks';
import { IToDoItem } from './_types';

export interface ItemContextType{
    incompleteItems: IToDoItem[],
    addIncompleteItem: (item: IToDoItem) => void,
    removeIncompleteItem: (item: IToDoItem) => void,
    transitionIncompleteItem: (item: IToDoItem) => void,
    inProgressItems: IToDoItem[],
    addInProgressItem: (item: IToDoItem) => void,
    removeInProgressItem: (item: IToDoItem) => void,
    transitionInProgressItem: (item: IToDoItem) => void,
    doneItems: IToDoItem[],
    addDoneItem: (item: IToDoItem) => void,
    removeDoneItem: (item: IToDoItem) => void,
}

export const ItemContext = createContext<ItemContextType | null>(null);

export const ItemProvider: React.FC<React.ReactNode> = ({ children }) => {

    const [incompleteItems, addIncompleteItem, removeIncompleteItem] = useCollection();
    const [inProgressItems, addInProgressItem, removeInProgressItem] = useCollection();
    const [doneItems, addDoneItem, removeDoneItem] = useCollection();

    function transitionIncompleteItem (item: IToDoItem){
        removeIncompleteItem(item);
        addInProgressItem(item);
    }

    function transitionInProgressItem (item: IToDoItem){
        removeInProgressItem(item);
        addDoneItem(item);
    }



    return (
        <ItemContext.Provider value={
            {
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
                removeDoneItem,
            }}>
            {children}
        </ItemContext.Provider>
    );
};
