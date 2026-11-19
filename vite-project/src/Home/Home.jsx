import { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCube, Mousewheel, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/effect-cube'
import 'swiper/css/pagination'
import Home_sec1 from '../components/home_sec1'
import Home_sec2 from '../components/home_sec2'
import Home_sec3 from '../components/home_sec3'
import Home_sec4 from '../components/home_sec4'
import Home_sec5 from '../components/home_sec5'
import Footer from '../components/footer'

export default function Page1() {
    const swiperRef = useRef(null)

    const goToSlide = (index) => {
        if (swiperRef.current) {
            swiperRef.current.slideTo(index)
        }
    }

    return (
        <>
            <Swiper
                onSwiper={(swiper) => {
                    swiperRef.current = swiper
                }}
                direction='vertical'
                effect={'cube'}
                grabCursor={false}
                mousewheel={true}
                cubeEffect={{
                    shadow: false,
                    slideShadows: false,
                    shadowOffset: 20,
                    shadowScale: 0.94,
                }}
                pagination={{ clickable: true }}
                modules={[EffectCube, Pagination, Mousewheel]}
                className='mySwiper'
            >
                <SwiperSlide>
                    <Home_sec1 onNavigate={goToSlide} />
                </SwiperSlide>
                <SwiperSlide>
                    <Home_sec2 />
                </SwiperSlide>
                <SwiperSlide>
                    <Home_sec3 />
                </SwiperSlide>
                <SwiperSlide>
                    <Home_sec4 />
                </SwiperSlide>
                <SwiperSlide>
                    <Home_sec5 />
                </SwiperSlide>
                <SwiperSlide>
                    <Footer onNavigate={goToSlide} />
                </SwiperSlide>
            </Swiper>
        </>
    )
}