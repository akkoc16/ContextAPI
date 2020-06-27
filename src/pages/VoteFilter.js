import React, {useContext} from 'react'
import { SafeAreaView, Text, View ,FlatList, Button, Dimensions} from 'react-native'
import Slider from '@react-native-community/slider';
import Context from '../context/store'

const VoteFilter = props => {
    const {state,dispatch} = useContext(Context)


    return (
        <SafeAreaView>
            <Slider
                style={{width: Dimensions.get("window").width*0.9,alignSelf:'center'}}
                minimumValue={0}
                maximumValue={6}
                onValueChange={(value)=>dispatch({type:"FILTER_CATS", vote:value})}
                step={1}
            />
            <FlatList
                keyExtractor={(item,index)=>index.toString()}
                data={state.filteredCats}
                ItemSeparatorComponent={() => <View style={{ borderWidth: 1, borderColor: "#e0e0e0", marginVertical: 5 }} />}
                renderItem={({item})=> <Text style={{padding:10}}>{item.text}</Text>}></FlatList>
        </SafeAreaView>
    )
}

export { VoteFilter }
