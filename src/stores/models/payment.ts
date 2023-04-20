import Customer from "./customer";

class Order {
    id: number;
    amount: number;
    order: Order;
    customer: Customer; 
}

export default Order;