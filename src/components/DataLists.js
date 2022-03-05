import React from "react";

import ListCard from "./ListCard";

const DataLists = props => {
  const { lists, removeData, handleUpdate, handleCheckbox } = props;
  return (
    <div>
      {lists.map(data => {
        return (
          <ListCard
            key={data.id}
            id={data.id}
            title={data.title}
            description={data.description}
            completed={data.completed}
            removeData={removeData}
            handleUpdate={handleUpdate}
            handleCheckbox={handleCheckbox}
          />
        );
      })}
    </div>
  );
};

export default DataLists;
