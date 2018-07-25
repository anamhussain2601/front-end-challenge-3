import React,{Component} from 'react';

class RenderReply extends Component{
    
    render(){
        return(
            <div>
            <ul>
                {
                    this.props.replies.map((reply, index)=>{
                        return <li key={index}>
                            <div className="single-reply">
                                <div style={{fontWeight:'bold'}}>{reply.name}</div>
                                <div style={{display:'flex', flexDirection:'row'}}>
                                    <div>{reply.comment}</div>
                                    <button style={{backgroundColor:'#bf2121'}} onClick={()=>this.props.onDeleteComment(reply.id, true)}>Delete</button>
                                </div>
                            </div>
                        </li>
                    })
                }
            </ul>
            
        </div>
        )
    }
}
export default RenderReply;