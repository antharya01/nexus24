import "./lea.css"
import SearchIcon from '@material-ui/icons/Search';
import React, { useRef, useEffect, useState } from 'react'

import { db } from '../../index'
import { collection, doc, getDocs } from "firebase/firestore";
var i = 0;
const Leaderboard = () => {
    const [data, setData] = useState([]);
    const inputRef = useRef()
    useEffect(async () => {
        const result = await getDocs(collection(db, `Users`));

        let datas = []
        result.forEach((doc) => {
            datas.unshift({
                ...doc.data(),
                _id: (doc.data()).userName
            })
        })

        datas.sort(function (a, b) {
            return b.Score - a.Score
        })

        setData(datas)  

    }, [])
    // console.log(data)
    return (
        <div className="leaderboard">
            <div className="leaderboardhead">
                <h1>Leaderboard</h1>
                <div className="searchbox" >
                    <SearchIcon className="searchIcon" />
                    <input type="text" ref={inputRef} />
                </div>
            </div>
            <div className="leaderboardbody">

                <div className="leaderboardTable">
                    <div className="tableHead">
                        <li>#</li>
                        <li>Username</li>
                        <li>Score</li>
                    </div>
                    <div className="tableBody">
                        {data.map((items, i) => {
                            return (
                                <div className="row" key={i} id={`id${i}`}>
                                    <li>{i + 1}</li>
                                    <li>{items.userName}</li>
                                    <li>{items.Score}</li>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Leaderboard