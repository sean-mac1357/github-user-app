import React, { Component } from 'react';
import UserCardList from './UserCardList';

class SearchForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: "sean-mac1357",
            users: [],
        }
    }

    _handleClick = async () => {
        const data = await fetch (`https://api.github.com/users/${this.state.userName}`)
            .then(response => response.json())
            .then(userJson => {
                this.setState({
                    users: [...this.state.users, userJson]
                });
            })
        return data;
    }

    render() {
        const { users } = this.state;
        console.log('users', Array.isArray(users))
        return(
            <>
                <form>
                    <input type="text" value={this.state.username}></input>
                    <button type="button" onClick={this._handleClick}>Get User</button>
                </form>
                {users.length ? (<UserCardList users={users}/>) : ("")}
            </>
        );
    };
}

export default SearchForm;