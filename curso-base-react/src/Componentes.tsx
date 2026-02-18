import type React from "react"

interface ICardProps{
  title : string
  children: React.ReactNode
}

const Card = (props : ICardProps) => {
  return(
    <div style={{border: '1px solid black', paddingLeft: 10, paddingTop: 5}}>

      <span>
        title: {props.title}
      </span>

      <div>
        {props.children}
      </div>

      <div>
        footere
      </div>

    </div>
  )
}


interface Cor{
  cores: string
}
const Carro = (prop : Cor) => {
  return(
    <>
    <h1>ola sou {prop.cores}</h1>
    
    </>
  )

}


export function Components() {
    return (
        <>
            <h1>oi world</h1>
            <p>Card:</p>
            <Card title="oi">oi</Card>

        </>
    )
}