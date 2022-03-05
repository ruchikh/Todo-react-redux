import React, { Component } from "react";
import { Grid } from "@material-ui/core";
import CreateData from "./CreateData.js";
import DataLists from "./DataLists.js";
import { connect } from 'react-redux';
import { addTodo, removeTodo, updateTodo } from "../actions/index.js";

class MyTodos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: null,
      title: "",
      description: "",
      completed: false,
      isEditing: false
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  //To add data to the dataList array
  addData = e => {
    e.preventDefault();
    const { title, completed, description } = this.state;
    if (!title || !description) return;

    let todo = {
      id: Math.random(),
      title: title,
      description: description,
      completed,
    }
    this.props.dispatch(addTodo(todo));
    this.reset();
  };

  //To reset the form fields
  reset = () => {
    this.setState({
      title: "",
      description: "",
      completed: false,
      isEditing: false,
    });
  };

  //To remove the data from the list
  removeData = id => {
    this.props.dispatch(removeTodo(id))
  };

  //To handle the data Update
  handleUpdate = (id) => {
    const { dataLists } = this.props;
    const targetObj = dataLists.filter(item => item.id === id)[0];

    this.setState({
      id: targetObj.id,
      title: targetObj.title,
      description: targetObj.description,
      completed: targetObj.completed,
      isEditing: true
    });
  };

  handleCheckbox = () => {
    this.setState({ completed: !this.state.completed })
  }
  //To save the updated data
  saveUpdate = (e) => {
    e.preventDefault();
    const { title, description, id, completed } = this.state;
    const newData = {
      title,
      description,
      id,
      completed,
    }
    this.props.dispatch(updateTodo(newData));
    this.reset();
  };

  render() {
    const { state, addData, handleChange, saveUpdate, removeData, handleUpdate, handleCheckbox } = this,
      {
        id,
        title,
        description,
        isEditing,
        completed,
      } = state;
    const { dataLists } = this.props;
    return (
      <Grid container spacing={0}>
        <Grid item ls={6} md={6} sm={12} xs={12}>
          <CreateData
            id={id}
            title={title}
            description={description}
            addData={addData}
            handleChange={handleChange}
            saveUpdate={saveUpdate}
            isEditing={isEditing}
            completed={completed}
            handleCheckbox={handleCheckbox}
          />
        </Grid>
        <Grid item ls={6} md={6} sm={12} xs={12}>
          <DataLists
            lists={dataLists}
            removeData={removeData}
            handleUpdate={handleUpdate}
            handleCheckbox={handleCheckbox}
          />
        </Grid>
      </Grid>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    dataLists: state.dataLists,
  }
}

export default connect(mapStateToProps)(MyTodos);
