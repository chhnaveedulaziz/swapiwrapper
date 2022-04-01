import React, { useEffect } from 'react';
import {
    ScrollView,
    View
} from 'react-native';
import { styles } from "./App.style";
import { useApi } from "./Hooks/useApi";
import constant from "./Utils/ApiConstants";
import Loader from "./Utils/Loader";
const App = () => {
    let text
    useEffect(() => { apiCall(constant.Base_url + "people/1/") }, [])
    const [isLoading, data, error, apiCall] = useApi();
   
    if (isLoading) return <Loader visible={isLoading} />
    return (
        <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            style={styles.scrollView}>
            <View style={styles.container}>
                <Text>{"Api call"}</Text>
            </View>
        </ScrollView>
    );
}
export default App;