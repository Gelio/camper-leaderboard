import React from 'react';
import User from './User';

export default class Leaderboards extends React.Component {
    changeSorting(newSorting) {
        this.props.changeSorting(newSorting);
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
                            <th>ID</th>
                            <th>User</th>
                            <th onClick={this.changeSorting.bind(this, 'recent')}>Recent</th>
                            <th onClick={this.changeSorting.bind(this, 'alltime')}>All time</th>
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