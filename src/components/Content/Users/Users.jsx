import React from 'react';
import u from "./users.module.css";

const Users = (props) => {
    console.log(props.users)
    return <div className={u.main}>
        {props.users.map(user =>
            <div id={user.id} className={u.user}>
                <div>
                    <div>
                        <img className={u.photo} src={user.photo} alt=""/>
                    </div>
                    <div>
                        {user.frendship
                            ? <button onClick={ ()=>{props.follow(user.id)} }>Отписаться</button>
                            : <button onClick={ ()=>{props.unfollow(user.id)} }>Подписаться</button>
                        }
                    </div>
                </div>

                <div>
                    <div>
                        <p>{user.name} - {user.age}</p>
                        <p> {user.status} </p>
                    </div>
                    <div>
                        <p>Город: {user.location.city} - {user.location.country}</p>

                    </div>
                </div>

            </div>

        )}
    </div>
}

export default Users;