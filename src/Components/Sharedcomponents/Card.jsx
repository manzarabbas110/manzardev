import React from 'react'
import { CgCodeSlash } from 'react-icons/cg'
import './Card.css'

const Card = (props) => {


    return (
        <div className={props.className}>

            {props.latestWorkCard && (
                <div className='card-latest-work-parent'>

                    <div className='latest-work-image-parent'>
                        {props.image ? <img src={props.image} /> : null}
                    </div>

                    <div className='card-latest-work'>
                        <div>
                            <h2 className='latest-work-heading'>{props.latestWorkCardHeading}</h2>
                            <span className='latest-work-sub-heading'>{props.latestWorkSubHeadig}</span>
                        </div>

                        <span>{props.latestWorkIcon}</span>

                    </div>
                </div>
            )}






            <span>{props.cardIcon}</span>

            <h3>{props.cardHeading}</h3>

            <p>{props.cardDescription}</p>

            {props.cardReadMore ? <span>Read More</span> : ""}

        </div>
    )
}

export default Card