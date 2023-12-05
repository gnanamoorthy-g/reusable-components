import React, { useState } from "react";
import PropTypes from 'prop-types';

import { DEFAULT_TITLE, DEFAULT_CONTENT } from "./utils";

const Accordion = ({ title = DEFAULT_TITLE, content = DEFAULT_CONTENT }) => {
    const [isOpened, setIsOpened] = useState(false);

    const onClick = () => {
        setIsOpened(prev => !prev);
    }

    return (
        <>
            <div id="accordion" className='accordion p-5'>
                <div id="title" className="flex justify-between cursor-pointer" onClick={onClick}>
                    <div>{title}</div>
                    <span>
                    <button className="icon-button rotate-icon" aria-label={isOpened ? 'Collapse' : 'Expand'}>
                        <i className={`fa-solid fa-angle-${isOpened ? 'up' : 'down'}`}></i>
                    </button>
                    </span>
                </div>
                <div id="content" className={`${isOpened ? 'open-content' : 'closed-content'}`}>{content}</div>
            </div>


        </>
    )
}

Accordion.propTypes = {
    title: PropTypes.oneOfType([
        PropTypes.node,
        PropTypes.element,
        PropTypes.elementType
    ]),
    content: PropTypes.oneOfType([
        PropTypes.node,
        PropTypes.element,
        PropTypes.elementType
    ]),
}

export default Accordion;
