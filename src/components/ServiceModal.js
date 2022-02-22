import React, { useRef, useState } from 'react';
import {
  View,
  ImageBackground,
  StyleSheet,
  Platform,
  Dimensions,
  ActivityIndicator,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
// import { isEmpty, isLoaded, useFirestoreConnect } from 'react-redux-firebase';
import colors from '../utils/colors';
import {
  ExtraServiceItem,
  HorizontalLine,
  QuantityInput,
  Title,
} from './ComponentItems';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HTMLView from 'react-native-htmlview';

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

const ServiceModal = (props) => {
  const dispatch = useDispatch();
  useFirestoreConnect([
    {
      collection: `services`,
      doc: props.id,
      storeAs: `${props.id}`,
    },
  ]);

  const service = useSelector(
    ({ firestore: { data } }) => data.services && data.services[props.id]
  );

  const selectedService =
    isLoaded(service) && !isEmpty(service)
      ? service.subServices.filter(
          (item) => item.name === props.selectedService
        )[0]
      : false;

  const [loadingImage, setLoadingImage] = useState(false);

  if (!isLoaded(service) && isEmpty(service)) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Title>Loading</Title>
      </View>
    );
  }

  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <View
        style={[
          serviceModalStyles.subHeader,
          {
            borderTopLeftRadius: 8,
            borderTopRightRadius: 8,
          },
        ]}
      >
        <Title bold>{selectedService.name}</Title>
      </View>
      <View
        style={{
          backgroundColor: colors.primary,
        }}
      >
        <ImageBackground
          style={{
            resizeMode: 'cover',
            flex: 1,
            width: null,
            height: 200,
          }}
          source={{ uri: service.img }}
          onLoadStart={() => {
            setLoadingImage(true);
          }}
          onLoadEnd={() => {
            setLoadingImage(false);
          }}
        >
          {loadingImage && (
            <View
              style={{
                top: '50%',
                left: '50%',
                position: 'absolute',
                flexDirection: 'row',
                alignItems: 'center',
              }}
            >
              <ActivityIndicator color={colors.btnTextWhite} />
            </View>
          )}
          <View
            style={{
              bottom: 10,
              left: 10,
              position: 'absolute',
              flexDirection: 'row',
              alignItems: 'center',
            }}
          >
            <Ionicons name='time-outline' color={colors.btnTextWhite} />
            <Title white ml10>
              {selectedService.time} min
            </Title>
          </View>
        </ImageBackground>
      </View>
      <View
        style={{
          padding: 20,
        }}
      >
        <View style={serviceModalStyles.flatContainer}>
          <Title h4 bold>
            {selectedService.name}
          </Title>
          <Title h4 bold>
            {selectedService.price}$
          </Title>
        </View>
        <Title>{selectedService.description}</Title>

        <View style={serviceModalStyles.flatContainer}>
          <Title>How many clients?</Title>
          <QuantityInput
            value={'1'}
            onChange={(num) => {
              let serviceId = selectedService.name
                .replace(/[^A-Z0-9]/gi, '_')
                .toLowerCase();
              dispatch({
                type: 'ADDTOCART',
                payload: {
                  id: serviceId,
                  type: 'main',
                  name: selectedService.name,
                  quantity: num,
                  price: parseInt(num) * parseInt(selectedService.price),
                  time: parseInt(num) * parseInt(selectedService.time),
                },
              });
              dispatch({ type: 'COUNTTOTAL' });
              dispatch({ type: 'TOTALCLIENT', payload: num });
            }}
          />
        </View>
        <View style={serviceModalStyles.flatContainerStart}>
          <FontAwesome name='star-o' size={24} color={colors.primary} />
          <Title bold h3 primary ml10>
            POPULAR ADD-ONS
          </Title>
        </View>
        <HorizontalLine mb mt />

        {selectedService.extraServices &&
          selectedService.extraServices.map((exitem, exindex) => {
            if (exitem.name && exitem.price) {
              return (
                <ExtraServiceItem
                  onChange={(item) => {
                    dispatch({
                      type: 'ADDTOCART',
                      payload: {
                        id: item.name.replace(/[^A-Z0-9]/gi, '_').toLowerCase(),
                        type: 'popular',
                        name: item.name,
                        quantity: 1,
                        price: item.price,
                        time: item.time,
                      },
                    });
                    dispatch({ type: 'COUNTTOTAL' });
                  }}
                  key={exitem.name + exindex}
                  {...exitem}
                />
              );
            }
          })}
        {selectedService.moreInfo && (
          <HTMLView value={selectedService.moreInfo} />
        )}
      </View>
    </View>
  );
};

const serviceModalStyles = StyleSheet.create({
  view: {
    height: 50,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: '#ffffff',
  },
  collapseView: {
    padding: 20,
  },
  iconView: {
    padding: 20,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#ffffff',
  },
  flatContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  flatContainerStart: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  flatContainerFooter: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderWidth: 1,
    backgroundColor: Platform.OS === 'ios' ? '#fff' : null,
    borderColor: '#ddd',
    shadowColor: Platform.OS === 'ios' ? 'green' : '#fff',
    shadowOffset: {
      width: Platform.OS === 'ios' ? 3 : 0,
      height: Platform.OS === 'ios' ? 3 : 2,
    },
    shadowOpacity: Platform.OS === 'ios' ? 1 : 0.8,
    shadowRadius: Platform.OS === 'ios' ? null : 10,
    elevation: Platform.OS === 'ios' ? null : 2,
    paddingTop: 10,
  },
  subHeader: {
    alignItems: 'center',
    backgroundColor: colors.backgroundWhite,
    paddingLeft: 10,
    paddingRight: 10,
    paddingVertical: 5,
  },
});

export default ServiceModal;
