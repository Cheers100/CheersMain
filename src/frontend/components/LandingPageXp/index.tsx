import styles from "./index.module.scss";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import usePosition from "../../hooks/usePosition";

const LandingPageXp = () => {
    const position = usePosition()?.position;

    const initialPosition: [number, number] = position
        ? [position.latitude, position.longitude]
        : [-23, -46]; // Posição padrão

    return (
        <div className={styles.main}>
            <section className={styles.map}>
                <div className={styles.search}>
                    <h1>Encontre o seu rolê ideal</h1>
                    <input type="text" name="search" id="search" placeholder="Digite aqui..." />
                    <select name="searchR" id="searchR">
                        <option value="">Selecione</option>
                    </select>
                </div>
                <div className={styles.mapContainer}>
                    <MapContainer
                        className={styles.leafletContainer}
                        center={initialPosition}
                        zoom={13}
                        style={{ height: "100%", width: "100%" }}
                    >
                        <TileLayer
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            attribution="&copy; OpenStreetMap contributors"
                        />
                        <Marker position={initialPosition}>
                            <Popup>Aqui está o seu marcador inicial! 🚀</Popup>
                        </Marker>
                    </MapContainer>
                </div>
            </section>
        </div>
    );
};

export default LandingPageXp;
