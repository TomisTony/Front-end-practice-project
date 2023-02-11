import React, { Component } from 'react'
import './index.css'

export default class List extends Component {
    
    render() {
        const {users,isFirstOpen,isLoading,err} = this.props;
        return (
            <div className="row">
                {
                    isFirstOpen ? <h2>Welcom!</h2> :
                    isLoading ? <h2>Loading</h2> :
                    err ? <h2 style={{color:'red'}}>{err}</h2> :
                    users.map((userObj) => {
                        return (
                            <div className="card" key={userObj.id}>
                                <a href={userObj.html_url} rel="noreferrer" target="_blank">
                                    <img alt='head' src={userObj.avatar_url} style={{ width: "100px" }} />
                                </a>
                                <p className="card-text">{userObj.login}</p>
                            </div>
                        )
                    }
                    )
                }

            </div>
        )
    }
}
