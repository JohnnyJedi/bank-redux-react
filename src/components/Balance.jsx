
import {useSelector} from "react-redux";

const Balance = () => {
const balance =  useSelector(state => state.balance);
const {quote,character} = useSelector(state => state.quote);

    return (
        <div className={'text-center text-uppercase'}>
            <h1 className={'text-[gold] font-bold text-8xl'}>Iron Bank Bravos</h1>
            <h2 className={'text-stone-300  text-6xl'}>{character}:</h2>
            <h3 className={'text-[whitesmoke]  text-5xl'}>&#34;{quote}&#34;</h3>
            <h2 className={'text-[firebrick] text-7xl'}>Balance = {balance}</h2>
        </div>
    );
};

export default Balance;