import { Fragment, useState } from "react";
import "./App.css";
import Circle from "./components/Circle";
import Header from "./components/Header";

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
 const [activeCircle, setActiveCircle] = useState(null)

 const changeColor = (id) => {
   if(activeCircle === id){
    setActiveCircle(null)
   } else {
    setActiveCircle(id)
   }
 };

  return (
    <Fragment>
      <Header color={circles[activeCircle-1]?.color}/>
      <div className="conteiner">
        {
          circles.map(circle => (
            <Circle
              key={circle.id} 
              id={circle.id}
              color={circle.color}
              changeColor={changeColor}
              activeCircle={activeCircle}
            /> 
          ))
        }
      </div>
    </Fragment>
  )
}

export default App