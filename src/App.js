import DayList from "./component/DayList";
import Header from "./component/Header";
import Day from "./component/Day";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import EmptyPage from "./component/EmptyPage";
import CreateWord from "./component/CreateWord";
import CreateDay from "./component/CreateDay";

function App() {
  return(
    <BrowserRouter>
      <div className="App">
       <Header />
    <Switch>
      <Route exact path="/">
        <DayList/>
      </Route>
      <Route path="/day/:day">
        <Day />
      </Route>
      {/* EmptyPage를 제일 아래에 둔 이유는 위에 조건이 
      모두 만족하지 않으면 아래 페이지로 이동한다. 만약 EmptyPage 페이지를 맨위로 옮겼을시
      모든 페이지는 EmptyPage 페이지로 밖에 이동을 안한다. */}
      <Route path="/create_word">
        <CreateWord />
      </Route>
      <Route path="/create_day">
        <CreateDay />
      </Route>
      <Route>
      <EmptyPage />
      </Route>
    </Switch>
  </div>
    </BrowserRouter>
  ) 
}

export default App;