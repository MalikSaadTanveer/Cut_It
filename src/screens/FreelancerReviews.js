import React from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';


import {
    View,
    Text,
    TouchableOpacity,
    ScrollView,
    Image,
}
from 'react-native'

const FreelancerReviews = (props) => {
    
    let customers = [
        {
            img:require('../../assets/avatar1.png'),
            name:'Customer',
            service:'Best Service'
        },
        {
            img:require('../../assets/avatar1.png'),
            name:'Customer',
            service:'Best Service'
        },
        {
            img:require('../../assets/avatar1.png'),
            name:'Customer',
            service:'Best Service'
        },
        {
            img:require('../../assets/avatar1.png'),
            name:'Customer',
            service:'Best Service'
        },
        {
            img:require('../../assets/avatar1.png'),
            name:'Customer',
            service:'Best Service'
        },
    ]


    return (
        <View style={{position:'relative',width:'100%',height:'100%',position:'relative'}}>
        <ScrollView>
        <View style={{flexDirection:'row',justifyContent:'flex-start',alignItems:'center' ,position:'relative'}}>
            <TouchableOpacity onPress={()=>{ props.navigation.goBack()}} 
            style={{backgroundColor:'white',marginLeft:16,marginTop:16,padding:4,borderRadius:10}}>
              <AntDesign name='arrowleft' size={25} color='black'/>
            </TouchableOpacity>
            
          </View>
        

        {/* Header Avatar */}
        <View style={{width:'100%',marginLeft:16,marginVertical:'4%' }} >
            <Text style={{color:'black',fontSize:20}}>Customer Review</Text>
        </View>



        {/* Main Section */}
        <View style={{width:'100%',height:'100%',backgroundColor:'white'}}>
            <View style={{alignItems:'center',}}>

                <Text style={{color:'black',fontSize:16,marginTop:'6%'}} >Customer Review</Text>
                <View style={{flexDirection:'row',justifyContent:'space-between',backgroundColor:'#f8f8f8',alignItems:'center',width:'70%',paddingVertical:'2%',paddingHorizontal:12,borderRadius:6,marginBottom:10,marginVertical:'3%'}}>
                        <View style={{flexDirection:'row',}}>
                            <Entypo name="star" color="#e6b952" size={20} />
                            <Entypo name="star" color="#e6b952" size={20} />
                            <Entypo name="star" color="#e6b952" size={20} />
                            <Entypo name="star" color="#e6b952" size={20} />
                            <Entypo name="star" color="#e6b952" size={20} />
                            <Text style={{ fontSize:12,marginTop:'2%', color:'#000000',marginHorizontal:6}}>4.3 Good</Text>
                        </View>
                        
                        <View>
                        <Text style={{ fontSize:10, color:'grey',}}>3 Ratings</Text>
                        </View>

                </View>

                <Text style={{color:'black',fontSize:12,marginVertical:'2%'}} >40 customers ratings</Text>

                
                
                
                
                {/* Ratings */}
                <View style={{justifyContent:'center',width:'90%',marginBottom:'8%'}}>
                    
                    <View   style={{flexDirection:'row',width:'100%',paddingVertical:'2%',justifyContent:'space-between'}} >
                        <View style={{flexDirection:'row',}} >
                        <Text style={{fontSize:14}}>5</Text>
                        <Entypo name="star" color="#e6b952" size={14} style={{marginTop:2}}/>
                        </View>
                        <View style={{width:'80%',height:18,backgroundColor:'#f8f8f8',position:'relative',borderRadius:50}} >
                            <View style={{width:'85%',height:18,backgroundColor:'#e6b952',position:'absolute',borderRadius:50}}>
                            </View>
                        </View>
                        <Text style={{fontSize:14}} >100%</Text>
                    </View>


                    <View   style={{flexDirection:'row',width:'100%',paddingVertical:'2%',justifyContent:'space-between'}} >
                        <View style={{flexDirection:'row',}} >
                        <Text style={{fontSize:14}}>4</Text>
                        <Entypo name="star" color="#e6b952" size={14} style={{marginTop:2}}/>
                        </View>
                        <View style={{width:'80%',height:18,backgroundColor:'#f8f8f8',position:'relative',borderRadius:50}} >
                            <View style={{width:'65%',height:18,backgroundColor:'#e6b952',position:'absolute',borderRadius:50}}>
                            </View>
                        </View>
                        <Text style={{fontSize:14}} >75%</Text>
                    </View>
                     
                    <View   style={{flexDirection:'row',width:'100%',paddingVertical:'2%',justifyContent:'space-between'}} >
                        <View style={{flexDirection:'row',}} >
                        <Text style={{fontSize:14}}>3</Text>
                        <Entypo name="star" color="#e6b952" size={14} style={{marginTop:2}}/>
                        </View>
                        <View style={{width:'80%',height:18,backgroundColor:'#f8f8f8',position:'relative',borderRadius:50}} >
                            <View style={{width:'45%',height:18,backgroundColor:'#e6b952',position:'absolute',borderRadius:50}}>
                            </View>
                        </View>
                        <Text style={{fontSize:14}} >45%</Text>
                    </View>
                     
                    <View   style={{flexDirection:'row',width:'100%',paddingVertical:'2%',justifyContent:'space-between'}} >
                        <View style={{flexDirection:'row',}} >
                        <Text style={{fontSize:14}}>2</Text>
                        <Entypo name="star" color="#e6b952" size={14} style={{marginTop:2}}/>
                        </View>
                        <View style={{width:'80%',height:18,backgroundColor:'#f8f8f8',position:'relative',borderRadius:50}} >
                            <View style={{width:'25%',height:18,backgroundColor:'#e6b952',position:'absolute',borderRadius:50}}>
                            </View>
                        </View>
                        <Text style={{fontSize:14}} >20%</Text>
                    </View>
                     
                    <View   style={{flexDirection:'row',width:'100%',paddingVertical:'2%',justifyContent:'space-between'}} >
                        <View style={{flexDirection:'row',}} >
                        <Text style={{fontSize:14}}>1</Text>
                        <Entypo name="star" color="#e6b952" size={14} style={{marginTop:2}}/>
                        </View>
                        <View style={{width:'80%',height:18,backgroundColor:'#f8f8f8',position:'relative',borderRadius:50}} >
                            <View style={{width:'15%',height:18,backgroundColor:'#e6b952',position:'absolute',borderRadius:50}}>
                            </View>
                        </View>
                        <Text style={{fontSize:14}} >10%</Text>
                    </View>
                     
                </View>






            {/* Bottom Slides */}
            <View style={{width:'100%',alignItems:'center'}} >

            {
                customers.map((item,i)=>(
                    <View key={i} style={{flexDirection:'row', width:'90%',backgroundColor:'white',justifyContent:'space-between',alignItems:'center',paddingVertical:10,paddingHorizontal:10,marginVertical:'1%',borderRadius:6,elevation:4}}>
                    <View style={{flexDirection:'row'}}>
                        <Image source={item.img} style={{width:50,height:50}} />
                        <View style={{marginLeft:10}}>
                        <Text style={{fontSize:14,marginBottom:6,color:'black'}}>{item.name}</Text>
                        <Text style={{fontSize:12,color:'grey'}} >{item.service}</Text>
                        </View>
                    </View>
                    <View style={{flexDirection:'row',}}>
                            <Entypo name="star" color="#e6b952" size={16} />
                            <Entypo name="star" color="#e6b952" size={16} />
                            <Entypo name="star" color="#e6b952" size={16} />
                            <Entypo name="star" color="#e6b952" size={16} />
                            <Entypo name="star" color="#e6b952" size={16} />
                    </View>
                </View>
                ))
            }

            </View>



            </View>

        </View>


          </ScrollView>

          {/* <View style={{position:'absolute',bottom:0,backgroundColor:'white',width:'100%',paddingVertical:'3%',alignItems:'center',borderTopLeftRadius:20,borderTopRightRadius:20 }}>
              <TouchableOpacity onPress={()=>{props.navigation.navigate('ConfirmBookingScreen')}} >
                    <Text style={{fontSize:16,backgroundColor:'black',color:'white',paddingVertical:8,paddingHorizontal:'6%',borderRadius:6}}>
                    Select Freelancer</Text>

              </TouchableOpacity>
          </View> */}


        </View>  
    )
}

export default FreelancerReviews
