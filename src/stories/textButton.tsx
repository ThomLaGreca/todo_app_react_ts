import React from 'react';
import './textButton.css';

export interface TextButtonProps {
    /**
     * The displayed text for the button.
     */
    text: string;
    /**
     * The on click handler
     */
    onClick: () => void;
    /**
 * What background color to use
 */
    backgroundColor?: string;
}

export const TextButton: React.FC<TextButtonProps> = ({ text, onClick }) => {
    return (
        <button
            type="button"
            className="toDoListAddItemButton"
            onClick={() => onClick()}>{text}
        </button>

    )

}

