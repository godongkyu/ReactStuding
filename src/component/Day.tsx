// import dummy from "../db/data.json";
// import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import Word, { IWord } from "./Word";
import React from 'react'

export default function Day() {
    // dummy.words
    const { day } = useParams<{ day:string }>();
    // <> 꺽쇠는 generic(제네릭이라고함) 타입스크립트에 사용함
    // 제네릭은 어떤 타입을 사용할지 파라메터 처럼 사용할수 있음  
    // const wordList = dummy.words.filter(word => word.day === Number(day));
    const words : IWord[] = useFetch(`http://localhost:3001/words?day=${day}`);

    //------------------------------------------------------------
    // const [words, setWords] = useState([]);

    // useEffect(() =>{
    //     fetch(`http:localhost:3001/words?day=${day}`) 
    //     .then(res => {
    //         return res.json();
    //     })
    //     .then(data => {
    //         setWords(data);
    //     });
    // }, [day]);

    return <>
    <h2>Day {day}</h2>
    {words.length === 0 && (<span>Loading...</span>)} 
    <table>
        <tbody>
            {words.map(word => (
                <Word word={word} key={word.id} />
            ))}
        </tbody>
    </table>
    </>
}