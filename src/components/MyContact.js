import '../css/MyContact.css'
import Heading from './Heading'
import react from '../images/message.gif'
import PublishIcon from '@mui/icons-material/Publish';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useEffect, useReducer, useState } from 'react';
import { toast } from 'react-toastify';
function MyContact() {
    const [like, setLike] = useState(false)
    const [likeCount, setLikeCount] = useState(0)
    function handleData(state, action) {
        switch (action.type) {
            case 'name':
                return { ...state, name: action.content }
            case 'email':
                return { ...state, email: action.content }
            case 'message':
                return { ...state, message: action.content }
            case 'clear':
                return { name: '', email: '', message: '' }
            default:
                return state
        }
    }

    const [data, dispatch] = useReducer(handleData, { name: '', email: '', message: '' })
    useEffect(() => {
        fetch('https://portfolio.sagargujarathi.me/likes')
            .then(result => result.json())
            .then(result => {
                setLikeCount(result)
            })
    }, [])
    function sendMessage() {
        if (data.name == '' && data.message == '' && data.email == '') {
            toast.info('Fill up the form', {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
            return
        }
        toast.promise(
            fetch('https://portfolio.sagargujarathi.me/comment', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    credential: 'W)dJP!&UVz#4nYTaeQMYR+hRsFDcw#4)mIjv2UVh*5qhxwede#H^m+(&@k@SMSV5',
                    ...data
                })
            }),
            {
                pending: 'Saving comment is pending',
                success: 'Comment saved',
                error: 'Promise rejected 🤯'
            }
        );
        dispatch({ type: 'clear' })
    }
    function handleLike() {
        if (like) {
            return
        }
        setLike(true)
        toast.promise(
            fetch('https://portfolio.sagargujarathi.me/likes', {
                method: 'PUT'
            })
                .then(result => result.json())
                .then(result => {
                    setLikeCount(result)
                }),
            {
                pending: 'Saving like is pending',
                success: 'like saved',
                error: 'Promise rejected 🤯'
            }
        );
    }
    return (
        <div className="my-contact-main-container">
            <Heading
                heading={'My Contact'}
                sticker={react}
            />
            <div className="contact-container">
                <label htmlFor="name" className='label'>name</label>
                <input
                    name='name'
                    type="text"
                    className="contact-input small-input"
                    placeholder='Your name'
                    value={data.name}
                    onChange={(e) => dispatch({ type: 'name', content: e.target.value })}
                />
                <label htmlFor="name" className='label'>Email ID</label>
                <input
                    name='email'
                    type="email"
                    className="contact-input small-input"
                    placeholder='Your email'
                    value={data.email}
                    onChange={(e) => dispatch({ type: 'email', content: e.target.value })}
                />
                <label htmlFor="message" className='label'>message</label>
                <textarea
                    name='message'
                    className="contact-input"
                    cols="20"
                    rows="10"
                    placeholder='Your message'
                    value={data.message}
                    onChange={(e) => dispatch({ type: 'message', content: e.target.value })}
                />
                <span className='like-send-wrapper'>
                    <div className="send-button" onClick={() => sendMessage()}>Submit &nbsp; <PublishIcon />
                    </div>
                    <span className="like-count-wrap">
                        {
                            like ?
                                <FavoriteIcon className='like-button' onClick={() => setLike(true)} />
                                :
                                <FavoriteBorderIcon className='like-button' onClick={() => handleLike()} />
                        }
                        {likeCount}
                    </span>
                </span>
            </div>
        </div >
    )
}

export default MyContact