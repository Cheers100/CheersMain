import styles from "./index.module.scss";


interface RestaurantCardProps {
  name: string;
  image: string;
}

const RestaurantCard: React.FC<RestaurantCardProps> = ({ name, image }) => {
  return (
    <div className={styles.restaurantCard}>
      <img src={image} alt={name} className={styles.restaurantImage} />
      <h3>{name}</h3>
    </div>
  );
};

export default RestaurantCard;