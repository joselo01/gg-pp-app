import React from 'react'

export const TabItem = ({item,selectedTab, index, handleTabChange}) => {
    return (
        <li className="nav-item">
            <span 
            className={`nav-link ${index===selectedTab ? 'active': ''}`} 
            aria-current="page"
            onClick={()=>handleTabChange(index)}
            >
                {item.name}
            </span>
        </li>
    )
}
