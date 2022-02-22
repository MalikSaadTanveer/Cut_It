import React from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';


import {
    View,
    Text,
    TouchableOpacity,
    ScrollView,
    Image,
    TextInput,
}
from 'react-native'

const PastScreen2 = (props) => {

   


    return (
        <View style={{position:'relative',width:'100%',height:'100%',position:'relative'}}>
        <ScrollView>
        <View style={{flexDirection:'row',  margin:3,justifyContent:'center',alignItems:'center' ,position:'relative'}}>
            <TouchableOpacity onPress={()=>{ props.navigation.goBack()}} 
            style={{position:'absolute',left:15,backgroundColor:'white',padding:4,borderRadius:10}}>
              <AntDesign name='arrowleft' size={25} color='black'/>
            </TouchableOpacity>
            <Text style={{ fontSize:18 ,color:'black',marginVertical:16}}>Freelancer Feedback</Text>
            
          </View>
        

        {/* Header Avatar */}
        <View style={{width:'100%',alignItems:'center',paddingHorizontal:'4%',marginBottom:'3%'}} >
                <Image source={require('../../assets/avatar1.png')} style={{borderColor:'#e4b343',borderWidth:3,borderRadius:50,width:100,height:100,marginVertical:10}} />
                <Text style={{fontSize:16,color:'black',marginBottom:4}} >Robert Thomas</Text>
                <Text style={{fontSize:12,color:'grey'}}>Nail Specialist</Text>
        </View>



        {/* Main Section */}
        <View style={{width:'100%',height:'100%',backgroundColor:'white'}}>
            
            <View style={{alignItems:'center',}}>

                <Text style={{padding:'2%',textAlign:'center',fontSize:12}}>How would you rate your overall experience with Delivery Boy John Smith?</Text>
                <Text style={{color:'black',fontSize:16,marginVertical:'2%'}} >Give Your Rating</Text>
                <View style={{flexDirection:'row',justifyContent:'space-between',backgroundColor:'#f8f8f8',alignItems:'center',paddingVertical:'2%',paddingHorizontal:12,borderRadius:6,marginBottom:10,marginVertical:'3%'}}>
                        <View style={{flexDirection:'row',}}>
                            <Entypo name="star" color="white" size={20} />
                            <Entypo name="star" color="white" size={20} />
                            <Entypo name="star" color="white" size={20} />
                            <Entypo name="star" color="white" size={20} />
                            <Entypo name="star" color="white" size={20} />
                        </View>
                </View>

                <Text style={{color:'black',fontSize:12,marginVertical:'2%'}} >40 customers ratings</Text>

                
                
                
                
                {/* Ratings */}
                <View style={{justifyContent:'center',width:'90%',}}>
                    <Text style={{fontSize:12,color:'black',margin:'3%' }} >Enter your Feedback</Text>
                    <TextInput multiline={true}  style={{padding: 10,height:100, backgroundColor:'#f8f8f8' ,width:'100%', textAlignVertical:'top'}} placeholder="Give a Feedback" />

                    <Text style={{fontSize:12,color:'black',margin:'3%'}} >Upload Images</Text>
                    <View  style={{backgroundColor:'#f8f8f8',height:120,alignItems:'center',justifyContent:'center' }} >
                            <View style={{borderStyle:'dashed',borderWidth:1,borderColor:'grey',borderRadius:4,width:'22%',height:'60%',justifyContent:'center',alignItems:'center'}}>
                                <Ionicons name='add-sharp' size={25} color='grey' />
                            </View>
                            <Text style={{fontSize:12,color:'grey',marginTop:4}} >Upload Photo</Text>
                    </View>
                                         
                </View>

                <TouchableOpacity style={{width:120, height:35,margin:16, justifyContent:'center', alignItems:'center', backgroundColor:'#000000', borderWidth:3, borderRadius:4,alignSelf:'flex-start' }}>
                        <Text style={{color:'#f8f8f8', fontWeight:'bold',}}>Submit</Text>
                </TouchableOpacity>



            </View>

        </View>


          </ScrollView>


        </View>  
    )
}

export default PastScreen2
