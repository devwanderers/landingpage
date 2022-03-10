import React from 'react'
import { cls } from './../../services/helpers'

export const LineWrapper = ({
    children,
    className,
    side = 'left',
    borderWidth = '100%',
    borderHeight = '100%',
    decorationBottom = '0',
    decorationHeight = '5rem',
}) => {
    return (
        <div
            className={cls(
                `w-full max-h-full flex flex-grow relative
                ${className}`
            )}
        >
            <div
                className={cls(
                    `${
                        side === 'left' ? 'lg:pl-14' : 'lg:pr-14'
                    } pt-2 lg:pt-10 `
                )}
            >
                {children}
            </div>
            <div
                className={cls(
                    `absolute top-0  border-l border-blue-4 border-solid ${
                        side === 'left' ? 'left-0' : 'right-0'
                    }`
                )}
                style={{ height: borderHeight }}
            >
                <div className="relative h-full bg-red-500">
                    <div
                        className={cls(
                            `absolute border-l-4 -mb-1px border-solid border-primary
                            ${side === 'left' ? 'left-0' : 'right-0'}
                            ${side === 'left' ? '-ml-1' : '-mr-1'}
                            `
                        )}
                        style={{
                            backgroundColor: 'green',
                            bottom: decorationBottom,
                            height: decorationHeight,
                        }}
                    ></div>
                </div>
            </div>
            <div
                className={cls(`absolute top-0  border-t border-blue-4`)}
                style={{ width: borderWidth }}
            ></div>
        </div>
    )
}
