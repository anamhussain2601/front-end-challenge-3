import React, {Component} from 'react';
import Reply from './Reply';
import RenderReply from './RenderReply';

class Comment extends Component{
    constructor(props){
        super(props);
        this.state={
            isReply:false
        }

    };

    onReplyBtnClick=()=>{
        this.setState({
            isReply:!this.state.isReply
        })
    }
    
    render(){
        return (
            <div className="comment">
                <div className="single-comment">
                    <div style={{fontWeight:'bold'}}>{this.props.comment.name}</div>
                    <div style={{display:"flex", flexDirection:'row', alignItems:'center'}}>
                        <div>{this.props.comment.comment}</div>
                        <button onClick={this.onReplyBtnClick}>Reply</button>
                        <button style={{backgroundColor:'#bf2121'}} onClick={()=>this.props.onDeleteComment(this.props.comment.id)}>Delete</button>
                    </div>
                </div>
                {
                    this.state.isReply ? <Reply comment={this.props.comment} onReplyPost={this.props.onReplyPost} onReplyBtnClick={this.onReplyBtnClick}/>: null
                }
                {
                    this.props.comment.replies ? <RenderReply replies={this.props.comment.replies} onDeleteComment={this.props.onDeleteComment}/>:null
                }
            </div>
        )
    }
}

export default Comment;