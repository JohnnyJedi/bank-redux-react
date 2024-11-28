import './App.css'
import Balance from "./components/Balance.jsx";
import Cooperation from "./components/Cooperation.jsx";
import {useState} from "react";

function App() {
    const [balance, setBalance] = useState(0);

    const deposit = sum => {
        setBalance((prevBalance) => prevBalance + sum);
    }

    const withdraw = sum => {
        setBalance((prevBalance) => prevBalance < sum ? prevBalance : (prevBalance-sum));
    }

    return (
        <div>
            <Balance balance={balance} />
            <Cooperation deposit={deposit} withdraw={withdraw} />
        </div>
    )
}

export default App
