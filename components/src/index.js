import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail'
import ApprovalCard from './ApprovalCard'

const App = () => {
    return (
        <div className="ui container comments">
            
            <ApprovalCard>
                <CommentDetail 
                    author="Alex"
                    commentTime="Today at 6:23PM"
                    commentContent="This is a comment!"
                    authorAvatar={faker.image.avatar()} 
                />
            </ApprovalCard>
            
            <CommentDetail 
                author="Mohammed"
                commentTime="Today at 6:23PM"
                commentContent="This is a comment!"
                authorAvatar={faker.image.avatar()} 
            />

            <CommentDetail 
                author="Ali"
                commentTime="Today at 1:00PM"
                commentContent="This is a comment!"
                authorAvatar={faker.image.avatar()} 
            />

        </div>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'));