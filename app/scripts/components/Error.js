import React from 'react';

export default class Error extends React.Component {
    render() {
        return (
            <div class="alert alert-danger">
                There's been an error while fetching data. Please, try again later.
            </div>
        );
    }
}