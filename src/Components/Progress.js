import React from 'react'
import { Progress } from "reactstrap";


const style={
    marginTop: "1em",
    
}
const bar={
    marginBottom:"1em"
}
const leftProg={
    display: "flex",
    justifyContent: "flex-start",
    marginBottom: "-1.4em",
    fontWeight: "bold",
}
const rightProg={
    display: "flex",
    justifyContent: "flex-end",
    marginBottom: "0.4em",
    fontWeight:"bold",
}

export default function progress() {
    return (
        <div>
        <div style={style}>
            <div style={leftProg} className="leftProg">72% complete</div>
            <div style={rightProg} className="rightProg">N 3,384,892.00 Funded</div>
          </div>

          <Progress color="success p-5" style={bar}value={72} />
            
        </div>
    )
}
