import useStore from "hooks/useStore";
import { observer } from "mobx-react-lite";
import React from "react";
import { FlexboxGrid } from "rsuite";
import CarD from "./CarD";

function Cars() {
  const { cars } = useStore();
  return (
    <FlexboxGrid justify="space-between">
      {cars.list.map((car) => (
        <CarD key={car.id} car={car} />
      ))}
    </FlexboxGrid>
  );
}

export default observer(Cars);
