import React, { useEffect, useState } from 'react'
import { InputArrowLeftSVG, InputArrowRightSVG } from '../../assets/svg/icons'

const increaseDecreaseInput = ({ onValueChange }) => {
    const [currentValue, setCurrentValue] = useState(0)
    useEffect(() => {
        onValueChange(currentValue)
    }, [currentValue])
    const handleDecresaseValue = () => {
        if (currentValue > 0) {
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
            <div className="flex-1">
                <InputArrowLeftSVG
                    className="cursor-pointer h-10 m-auto"
                    onClick={handleDecresaseValue}
                />
            </div>
            <div className="flex-1">
                <span className="text-89px font-bold">{currentValue}</span>
            </div>
            <div className="flex-1">
                <InputArrowRightSVG
                    className="cursor-pointer h-10 m-auto"
                    onClick={handleIncreaseValue}
                />
            </div>
        </div>
    )
}

export default increaseDecreaseInput
