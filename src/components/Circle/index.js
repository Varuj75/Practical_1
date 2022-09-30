const Circle = ({id,color,activeCircle,changeColor}) => {
  return(
    <div
       id={id}
       className={'circle-item'}
       onClick={()=>changeColor(id)}
       style={{backgroundColor: activeCircle === id ? 'rebeccapurple' : color}}
       >
           {id}
   </div>
  
  )
}


export default Circle