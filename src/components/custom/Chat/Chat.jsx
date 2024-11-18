import React from 'react'
import { useSelector, useDispatch } from '../../../redux/store'
import { fetchUsers } from '../../pages/dashboard/slices'
import { socket } from '../../../lib/socket'

const Chat = () => {
  const dispatch = useDispatch()
  const { userInfo: user } = useSelector(state => state.auth)
  const { usersList } = useSelector(state => state.dashboard)
  const [selectedUser, setSelectedUser] = React.useState(null)
  const users = usersList.filter(el => el.id !== user.id)
  const [connectionId, setConnectionId] = React.useState(null)

  const [fooEvents, setFooEvents] = React.useState([])
  const [randomMessage, setRandomMessage] = React.useState('')

  const [isConnected, setIsConnected] = React.useState(false)

  const generateRandomMessage = () => {
    const messages = [
      `Random message at ${new Date().toLocaleTimeString()}`,
      'Hello there!',
      'Testing sockets...',
      `Current timestamp: ${Date.now()}`,
      'Ping!',
    ]
    return messages[Math.floor(Math.random() * messages.length)]
  }

  React.useEffect(() => {
    dispatch(fetchUsers())
  }, [])

  React.useEffect(() => {
    function onConnect() {
      console.log('Connected to socket server')
      setIsConnected(true)
      setConnectionId(socket.id)
    }

    function onDisconnect() {
      console.log('Disconnected from socket server')
      setIsConnected(false)
      setConnectionId(null)
    }

    function onFooEvent(value) {
      console.log('Received foo event:', value)
      setFooEvents(previous => [...previous, value])
    }

    socket.on('connect', onConnect)
    socket.on('disconnect', onDisconnect)
    socket.on('foo', onFooEvent)

    if (!socket.connected) {
      socket.connect()
    }

    return () => {
      socket.off('connect', onConnect)
      socket.off('disconnect', onDisconnect)
      socket.off('foo', onFooEvent)
    }
  }, [])

  React.useEffect(() => {
    if (!isConnected) return

    const interval = setInterval(() => {
      const message = generateRandomMessage()
      console.log('Emitting foo event:', message)
      socket.emit('foo', {
        message,
        timestamp: new Date().toISOString(),
        socketId: socket.id,
      })
    }, 2000)

    return () => clearInterval(interval)
  }, [isConnected])

  console.log('Latest random message:', randomMessage)
  console.log('Foo events history:', fooEvents)

  return (
    <div className="content-body">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 mb-3">
            <div className="card">
              <div className="card-body">
                <h4>
                  Socket Status: {isConnected ? 'Connected' : 'Disconnected'}
                </h4>
                <p>Socket ID: {connectionId || 'Not connected'}</p>
                <h5>Recent Events:</h5>
                <div style={{ maxHeight: '200px', overflowY: 'auto' }}>
                  {fooEvents.map((event, index) => (
                    <div key={index} className="mb-2">
                      <strong>Message:</strong> {event.message}
                      <br />
                      <small>
                        Time: {new Date(event.timestamp).toLocaleString()}
                      </small>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4">
            <div className="clearfix">
              <div className="card card-bx author-profile m-b30">
                <div className="card-body">
                  <div className="p-2">
                    <div className="d-flex align-items-center gap-2">
                      <img
                        className="rounded-circle"
                        width={'15%'}
                        style={{ marginLeft: '10px' }}
                        src={
                          user.profilePic?.includes('scholarvault.com')
                            ? '/dash/images/profile/pic1.jpg'
                            : user.profilePic
                        }
                        alt="img"
                      />

                      <h6 className="mb-0">
                        {user.firstname} {user.lastname}
                      </h6>
                    </div>
                  </div>
                  <div className="info-list">
                    <ul>
                      {users.map(user => (
                        <li
                          key={user.id}
                          className="d-flex align-items-center gap-2 justify-content-start cursor-pointer"
                          onClick={() => {
                            setSelectedUser(user)
                            socket.emit('message', {
                              message: 'Hello, how are you?',
                              sender: connectionId,
                              receiver: user.id,
                            })
                          }}
                        >
                          <img
                            className="rounded-circle"
                            width={'10%'}
                            src={
                              user.profilePic?.includes('scholarvault.com') ||
                              !user.profilePic
                                ? '/dash/images/profile/pic1.jpg'
                                : user.profilePic
                            }
                            alt="img"
                          />
                          <span>
                            {user.firstname} {user.lastname}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-9 col-lg-8">
            {selectedUser ? (
              <div className="card card-bx m-b30">
                <div className="card-header">
                  <div className="d-flex align-items-center gap-2">
                    <img
                      className="rounded-circle"
                      width={'15%'}
                      style={{ marginLeft: '10px' }}
                      src={
                        selectedUser?.profilePic?.includes(
                          'scholarvault.com'
                        ) || !selectedUser.profilePic
                          ? '/dash/images/profile/pic1.jpg'
                          : selectedUser.profilePic
                      }
                      alt="img"
                    />

                    <h6 className="mb-0">
                      {selectedUser.firstname} {selectedUser.lastname}
                    </h6>
                  </div>
                </div>
                <div className="card-body" style={{ minHeight: '70svh' }}>
                  <div
                    className="event-chat-ryt"
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      height: '100%',
                    }}
                  >
                    <div className="chat-area">
                      <div className="chat-reciver">
                        <div className="media">
                          <div className="media-body">
                            <p>
                              <span>
                                Hi, how are you?
                                <div className="time">8:00 AM</div>
                              </span>
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Sender Message */}
                      <div className="chat-sender">
                        <div className="media">
                          <div className="media-body">
                            <p>
                              <span>
                                I'm doing great, thanks for asking!
                                <div className="time">8:01 AM</div>
                              </span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="char-type">
                      <form>
                        <div className="input-group">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Type your message..."
                          />
                          <div className="input-group-append">
                            <span className="input-group-text">
                              <i className="fas fa-paper-plane"></i>
                            </span>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div
                className="d-flex justify-content-center align-items-center bg-white"
                style={{ height: '70svh' }}
              >
                <h4>Select a user to start chatting</h4>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Chat
