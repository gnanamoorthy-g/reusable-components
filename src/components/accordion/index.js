import React, { useState } from "react";
import PropTypes from 'prop-types';

import { DEFAULT_TITLE,DEFAULT_CONTENT } from "./utils";

const Accordion = ({ title= DEFAULT_TITLE, content = DEFAULT_CONTENT }) => {
    const [isOpened, setIsOpened] = useState(false);

    const onClick = () => {
        setIsOpened(prev => !prev);
    }

    return (
        <>
            <div id="accordion" className="accordion p-5 rounded border-black border-1 border-solid ">
                <div id="title" className="flex justify-between cursor-pointer" onClick={onClick}>
                    <div>{title}</div>
                    <div>
                    {
                        isOpened ?
                            <button><i className="fa-solid fa-angle-up"></i></button>
                            :
                            <button><i className="fa-solid fa-angle-down"></i></button>
                    }
                </div>
                </div>
                {isOpened ? <div id="content">{content}</div> : null}
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
