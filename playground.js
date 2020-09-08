import React from "react";

const PrintNames = ({ names }) => {
  return (
    <ol>
      {names
      .sort(function(a, b) {
        if(a.name.toLowerCase() < b.name.toLowerCase()) return -1;
        if(a.name.toLowerCase() > b.name.toLowerCase()) return 1;
        return 0;
       }).map((name) => (
        <li>{name}</li>
      ))}
    </ol>
  );
};

export default PrintNames;
