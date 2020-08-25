import React, { Component } from 'react';

import MapRoute from '../../routes/MapRoute'
import '../../style/Home/home.css'
import {NavLink,Switch,Route,Redirect} from 'react-router-dom'
class Home extends Component {
    constructor(){
        super()
        this.state={
            
        }
    }
   
    render() {
        
        return (
            <div className="home">
                
                 <header>
                     <NavLink to='/home/recommend' >推荐音乐</NavLink>
                     <NavLink to='/home/hot' >热歌榜</NavLink>
                     <NavLink to='/home/search' >搜索</NavLink>
                 </header>
                 <main>
                   
                    <Switch>
                        <MapRoute routes={this.props.routes} />
                    </Switch>
                   
                 </main>
            </div>
        );
    }
}

export default Home;
