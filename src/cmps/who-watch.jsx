import React from 'react'

export default class WhoWatch extends React.Component {
    state = {
        users: [
            { id: 1, name: 'Danielle', imgUrl: 'user1.png', watchList: 'Spongebob, Suits, Twilight', isUserSelected: false },
            {
                id: 2,
                name: 'Nadav',
                imgUrl: 'user2.png',
                watchList: 'Brooklyn Nine-Nine, One Piece, Luzifer',
                isUserSelected: false,
            },
            {
                id: 3,
                name: 'Eli',
                imgUrl: 'user3.png',
                watchList: 'Family Guy, Shooter, Arrow',
                isUserSelected: false,
            },
            {
                id: 4,
                name: 'Bobi',
                imgUrl: 'user4.png',
                watchList: 'Rick and Morty, The Blacklist, Peaky Blinders',
                isUserSelected: false,
            },
        ],
        selectedUserId: null
    }

    onRemoveUser = (userId) => {
        const { users } = this.state
        this.setState({ users: users.filter(user => user.id !== userId) })
    }

    onAddUser = () => {
        const { users } = this.state
        const id = users.length + 1
        const randomNum = Math.floor(Math.random() * 4) + 1
        let name = prompt('Whats ur name')
        const newUser = {
            id,
            name,
            imgUrl: `user${randomNum}.png`,
            watchList: 'Top Boy, Vikings: Valhalla, The Last Kingdom',
        }
        this.setState({ users: [...users, newUser] })
    }

    onSelectUserId = (_userId) => {
        const userId = this.state.selectedUserId === _userId ? null : _userId
        this.setState({ selectedUserId: userId })
    }

    render() {
        const { users, selectedUserId } = this.state
        return (
            <section className='who-watch-layout'>
                <h1 className='who-watch-header'>Who is Watching?</h1>
                <button onClick={this.onAddUser} className='add-user-btn'>
                    Add User
                </button>
                <div className='user-container'>
                    {users.map((user) => (
                        <div key={user.id} className='user'>
                            <img src={require(`../img/${user.imgUrl}`)} alt='user-img' className='user-img' />
                            <h1 className='user-name'>{user.name}</h1>
                            <button onClick={() => this.onRemoveUser(user.id)} className='remove-user-btn'>
                                Remove User
                            </button>
                            <button onClick={() => this.onSelectUserId(user.id)} className='change-user-btn'>
                                Select User
                            </button>
                            <h1>{selectedUserId === user.id ? user.watchList : ''}</h1>
                        </div>
                    ))}
                </div>
                <footer className='who-watch-footer'>© Created by Danielle Ilyasov</footer>
            </section>
        )
    }
}
