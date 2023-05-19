import { observer } from "mobx-react-lite";
import React from "react";
import { FlexboxGrid } from "rsuite";
import Option from "stores/models/option";
import style from "./style";

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

  console.log(option);

  return (
    <FlexboxGrid.Item className={style.card} onClick={editOption}>
      <div className={style.header}>
        {option.name} {option.type.name} {option.amount}{" "}
      </div>
      <FlexboxGrid justify="space-between">
        <img src={option.photo} alt={option.name} />
        <ul className={style.options}>
          <li> {option.price} </li>
          <li> {option.description} </li>
        </ul>
      </FlexboxGrid>
    </FlexboxGrid.Item>
  );
}

export default observer(OptionCard);
