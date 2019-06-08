import React, {Component} from 'react';
import PropTypes from 'prop-types';


class TodoItem extends Component {

//Styles for the box of items

  getStyle=() => {

    return {
      backgroundColor:'#191C21',
      padding:'10px',
      borderBottom:'1px dotted #ccc',
      color:'#fff',
      textDecoration: this.props.todo.completed ? 'line-through' : 'none'
    }
  }

  render() {
    const {id, title} = this.props.todo;

    return (
      <div style={this.getStyle()}>
        <p>
          <input type="checkbox" onChange={this.props.markComplete.bind(this, id) }/>
          {' ' + title}
          <button style={btnStyle} onClick={this.props.delTodo.bind(this, id)}>x</button>
        </p>
      </div>
    )
  }
}

//propTypes

TodoItem.propTypes = {
  todo        :PropTypes.object.isRequired,
  delTodo     :PropTypes.func.isRequired,
  markComplete:PropTypes.func.isRequired,

}


//styles

const btnStyle ={
    background:'red',
    color:'#fff',
    border:'none',
    padding:'5px 7px',
    borderRadius:'50%',
    cusror:'pointer',
    float:'right'
}

// const itemStyle ={
//   backgroundColor:'#191C21',
//   color:'#fff'
// }

export default TodoItem;
