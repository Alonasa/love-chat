import React from 'react';
import './Posts.scss';
import pic_01 from '../../pictures/pic_01.jpg'



export const Posts = () => {
    return (
        <div className="Posts">
            <WritePost/>
        </div>
    )
}

const WritePost = () => {
    return (
        <div className="Post">
            <div className="Post__write">
                <img src={pic_01} alt=""/>
                    <textarea placeholder="What's on your mind?"></textarea>
            </div>
            <div className="Post__submit">
                <div className="Left">
                    <a href="#" className="Btn Btn__attach">
                        <i className="paperclip">Attach</i>
                    </a>
                    <div className="Select-area">
                        <select className="Select-bar">
                            <option value="">Public</option>
                            <option value="">Friends</option>
                            <option value="">Only me</option>
                        </select>
                    </div>

                </div>
                <div className="Right">
                    <a href="#" className="Btn Btn__post">
                        Post
                    </a>
                </div>
            </div>
        </div>
    )
}