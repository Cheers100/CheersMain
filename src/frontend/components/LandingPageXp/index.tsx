import styles from "./index.module.scss"
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import usePosition from "../../hooks/usePosition";

const LandingPageXp = () =>{
    
    const position = usePosition()?.position

    const initialPosition: [number, number] = position ? [position.latitude, position.longitude] : [-23,-46]

    return(
        <>
            <div className={styles.main}>
                <section className={styles.search}>
                   
                    <input type="text" name="search" id="search" />
                    <select name="searchR" id="searchR"></select>
                </section>
                <section className={styles.map}>
                <MapContainer
                        center={initialPosition}
                        zoom={13}
                        style={{ height: "400px", width: "100%" }} // Tamanho do mapa
                    >
                        {/* Camada do Mapa */}
                        <TileLayer
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            attribution="&copy; OpenStreetMap contributors"
                        />
                        {/* Um marcador de exemplo */}
                        <Marker position={initialPosition}>
                            <Popup>
                                Aqui está o seu marcador inicial! 🚀
                            </Popup>
                        </Marker>
                    </MapContainer>
                </section>
            </div>
        </>
    )

}

export default LandingPageXp