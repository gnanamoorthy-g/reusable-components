import React, { useEffect, useState } from "react";
import {isElementActive } from '../../utilities/domUtilFns.ts';
import { KEYS } from '../../utilities/a11yUtils.ts'
import PropTypes from 'prop-types';


import { DEFAULT_TITLE, DEFAULT_CONTENT } from "./utils";

const Accordion = ({ title = DEFAULT_TITLE, content = DEFAULT_CONTENT }) => {
    const [isOpened, setIsOpened] = useState(false);

    const toggleAccordion = () => {
        setIsOpened(prev => !prev);
    }

    useEffect(()=>{
        const containerDiv = document.getElementById('accordion');

        containerDiv.addEventListener('click',()=>{
            containerDiv.focus();
        });

        containerDiv.addEventListener('keydown',(event)=>{
            const isActive = isElementActive(containerDiv)
            if (isActive && (event.key === KEYS.ENTER || event.key === KEYS.SPACE)) {
                toggleAccordion();
            }
        });
    },[]);


    return (
        <>
            <div id="accordion" className='accordion p-5' tabIndex='1'>
                <div id="title" className="flex justify-between cursor-pointer" onClick={toggleAccordion}>
                    <h2 className="text-xl mb-2">{title}</h2>
                    <span>
                    <button className="" aria-label={isOpened ? 'Collapse' : 'Expand'} tabIndex='-1'>
                        <i className={`fa-solid fa-angle-up ${isOpened ? 'fa-angle-up rotate-up' : 'fa-angle-down rotate-down'}`}></i>
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
