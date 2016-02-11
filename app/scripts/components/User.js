import React from 'react';

export default class User extends React.Component {
    render() {
        var userData = this.props.user;
        return (
            <tr>
                <td class="col-md-1">{this.props.id}</td>
                <td class="col-md-7"><img src={userData.img} alt={userData.username} class="img-fluid img-rounded m-r-1 pull-xs-left user-image" /> {userData.username}</td>
                <td class="col-md-2">{userData.recent}</td>
                <td class="col-md-2">{userData.alltime}</td>
            </tr>
        );
    }
}