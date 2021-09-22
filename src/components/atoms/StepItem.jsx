import React from 'react'

export const StepItem = ({ item, selectedTab, index, handleStepChange }) => {
    return (
        <>
            {/* <li className="">
                <img src="https://i.imgur.com/VKSizY2.jpeg" alt="" />
                <span
                    className={`nav-link ${index === selectedTab ? 'active' : ''}`}
                    aria-current="page"
                    onClick={() => handleStepChange(index)}
                >
                    {item.name}
                </span>
            </li> */}

            <li className={`step ${index <= selectedTab ? 'active' : ''}`}>
                <div onClick={() => handleStepChange(index)}>
                    <img height="20" src="https://peopleshub.org/wp-content/uploads/2018/04/person-icon-white.png" alt="" />
                </div>
                {item.name}
            </li>

        </>
    )
}
