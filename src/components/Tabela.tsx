import React from "react";
import Cliente from "../core/Cliente";
import { IconeEdicao, IconeLixo } from "./icones";

interface TabelaProps {
clientes: Cliente[]
clienteSelecionado?: (cliente: Cliente) => void;
clienteExcluido?: (cliente: Cliente) => void;
}

export default function Tabela(props: TabelaProps) {
    const exibirAcoes = props.clienteExcluido || props.clienteSelecionado

function renderizarCabecalho(){

    return (
        <tr>
        <th className="text-left p-4">Código</th>
        <th className="text-left p-4">Nome</th>
        <th className="text-left p-4">Idade</th>
        <th className="text-left p-4">Sexo</th>
        <th className="text-left p-4">Endereço</th>
        <th className="text-left p-4">Numero</th>
        <th className="text-left p-4">Canal</th>
        <th className="text-left p-4">Mes de Entrada</th>
        <th className="text-left p-4">Data da primeira Compra</th>
        <th className="text-left p-4">Indicaçao</th>
        {exibirAcoes ?<th className=" p-4">Ações</th> : false }
    </tr>
    )
}

function renderizarDados() {
    return props.clientes?.map((cliente, i) => {
        return (
            // eslint-disable-next-line react/jsx-key
            <tr key={cliente.id}
            className={`${i % 2 === 0 ? 'bg-purple-300' : 'bg-purple-200' }`}>
                <td className="text-left p-4 " >{cliente.id}</td>
                <td className="text-left p-4">{cliente.nome}</td>
                <td className="text-left p-4">{cliente.idade}</td>
                <td className="text-left p-4">{cliente.sexo}</td>
                <td className="text-left p-4">{cliente.endereço}</td>
                <td className="text-left p-4">{cliente.numero}</td>
                <td className="text-left p-4">{cliente.canal}</td>
                <td className="text-left p-4">{cliente.mesDeEntrada}</td>
                <td className="text-left p-4">{cliente.datadaPrimeiraCompra}</td>
                <td className="text-left p-4">{cliente.indicaçao}</td>
                {exibirAcoes ? renderizarAcoes (cliente) : false}
            </tr>
        )
    })
}

function renderizarAcoes(cliente: Cliente) {
    return(
        <td className="flex justify-center">
            {props.clienteSelecionado ? (
                <button  onClick={() => props.clienteSelecionado?.(cliente)}
                 className={`flex justify-center items-center text-green-600 rounded-full p-2 m-1 hover:bg-purple-50`}>
                    {IconeEdicao}
                    </button>
            ) : false}

             {props.clienteExcluido ? (

<button onClick={() => props.clienteExcluido?.(cliente)} className={`flex justify-center items-center text-red-600 rounded-full p-2 m-1 hover:bg-purple-50`}>
    {IconeLixo}
    </button>
       
             ) :false}
             </td>
    )
}

    return (
        <table className="w-full rounded-xl overflow-hidden">

            <thead className={` 
            text-gray-100
             bg-gradient-to-r from-purple-500 to-purple-800
             `}>
                {renderizarCabecalho()}
            </thead>

            <tbody>
                {renderizarDados()}
            </tbody>
            
           
        </table>

    )
}