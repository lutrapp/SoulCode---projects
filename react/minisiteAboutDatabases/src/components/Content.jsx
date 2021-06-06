import {Switch, Route} from 'react-router-dom';

import Home from '../pages/Home'
import MongoPage from '../pages/MongoPage';
import SqlPage from '../pages/SqlPage';
import Comparative from '../pages/Comparative';
import Newsletter from '../pages/Newsletter';

function Content(){
    return(
        <section className='content'>
            <Switch>
                <Route exact path='/' component={Home}></Route>
                <Route exact path='/mongo' component={MongoPage}></Route>
                <Route exact path='/sql' component={SqlPage}></Route>
                <Route exact path='/comparative' component={Comparative}></Route>
                <Route exact path='/newsletter' component={Newsletter}></Route>
            </Switch>
        </section>
    )
}
export default Content;