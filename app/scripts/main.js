import React from 'react';
import ReactDOM from 'react-dom';
import API from './components/API';
import Error from './components/Error';
import FetchingInfo from './components/FetchingInfo';
import Leaderboards from './components/Leaderboards';

class Layout extends React.Component {
    constructor() {
        super();

        this.state = {
            leaderboards: [],
            sortedBy: '',
            fetching: true,
            error: false
        };

        this.callAPI();
    }

    callAPI() {
        this.API = new API();
        this.API.fetchData().then((function(data) {
            this.setState({
                leaderboards: data,
                sortedBy: 'recent',
                fetching: false
            });
        }).bind(this), (function(error) {
            this.setState({
                error: true,
                fetching: false
            });
        }).bind(this));
    }

    changeSorting(newSorting) {
        this.setState({
            sortedBy: newSorting
        });
    }

    render() {
        if(this.state.error)
            return (<Error />);
        else if(this.state.fetching)
            return (<FetchingInfo />);
        else
            return (<Leaderboards data={this.state.leaderboards} sortedBy={this.state.sortedBy} changeSorting={this.changeSorting.bind(this)} />);
    }
}

ReactDOM.render(<Layout />, document.getElementById('app'));