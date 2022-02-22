import React from 'react'
import {
    View,
    Text,
    Touchable,
    Image,
    ScrollView,
    TouchableOpacity,
    Pressable,
    StyleSheet
} from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import colors from '../utils/colors';


const ShoopingBag = (props) => {
    return (
        <View style={{position:'relative',width:'100%',height:'100%',backgroundColor:'white'}}>
        <ScrollView>
            <View style={{flexDirection:'row',paddingLeft:16,padding:3,justifyContent:'flex-start',alignItems:'center' ,position:'relative',backgroundColor:'#f8f8f8'}}>
                <Text style={{ fontSize:18 ,color:'black',marginVertical:16}}>Cart</Text>
                <TouchableOpacity 
                onPress={()=>props.navigation.goBack()}
                style={{position:'absolute',right:15,backgroundColor:'white',padding:6,borderRadius:10}}>
                <AntDesign name='close' size={20} color='black'/>
                </TouchableOpacity>
            </View>



            <View style={[styles.firstRowStyle,styles.Shadow,{marginTop:30}]}  >
            
            
            <View style={{margin:10,marginBottom:5, flexDirection:'row', backgroundColor:'#f8f8f8',}}>
                <View style={{width:'35%', flexDirection:'row',borderRightWidth:1,borderColor:"lightgrey"}}>
                    <View style={{margin:10}}>
                        <FontAwesome5 name='users' size={23} color='lightgrey' />
                    </View>
                    <View >
                        <View>
                            <Text style={{color:'#2e1505',fontSize:12,marginTop:8}}>Nails</Text>
                        </View>
                        <View style={{width:'100%'}}>
                            <Text style={{color:'#2e1505',fontSize:8}}>in 10 min</Text>
                        </View>
                    </View>
                </View>
                <View style={{ width:'30%',borderRightWidth:1,borderColor:"lightgrey"}}>
                    <View >
                        <Text style={{color:'#2e1505',fontSize:12,marginTop:10,marginLeft:10}}>Clients</Text>
                    </View>
                    <View style={{width:'90%'}}>
                        <Text style={{color:'#2e1505',fontSize:8,marginLeft:10}}>2</Text>
                    </View>
                </View>
                <View style={{ width:'35%',}}>
                    <View >
                        <Text style={{color:'#2e1505',fontSize:12,marginTop:10,marginLeft:10}}>Add-ons</Text>
                    </View>
                    <View style={{width:'90%'}}>
                        <Text style={{color:'#2e1505',fontSize:8,marginLeft:10}}>Nail Art, Hair Removal</Text>
                    </View>
                </View>
                
            </View>
            
            <View style={{borderColor:'#f8f8f8',borderBottomWidth:1,height:10,width:'90%',}}><Text></Text></View>
            
            <View style={{ flexDirection:'row', width:'90%', justifyContent:'space-between', marginTop:4}}>
                
                <View style={{alignSelf:'flex-start', marginTop:10}}>
                    <Text style={{color:'#e4b343', fontSize:14, fontWeight:'bold'}}>Total: $45</Text>
                </View>
                <View style={{backgroundColor:'white', marginTop:4,marginBottom:10,flexDirection:'row'}}>
                <Pressable
                        onPress={()=>{props.navigation.navigate('ServiceBookingScreen')}}
                        style={[styles.buttons,{backgroundColor:'#f8f8f8',}]}
                    >
                    <Text style={{color:'black',fontSize:12}} >Delete</Text>
                    </Pressable>
                <Pressable
                        onPress={()=>{props.navigation.navigate('ServiceBookingScreen')}}
                        style={[styles.buttons,{backgroundColor:'#e4b343'}]}
                    >
                    <Text style={{color:'white',fontSize:12}} >Continue</Text>
                    </Pressable>
                </View>
            </View>   
        </View>

        


        <View style={[styles.firstRowStyle,styles.Shadow]}  >
            
            
            <View style={{margin:10,marginBottom:5, flexDirection:'row', backgroundColor:'#f8f8f8',}}>
                <View style={{width:'35%', flexDirection:'row',borderRightWidth:1,borderColor:"lightgrey"}}>
                    <View style={{margin:10}}>
                        <FontAwesome5 name='users' size={23} color='lightgrey' />
                    </View>
                    <View >
                        <View>
                            <Text style={{color:'#2e1505',fontSize:12,marginTop:8}}>Nails</Text>
                        </View>
                        <View style={{width:'100%'}}>
                            <Text style={{color:'#2e1505',fontSize:8}}>in 10 min</Text>
                        </View>
                    </View>
                </View>
                <View style={{ width:'30%',borderRightWidth:1,borderColor:"lightgrey"}}>
                    <View >
                        <Text style={{color:'#2e1505',fontSize:12,marginTop:10,marginLeft:10}}>Clients</Text>
                    </View>
                    <View style={{width:'90%'}}>
                        <Text style={{color:'#2e1505',fontSize:8,marginLeft:10}}>2</Text>
                    </View>
                </View>
                <View style={{ width:'35%',}}>
                    <View >
                        <Text style={{color:'#2e1505',fontSize:12,marginTop:10,marginLeft:10}}>Add-ons</Text>
                    </View>
                    <View style={{width:'90%'}}>
                        <Text style={{color:'#2e1505',fontSize:8,marginLeft:10}}>Nail Art, Hair Removal</Text>
                    </View>
                </View>
                
            </View>
            
            <View style={{borderColor:'#f8f8f8',borderBottomWidth:1,height:10,width:'90%',}}><Text></Text></View>
            
            <View style={{ flexDirection:'row', width:'90%', justifyContent:'space-between', marginTop:4}}>
                
                <View style={{alignSelf:'flex-start', marginTop:10}}>
                    <Text style={{color:'#e4b343', fontSize:14, fontWeight:'bold'}}>Total: $45</Text>
                </View>
                <View style={{backgroundColor:'white', marginTop:4,marginBottom:10,flexDirection:'row'}}>
                <Pressable
                        onPress={()=>{props.navigation.navigate('ServiceBookingScreen')}}
                        style={[styles.buttons,{backgroundColor:'#f8f8f8',}]}
                    >
                    <Text style={{color:'black',fontSize:12}} >Delete</Text>
                    </Pressable>
                <Pressable
                        onPress={()=>{props.navigation.navigate('ServiceBookingScreen')}}
                        style={[styles.buttons,{backgroundColor:'#e4b343'}]}
                    >
                    <Text style={{color:'white',fontSize:12}} >Continue</Text>
                    </Pressable>
                </View>
            </View>   
        </View>




        <View style={[styles.firstRowStyle,styles.Shadow]}  >
            
            
            <View style={{margin:10,marginBottom:5, flexDirection:'row', backgroundColor:'#f8f8f8',}}>
                <View style={{width:'35%', flexDirection:'row',borderRightWidth:1,borderColor:"lightgrey"}}>
                    <View style={{margin:10}}>
                        <FontAwesome5 name='users' size={23} color='lightgrey' />
                    </View>
                    <View >
                        <View>
                            <Text style={{color:'#2e1505',fontSize:12,marginTop:8}}>Nails</Text>
                        </View>
                        <View style={{width:'100%'}}>
                            <Text style={{color:'#2e1505',fontSize:8}}>in 10 min</Text>
                        </View>
                    </View>
                </View>
                <View style={{ width:'30%',borderRightWidth:1,borderColor:"lightgrey"}}>
                    <View >
                        <Text style={{color:'#2e1505',fontSize:12,marginTop:10,marginLeft:10}}>Clients</Text>
                    </View>
                    <View style={{width:'90%'}}>
                        <Text style={{color:'#2e1505',fontSize:8,marginLeft:10}}>2</Text>
                    </View>
                </View>
                <View style={{ width:'35%',}}>
                    <View >
                        <Text style={{color:'#2e1505',fontSize:12,marginTop:10,marginLeft:10}}>Add-ons</Text>
                    </View>
                    <View style={{width:'90%'}}>
                        <Text style={{color:'#2e1505',fontSize:8,marginLeft:10}}>Nail Art, Hair Removal</Text>
                    </View>
                </View>
                
            </View>
            
            <View style={{borderColor:'#f8f8f8',borderBottomWidth:1,height:10,width:'90%',}}><Text></Text></View>
            
            <View style={{ flexDirection:'row', width:'90%', justifyContent:'space-between', marginTop:4}}>
                
                <View style={{alignSelf:'flex-start', marginTop:10}}>
                    <Text style={{color:'#e4b343', fontSize:14, fontWeight:'bold'}}>Total: $45</Text>
                </View>
                <View style={{backgroundColor:'white', marginTop:4,marginBottom:10,flexDirection:'row'}}>
                <Pressable
                        onPress={()=>{props.navigation.navigate('ServiceBookingScreen')}}
                        style={[styles.buttons,{backgroundColor:'#f8f8f8',}]}
                    >
                    <Text style={{color:'black',fontSize:12}} >Delete</Text>
                    </Pressable>
                <Pressable
                        onPress={()=>{props.navigation.navigate('ServiceBookingScreen')}}
                        style={[styles.buttons,{backgroundColor:'#e4b343'}]}
                    >
                    <Text style={{color:'white',fontSize:12}} >Continue</Text>
                    </Pressable>
                </View>
            </View>   
        </View>


            </ScrollView>
        </View>
    )
}

export default ShoopingBag






const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor:'#f0f0f0',
      // alignItems: 'center',
      // justifyContent: 'center',
    },
    firstRowStyle: {
      borderWidth:2, 
      borderRadius:10,
      borderColor: 'white', 
      shadowColor:'#ffffff',
      width:'90%', 
      alignSelf:'center', 
      alignItems:'center',
      marginTop:10, 
      marginBottom:2, 
      elevation:2,
      borderShadow:'black',
      backgroundColor: '#ffffff',
    },
    secondRowStyle: {
      borderWidth:2, 
      borderRadius:10,
      borderColor: 'white', 
      shadowColor:'#ffffff',
      elevation:14,
      width:'90%', 
      alignSelf:'center', 
      alignItems:'center',
      marginTop:10, 
      backgroundColor: '#ffffff'
    },
    activityIndicator: {
      alignItems: 'center',
      height: 80,
    },
  
    Shadow: {
      shadowColor: '#000000',
      shadowOffset: {
        width: 0,
        height: 3
      },
      shadowRadius: 5,
      shadowOpacity: 1.0
    },
    buttons:{
        paddingVertical:2,
        borderRadius:5,
        width:80,
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        marginLeft:4,
    }
  });