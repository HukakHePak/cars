import { Car } from "./car";
import Option from "./option";
import User from "./user";

class Order {
    id: number;
    car: Car;
    options: Option[];
    user: User;
    discount: number;    
}

export default Order;