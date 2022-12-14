import React from 'react';
import './App.scss';
import {Board} from "./components/board/Board";
import {Status} from "./components/status/Status";
import {StartPopup} from "./components/startPopup/StartPopup";
import {useSelector} from "react-redux";
import {RootState} from "./redux/store";
import {FinishPopup} from "./components/finishPopup/FinishPopup";

function App() {

    const startPopup = useSelector((state: RootState) => state.popup.isOpenStart);
    const finishPopup = useSelector((state: RootState) => state.popup.isOpenFinish);

    return (
        <div className="App">
            {startPopup && <StartPopup />}
            {finishPopup && <FinishPopup />}
            <Status/>
            <Board/>
        </div>
    );
}

export default App;
