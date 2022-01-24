import React from 'react';
import './styles/Chat.css';

class Chat extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nickValue: "",
            newNick: [],
            commentValue: '',
            newComment: [],
        };

        this.comment = this.comment.bind(this);
        this.send = this.send.bind(this);
        this.nick = this.nick.bind(this);
    }

    nick(event) {
        this.setState({ nickValue: event.target.value });
        event.preventDefault();
    }

    comment(event) {
        this.setState({ commentValue: event.target.value });
        event.preventDefault();
    }

    send() {
        let nameNick = this.state.nickValue;
        this.state.newNick.unshift(nameNick)
        let val = this.state.commentValue;

        this.state.newComment.unshift(val)
        this.setState({ val: this.state.newComment });

        this.setState({ newNick: this.state.newNick });
    }

    render() {
        return (
            <div className='container'>
                <div className='out'>
                    {
                        this.state.newComment.map(
                            (item, index) => (
                                <div className='form_text'>
                                    <div className={index === 0 ? "newNick" : "keyNick"} > {this.state.newNick[index]} :</div>
                                    <div className={index === 0 ? "new" : "key"} key={index.toString()}> {item}
                                    </div>
                                </div>
                            )
                        )
                    }
                </div>
                <div className='container_form'>
                    <div className='form_nick'>
                        <label>Nick: </label>
                        <input type="text" className='input_nick' onChange={this.nick} value={this.state.nickValue} />
                    </div>
                    <div className='form_comment'>
                        <label>Comments:</label>
                        <textarea name='comments' className='text_comment' onChange={this.comment} value={this.state.commentValue} />
                    </div>
                </div>
                <div className='container_button'>
                    <button className='container_btn' onClick={this.send}> Send </button>
                </div>
            </div>
        );
    }
}

export default Chat;