export const returnTextSizeByScreenWidth = ({ base, sm, md, lg, xl, xxl }) => {
    const _base = base ? `text-${base}` : ''
    const _sm = sm ? `sm:text-${sm}` : ''
    const _md = md ? `md:text-${md}` : ''
    const _lg = lg ? `lg:text-${lg}` : ''
    const _xl = xl ? `xl:text-${xl}` : ''
    const _xxl = xxl ? `2xl:text-${xxl}` : ''

    return { base: _base, sm: _sm, md: _md, lg: _lg, xl: _xl, xxl: _xxl }
}
