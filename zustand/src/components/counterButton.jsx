import {useCounterStore} from '../store/counterStore.js'

function CounterButton() {

    const  increase = useCounterStore((state)=>state.increase)
    const  decrease = useCounterStore((state)=>state.decrease)
    const  reset = useCounterStore((state)=>state.reset)

    return (
        <div>
            <button className="counter-button" onClick={increase}>+</button>
            <button className="counter-button" onClick={decrease}>-</button>
            <button className="counter-button" onClick={reset}>Reset</button>
        </div>
    )
}

export default CounterButton;