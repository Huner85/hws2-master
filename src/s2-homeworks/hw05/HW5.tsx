import React, { useState } from 'react'

const HW5 = () => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div id="hw5-burger-menu">
            <button id="hw5-menu-button" onClick={() => setIsOpen(!isOpen)}>
                ☰
            </button>

            {isOpen && (
                <div id="hw5-menu">
                    <a href="#hw12">HW12</a>
                </div>
            )}
        </div>
    )
}

export default HW5

