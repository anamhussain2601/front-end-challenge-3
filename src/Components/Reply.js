import React , {Component} from 'react';

class Reply extends Component{
    
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
        let commentId = this.props.comment.id;
        let replyId = commentId+'-'+(this.props.comment.replies.length+1);
       
        let reply ={
            id:replyId,
            name:this.state.name,
            comment:this.state.comment,
        };
        if(reply.name && reply.comment){
            this.props.onReplyPost(reply,commentId);
        }else{
            alert("please provide details")
        }
        
        this.setState({
            comment:'',
            name:''
        });
        this.props.onReplyBtnClick();
    }
    
    render(){
        return(
        <div className='new-comment'>
            <input value={this.state.name} name='name' placeholder="you name" onChange={this.onNameChange}/>
            <input value={this.state.comment} name='comment' placeholder="type comment..." onChange={this.onCommentChange}/>
            <button onClick={this.onSubmit}>post</button>
        </div>
        )
    }
}

export default Reply;