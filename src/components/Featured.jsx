import React from 'react';
import img1 from '../../src/assets/home/featured.jpg'
import SectionHeading from './sectionHeading';
const Featured = () => {
    return (
        // <div  style={{
        //     backgroundImage: "url(https://i.ibb.co/47HBk1d/featured.jpg)",
        //   }}
        //   className='my-10'
          
        //   >
             
        //    <SectionHeading
        //         subHeading={"From Our Menu"}
        //         heading={"Popular Items"}
        //     >
        //    </SectionHeading>
        //    <div className='md:flex mt-10 justify-center items-center gap-8 w-11/12 mx-auto'>
        //     <div>
        //         <img className='mb-10' src={img1} alt="" />
        //     </div>
        //     <div className='text-white'>
        //         <p>Dec 31, 2024</p>
        //         <p>Where can i get some?</p>
        //         <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas, consequatur laborum perferendis quia aspernatur quidem modi eveniet, nesciunt veniam similique eius voluptates asperiores est autem.</p>
        //     </div>
        //    </div>
        // </div>

        <div 
        style={{
            backgroundImage: "url(https://i.ibb.co/47HBk1d/featured.jpg)",
            backgroundColor: "rgba(0, 0, 0, 0.5)", 
            backgroundBlendMode: "overlay", }}
        className='p-10 my-10 bg-cover bg-fixed bg-center'
    >
       <SectionHeading
            className='mt-10'
            subHeading={"From Our Menu"}
            heading={"Popular Items"}
        >
       </SectionHeading>
       <div className='md:flex mt-10 justify-center items-center gap-8 w-11/12 mx-auto'>
        <div>
            <img className='mb-10' src={img1} alt="" />
        </div>
        <div className='text-white'>
            <p className='text-2xl font-bold'>Dec 31, 2024</p>
            <p className='text-lg font-bold'>Where can i get some?</p>
            <p className='text-xl font-semibold'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas, consequatur laborum perferendis quia aspernatur quidem modi eveniet, nesciunt veniam similique eius voluptates asperiores est autem.</p>
            <button className='btn btn-outline border-0 mt-4 text-white border-b-4'>Read More</button>
        </div>
       </div>
    </div>
    );
};

export default Featured;