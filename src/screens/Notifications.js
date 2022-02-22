import React from 'react'
import {
    View,
    Text,
    ScrollView,
    Image,
    TouchableOpacity
} from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';


const Notifications = (props) => {
    return (
        <View style={{position:'relative'}}>
        <ScrollView>
            <View style={{flexDirection:'row',marginLeft:16,  margin:3,justifyContent:'flex-start',alignItems:'center' ,position:'relative'}}>
                <Text style={{ fontSize:18 ,color:'black',marginVertical:16}}>Notifications</Text>
                <TouchableOpacity 
                onPress={()=>props.navigation.goBack()}
                style={{position:'absolute',right:15,backgroundColor:'white',padding:6,borderRadius:10}}>
                <AntDesign name='close' size={20} color='black'/>
                </TouchableOpacity>
            </View>


            <View style={{width:'100%',backgroundColor:'white',}}>
                <Text style={{margin:16,color:"black",fontSize:14}}>New</Text>
                    
                    <View style={{flexDirection:'row',justifyContent:'space-between',borderBottomColor:'#f8f8f8',borderBottomWidth:1}}>
                        <View style={{flexDirection:'row',width:'80%',alignItems:'flex-start',marginVertical: 4}}>
                            <View style={{backgroundColor:'#f8f8f8',margin:10,padding:6,borderRadius:6}} >
                                <Image
                                    style={{ width: 20, height: 20,}}
                                    source={require('../../assets/checked1.png')}
                                />
                            </View>    
                            <View style={{ marginVertical: 4,}}>
                                <Text style={{fontSize:12,color:'black'}} >Your appointment is confirmed for Sat, Oct 9 at 10:15am </Text>
                                <Text style={{fontSize:9,color:'grey'}} >Lisa Hauck Hair & Beauty, 283 Upper Richmond Road, London, SW15</Text>
                                <Text style={{fontSize:9,color:'grey'}} >4 Hours ago</Text>
                            </View>
                        </View>

                        <Entypo
                            name="dots-three-horizontal"
                            color='black'
                            size={20}
                            style={{marginRight:10,marginVertical:4}}
                        />
                    </View>


                    <View style={{flexDirection:'row',justifyContent:'space-between',borderBottomColor:'#f8f8f8',borderBottomWidth:1}}>
                        <View style={{flexDirection:'row',width:'80%',alignItems:'flex-start'}}>
                            <View style={{backgroundColor:'#f8f8f8',margin:10,padding:6,borderRadius:6}} >
                                <Image
                                    style={{ width: 20, height: 20,}}
                                    source={require('../../assets/checked1.png')}
                                />
                            </View>    
                            <View style={{ marginVertical: 4,}}>
                                <Text style={{fontSize:12,color:'black'}} >Your appointment is confirmed for Sat, Oct 9 at 10:15am </Text>
                                <Text style={{fontSize:10,color:'grey'}} >Lisa Hauck Hair & Beauty, 283 Upper Richmond Road, London, SW15</Text>
                                <Text style={{fontSize:10,color:'grey'}} >4 Hours ago</Text>
                            </View>
                        </View>

                        <Entypo
                            name="dots-three-horizontal"
                            color='black'
                            size={20}
                            style={{marginRight:10,marginVertical:4}}
                        />
                    </View>


                    <View style={{flexDirection:'row',justifyContent:'space-between',borderBottomColor:'#f8f8f8',borderBottomWidth:1}}>
                        <View style={{flexDirection:'row',width:'80%',alignItems:'flex-start'}}>
                            <View style={{backgroundColor:'#f8f8f8',margin:10,padding:6,borderRadius:6}} >
                                <Image
                                    style={{ width: 20, height: 20,}}
                                    source={require('../../assets/checked1.png')}
                                />
                            </View>    
                            <View style={{ marginVertical: 4,}}>
                                <Text style={{fontSize:12,color:'black'}} >Your appointment is confirmed for Sat, Oct 9 at 10:15am </Text>
                                <Text style={{fontSize:10,color:'grey'}} >Lisa Hauck Hair & Beauty, 283 Upper Richmond Road, London, SW15</Text>
                                <Text style={{fontSize:10,color:'grey'}} >4 Hours ago</Text>
                            </View>
                        </View>

                        <Entypo
                            name="dots-three-horizontal"
                            color='black'
                            size={20}
                            style={{marginRight:10,marginVertical:4}}
                        />
                    </View>

            </View>
               



            <View style={{width:'100%',height:'100%',backgroundColor:'white',marginBottom:10}}>
                <Text style={{margin:16,marginBottom:10,color:"black",fontSize:14}}>Earlier</Text>
                    
                    <View style={{flexDirection:'row',justifyContent:'space-between',borderBottomColor:'#f8f8f8',borderBottomWidth:1}}>
                        <View style={{flexDirection:'row',width:'80%',alignItems:'flex-start',marginVertical: 4}}>
                            <View style={{backgroundColor:'#f8f8f8',margin:10,padding:6,borderRadius:6}} >
                                <Image
                                    style={{ width: 20, height: 20,}}
                                    source={require('../../assets/checked1.png')}
                                />
                            </View>    
                            <View style={{ marginVertical: 4,}}>
                                <Text style={{fontSize:12,color:'black'}} >Your appointment is confirmed for Sat, Oct 9 at 10:15am </Text>
                                <Text style={{fontSize:9,color:'grey'}} >Lisa Hauck Hair & Beauty, 283 Upper Richmond Road, London, SW15</Text>
                                <Text style={{fontSize:9,color:'grey'}} >4 Hours ago</Text>
                            </View>
                        </View>

                        <Entypo
                            name="dots-three-horizontal"
                            color='black'
                            size={20}
                            style={{marginRight:10,marginVertical:4}}
                        />
                    </View>


                    <View style={{flexDirection:'row',justifyContent:'space-between',borderBottomColor:'#f8f8f8',borderBottomWidth:1}}>
                        <View style={{flexDirection:'row',width:'80%',alignItems:'flex-start'}}>
                            <View style={{backgroundColor:'#f8f8f8',margin:10,padding:6,borderRadius:6}} >
                                <Image
                                    style={{ width: 20, height: 20,}}
                                    source={require('../../assets/checked1.png')}
                                />
                            </View>    
                            <View style={{ marginVertical: 4,}}>
                                <Text style={{fontSize:12,color:'black'}} >Your appointment is confirmed for Sat, Oct 9 at 10:15am </Text>
                                <Text style={{fontSize:10,color:'grey'}} >Lisa Hauck Hair & Beauty, 283 Upper Richmond Road, London, SW15</Text>
                                <Text style={{fontSize:10,color:'grey'}} >4 Hours ago</Text>
                            </View>
                        </View>

                        <Entypo
                            name="dots-three-horizontal"
                            color='black'
                            size={20}
                            style={{marginRight:10,marginVertical:4}}
                        />
                    </View>


                    <View style={{flexDirection:'row',justifyContent:'space-between',borderBottomColor:'#f8f8f8',borderBottomWidth:1}}>
                        <View style={{flexDirection:'row',width:'80%',alignItems:'flex-start'}}>
                            <View style={{backgroundColor:'#f8f8f8',margin:10,padding:6,borderRadius:6}} >
                                <Image
                                    style={{ width: 20, height: 20,}}
                                    source={require('../../assets/checked1.png')}
                                />
                            </View>    
                            <View style={{ marginVertical: 4,}}>
                                <Text style={{fontSize:12,color:'black'}} >Your appointment is confirmed for Sat, Oct 9 at 10:15am </Text>
                                <Text style={{fontSize:10,color:'grey'}} >Lisa Hauck Hair & Beauty, 283 Upper Richmond Road, London, SW15</Text>
                                <Text style={{fontSize:10,color:'grey'}} >4 Hours ago</Text>
                            </View>
                        </View>

                        <Entypo
                            name="dots-three-horizontal"
                            color='black'
                            size={20}
                            style={{marginRight:10,marginVertical:4}}
                        />
                    </View>

            </View>


               
        </ScrollView>
        </View>

    )
}

export default Notifications
