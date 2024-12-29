import React, { useEffect, useState } from 'react';
import SectionHeading from './sectionHeading';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import '../../node_modules/swiper/swiper-bundle.min.css'
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css'
const Testimonial = () => {
    const [review, setReview] = useState([])
    useEffect(() => {
        fetch('reviews.json')
        .then(res => res.json())
        .then(data => setReview(data))
    }, [])
    return (
        <div className='w-11/12 mx-auto'>
        <SectionHeading
            className='mt-10'
            subHeading={"---What Our Clients Say---"}
            heading={"TESTIMONIALS"}
        >
       </SectionHeading>
       <div className='my-10'>
       <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        
        {
            review.map(review => <SwiperSlide key={review._id}>
                <div className='mx-24 my-10 space-y-4 text-center'>
                    <Rating
                        style={{ maxWidth: 180 }}
                        value={review.rating}
                        readOnly
                        className='mx-auto'
                    />
                    <p className='text-[#444444] text-xl'>{review.details}</p>
                    <h3 className='text-[#CD9003] text-3xl'>{review.name}</h3>
                </div>
            </SwiperSlide>)
        }
      </Swiper>
       </div>
        </div>
    );
};

export default Testimonial;