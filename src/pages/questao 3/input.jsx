import { useState } from "react";

export function Input({name, type, onChange}) {
    return (
        <input
            type={type}
            name={name}
            onChange={onChange}
        />
    )
}

export function Button({children, onClick}) {
    return (
        <button
            onClick={onClick}
            style={{
                textAlign: 'center',
            }}
        >
            {children}
        </button>
    )
}

export function Form() {
    const [inputText, setInputText] = useState('')
    const [inputNumber, setInputNumber] = useState(0)

    function handleClick(event) {
        event.preventDefault()
        console.log(`Input Text: ${inputText}
                    \nInput Number: ${inputNumber}`)
    }

    return (
        <form onSubmit={handleClick}>
            <Input
                name="inputText"
                type="text"
                onChange={(e) => setInputText(e.target.value)}
            />
            <div style={{ marginTop: '1em' }}>
            <Input
                name="inputNumber"
                type="number"
                onChange={(e) => setInputNumber(e.target.value)}
            />
            </div>
            <div style={{ marginTop: '1em' }}>
                <Button
                    type="submit"
                >
                    Enviar
                </Button>
            </div>
        </form>
    )
}


