import { useState, useEffect } from "react";

const usePosition = () => {
    const [position, setPosition] = useState<{ latitude: number; longitude: number } | null>(null);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const handleSuccess = (location: GeolocationPosition) => {
            const { latitude, longitude } = location.coords;
            setPosition({ latitude, longitude });
        };

        const handleError = (error: GeolocationPositionError) => {
            setError(error.message);
        };

        navigator.geolocation.getCurrentPosition(handleSuccess, handleError);
    }, []);

    return { position, error };
};

export default usePosition;