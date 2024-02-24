import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";


const Services = () => {
    const [services, setServices] = useState([]);

    useEffect( () =>{
        fetch('services.json')
        .then(res => res.json())
        .then(data => setServices(data));
    }, [])
    return (
        <div>
            <div className="text-center m-6">
                <h1 className="text-3xl font-semibold text-orange-600">Our Services</h1>
                <h1 className="text-3xl font-bold py-1">Our Service Area</h1>
                <p className="py-1">the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which don't look even slightly believable. </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                
                {
                    services.map(service => <ServiceCard 
                    key={service._id}
                    service={service}></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services;