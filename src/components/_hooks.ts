
import { useState } from 'react';
import { IToDoItem } from './_types';

export function useCollection(): [IToDoItem[], (item: IToDoItem) => void, (item: IToDoItem) => void] {

    const [collection, setCollection] = useState<IToDoItem[]>([])

    const addItem = (item: IToDoItem) => {
        let items = collection.filter((t) => t.id !== item.id);
        let newItems = [...items, item];
        setCollection(newItems);
    }

    const removeItem = (item: IToDoItem) => {
        let items = collection.filter((t) => t.title !== item.title);
        setCollection(items);
    }

    return [collection, addItem, removeItem]
}
