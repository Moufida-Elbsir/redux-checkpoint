
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import Edit from './components/Edit';
import { add, complete, del, } from './redux/action';

function App() {
  const x = useSelector(state => state.todos)
  console.log(x)
  const dispatch = useDispatch();
  const [newText, setNewText] = useState("")
  const [bolean, setBolean] = useState(false)
  const handleFilter=()=>{
    setBolean(!bolean)
  }
  const handleAdd=()=>{dispatch(add(newText))
    setNewText("")

  }
  
  return (
    <div className="App">
      <h1>To Do App</h1>
      <form  onSubmit={(e)=>e.preventDefault()} >
      <input className="inpt" type="text" value ={newText} onChange={(e)=>setNewText(e.target.value)}/>
      <button className="button-23" type="submit" onClick={()=>handleAdd()}>Add</button>
      <button className="button-23" onClick={()=>handleFilter()}>{!bolean?"Filter":"All"}</button>
      </form>
     {bolean?x.filter(el=>!el.isDone).map(el=>
        <div>
        <h1 className={el.isDone===true?"done":""}>{el.action}</h1>
      <button className="button-23" onClick={()=>dispatch(del(el.id))}>Delete</button>
      <button className="button-23" onClick={()=>dispatch(complete(el.id))}>Complete</button>
      <Edit elem={el}/>
      </div>
       )
      :x.map(el=>
        <div>
        <h1 className={el.isDone===true?"done":""}>{el.action}</h1>
      <button className="button-23" onClick={()=>dispatch(del(el.id))}>Delete</button>
      <button className="button-23" onClick={()=>dispatch(complete(el.id))}>Complete</button>
      <Edit elem={el}/>
      </div>
       )}
       
    </div>
  );
}

export default App;
