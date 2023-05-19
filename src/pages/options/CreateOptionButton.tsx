import { Plus } from "@rsuite/icons/lib/icons";
import { observer } from "mobx-react-lite";
import React from "react";
import { FlexboxGrid } from "rsuite";
import path from "utils/path";
import { useNavigate } from "react-router-dom";
import style from "./style";

function CreateOptionButton() {
  const nav = useNavigate();
  const handleClick = () => nav(`/${path.details}/create`);
  return (
    <FlexboxGrid.Item className={style.card} onClick={handleClick}>
      <Plus height="100%" width="100%" />
    </FlexboxGrid.Item>
  );
}

export default observer(CreateOptionButton);
