import React,{useState} from 'react';
import Questions from './questions.json';
import Display from './Display';
import './App.css'
 //import Model from './Model'
// import { useModel } from 'react-model'

const App = () => {
  // const[Model] = useModel()
  const [marks,setMarks] = useState([]);
   let tempMarks = [];
  // const handleChange = (index,mark) =>{
  //   tempMarks = marks
  //   tempMarks[index] = mark;
  //   setMarks([...tempMarks]);
  //  // alert(tempMarks);
  // }
//   function num() {
    
//     let sum=0;
//     for (let i=0;i<(marks.length);i++){
//      sum=sum+marks[i];
//      alert(sum)
// }
//   }

function santhu(){
  let count=0;
  for(let i=0;i<marks.length;i++){
    count=count+1
  }
  console.log("with out attempting",10-count)
  alert(marks.reduce((a,b) => a+b,0)+'/10')
}
  
  const changeHandler = (value,index) =>{
    tempMarks = marks
    tempMarks[index] = value;
    setMarks([...tempMarks]);
  }
  return (
    <div>
      <center>
        <h1>Quiz Application</h1> 
        {Questions.map((qa,index) => {return( <Display question={qa}  index={index} changeHandler={changeHandler} />)})}
        {/* <Model marks={marks}/> */}
      
       <button onClick={()=>{ santhu()}}>End Quiz</button>
       
      
        
      </center>
    </div>
  )
}

export default App