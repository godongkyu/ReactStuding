// const Hello = () => {
//    <p>Hello</p>
// };
// export default Hello;

import {useState} from "react";
import UserName from "./UserName";

export default function Hello({ age }) {


   // function showName() {
   //    console.log("Mike");
   // }

   // function showAge(age) {
   //    console.log(age);
   // }
   // <button onClick={showName}>Show name</button>
   // <button onClick={() => {
   //       showAge(10);
   //    }}
   // > Show age </button>

//----------------------------------------------------------------

   // function showText(e) {
   //    console.log(e.target.value) 
   //  e= event를 뜻한다.
   //  target= input 전체 태그를 뜻한다
   //  value= input에 작성한 값을 뜻한다 onChange 안에 값을 뜻함
   // }

   // <input type="text" onChange={(e) => {
   //    console.log(e.target.value)
   // onChange = 입력할때마다 값이 콘솔창에 출력됨 
   // }}/>

   // function showText(txt) {
   //    console.log(txt);
   // }
   // <input type="text" onChange={(e) => {
   //    const txt = e.target.value;
   //    showText(txt);
   // }}/>
//-------------------------------------------------------------
   // 방법1  let name = "Mike"; 


   // const [age, setAge] = useState(props.age);
   // const [name, setName] = useState('Mike');
   // useState는 배열을 반환한다.
   // 배열의 첫번째 값은 state이고 변수명이다. [name]
   // 배열의 두번째 값은 state[name] 을 변경해주는 함수

// function changeName() {
   //방법1
   //  name = name === "Mike" ? "Jane" : "Mike";
   //  document.getElementById("name").innerText = name;
   //  화면 업데이틑해주는 자바스크립트 코드 

   //방법2
   // const newName = name === "Mike" ? "Jane" : "Mike";
   // setName(newName); 
   
   //방법3
   // setName(name ==="Mike" ? "Jane" : "Mike");
                                                                                                  
// }


// export default function Hello(props) {
// }

const [name, setName] = useState('Mike');
const msg = age > 19 ? "성인입니다." : "미성년자입니다.";

  return (
   <div>
      <h2 id="name">
         {/* {name}({props.age}) */}
         {/* 예:(나이) 컴포넌트 내부에서 값을 변경할수없다.
         그러므로 state를 활용하여 변경해주어야한다. */}
         {name}({[age]}) : {msg}
      </h2>
      {/* <button onClick={changeName}>Change</button> */}
      <UserName name={name}/>
      {/* 위에 설명 {name}은 Hello 컴포넌트에서는 State이지만 UserName 컴포넌트에서는 props이다.                                                                                                     */}
      <button onClick={()=>{
         setName(name ==="Mike" ? "Jane" : "Mike");
         // setAge(age + 1); 클릭시 1씩 증가
      }}>Change</button>
   </div>
  );
}