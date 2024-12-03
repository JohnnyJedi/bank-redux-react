import {useState} from "react";
import {deposit, withdraw} from "../actions/accountActions.js";
import {useDispatch} from "react-redux";

const Operation = () => {
    const [sum, setSum] = useState(1);
    const dispatch = useDispatch();

    return (
        <div className={'flex justify-center'}>
            <button
                className={"bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg text-lg"}
                onClick={() => dispatch(withdraw(sum))}>Withdraw</button>
            <input
                className={'text-center border rounded-lg'}
                style={{appearance:'none'}}
                type={"number"}
                onChange={e => setSum(+e.target.value)}
                value={sum}
            />
            <button
                className={'"bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg text-lg"'}
                onClick={()=> dispatch(deposit(sum))}>Deposit</button>
        </div>
    );
};

export default Operation;