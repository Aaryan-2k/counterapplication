import { useSelector,useDispatch } from "react-redux"
import {increment,decrement} from '../redux/slices/CounterSlice'

export default function Counter(){
    //last step is to consume teh data from redux store
    //to consume state variables we use useSelector hook
    const count=useSelector((state)=>(state.counter.value))

    //to consume functionalities defined inside the slice we first import the functions directly from the slice and then use dispatch hook
    const dispatch=useDispatch();
    return (
        <div classname='head'>
            <h1>Counter Application</h1>
        <div className='container'>
            <button onClick={()=>{dispatch(increment())}}>Increment</button>
            <div className='count'>{count}</div>
            <button onClick={()=>{dispatch(decrement())}}>Decrement</button>
        </div>
        </div>
    )
}