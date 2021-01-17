
export interface IToDoItem{
    id: number
    title: string,
    isEdit?: boolean
}

export interface ToDoItemProps {
    item: IToDoItem,
    addItem: (item: IToDoItem) => void,
    removeItem: (item: IToDoItem) => void
}

export interface ToDoListProps {
    title: string,

}