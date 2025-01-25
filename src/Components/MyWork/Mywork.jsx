import React from 'react';
import './Mywork.css';
import TopDataText from '../Sharedcomponents/TopDataText';
import Card from '../Sharedcomponents/Card';
import { BsArrowBarRight } from 'react-icons/bs';
// Import your images
// import image1 from '../../assets/download.jpeg';
// import image2 from '../../assets/download(1).jpeg';
// import image3 from '../../assets/download(2).jpeg';
// import image4 from '../../assets/images.jpeg';

const MyWork = () => {
    const cardDataLatestWork = [
        {
            image: image1,
            latestWorkCard: true,
            latestWorkCardHeading: "Web Development"
        },
        {
            latestWorkCard: true,
            image: image2,
            latestWorkCardHeading: "App Development"
        },
        {
            latestWorkCard: true,
            image: image3,
            latestWorkCardHeading: "Mobile Apps"
        },
        {
            latestWorkCard: true,
            image: image4,
            latestWorkCardHeading: "Graphics Designing"
        }
    ];

    return (
        <div id='mywork'>
            <div>
                <TopDataText
                    topText="My Portfolio"
                    headingText="My Latest Work"
                    descText="Welcome to my web portfolio. Explore my latest projects!"
                />
            </div>

            <div className='about-me-bottom-cards-services'>
                {cardDataLatestWork.map((item, index) => (
                    <Card
                        key={index} // Ensure unique key for each element
                        image={item.image}
                        latestWorkCard={item.latestWorkCard}
                        latestWorkCardHeading={item.latestWorkCardHeading}
                        latestWorkSubHeading="Web Design"
                        latestWorkIcon={<BsArrowBarRight />}
                    />
                ))}
            </div>
        </div>
    );
}

export default MyWork;
