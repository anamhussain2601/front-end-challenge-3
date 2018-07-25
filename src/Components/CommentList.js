import React, {Component} from 'react';
import Comment from './Comment';


class CommentList extends Component{
    constructor(props){
        super(props);
        this.state={
            name:'',
            comment:'',
        }

    };

    onCommentChange=(e)=>{
        this.setState({
            comment:e.target.value
        })
    };

    onNameChange=(e)=>{
        this.setState({
            name:e.target.value
        })
    };

    onSubmit=()=>{
        let len = this.props.comments.lenght;
        let commentId = 'c-'+len+1;
        let comment ={
            id:commentId,
            name:this.state.name,
            comment:this.state.comment,
            replies:[]
        };
        if(comment.name && comment.comment){
            this.props.onCommentPost(comment);
        }else{
            alert("please provide details")
        }
       
        this.setState({
            comment:'',
            name:''
        })
    };

    render(){
        return(
            <div>
                <ul>
                    {
                        this.props.comments.map((comment, index)=>{
                            return <li key={index}>
                                        <Comment comment={comment} onReplyPost={this.props.onReplyPost} onDeleteComment={this.props.onDeleteComment}/>
                                    </li>
                        })
                    }
                </ul>
                <div className='new-comment'>
                    <input value={this.state.name} name='name' placeholder="you name" onChange={this.onNameChange}/>
                    <input value={this.state.comment} name='comment' placeholder="type comment..." onChange={this.onCommentChange}/>
                    <button onClick={this.onSubmit}>post</button>
                </div>
            </div>
        )
    }
};

export default CommentList;