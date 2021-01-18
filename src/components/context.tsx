import React, { createContext } from 'react';
import { useCollection } from './_hooks';
import { IToDoItem } from './_types';

export interface ItemContextType{
    incompleteItems: IToDoItem[],
    addIncompleteItem: (item: IToDoItem) => void,
    removeIncompleteItem: (item: IToDoItem) => void,
    inProgressItems: IToDoItem[],
    addInProgressItem: (item: IToDoItem) => void,
    removeInProgressItem: (item: IToDoItem) => void,
    doneItems: IToDoItem[],
    addDoneItems: (item: IToDoItem) => void,
    removeDoneItems: (item: IToDoItem) => void,
}

export const ItemContext = createContext<ItemContextType | null>(null);

export const ItemProvider: React.FC<React.ReactNode> = ({ children }) => {

    const [incompleteItems, addIncompleteItem, removeIncompleteItem] = useCollection();
    const [inProgressItems, addInProgressItem, removeInProgressItem] = useCollection();
    const [doneItems, addDoneItems, removeDoneItems] = useCollection();


    return (
        <ItemContext.Provider value={
            {
                incompleteItems,
                addIncompleteItem,
                removeIncompleteItem,
                inProgressItems,
                addInProgressItem,
                removeInProgressItem,
                doneItems,
                addDoneItems,
                removeDoneItems,
            }}>
            {children}
        </ItemContext.Provider>
    );
};
