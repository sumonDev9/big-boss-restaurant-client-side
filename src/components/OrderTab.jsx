// import FoodCard from './FoodCard';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import 'swiper/css/pagination';
// import { Pagination } from 'swiper/modules';
// const OrderTab = ({itmes}) => {

//     const pagination = {
//         clickable: true,
//         renderBullet: function (index, className) {
//           return '<span class="' + className + '">' + (index + 1) + '</span>';
//         },
//       };
    

//     return (
//         <div >
        
//             <Swiper
//         pagination={pagination}
//         modules={[Pagination]}
//         className="mySwiper"
//       >
//         <SwiperSlide>
//       <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
//       {
//            itmes.map(item => <FoodCard key={item._id} item={item}></FoodCard>)
//         }
//       </div>
//         </SwiperSlide>
//       </Swiper>
//         </div>
//     );
// };

// export default OrderTab;

import FoodCard from './FoodCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

const OrderTab = ({ itmes }) => {
    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + '</span>';
        },
    };

    // Divide items array into chunks of 6
    const chunkItems = (array, size) => {
        const result = [];
        for (let i = 0; i < array.length; i += size) {
            result.push(array.slice(i, i + size));
        }
        return result;
    };

    const chunkedItems = chunkItems(itmes, 6);

    return (
        <div className="relative">
            <Swiper
                pagination={pagination}
                modules={[Pagination]}
                className="mySwiper"
                style={{
                    paddingBottom: '50px', // Ensure enough space for pagination bullets
                }}
            >
                {chunkedItems.map((chunk, index) => (
                    <SwiperSlide key={index}>
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                            {chunk.map(item => (
                                <FoodCard key={item._id} item={item}></FoodCard>
                            ))}
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default OrderTab;
