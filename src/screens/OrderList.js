import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, Dimensions } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { withNavigation } from 'react-navigation';
import OrderRow from '../components/OrderRow';
import SearchBar from '../components/SearchBar';
import useOrders from '../hooks/useOrders';

const windowWidth = Dimensions.get('window').width;
const numOfColumns = 2

const OrderList = () => {
    const [term, setTerm] = useState('');
    const [searchOrder, orders] = useOrders();

    formatRows = (dataList, numColumns)=>{
        const totalRows = Math.floor(dataList.length / numColumns);
        let totalLastRows = dataList.length - (totalRows * numColumns);
        while(totalLastRows !== 0 && totalLastRows !== numColumns){
            dataList.push({key: 'blank', empty: true});
            totalLastRows++;
        }
        return dataList;
    }

    return (
        <View style={{ alignItems: 'baseline' }}>
            <SearchBar
                term={term}
                onTermChange={(newTerm) => setTerm(newTerm)}
                onTermSubmitted={() => searchOrder(term)}
            />
            <FlatList
                data={this.formatRows(orders, numOfColumns)}
                keyExtractor={(orders) => orders.order_id.toString()}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity>
                            <OrderRow style={styles.row}
                                name={item.order_title}
                                description={item.order_description}
                                price={item.order_price}
                                img={item.order_img_url_1}
                            />
                        </TouchableOpacity>)
                }}
                numColumns={numOfColumns}
            />
        </View>
    )
};

const styles = StyleSheet.create({
    row: {
        height: windowWidth / numOfColumns
    }
});


export default withNavigation(OrderList);