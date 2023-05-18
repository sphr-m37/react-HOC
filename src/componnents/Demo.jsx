import { CounterHoc } from "../HOC/CounterHoc"

const Demo = ({counter,addCount,minusCount}) => {
    
    return (
        <>
            <h2>DEMO component</h2>
            <h3>count : {counter}</h3>
            <button onClick={addCount}>add count</button>
            <button onClick={minusCount} >minus count</button>
        </>
    )
}
export default CounterHoc(Demo)