import {useState} from "react";
import "./App.css";

const circles = [
  {
    id : "1",
    color : "red"
  },
  {
    id : "2",
    color : "yellow"
  },
  {
    id : "3",
    color : "green"
  },
  {
    id : "4",
    color : "blue"
  },
  {
    id : "5",
    color : "brown"
  }
];

const App = () => {
 const [activeCircle,setActiveCircle] = useState(null)

 const changeColor = (id) =>{
  setActiveCircle(id)
 }
    return (
      <div className="conteiner">
        {
          circles.map(circle => (
            <div
              id={circle.id}
              className='circle-item'
              onClick={()=>changeColor(circle.id)}
              style={{backgroundColor: activeCircle === circle.id ? 'rebeccapurple' : circle.color}}
            >
              {circle.id}
            </div>
          ))
        }
      </div>
    )
}

export default App