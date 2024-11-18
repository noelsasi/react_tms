import React, { useEffect, useState } from 'react'
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

  // Filter users for autocomplete
  const autocompleteResults = searchQuery.trim()
    ? usersList.filter(u =>
      u.id !== user.id &&
      (u.firstname?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        u.lastname?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        u.username?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        u.email?.toLowerCase().includes(searchQuery.toLowerCase()))
    ).slice(0, 5) // Limit to 5 results
    : []


  // Handle clicking outside of autocomplete
  useEffect(() => {
    const handleClickOutside = (e) => {
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
        const response = await axios.get(`/api/chat/conversation?user_id=${selectedUser.id}`)
        setMessages(response.data)
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
  const handleSendMessage = async (e) => {
    e.preventDefault()
    if (!newMessage.trim() || !selectedUser) return

    try {
      await axios.post('/api/chat/send', {
        receiver_id: selectedUser.id,
        content: newMessage
      })

      // Add message to local state
      setMessages(prev => [...prev, {
        content: newMessage,
        sender_id: user.id,
        receiver_id: selectedUser.id,
        created_at: new Date().toISOString(),
        sender: {
          username: user.username,
          profilePic: user.profilePic
        }
      }])

      setNewMessage('')
      fetchMessages()
      fetchChats()
    } catch (error) {
      console.error('Error sending message:', error)
    }
  }

  return (
    <div className="content-body">
      <div className="container-fluid">
        <div className="row">
          <div className="col-xl-3 col-lg-4">
            <div className="card">
              <div className="card-body">
                <div className="d-flex align-items-center ">
                  <img src={user.profilePic && !user.profilePic.includes("https://www.scholarvault.com") ? user.profilePic : "/dash/images/profile/pic1.jpg"} alt="user" className="rounded-circle" width="40" />
                  <h5 className="mb-0 ms-3">{user.username}</h5>
                </div>
                <hr />
                {/* Search with autocomplete */}
                <div className="search-container position-relative mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search users..."
                    value={searchQuery}
                    onChange={(e) => {
                      setSearchQuery(e.target.value)
                      setShowAutocomplete(true)
                    }}
                    onFocus={() => setShowAutocomplete(true)}
                  />

                  {/* Autocomplete dropdown */}
                  {showAutocomplete && searchQuery.trim() && autocompleteResults.length > 0 &&
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
                              profilePic: user.profilePic
                            })
                          }}
                        >
                          <img
                            src={user.profilePic && !user.profilePic.includes("https://www.scholarvault.com") ? user.profilePic : "/dash/images/profile/pic1.jpg"}
                            alt={user.username}
                            className="rounded-circle"
                            width="40"
                          />
                          <div className="ms-3">
                            <h6 className="mb-0">{user.username}</h6>
                            <p className="mb-0 text-muted">{user.email}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  }
                </div>

                <div className="chat-list" style={{ height: '60vh', overflowY: 'auto' }}>
                  {chats.map(chat => (
                    <div
                      key={chat.id}
                      className="chat-user d-flex align-items-center py-3 cursor-pointer border-bottom"
                      onClick={() => {
                        setSelectedUser({
                          id: chat.other_user_id,
                          username: chat.username,
                          profilePic: chat.profilePic
                        })
                      }}
                    >
                      <img
                        src={chat.profilePic && !chat.profilePic.includes("https://www.scholarvault.com") ? chat.profilePic : "/dash/images/profile/pic1.jpg"}
                        alt={chat.username}
                        className="rounded-circle"
                        width="40"
                      />
                      <div className="ms-3">
                        <h6 className="mb-0">{chat.username}</h6>
                        <p className="mb-0 text-muted">{chat.last_message}</p>
                      </div>
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
                      src={selectedUser.profilePic && !selectedUser.profilePic.includes("https://www.scholarvault.com") ? selectedUser.profilePic : "/dash/images/profile/pic1.jpg"}
                      alt={selectedUser.username}
                      className="rounded-circle"
                      width="40"
                    />
                    <h6 className="mb-0 ms-3">{selectedUser.username}</h6>
                  </div>
                </div>

                <div className="card-body" style={{ height: '400px', overflowY: 'auto' }}>
                  {messages.map(message => (
                    <div
                      key={message.id}
                      className={`chat-message ${message.sender_id === user.id ? 'chat-sender' : 'chat-receiver'}`}
                    >
                      <p className="mb-0">{message.content}</p>
                      <small className="text-muted">
                        {new Date(message.created_at).toLocaleTimeString()}
                      </small>
                    </div>
                  ))}
                </div>

                <div className="card-footer">
                  <form onSubmit={handleSendMessage}>
                    <div className="input-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Type your message..."
                        value={newMessage}
                        onChange={(e) => setNewMessage(e.target.value)}
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
