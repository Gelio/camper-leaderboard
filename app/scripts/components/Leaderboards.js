import React from 'react';
import User from './User';

export default class Leaderboards extends React.Component {
    changeSorting(newSorting) {
        this.props.changeSorting(newSorting);
    }

    sortInfo(sortType) {
        return (this.props.sortedBy === sortType) ? ' \u25bc' : '';
    }

    render() {
        var users = this.props.data[0];
        if(this.props.sortedBy === 'alltime')
            users = this.props.data[1];

        var usersElemList = [];
        users.forEach((user, i) => {
            usersElemList.push(<User user={user} id={i + 1} key={i}/>);
        });

        return (
            <div class="col-xs-12 table-responsive">
                <table class="table table-hover table-bordered">
                    <thead class="thead-inverse">
                        <tr>
                            <th class="col-md-1">ID</th>
                            <th class="col-md-7">User</th>
                            <th class="col-md-2" onClick={this.changeSorting.bind(this, 'recent')}>{'Recent' + this.sortInfo.call(this, 'recent')}</th>
                            <th class="col-md-2" onClick={this.changeSorting.bind(this, 'alltime')}>All time{this.sortInfo.call(this, 'alltime')}</th>
                        </tr>
                    </thead>
                    <tbody>
                    {usersElemList}
                    </tbody>
                </table>
            </div>
        );
    }
}