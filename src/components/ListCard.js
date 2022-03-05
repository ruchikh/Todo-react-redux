import React from "react";
import {
  withStyles,
  Card,
  CardContent,
  Typography,
  IconButton
} from "@material-ui/core";
import { DeleteOutlined, EditOutlined } from "@material-ui/icons";

import Styles from "../style/Styles";

const ListCard = props => {
  const {
    classes,
    id,
    title,
    description,
    handleUpdate,
    removeData,
    completed,
  } = props;

  return (
    <Card className={completed ? classes.completed : classes.card} elevation={1}>
      <CardContent>
        {!completed &&
          <IconButton
            aria-label="Update"
            className={classes.edit}
            onClick={e => handleUpdate(id)}
          >
            <EditOutlined />
          </IconButton>
        }
        <IconButton
          aria-label="Delete"
          className={classes.delete}
          onClick={() => removeData(id)}
        >
          <DeleteOutlined />
        </IconButton>
        <Typography variant="h5" className={classes.name}>
          {title}
        </Typography>
        <i>{completed && `Completed`}</i>
        <Typography variant="body1" className={classes.details}>
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};


export default withStyles(Styles)(ListCard);
