import React from "react";
import { FlexboxGrid } from "rsuite";
import styles from "./style";

function Car() {
  return (
    <FlexboxGrid.Item className={styles.Car}>
      <div className="Top">
        <span>Model</span>
        <span>Engine</span>
        <span>KPP</span>
      </div>
      <div className="Middle">
        <img src="#" alt="car" className={styles.CarImage} />
        <div className={styles.RightSide}>
          <div className={styles.Equipment}>Equipment</div>
          <div className={styles.Price}>
            <span>2200</span> ₽
          </div>
        </div>
      </div>
    </FlexboxGrid.Item>
  );
}

export default Car;
