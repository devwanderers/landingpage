import React from 'react'
import PropTypes from 'prop-types'

const TextSizes = ['xs', 'sm', 'base', 'lg', 'xl', '2xl', '3xl', '4xl', '5xl']

const Paragraph = ({ content, className, xs, md, lg, xl, xxl }) => {
    const _xs = xs ? `xs:text-${xs}` : ''
    const _md = md ? `md:text-${md}` : ''
    const _lg = lg ? `lg:text-${lg}` : ''
    const _xl = xl ? `xl:text-${xl}` : ''
    const _xxl = xxl ? `2xl:text-${xxl}` : ''

    return (
        <div
            className={`text-blue-2  ${className} ${_xs} ${_md} ${_lg} ${_xl}  ${_xxl}`}
        >
            {content}
        </div>
    )
}

Paragraph.propTypes = {
    content: PropTypes.oneOfType([PropTypes.string, PropTypes.elementType]),
    className: PropTypes.string,
    xs: PropTypes.oneOf(TextSizes),
    md: PropTypes.oneOf(TextSizes),
    lg: PropTypes.oneOf(TextSizes),
    xl: PropTypes.oneOf(TextSizes),
    xxl: PropTypes.oneOf(TextSizes),
}

export default Paragraph
