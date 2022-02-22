import React from 'react';
import PlainLayout from '../components/PlainLayout';
import { Button, PromoCard, Title } from '../components/ComponentItems';
import { useSelector } from 'react-redux';
import { Image, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const PromotionsScreen = (props) => {
  const navigation = useNavigation();
  // const auth = useSelector((state) => state.firebase.auth);
  // const profile = useSelector(({ firebase: { profile } }) => profile);
  useFirestoreConnect([{ collection: 'promos' }]);
  const promos = useSelector((state) => state.firestore.ordered.promos);

  // if (!isLoaded(profile) || isEmpty(profile)) {
    return (
      <PlainLayout
        noPadding
        useView
        titleOnly='PROMOTIONS'
        footer={
          <View style={{ width: '95%', alignSelf: 'center' }}>
            <Button
              primary
              medium
              onPress={() => {
                navigation.navigate('Profile');
              }}
            >
              Login
            </Button>
          </View>
        }
      >
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            width: '80%',
            alignSelf: 'center',
          }}
        >
          <Image
            source={require('../../assets/notauth.png')}
            style={{
              resizeMode: 'contain',
              width: 300,
              height: 200,
            }}
          />
          <Title h2>You're not logged in</Title>
          <Title h4 gray center>
            To access this feature you need to login first or sign up to create
            account
          </Title>
        </View>
      </PlainLayout>
    );
  

  const getCoupons = () => {
    return (
      promos &&
      promos.reduce((result, pitem) => {
        // if (profile.usedCoupons) {
        //   if (
        //     pitem.value > 0 &&
        //     !profile.usedCoupons.includes(pitem.code) &&  pitem.forAll 
        //   ) {
        //     result.push(pitem);
        //   }
        // }

        return result;
      }, [])
    );
  };

  return (
    <PlainLayout
      titleOnly='PROMOTIONS'
      showLoader={!isLoaded(promos)}
      bgGray
      linePrimary
      lineDouble
    >
      <Title h3 center primary>
        You have {getCoupons() && getCoupons().length} promo code
      </Title>
      {isLoaded(promos) &&
        getCoupons() &&
        getCoupons().map((item, index) => {
          return <PromoCard key={index + item.code.toLowerCase()} {...item} />;
        })}
    </PlainLayout>
  );
};

export default PromotionsScreen;
