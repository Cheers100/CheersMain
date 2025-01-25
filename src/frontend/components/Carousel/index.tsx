import styles from './styles.module.scss'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from '../Button';
import { CarouselType } from '../../types/Carousel/CarouselType';

const Carousel:React.FC<CarouselType> = ({ items, customStyles, customSettings }) => {
    const defaultSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    const settings = { ...defaultSettings, ...customSettings };

    return (
        <div className={`${styles.container} ${customStyles?.container}`}>
            <Slider {...settings}>
                {items.map((item, index) => (
                    <div key={index} className={`${styles.itemContainer} ${customStyles?.itemContainer}`}>
                        <div className={`${styles.item} ${customStyles?.item}`}>
                            {item.icon ? (
                                <div className={`${styles.icon} ${customStyles?.icon}`}>
                                    <FontAwesomeIcon icon={item.icon} />
                                </div>
                            ) : (
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className={`${styles.img} ${customStyles?.img}`}
                                />
                            )}

                            <div className={styles.infoContainer}>

                                <div className={styles.textContainer}>
                                    <h3 className={`${styles.title}  ${customStyles?.title}`}>{item.title}</h3>
                                    <p className={`${styles.description} ${customStyles?.description}`}>{item.description}</p>
                                </div>

                                {item.buttonText && (
                                    <div className={styles.btnContainer}>
                                        <Button label={item.buttonText} />
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
}

export default Carousel