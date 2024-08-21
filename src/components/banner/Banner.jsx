import slider1 from '../../assets/ban1.jpg'
import slider2 from '../../assets/ban2.jpg'
import slider3 from '../../assets/ban3.jpg'
import slider4 from '../../assets/ban4.jpg'


// Import Swiper styles
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/bundle";
import { Autoplay, Pagination } from 'swiper/modules';


const Banner = () => {
    return (
        <div className=''>
            <Swiper
                className=''
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                // navigation={true}
                modules={[Autoplay, Pagination]}
                
            >
                <SwiperSlide>
                    <img src={slider1} className='w-full max-h-[80vh] rounded-2xl' alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slider3} className='w-full max-h-[80vh] rounded-2xl' alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slider2} className='w-full max-h-[80vh] rounded-2xl' alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slider4} className='w-full max-h-[80vh] rounded-2xl' alt="" />
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Banner;