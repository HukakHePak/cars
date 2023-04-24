import { observer } from "mobx-react-lite";
import React from "react";
import { FlexboxGrid } from "rsuite";
import Option from "stores/models/option";

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
    <FlexboxGrid.Item onClick={editOption}>
      <div>
        {option.name} {option.type.name} {option.amount}{" "}
      </div>
      <FlexboxGrid justify="space-between">
        <img src={option.photo} alt={option.name} />
        <ul>
          <li> {option.price} </li>
        </ul>
      </FlexboxGrid>
    </FlexboxGrid.Item>
  );
}

export default observer(OptionCard);
