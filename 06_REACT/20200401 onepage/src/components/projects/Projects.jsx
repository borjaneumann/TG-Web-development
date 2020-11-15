import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import gallery_00 from "../home/desierto_00.jpg"
import gallery_01 from "../home/desierto_01.jpg"
import gallery_04 from "../home/desierto_04.jpg"
import gallery_05 from "../home/desierto_05.jpg"
import gallery_06 from "../home/desierto_06.jpg"
import gallery_07 from "../home/desierto_07.jpg"
import gallery_08 from "../home/desierto_08.jpg"
import '../projects/Projects.css'

const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1324 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1324, min: 850 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 850, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
};

function Projects(){
    return(
        <div className='projects-carousel padding' id='projects'>
            <h3>Gallery</h3>
            <Carousel
                swipeable={false}
                draggable={false}
                showDots={true}
                responsive={responsive}
                ssr={true} // means to render carousel on server-side.
                infinite={true}
                // autoPlay={this.props.deviceType !== "mobile" ? true : false}
                autoPlaySpeed={1000}
                keyBoardControl={true}
                customTransition="all .5"
                transitionDuration={500}
                containerClass="carousel-container"
                removeArrowOnDeviceType={["tablet", "mobile"]}
                // deviceType={this.props.deviceType}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px carousel-item-size"

                >
            
                <div><img className='carousel-img' src={gallery_00} alt="jkl"/></div>
                <div><img className='carousel-img' src={gallery_01} alt="jkl"/></div>
                <div><img className='carousel-img' src={gallery_04} alt="jkl"/></div>
                <div><img className='carousel-img' src={gallery_05} alt="jkl"/></div>
                <div><img className='carousel-img' src={gallery_06} alt="jkl"/></div>
                <div><img className='carousel-img' src={gallery_07} alt="jkl"/></div>
                <div><img className='carousel-img' src={gallery_08} alt="jkl"/></div>
                
        
            </Carousel>
        </div>
    )
}


export default Projects;
