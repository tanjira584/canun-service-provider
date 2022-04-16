import { useEffect, useState } from "react";

const useServices = () => {
    const [services, setServices] = useState([]);
    const [ser, setDefault] = useState({});
    useEffect(() => {
        fetch("services.json")
            .then((res) => res.json())
            .then((data) => {
                setServices(data);
                const defaultService = data.find((service) => service.id === 1);
                setDefault(defaultService);
            });
    }, []);

    return [services, ser];
};

export default useServices;
