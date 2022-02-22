import React,{useState,useEffect} from 'react'
import {View , Image, ImageBackground ,Text} from 'react-native'


const BeforeSplash = ({navigation}) => {
    const [rotateLogo,setRotateLogo] = useState('10deg')
    useEffect(() => {
        
        setTimeout(() => {
            const degree = parseInt( rotateLogo.substring(0,2));
            setRotateLogo((degree+5)+'deg');

            if(degree===30){
                navigation.replace('SplashScreenMain')
            }

        },300)
        
    }, [rotateLogo])

    return (
        <View  style={{flex:1,width:'100%',height:'100%'}}>
            <ImageBackground source={require('../../assets/bsbg1.png')}  resizeMode="stretch"
            style={{flex:1,width:'100%',justifyContent:'center',alighItem:'center',height:'100%'}} 
            tintColor='black'
             >
                
                <View style={{position:'relative',flex:1}}>
                    <Image source={require('../../assets/bs_center.png')} resizeMode='contain'
                    style={{width:'100%',position:'absolute',top:'43%'
                    }}
                    />
                    <Image source={require('../../assets/bs_outer.png')} resizeMode='contain'
                    style={{width:'90%',height:'100%',marginHorizontal:'5%', transform:[{rotate:rotateLogo}] }}
                    />
                </View>    
                



            </ImageBackground>
        </View>
    )
}

export default BeforeSplash
