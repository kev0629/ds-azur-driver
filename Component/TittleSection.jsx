import React from 'react'

function TittleSection(props) {
    return (
        <>
            <div className='prestation-border'></div>
            <h1 className='beba-font prestation-title-main'>{props.mainTitle}</h1>
            <h2 className='prestation-title-secondary'>{props.secondaryTitle}</h2>
            <div className='prestation-border'></div>
        </>
    )
}

export default TittleSection
