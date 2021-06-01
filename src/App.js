import s from './App.module.css';
import Nav from "./components/Nav/Nav";
import Search from "./components/Search/Search";
import {Redirect, Route} from 'react-router-dom'
import Base from "./components/Base/Base";
import Applications from "./components/Applications/Applications";
import Staff from "./components/Staff/Staff";
import Client from "./components/Client/Client";
import Assets from "./components/Assets/Assets";
import Setting from "./components/Setting/Setting";
import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {fetchPriorities, fetchStatuses, fetchTasks, fetchUsers} from "./redux/tasks-reducer";

function App() {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchTasks())
        dispatch(fetchStatuses())
        dispatch(fetchPriorities())
        dispatch(fetchUsers())
    }, [dispatch])

  return (
    <div className={s.app}>
        <Nav/>
        <Search/>
        <div className={s.wrap}>
            <Route path='/base' component={Base}/>
            <Route path='/applications' component={Applications} />
            <Route path='/staff' component={Staff} />
            <Route path='/client' component={Client} />
            <Route path='/assets' component={Assets} />
            <Route path='/setting' component={Setting} />
            <Redirect to='/applications'/>
        </div>
    </div>
  );
}

export default App;
