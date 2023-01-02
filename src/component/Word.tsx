import React, { useState } from "react";

// 필요한 정보 day,영어,뜻,isDone 
// day,영어,뜻은 form으로 입력을 받고 isDone 초기 값 false로 고정해서 저장

interface IProps {
    word: IWord;
}

export interface IWord {
    day: string,
    eng: string,
    kor: string,
    isDone: boolean,
    id: number,
}

export default function Word({ word: w }: IProps) { 
    const [word, setWord] = useState(w);
    const [isShow, setIsShow] = useState(false);
    const [isDone, setIsDone] = useState(word.isDone);


    function toggleShow() {
        setIsShow(!isShow);
    }
    
    function toggleDone() {
        // setIsDone(!isDone);
        fetch(`http://localhost:3001/words/${word.id}`,{
            method : "PUT",
            headers : {
                "content-type" : "application/json",
                //constent-type 보내는 리소스에 타입을 의미함, 평범한 문자열부터 html, 이미지등 여러가지가 있음
            },
            body : JSON.stringify({
                ...word,
                isDone : !isDone
            }),
             // 단순히 가지고오는 get과는 다르게 put은 수정을 위한 정보들을 실어서 보내줌 그것을 body에 입력함
        }).then(res => {
            if (res.ok) {
                setIsDone(!isDone)
            }
        })
    }

    function del() {
        if(window.confirm('삭제 하시겠습니까?')){
            fetch(`http://localhost:3001/words/${word.id}`, {
                method : 'DELETE',
            }).then(res => {
                if ( res.ok ) {
                  setWord ( { 
                    ...word,
                    id: 0 } );
                }
            });
        }
    }

    if(word.id === 0 ) {
        return null;
    }

    return (
    <tr className={isDone ? 'off' : ''}>
        <td>
            <input type="checkbox" checked={word.isDone} onChange={toggleDone} />
        </td>
        <td>{word.eng}</td>
        <td>{isShow && word.kor}</td>
        <td>
           <button onClick={toggleShow}>뜻 {isShow ? '숨기기' : '보기'}</button>
           <button onClick={del} className="btn_del">삭제</button>
        </td>
    </tr>
    )
}



// CREATE - POST
// Read  -  GET
// Update - PUT
// Delete - DELETE