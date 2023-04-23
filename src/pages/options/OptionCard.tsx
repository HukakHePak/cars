import { observer } from "mobx-react-lite";
import React from "react";
import { useNavigate } from "react-router-dom";
import { FlexboxGrid } from "rsuite";
import Option from "stores/models/option";
import style from "./style.scss";

type Props = {
  option: Option;
};

function OptionCard(props: Props) {
  const { option } = props;
  // const { options } = useStore();

  // const nav = useNavigate();

  const editOption = () => {
    // nav(`${path.cars}/${car.id}`);
  };

  return (
    <FlexboxGrid.Item className={style.card} onClick={editOption}>
      <div className={style.header}>
        {option.name} {option.type.name} {option.count}{" "}
      </div>
      <FlexboxGrid justify="space-between">
        <img className={style.img} src={option.photo} alt={option.name} />
        <ul className={style.options}>
          <li> {option.price} </li>
        </ul>
      </FlexboxGrid>
    </FlexboxGrid.Item>
  );
}

export default observer(OptionCard);
