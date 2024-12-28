
import { Swiper, SwiperSlide } from 'swiper/react';
import '../../node_modules/swiper/swiper-bundle.min.css'
import { Pagination } from 'swiper/modules';
import img1 from '../../src/assets/home/slide1.jpg'
import img2 from '../../src/assets/home/slide2.jpg'
import img3 from '../../src/assets/home/slide3.jpg'
import img4 from '../../src/assets/home/slide4.jpg'
import img5 from '../../src/assets/home/slide5.jpg'
const Categori = () => {
    return (
        <Swiper

        slidesPerView={4}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper w-11/12 mx-auto mb-10"
      >
        <SwiperSlide>
            <img src={img1} alt="" />
            <h2 className='text-white text-center font-extrabold text-3xl -mt-20'>Salads</h2>
        </SwiperSlide>
        <SwiperSlide>
            <img src={img2} alt="" />
             <h2 className='text-white text-center font-extrabold text-3xl -mt-20'>Soups</h2>
        </SwiperSlide>
        <SwiperSlide>
            <img src={img3} alt="" />
             <h2 className='text-white text-center font-extrabold text-3xl -mt-20'>pizzas</h2>
        </SwiperSlide>
        <SwiperSlide>
            <img src={img4} alt="" />
             <h2 className='text-white text-center font-extrabold text-3xl -mt-20'>desserts</h2>
        </SwiperSlide>
        <SwiperSlide>
            <img src={img5} alt="" />
             <h2 className='text-white text-center font-extrabold text-3xl -mt-20'>Salads</h2>
        </SwiperSlide>
    </Swiper>
    );
};

export default Categori;