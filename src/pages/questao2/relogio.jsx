import { useState, useEffect } from "react";

export function Relogio() {
    const [hora, setHora] = useState(new Date());

    useEffect(() => {
        const intervalo = setInterval(() => {
            setHora(new Date());
        }, 1000);

        return () => clearInterval(intervalo);
    }, []);

    const horas = hora.getHours().toString().padStart(2, '0');
    const minutos = hora.getMinutes().toString().padStart(2, '0');
    const segundos = hora.getSeconds().toString().padStart(2, '0');

    return (
        <div>
            <h1>{horas}:{minutos}:{segundos}</h1>
        </div>
    );
}



