import React, { useEffect, useState, useCallback } from 'react'
import { InputArrowLeftSVG, InputArrowRightSVG } from '../../assets/svg/icons'

const IncreaseDecreaseInput = ({ onValueChange, maxValue, disabled }) => {
    const [currentValue, setCurrentValue] = useState(1)

    useEffect(() => {
        onValueChange(currentValue)
    }, [currentValue])

    useEffect(() => {
        if (currentValue > maxValue && maxValue !== 0) {
            setCurrentValue(maxValue)
        }
    }, [maxValue])

    const handleDecresaseValue = useCallback(() => {
        if (currentValue > 1) {
            setCurrentValue(currentValue - 1)
        }
    }, [currentValue])

    const handleIncreaseValue = useCallback(() => {
        if (currentValue < maxValue) {
            console.log({ currentValue })
            setCurrentValue(currentValue + 1)
        }
    }, [maxValue, currentValue])
    return (
        <div className="flex items-center my-4">
            <button
                className="flex-1 disabled:opacity-50 transform active:scale-75"
                onClick={handleDecresaseValue}
                disabled={currentValue === 1 || disabled}
            >
                <InputArrowLeftSVG className="cursor-pointer h-10 m-auto " />
            </button>
            <div className="flex-1">
                <span className="text-89px font-bold select-none">
                    {disabled ? 0 : currentValue}
                </span>
            </div>
            <button
                disabled={currentValue === maxValue || disabled}
                className="flex-1 disabled:opacity-50 transform active:scale-75"
                onClick={handleIncreaseValue}
            >
                <InputArrowRightSVG className="cursor-pointer h-10 m-auto" />
            </button>
        </div>
    )
}

export default IncreaseDecreaseInput
