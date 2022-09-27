import React from 'react';
import styles from './Status.module.scss';
import {useSelector} from "react-redux";
import {RootState} from "../../redux/store";

export const Status: React.FC = () => {

    const players = useSelector((state: RootState) => state.player.players);
    console.log(players)

    return (
        <div className={styles.status}>
            <div className={styles.status__player}>
                <p className={styles.status__name}>{players.length ? players[0].name : 'Player1'}</p>
                <p className={styles.status__win}>{players.length ? players[0].score.toString() : 0}</p>
            </div>
            <div className={styles.status__player}>
                <p className={styles.status__name}>{players.length ? players[1].name : 'Player2'}</p>
                <p className={styles.status__win}>{players.length ? players[1].score.toString() : 0}</p>
            </div>
        </div>
    )
}