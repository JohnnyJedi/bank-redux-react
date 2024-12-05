import {useState} from "react";
import {deposit, withdraw} from "../actions/accountActions.js";
import {useDispatch} from "react-redux";
import {putQuote} from "../actions/quoteAction.js";

const Operation = () => {
    const [sum, setSum] = useState(1);
    const dispatch = useDispatch();

    const fetchQuote = () => {
        dispatch(putQuote('Pending...'))
        fetch('https://api.gameofthronesquotes.xyz/v1/random')
            .then(res => res.json())
            .then(data => dispatch(putQuote(data.sentence)))
            .catch(() => dispatch(putQuote('Failed to fetch quote data.')));
    }

    return (
        <>
            <div className={'flex justify-center'}>
                <button
                    className={"bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg text-lg"}
                    onClick={() => dispatch(withdraw(sum))}>Withdraw
                </button>
                <input
                    className={'text-center border rounded-lg'}
                    style={{appearance: 'none'}}
                    type={"number"}
                    onChange={e => setSum(+e.target.value)}
                    value={sum}
                />
                <button
                    className={"bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg text-lg"}
                    onClick={() => dispatch(deposit(sum))}>Deposit
                </button>
            </div>

            <div className={'flex justify-center'}>
                <button
                    onClick={fetchQuote}
                    className={'bg-blue-500 hover:bg-blue-700 ' +
                        'text-white font-bold py-2 px-4 rounded-lg text-lg mt-1 ml-7'}>
                    Get Quote
                </button>
            </div>
        </>
    );
};

export default Operation;