import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import styles from "./styles.module.scss"
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Button from "../../components/Button/index";
import { CarouselType } from "../../types/Carousel/CarouselType";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faInfoCircle } from "@fortawesome/free-solid-svg-icons";

const Carousel: React.FC<CarouselType> = ({ items, customSettings = {} }) => {
    const defaultSettings = {
        spaceBetween: 20,
        slidesPerView: "auto",
        autoplay: { delay: 3000, disableOnInteraction: false },
        breakpoints: {
            1024: { slidesPerView: 10 },
            768: { slidesPerView: 7 },
            480: { slidesPerView: 5 },
        },
        ...customSettings,
    };

    return (
        <div className={styles.container}>
            <Swiper modules={[Navigation, Pagination, Autoplay]} {...defaultSettings} className={styles.swiper}>
                {items.map((item, index) => (
                    <SwiperSlide key={index} className={styles.itemContainer}>
                        <div className={styles.item} >

                            <div className={styles.infoContainer} style={{ backgroundImage: `url(${item.image})` }}>
                                <div className={styles.textContainer}>
                                    <h3 className={styles.title}>{item.title}</h3>
                                    {/*
                                <p className={styles.description}>{item.description}</p>
                                */}
                                </div>
                                {item.buttonText && (
                                    <div className={styles.btnContainer}>
                                        <Button label={item.buttonText} />
                                    </div>
                                )}


                            </div>
                            <div className={styles.footer}>
                                <FontAwesomeIcon icon={faHeart} className={styles.icon} />
                                <FontAwesomeIcon icon={faInfoCircle} className={styles.icon} />
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Carousel;
