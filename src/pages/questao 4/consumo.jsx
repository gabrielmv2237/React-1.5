import { useState} from "react";
export function Consumo() {
    const [dados, setDados] = useState([
        {id: 1, nome: 'Celular'},
        {id: 2, nome: 'Tv'},
        {id: 3, nome: 'Monitor'},
        {id: 4, nome: 'Minigame'},
        {id: 5, nome: 'Cadeira'},
        {id: 6, nome: 'Microfone'},
        {id: 7, nome: 'Gabinete'},
        {id: 8, nome: 'Memoria Ram'},
    ]);

    const [busca, setBusca] = useState('');

    function handleChange(event) {
        setBusca(event.target.value);
    }

    const filtrados = dados.filter(item => item.nome.toLowerCase().includes(busca.toLowerCase()));

    return (
        <div>
            <input
                type="text"
                value={busca}
                onChange={handleChange}
                placeholder="Digite aqui para filtrar..."
            />
            <ul>
                {
                    filtrados.map(item => (
                        <li key={item.id}>
                            {item.nome}
                        </li>
                    ))
                }
            </ul>
        </div>
    );
}
