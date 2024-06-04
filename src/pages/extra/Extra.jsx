import { useState, useEffect } from "react";

export function CorAleatoria() {
    const [cor, setCor] = useState('#000000');

    useEffect(() => {
        document.body.style.backgroundColor = cor;
    }, [cor]);

    function mudarCor() {
        const cores = ['#FF0000', '#00FF00', '#0000FF', '#FFFF00'];
        const novaCor = cores[Math.floor(Math.random() * cores.length)];
        setCor(novaCor);
    }

    return (
        <>
            <p>Cor de Fundo: {cor}</p>
            <button onClick={mudarCor}>Mudar Cor</button>
        </>
    );
}

