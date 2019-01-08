import React,{Component} from 'react';
import {bindActionCreators} from 'redux';
import {handlePost} from '../actions';
import {connect} from 'react-redux';
class CommentBox extends Component{

    constructor(props){
        super(props);
        this.state = {term:''};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(evt){
        this.setState({term:evt.target.value})
    }

    handleSubmit(evt){
       this.props.handlePost(this.state.term);
       this.setState({term:''});
    }
    render(){
        return(<div>
         <div className="commentText">
          <textarea value={this.state.term} onChange={this.handleChange}></textarea>
         </div>
         <div><button onClick={this.handleSubmit}>Submit</button></div>
        </div>);
    }    
}

function mapDispatchToProps(dispatch){
   return bindActionCreators({
        handlePost: handlePost
    },dispatch);
}

export default connect(null,mapDispatchToProps)(CommentBox);