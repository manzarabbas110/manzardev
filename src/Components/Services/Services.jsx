import React from 'react'
import './Services.css'
import TopDataText from '../Sharedcomponents/TopDataText'
import Card from '../Sharedcomponents/Card'
import { GiGlobeRing } from 'react-icons/gi'
import { CgCodeSlash, CgUiKit, CgWebsite } from 'react-icons/cg'
import { FaMobile } from 'react-icons/fa'

const Services = () => {
    const cardDataServices = [
        {
            cardheading: "Web Design",
            carddesc: "Web development is a process of builing",
            cardicon: < CgWebsite />,
            cardReadMore: true
        },
        {
            cardheading: "Mobile App",
            carddesc: " intermidiate ",
            cardicon: < FaMobile />,
            cardReadMore: true
        },
        {
            cardheading: "UI/UX design",
            carddesc: "Ui/Ux design build.",
            cardicon: <CgUiKit/>,
            cardReadMore: true
        },
        {
            cardheading: "Graphics Design",
            carddesc: "Graphics design .",
            cardicon: < illustration.png />,
            cardReadMore: true
        }
    ]
    return (
        <div id='services'>
            <div>
                <TopDataText
                    topText="What I offer"
                    headingText="My Services"
                    descText="I am a frontend developer based in Karachi, Pakistan.I am a frontend developer based in Karachi, PakistanI am a frontend developer based in Karachi, Pakistan."
                />
            </div>


            <div className='about-me-bottom-cards-services'>
                {cardDataServices.map((item, index) => {
                    return (

                        <   Card
                            cardHeading={item.cardheading}
                            cardDescription={item.carddesc}
                            cardIcon={item.cardicon}
                            className="card-services"
                            cardReadMore={item.cardReadMore}


                        />

                    )
                })}
            </div>
        </div>
    )
}

export default Services