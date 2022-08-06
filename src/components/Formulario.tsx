import { useState } from "react";
import Cliente from "../core/Cliente";
import Botao from "./Botao";
import Entrada from "./Entrada";

interface FormularioProps {
    cliente: Cliente
    clienteMudou?: (cliente: Cliente) => void
    cancelado?: () => void

}

export default function Formulario(props: FormularioProps) {
    const id = props.cliente?.id 
const [nome, setNome] = useState( props.cliente?.nome ?? '')
const [idade, setIdade] = useState( props.cliente?.idade ?? 0)
const [sexo, setSexo] = useState( props.cliente?.sexo ?? '')
const [endereço, setEndereço] = useState( props.cliente?.endereço ?? '')
const [numero, setNumero] = useState( props.cliente?.numero ?? 0)
const [canal, setCanal] = useState( props.cliente?.canal?? '')
const [mesDeEntrada, setMesDeEntrada] = useState( props.cliente?.mesDeEntrada?? 0)
const [dataDaPrimeiraCompra, setDataDaprimeiraCompra] = useState( props.cliente?.datadaPrimeiraCompra ?? 0)
const [indicaçao, setIndicaçao] = useState( props.cliente?.indicaçao ?? '')

 return(
<div>
    {id ? (
     <Entrada
     somenteLeitura
      texto="Código"  
      valor={id}
      className="mb-0" />
    ) : false}

     <Entrada 
     texto="Nome" 
      valor={nome}
      valorMudou={setNome}
      className="mb-0" />

     <Entrada 
     texto="Idade"
      valor={idade}
      valorMudou={setIdade}
      tipo="number" 
      className="mb-0" />

     <Entrada
      texto="Sexo" 
      valor={sexo} 
      valorMudou={setSexo}
      className="mb-0" />

     <Entrada
      texto="Endereço"
       valor={endereço} 
       valorMudou={setEndereço}
       className="mb-0" />

     <Entrada 
     texto="Numero" 
     valor={numero}
     tipo="number"  
     valorMudou={setNumero}
     className="mb-0"/>

     <Entrada 
     texto="Canal" 
     valor={canal} 
     valorMudou={setCanal} 
     className="mb-0"/>

     <Entrada 
     texto="Mes de Entrada" 
     valor={mesDeEntrada} 
     valorMudou={setMesDeEntrada} 
     className="mb-0"/>

     <Entrada 
     texto="Data da Primeira Compra" 
     valor={dataDaPrimeiraCompra}
     valorMudou={setDataDaprimeiraCompra}
     className="mb-0" />

     <Entrada
      texto="Indicação" 
      valor={indicaçao} 
      valorMudou={setIndicaçao}
      className="mb-0" />

      <div className="flex justify-end  mt-7">
        <Botao cor="blue" className="mr-2" onClick={() => props.clienteMudou?.(new Cliente
            (nome, idade, sexo, endereço, numero, canal, mesDeEntrada, dataDaPrimeiraCompra, indicaçao, id ))}>
             {id ? 'Alterar' : 'Salvar'}
        </Botao>

        <Botao  cor="gray" onClick={props.cancelado}>
            Cancelar
        </Botao>
      </div>
</div>
 )
}