import React, { useEffect, useState, useRef } from 'react'
import { useSelector } from '../../../redux/store'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { fetchUsers } from '../../pages/dashboard/slices'

const Chat = () => {
  const dispatch = useDispatch()
  const { userInfo: user } = useSelector(state => state.auth)
  const { usersList } = useSelector(state => state.dashboard)
  const [selectedUser, setSelectedUser] = useState(null)
  const [chats, setChats] = useState([])
  const [messages, setMessages] = useState([])
  const [newMessage, setNewMessage] = useState('')
  const [searchQuery, setSearchQuery] = useState('')
  const [showAutocomplete, setShowAutocomplete] = useState(false)
  const messagesEndRef = useRef(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  // Filter users for autocomplete
  const autocompleteResults = searchQuery.trim()
    ? usersList
        .filter(
          u =>
            u.id !== user.id &&
            (u.firstname?.toLowerCase().includes(searchQuery.toLowerCase()) ||
              u.lastname?.toLowerCase().includes(searchQuery.toLowerCase()) ||
              u.username?.toLowerCase().includes(searchQuery.toLowerCase()) ||
              u.email?.toLowerCase().includes(searchQuery.toLowerCase()))
        )
        .slice(0, 5) // Limit to 5 results
    : []

  // Handle clicking outside of autocomplete
  useEffect(() => {
    const handleClickOutside = e => {
      if (!e.target.closest('.search-container')) {
        setShowAutocomplete(false)
      }
    }
    document.addEventListener('click', handleClickOutside)
    return () => document.removeEventListener('click', handleClickOutside)
  }, [])

  const fetchChats = async () => {
    try {
      const response = await axios.get('/api/chat/list')
      setChats(response.data)
    } catch (error) {
      console.error('Error fetching chats:', error)
    }
  }
  // Fetch all chats
  useEffect(() => {
    fetchChats()
    dispatch(fetchUsers())
  }, [])

  const fetchMessages = async () => {
    if (selectedUser) {
      try {
        const response = await axios.get(
          `/api/chat/conversation?user_id=${selectedUser.id}`
        )
        setMessages(response.data)
        // Scroll to bottom after messages are loaded
        setTimeout(scrollToBottom, 100)
      } catch (error) {
        console.error('Error fetching messages:', error)
      }
    }
  }
  // Fetch conversation when user is selected
  useEffect(() => {
    fetchMessages()
  }, [selectedUser])

  // Handle sending messages
  const handleSendMessage = async e => {
    e.preventDefault()
    if (!newMessage.trim() || !selectedUser) return

    try {
      await axios.post('/api/chat/send', {
        receiver_id: selectedUser.id,
        content: newMessage,
      })

      // Add message to local state
      setMessages(prev => [
        ...prev,
        {
          content: newMessage,
          sender_id: user.id,
          receiver_id: selectedUser.id,
          created_at: new Date().toISOString(),
          sender: {
            username: user.username,
            profilePic: user.profilePic,
          },
        },
      ])

      setNewMessage('')
      // Scroll to bottom after sending message
      setTimeout(scrollToBottom, 100)
      fetchMessages()
      fetchChats()
    } catch (error) {
      console.error('Error sending message:', error)
    }
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  return (
    <div className="content-body">
      <div className="container-fluid">
        <div className="row">
          <div className="col-xl-3 col-lg-4">
            <div className="card">
              <div className="card-body">
                <div className="d-flex align-items-center ">
                  <img
                    src={
                      user.profilePic &&
                      !user.profilePic.includes('https://www.scholarvault.com')
                        ? user.profilePic
                        : '/dash/images/profile/pic1.jpg'
                    }
                    alt="user"
                    className="rounded-circle"
                    width="40"
                  />
                  <h5 className="mb-0 ms-3">{user.firstname}</h5>
                </div>
                <hr />
                {/* Search with autocomplete */}
                <div className="search-container position-relative mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search users..."
                    value={searchQuery}
                    onChange={e => {
                      setSearchQuery(e.target.value)
                      setShowAutocomplete(true)
                    }}
                    onFocus={() => setShowAutocomplete(true)}
                  />

                  {/* Autocomplete dropdown */}
                  {showAutocomplete &&
                    searchQuery.trim() &&
                    autocompleteResults.length > 0 && (
                      <div className="autocomplete-dropdown">
                        {autocompleteResults.map(user => (
                          <div
                            key={user.id}
                            className="autocomplete-item d-flex align-items-center py-2 cursor-pointer border-bottom"
                            onClick={() => {
                              setShowAutocomplete(false)
                              setSearchQuery('')
                              setSelectedUser({
                                id: user.id,
                                username: user.firstname,
                                profilePic: user.profilePic,
                              })
                            }}
                          >
                            <img
                              src={
                                user.profilePic &&
                                !user.profilePic.includes(
                                  'https://www.scholarvault.com'
                                )
                                  ? user.profilePic
                                  : '/dash/images/profile/pic1.jpg'
                              }
                              alt={user.username}
                              className="rounded-circle shadow-sm border border-dark me-2"
                              width="40"
                            />
                            <div className="ms-3">
                              <h6 className="mb-0">{user.firstname}</h6>
                              <p className="mb-0 text-muted">{user.email}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                </div>

                <div
                  className="chat-list"
                  style={{ height: '60vh', overflowY: 'auto' }}
                >
                  {chats.map(chat => (
                    <div
                      key={chat.id}
                      className="chat-user d-flex align-items-center py-3 cursor-pointer border-bottom"
                      style={{
                        cursor: 'pointer',
                        '&:hover': {
                          backgroundColor: '#f1f1f1',
                        },
                      }}
                      onClick={() => {
                        setSelectedUser({
                          id: chat.receiver_id,
                          username: chat.receiver.firstname,
                          profilePic: chat.receiver.profilePic,
                        })
                      }}
                    >
                      <img
                        src={
                          chat.profilePic &&
                          !chat.profilePic.includes(
                            'https://www.scholarvault.com'
                          )
                            ? chat.profilePic
                            : '/dash/images/profile/pic1.jpg'
                        }
                        alt={chat.receiver.firstname}
                        className="rounded-circle shadow-sm border border-dark"
                        width="40"
                      />
                      <div className="ms-3 w-50">
                        <h6 className="mb-0">{chat.receiver.firstname}</h6>
                        <p className="mb-0 text-muted text-truncate">
                          {chat.content}
                        </p>
                      </div>

                      {chat.unreadMessages > 0 && (
                        <div className="ms-auto">
                          <span className="badge bg-primary">
                            {chat.unreadMessages}
                          </span>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="col-xl-9 col-lg-8">
            {selectedUser ? (
              <div className="card">
                <div className="card-header">
                  <div className="d-flex align-items-center">
                    <img
                      src={
                        selectedUser.profilePic &&
                        !selectedUser.profilePic.includes(
                          'https://www.scholarvault.com'
                        )
                          ? selectedUser.profilePic
                          : '/dash/images/profile/pic1.jpg'
                      }
                      alt={selectedUser.username}
                      className="rounded-circle shadow-sm border border-dark"
                      width="40"
                    />
                    <h6 className="mb-0 ms-3">{selectedUser.username}</h6>
                  </div>
                </div>

                <div
                  className="card-body"
                  style={{ height: '400px', overflowY: 'auto' }}
                >
                  {messages.map(message => (
                    <div
                      key={message.id}
                      className={`chat-message ${
                        message.sender_id === user.id
                          ? 'text-end'
                          : 'text-start'
                      } py-3`}
                    >
                      <p className="mb-2">
                        {message.sender_id !== user.id ? (
                          <img
                            src={
                              message.sender.profilePic &&
                              !message.sender.profilePic.includes(
                                'https://www.scholarvault.com'
                              )
                                ? message.sender.profilePic
                                : '/dash/images/profile/pic1.jpg'
                            }
                            alt="user"
                            className="rounded-circle me-2 shadow-sm"
                            width="30"
                          />
                        ) : null}
                        {message.content}
                        {message.sender_id === user.id ? (
                          <img
                            src={
                              user.profilePic &&
                              !user.profilePic.includes(
                                'https://www.scholarvault.com'
                              )
                                ? user.profilePic
                                : '/dash/images/profile/pic1.jpg'
                            }
                            alt="user"
                            className="rounded-circle ms-2 shadow-sm border border-dark"
                            width="30"
                          />
                        ) : null}
                      </p>
                      <small className="text-muted">
                        {new Date(message.created_at).toLocaleTimeString()}
                      </small>
                    </div>
                  ))}
                  <div ref={messagesEndRef} />
                </div>

                <div className="card-footer">
                  <form onSubmit={handleSendMessage}>
                    <div className="input-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Type your message..."
                        value={newMessage}
                        onChange={e => setNewMessage(e.target.value)}
                      />
                      <button type="submit" className="btn btn-primary">
                        <i className="fas fa-paper-plane"></i>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            ) : (
              <div className="d-flex justify-content-center align-items-center h-100">
                <h4>Select a chat to start messaging</h4>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Chat
