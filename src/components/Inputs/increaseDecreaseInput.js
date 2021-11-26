import React, { useEffect, useState } from 'react'
import { InputArrowLeftSVG, InputArrowRightSVG } from '../../assets/svg/icons'

const increaseDecreaseInput = ({ onValueChange }) => {
    const [currentValue, setCurrentValue] = useState(1)
    useEffect(() => {
        onValueChange(currentValue)
    }, [currentValue])
    const handleDecresaseValue = () => {
        if (currentValue > 1) {
            setCurrentValue(currentValue - 1)
        }
    }
    const handleIncreaseValue = () => {
        if (currentValue < 15) {
            setCurrentValue(currentValue + 1)
        }
    }
    return (
        <div className="flex items-center my-4">
            <button className="flex-1" onClick={handleDecresaseValue}>
                <InputArrowLeftSVG className="cursor-pointer h-10 m-auto" />
            </button>
            <div className="flex-1">
                <span className="text-89px font-bold select-none">
                    {currentValue}
                </span>
            </div>
            <button className="flex-1" onClick={handleIncreaseValue}>
                <InputArrowRightSVG className="cursor-pointer h-10 m-auto" />
            </button>
        </div>
    )
}

export default increaseDecreaseInput
