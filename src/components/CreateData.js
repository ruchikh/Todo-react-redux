import React from "react";
import { withStyles, TextField, Button } from "@material-ui/core";

import Styles from "../style/Styles.js";

const CreateData = props => {
  const {
    title,
    description,
    handleChange,
    addData,
    saveUpdate,
    classes,
    isEditing,
    completed,
    handleCheckbox
  } = props;

  return (
    <div className={classes.formWrapper}>
      <form onSubmit={isEditing ? saveUpdate : addData}>
        <TextField
          id="title-id"
          name="title"
          label="ToDo"
          onChange={handleChange}
          value={title}
          fullWidth
          required
        />
        <TextField
          id="description-id"
          name="description"
          label="Description"
          onChange={handleChange}
          value={description}
          fullWidth
          required
        />
        {isEditing ? (
          <>
            <input type="checkbox" name="status" label="Completed" checked={completed} value={completed} onChange={handleCheckbox} />
            <label>Complete</label>
            <Button
              type="submit"
              variant="outlined"
              className={classes.button}
              fullWidth
            >
              Update
            </Button>
          </>
        ) : (
          <Button
            type="submit"
            variant="outlined"
            className={classes.button}
            fullWidth
          >
            Submit
          </Button>
        )}
      </form>
    </div>
  );
};


export default withStyles(Styles)(CreateData);
