import type { ReactNode } from "react"

interface Iprop{
  title: string
  children: ReactNode
}

function Cap (props: Iprop){
  return(
    <>
    <h1>
    Titulo: {props.title}
    </h1>
    {props.children}
    </>
  )

}


export function App() {
  return (
    <>

       <Cap title="me friend ">
        iae
       </Cap>
  
    </>
  )
}


