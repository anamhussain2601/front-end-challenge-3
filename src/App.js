import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CommentList from './Components/CommentList';

class App extends Component {

  constructor(props){
    super(props);
    this.state={
      comments:[
        {
          id:'c-1',
          name:"Anam Hussain",
          comment:"great day awesome wether today",
          replies:[
            {
              id:'c-1-1',
              name:"Ansari",
              comment:"Wao! today is great day @anam",
            },
            {
              id:'c-1-2',
              name:"Anam Hussain",
              comment:"Thanks @ansari",
            },
          ]
        },
        {
          id:'c-2',
          name:"ankur",
          comment:"awesome man with lot of skills",
          replies:[
            {
              id:'c-2-1',
              name:"Just Reply",
              comment:"What a post bro...",
            }
          ]
        }
      ]
    }
  }; 

  onCommentPost=(newComment)=>{
    this.setState({
      comments:[...this.state.comments,newComment]
    })
  };

  onReplyPost=(newReply, commentId)=>{
    let comments = this.state.comments;
    var found = comments.find((comment) =>{
      return comment.id === commentId;
    });
    let index = comments.indexOf(found);
    if(found){
      let newReplies = [...found.replies,newReply];
      found.replies = newReplies;
      comments[index]=found
      this.setState({
        comments:comments
      })
    }
    
  }

  onDeleteComment=(commentId, isReply)=>{
    let filteredComments=[], filteredReply;
    if(isReply){
       this.state.comments.map((comment)=>{
          filteredReply =comment.replies.filter((reply)=>{
          return reply.id !== commentId
        })
        comment.replies = filteredReply;
        filteredComments.push(comment);
      })

    }else{
      filteredComments = this.state.comments.filter((comment)=>{
        return comment.id !== commentId
    });
    }
    this.setState({
      comments:filteredComments
    })
  }

  render() {
    return (
      <div className="app">
        <div className="container">
        <h1>ModeStreet Comment</h1>
        <p>This is modestreet commenting tool you can comment here. Comment are nested comment means you can reply on the comment as well
        This is modestreet commenting tool you can comment here. Comment are nested comment means you can reply on the comment as well
        </p>
        <CommentList comments={this.state.comments} onCommentPost={this.onCommentPost} onReplyPost={this.onReplyPost} onDeleteComment={this.onDeleteComment}/>
        </div>
      </div>
    );
  }
}

export default App;
