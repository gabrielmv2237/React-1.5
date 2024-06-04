import { useState } from 'react'
import './App.css'
import { Tabela } from '../src/pages/questao1/tabela'
import { Relogio } from '../src/pages/questao2/relogio'
import { Form } from '../src/pages/questao 3/input'
import { Consumo } from '../src/pages/questao 4/consumo'
import { CorAleatoria } from '../src/pages/extra/Extra'

function App() {
  const [contador, setContador] = useState(0)

  function contar() {
    setContador(contador + 1)
  }

  return (
    <>
      <h1>Questão 1</h1>
      <Tabela/>
      <h1>Questão 2</h1>
      <Relogio/>
      <h1>Questão 3</h1>
      <Form/>
      <h1>Questão 4</h1>
      <Consumo/>
      <h1>Extra</h1>
      <CorAleatoria/>
    </>
  )
}

export default App


