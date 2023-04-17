import React from "react";
import { FlexboxGrid } from "rsuite";
import CarD from "./CarD";

function Cars() {
  return (
    <FlexboxGrid justify="space-between">
      <CarD car />
    </FlexboxGrid>
  );
}

export default Cars;
