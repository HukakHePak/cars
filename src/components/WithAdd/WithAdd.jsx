import React from "react";
import AddButton from "components/Button/AddButton";

function WithAdd({ children, onClick = () => {} }) {
  return (
    <div>
      {children}
      <AddButton onClick={onClick} />
    </div>
  );
}

export default WithAdd;
