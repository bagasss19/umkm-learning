import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

export default function carousel() {
    return (
        <>
            <Carousel showArrows={true}>
                <div>
                    <img src="https://www.bbva.com/wp-content/uploads/2018/04/equipo-startup-bbva-1-e1524492124593-1024x521.jpg" alt="test" />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src="https://www.warungdata.com/wp-content/uploads/2019/03/startup.png" alt="test"/>
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src="https://d26bwjyd9l0e3m.cloudfront.net/wp-content/uploads/2020/08/Data-Investasi-Startup-di-Indonesia-Featured.jpg" alt="test"/>
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
        </>
    )
}
