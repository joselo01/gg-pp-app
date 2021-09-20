import React from "react";

export const AccordionItem = ({ index, title, description }) => {
    return (
        <>
            <div className="accordion-item">
                <h2 className="accordion-header title" id={`header${index}`}>
                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target={`#item${index}`} aria-expanded="true" aria-controls="collapseOne">
                        {title}
                    </button>
                </h2>
                <div id={`item${index}`} className={`accordion-collapse collapse ${index === 0? 'show': ''}`} aria-labelledby={`header${index}`} data-bs-parent="#accordionExample">
                    <div className="accordion-body description">
                        <span>{description}</span>
                    </div>
                </div>
            </div>
        </>);
}