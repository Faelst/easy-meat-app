import React, { useState } from 'react'
import Botao from '../components/Botao'
import Formulario from '../components/Formulario'
import Layout from '../components/Layout'
import Tabela from '../components/Tabela'
import Cliente from '../core/Cliente'
import styles from '../styles/Home.module.css'

export default function Home() {

const [cliente, setCliente ] = useState<Cliente>(Cliente.vazio())
  const [visivel, setVisivel] = useState<'tabela' | 'form'>('tabela')

  const clientes= [
    new Cliente( 'Ana maria maria de souza', 34, 'masculino', 'Rua Antonio jose de gomes', 1, 'faceebok',  0,  19, 'Marcos','1' ),
    new Cliente( 'Ana P', 34, 'masculino', 'Rua A', 1, 'faceebok', 0,  20, 'Marcos', '2'),
    new Cliente( 'Ana C', 34, 'masculino', 'Rua A', 1, 'faceebok', 0,  21, 'Marcos', '3'),
    new Cliente( 'Ana J', 34, 'masculino', 'Rua A', 1, 'faceebok',  0,  22, 'Marcos','4' ),
  ]

   function clienteSelecionado(cliente: Cliente) {
    setCliente(cliente)
    setVisivel('form')

    console.log(cliente.nome)
   }

   function clienteExcluido(cliente: Cliente) {

    console.log(`Excluir... ${cliente.nome}`)
   }
    function novoCliente() {
      setCliente(Cliente.vazio())
      setVisivel('form')
    }
    function salvarCliente(cliente: Cliente) {
      console.log (cliente)
      setVisivel('tabela')
    }
  

  return (
    <div className={`
    flex justify-center items-center h-screen bg-gradient-to-r
    from-blue-500 to-purple-500
    text-white
    `}>
    <Layout titulo= "Cadastro Simples">
      {visivel === 'tabela' ? (
        <>
      <div className=" flex justify-end" >
        <Botao cor="green" className="mb-4"
        onClick={novoCliente}>
          Novo Cliente
          </Botao> 
         </div>
      
    <Tabela clientes={clientes} 
     clienteSelecionado={clienteSelecionado}
     clienteExcluido={clienteExcluido}
     /> 
     </>
        
      ):(   
        <Formulario
         cliente={cliente}
         clienteMudou={salvarCliente}
         cancelado={() => setVisivel('tabela') }
         />
         
)}
      
    
    </Layout>
    </div>
  )
}
