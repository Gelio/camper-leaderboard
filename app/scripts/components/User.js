import React from 'react';

export default class User extends React.Component {
    render() {
        var userData = this.props.user;
        return (
            <tr>
                <td>{this.props.id}</td>
                <td><img src={userData.img} alt={userData.username} class="img-fluid img-rounded m-r-1 pull-xs-left user-image" /> {userData.username}</td>
                <td>{userData.recent}</td>
                <td>{userData.alltime}</td>
            </tr>
        );
    }
}