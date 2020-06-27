import React, {useContext} from 'react'
import { SafeAreaView, Text, View ,FlatList, Button} from 'react-native'
import Context from '../context/store'

const VoteFilter = props => {
    const {state,dispatch} = useContext(Context)


    return (
        <SafeAreaView>
            <Text>VoteFilter</Text>
            <Button title="Filtrele" onPress={()=> dispatch({type:"FILTER_CATS", vote:5})}></Button>
            <FlatList
                keyExtractor={(item,index)=>index.toString()}
                data={state.filteredCats}
                renderItem={({item})=> <Text style={{padding:10}}>{item.text}</Text>}></FlatList>
        </SafeAreaView>
    )
}

export { VoteFilter }