import React from 'react';
import Nav from './components/nav';
import Content from './components/content';

export default class App extends React.Component {
    render(){
        return(
            <section className="section">
                <div className="container">
                    <div className="columns">
                        <Nav/>
                        <Content/>
                    </div>
                </div>
            </section>
        )
    }
}