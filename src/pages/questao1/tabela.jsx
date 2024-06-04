import { useState } from "react";

export function Tabela () {

    const [tabela, setTabela] = useState([]);
    const [novaTabela, setNovaTabela] = useState('');

    function adicionarTabela() {
        if(novaTabela.trim() !== ''){
            const novaEntrada ={
                id: tabela.length +1,
                nome: novaTabela,
            };
            setTabela([...tabela, novaEntrada]);
            setNovaTabela("");
        }
        
    }

    return (
        <>
            <h1>Lista</h1>

            <div>
                <ul>
                    {tabela.map((tabela) =>(
                        <li key={tabela.id}>{tabela.nome}</li>
                    ))}
                </ul>
                <input 
                    type="text"
                    value={novaTabela}
                    onChange={(e) => setNovaTabela(e.target.value)}
                    placeholder="Digite um novo conteudo na tabela"
                />
                <br />
                <br />
                <button onClick={adicionarTabela}>Adicionar</button>
            </div>
        </>
    )
}
