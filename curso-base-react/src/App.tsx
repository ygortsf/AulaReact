import type React from "react"

interface ICardProps{
  title : string
  children: React.ReactNode
}

const Card = (props : ICardProps) => {
  return(
    <div style={{border: '1px solid black'}}>

      <span>
        title: {props.title}
      </span>

      <div>
        {props.children}
      </div>

      <div>
        footer
      </div>

    </div>
  )
}

export function App() {
  return (
    <>
      <h1>oi world</h1>
      <p>Card:</p>
      <Card title="hello moto">
        vecna
      </Card>
    </>
  )
}


