import { useRef } from "react";
import { useHistory } from "react-router";
import useFetch from "../hooks/useFetch";
import { useState } from "react";
import React from 'react'
import { IDay } from "./DayList";

export default function CreateWord() {
    const days : IDay[]= useFetch("http://localhost:3001/days");
    const history = useHistory();
    // useHistory를 사용하면 인풋에 입력한 값이 그 창으로 바로 넘어갈수있게 도와줌!!
    const [ isLoading, setIsLoading ] = useState(false);

    function onSubmit(e: React.FormEvent){
        e.preventDefault();

        // console.log(engRef.current.value);
        // console.log(korRef.current.value);
        // console.log(dayRef.current.value);
        //current 속성을 이용하면 해당 요소에 접근할수 있고 value는 input에 입력된 값을 얻을수 있음.
        
        if(!isLoading && dayRef.current && engRef.current && korRef.current
            ) {
            setIsLoading(true);

            const day = dayRef.current.value;
            const eng = engRef.current.value;
            const kor = korRef.current.value;

                // setIsDone(!isDone);
                fetch(`http://localhost:3001/words/`,{
                    method : "POST",
                    headers : {
                        "content-type" : "application/json",
                        //constent-type 보내는 리소스에 타입을 의미함, 평범한 문자열부터 html, 이미지등 여러가지가 있음
                    },
                    body : JSON.stringify({
                        day,
                        eng,
                        kor,
                        isDone : false,
                    }),
                }).then(res => {
                    if (res.ok) {
                        alert("생성이 완료 되었습니다.")
                        history.push(`/day/${day}`)
                        // history.push(`경로`)를 넣어줌으로써 인풋 값이 바로 해당페이지로 이동할수있게 도와줌!
                        setIsLoading(false);
                    }
                })
              
            }
    };
    // form 태그로 감싸져 있어서 버튼을 누르면 새로고침이 된다.
    // preventDefault << 기본기능을 막아주는 코드 위에 있는대로 작성함으로써 새로고침이 되지않는다.

    const engRef = useRef<HTMLInputElement>(null);
    const korRef = useRef<HTMLInputElement>(null);
    const dayRef = useRef<HTMLSelectElement>(null);
    // useRef는 dom에 접근할수 있게 해줌 예를 들어서 scroll 위치를 확인하거나 focuse를 주거나 사용한다.



    return (
    <form onSubmit={onSubmit}>
        <div className="input_area">
            <label>Eng</label>
            <input type="text" placeholder="computer" ref={engRef}/>
        </div>
        <div className="input_area">
            <label>Kor</label>
            <input type="text" placeholder="컴퓨터" ref={korRef}/>
        </div>
        <div className="input_area">
            <label>Day</label>
            <select ref={dayRef}>
                {days.map(day => (
                    <>
                    <option key={day.id} value={day.day}>
                        {day.day}
                    </option>
                    </> 
                ))}
            </select>
        </div>
        <button 
        style={{
            opacity : isLoading ? 0.3 : 1,
        }}
        >{isLoading ? "Saving..." : "저장"}</button>
    </form>
    );
}