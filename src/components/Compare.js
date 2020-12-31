import React,{useContext} from 'react'
import {UserContext} from '../UserContext'
const Compare = () => {
    const {user1,user2}=useContext(UserContext);
    return (
        <div style={{padding:"3rem"}}>
            <table class="ui selectable inverted table">
                <thead>
                    <tr>
                    <th class="left aligned">#</th>
                    <th>{user1.firstName}</th>
                    <th>{user2.firstName}</th>
                    </tr>
                </thead>
                <tbody>
                <tr>
                    <td class="left aligned">Avatar</td>
                    <td><img class="ui avatar image" src={user1.avatar} alt="avatar"></img></td>
                    <td><img class="ui avatar image" src={user2.avatar} alt="avatar"></img></td>
                    </tr>
                    <tr>
                    <td class="left aligned">Org</td>
                    <td>{user1.organization}</td>
                    <td>{user2.organization}</td>
                    </tr>
                    <tr>
                    <td class="left aligned">Rating</td>
                    <td>{user1.rating}</td>
                    <td>{user2.rating}</td>
                    </tr>
                    <tr>
                    <td class="left aligned">Max Rating</td>
                    <td>{user1.maxRating}</td>
                    <td>{user2.maxRating}</td>
                    </tr>
                    <tr>
                    <td class="left aligned">Rank</td>
                    <td>{user1.rank}</td>
                    <td>{user2.rank}</td>
                    </tr>
                    <tr>
                    <td class="left aligned">Max Rank</td>
                    <td>{user1.maxRank}</td>
                    <td>{user2.maxRank}</td>
                    </tr>
                </tbody>
            </table>
            {/* {userstatus1}{userstatus2} */}
        </div>
    )
}

export default Compare
