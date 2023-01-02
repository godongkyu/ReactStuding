import { Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import React from 'react'
// import dummy from "../db/data.json";
// dummy는 data.json에서 가져온것이다.

export interface IDay {
    id : number,
    day : number,
}

export default function DayList() {
    const days : IDay[] = useFetch("http://localhost:3001/days")
    //나만의 커스텀 hooks 폴더 만들어서 useFetch.js 파일 만들기
    //useEffect 부분을 커스텀 훅에 넣어서 useFetch 함수로 만들고 출력
    //data api는 이 한줄로 다 받아 올수 있다.

    if(days.length === 0) {
        return <span>Loading..</span>
    }

    //----------------------------------------------------------------
    // function onClick(){
    //     setCount(count + 1);
    // };

    // function onClick2(){
    //     setDays([
    //         ...days,
    //         {
    //             id : Math.random(),
    //             day : 1,
    //         }
    //     ]);
    // }
    // ---------------------------------------
    // const [days, setDays] = useState([]);

    // useEffect(() =>{
    //     fetch('http://localhost:3001/days') 
    //     .then(res =>{
    //         return res.json()
    //     })
    //     .then(data => {
    //         setDays(data);
    //     })
    // }, [])
    // api 비동기 통신 fetch('api경로')
    // 의존성 배열 : 의존성 배열의 값이 변경되는 경우만 위에 함수가 실행됨
    // 상태 값과 무관하게 렌더링 직후 딱 한번만 실행되는 작업 빈배열로 함

    return (
  
    <ul className="list_day">   
        {days.map(day => (
            <li key={day.id}>
                  <Link to={`/day/${day.day}`}>Day {day.day}</Link>
                {/* <a href */}
            </li>
        ))}
    </ul>
    )
}