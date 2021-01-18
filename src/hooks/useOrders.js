import { useEffect, useState } from 'react';
import livrito from '../api/livrito';

export default () => {
    const [order, setOrder] = useState([]);
    let increment = 0;

    const searchOrder = async () => {
        
        try {
            const response = await livrito.post('/getOrders.php');
            const orders = response.data;
            setOrder(response.data);
            console.log('fired');
            // for(var order of response_data){
            //     console.log(order.order_description);
            // }
        } catch (e) {
            console.log("Error: " + e.message);
        }
    }

    useEffect(() => {
        searchOrder();
    }, [])
    return [searchOrder, order];
};