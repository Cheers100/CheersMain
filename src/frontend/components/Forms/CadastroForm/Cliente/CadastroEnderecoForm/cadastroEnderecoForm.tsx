import style from './cadastroEnderecoForm.module.scss';
import FormData from '../../../../../types/FormData/CadastroEnderecoForm';
import { useState, useEffect } from 'react';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil } from "@fortawesome/free-solid-svg-icons";

import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, Marker, useMapEvents, useMap } from 'react-leaflet';
import usePosition from '../../../../../hooks/usePosition';

interface FormProps {
    onSubmit: (data: FormData) => void;
}
const Form: React.FC<FormProps> = (props) => {
    const [formData, setFormData] = useState<FormData>({
        cep: "",
        logradouro: "",
        bairro: "",
        cidade: "",
        estado: "",
        numeroRes: null,
        complementoRes: "",
    });

    
    const {position, error} = usePosition()
    const [isEditing, setIsEditing] = useState(false);

    const fetchAddress = async (latitude: number, longitude: number) => {
        try {
            const response = await fetch(
                `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}&addressdetails=1`
            );
            const data = await response.json();

            if (data && data.address) {
                setFormData((prev) => ({
                    ...prev,
                    cep: data.address.postcode || "",
                    logradouro: data.address.road || "",
                    bairro: data.address.neighbourhood || "",
                    cidade: data.address.city || "",
                    estado: data.address.state || "",
                }));
            }
        } catch (error) {
            console.error("Erro ao buscar endereço:", error);
        }
    };

    useEffect(() => {
        if (position) {
            fetchAddress(position.latitude, position.longitude);
        }
    }, [position]);


    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        props.onSubmit(formData);
    };

    const LocationMarker = () => {
        const [position, setPosition] = useState<[number, number] | null>(null);
        const map = useMap();

        useEffect(() => {
            if (position) {
                map.setView(position, 13);
            }
        }, [position, map]);

        useMapEvents({
            click(e: { latlng: { lat: number; lng: number } }) {
                setPosition([e.latlng.lat, e.latlng.lng]);
            },
        });

        return position ? <Marker position={position}/> : null;
    };

    return (
        <form className={style.form} onSubmit={handleSubmit}>
            <section className={style.secaoMapa}>
                <div className={style.mapContainer}>
                    <MapContainer
                        center={position || [-14.235, -51.9253]}
                        zoom={13}
                        style={{ height: '300px', width: '100%' }}
                    >
                        <TileLayer
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        />
                        <LocationMarker />
                    </MapContainer>
                </div>
            </section>
            <section className={style.endereco}>
                {!isEditing ? (
                    <div className={style.enderecoPreview}>
                        <p>
                            <strong>Você está aqui?</strong><br />
                            {formData.logradouro}, {formData.bairro}, {formData.cidade} - {formData.estado}, {formData.cep}
                        </p>
                        <button
                            type="button"
                            className={style.editButton}
                            onClick={() => setIsEditing(true)}
                        >
                            <FontAwesomeIcon icon={faPencil} />
                        </button>
                    </div>
                ) : (
                    <div className={style.enderecoForm}>
                        <div className={style.inputGroup}>
                            <label htmlFor="logradouro">Logradouro</label>
                            <input
                                type="text"
                                name="logradouro"
                                value={formData.logradouro}
                                onChange={handleChange}
                            />
                        </div>
                        <div className={style.inputGroup}>
                            <label htmlFor="bairro">Bairro</label>
                            <input
                                type="text"
                                name="bairro"
                                value={formData.bairro}
                                onChange={handleChange}
                            />
                        </div>
                        <div className={style.inputGroup}>
                            <label htmlFor="cidade">Cidade</label>
                            <input
                                type="text"
                                name="cidade"
                                value={formData.cidade}
                                onChange={handleChange}
                            />
                        </div>
                        <div className={style.inputGroup}>
                            <label htmlFor="estado">Estado</label>
                            <input
                                type="text"
                                name="estado"
                                value={formData.estado}
                                onChange={handleChange}
                            />
                        </div>
                        <div className={style.inputGroup}>
                            <label htmlFor="cep">CEP</label>
                            <input
                                type="text"
                                name="cep"
                                value={formData.cep}
                                onChange={handleChange}
                            />
                        </div>
                        <button
                            type="button"
                            className={style.saveButton}
                            onClick={() => setIsEditing(false)}
                        >
                            Salvar
                        </button>
                    </div>
                )}


            </section>
            <div className={style.inputs1}>
                <div className={style.input}>
                    <label htmlFor="numeroRes">Número</label>
                    <input type="text"
                    placeholder='Informe o número da residência' />
                </div>
                <div className={style.input}>
                    <label htmlFor="complementoRes">Complemento</label>
                    <input type="text"
                    placeholder='Ex.: Casa, Apartamento' />
                </div>
            </div>
        </form>
    );
};

export default Form;
