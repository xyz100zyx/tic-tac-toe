import React from 'react';
import styles from './FinishPopup.module.scss';
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../redux/store";
import {setFinish} from "../../redux/slices/popupSlice";

export const FinishPopup = () => {

    const dispatch = useDispatch();
    const winState = useSelector((state: RootState) => state.board.winState);
    const players = useSelector((state: RootState) => state.player.players);

    const getWinString = (sym: String) => {
        if (winState === 'x') return `${players[0].name} won`;
        if (winState === 'o') return `${players[1].name} won`;
        return `Friendship won`;
    }

    const onClickContinue = () => {
        dispatch(setFinish(false))
    }

    const onClickRestart = () => {
        window.location.reload()
    }

    return (
        <div className={`${styles.popup} ${styles.popup__show}`}>
            <div className={styles.container}>
                <p className={`${styles.popup__title} ${styles.popup__title_comp}`}>{getWinString(winState)}</p>
                <button onClick={() => onClickContinue()} className={`${styles.popup__continue} ${styles.popup__btn}`}>Continue this Game</button>
                <button onClick={() => onClickRestart()} className={`${styles.popup__restart} ${styles.popup__btn}`}>Restart Game</button>
            </div>
        </div>
    )
}