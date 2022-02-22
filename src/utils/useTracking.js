import { useEffect, useState } from 'react';
import { Alert } from 'react-native';
import BackgroundGeolocation from '@mauron85/react-native-background-geolocation';
import { useDispatch, useSelector } from 'react-redux';
import { isEmpty, isLoaded, useFirebase } from 'react-redux-firebase';

const useTracking = (isActive: boolean) => {
  const dispatch = useDispatch();
  const firebase = useFirebase();
  const profile = useSelector(({ firebase: { profile } }) => profile);
  const [location, setLocation] = useState([]);

  useEffect(() => {
    if (!isActive) {
      return;
    }
    BackgroundGeolocation.configure({
      desiredAccuracy: BackgroundGeolocation.HIGH_ACCURACY,
      stationaryRadius: 100,
      distanceFilter: 50,
      notificationTitle: 'Nailzi',
      notificationText: 'Nailzi tracking your location',
      //debug: true,
      startOnBoot: false,
      stopOnTerminate: true,
      locationProvider: BackgroundGeolocation.DISTANCE_FILTER_PROVIDER, // DISTANCE_FILTER_PROVIDER for
      interval: 10000,
      fastestInterval: 10000,
      activitiesInterval: 10000,
      stopOnStillActivity: true,
    });

    BackgroundGeolocation.on('location', (location) => {
      setLocation((prev) => ({
        ...prev,
        longitude: location.longitude,
        latitude: location.latitude,
      }));

      // get the current address
      if (isLoaded(profile) && !isEmpty(profile)) {
        // update to firestore
        firebase.updateProfile({
          coords: {
            longitude: location.longitude,
            latitude: location.latitude,
          },
        });
      }

      getAddress({
        latitude: location.latitude,
        longitude: location.longitude,
      });

      BackgroundGeolocation.startTask((taskKey) => {
        BackgroundGeolocation.endTask(taskKey);
      });
    });

    BackgroundGeolocation.on('stationary', (stationaryLocation) => {
      // handle stationary locations here
    });

    BackgroundGeolocation.on('error', (error) => {
      //console.log('[ERROR] BackgroundGeolocation error:', error);
    });

    BackgroundGeolocation.on('start', () => {
      //console.log('[INFO] BackgroundGeolocation service has been started');
    });

    BackgroundGeolocation.on('stop', () => {
      //console.log('[INFO] BackgroundGeolocation service has been stopped');
    });

    BackgroundGeolocation.on('authorization', (status) => {
      if (status !== BackgroundGeolocation.AUTHORIZED) {
        // we need to set delay or otherwise alert may not be shown
        setTimeout(
          () =>
            Alert.alert(
              'App requires location tracking permission',
              'Would you like to open app settings?',
              [
                {
                  text: 'Yes',
                  onPress: () => BackgroundGeolocation.showAppSettings(),
                },
                {
                  text: 'No',
                  onPress: () => console.log('No Pressed'),
                  style: 'cancel',
                },
              ]
            ),
          1000
        );
      }
    });

    BackgroundGeolocation.on('background', () => {
      console.log('[INFO] App is in background');
    });

    BackgroundGeolocation.on('foreground', () => {
      console.log('[INFO] App is in foreground');
    });

    BackgroundGeolocation.checkStatus((status) => {
      // you don't need to check status before start (this is just the example)
      if (!status.isRunning) {
        BackgroundGeolocation.start(); //triggers start on start event
      }
    });

    return () => {
      BackgroundGeolocation.removeAllListeners();
    };
  }, [isActive]);

  const getAddress = (locationdata) => {
    fetch(
      `https://api.tiles.mapbox.com/v4/geocode/mapbox.places-v1/${locationdata.longitude},${locationdata.latitude}.json?access_token=pk.eyJ1IjoidGFyZXFheml6MDA2NSIsImEiOiJjamNvbjQ3cnAyNXgyMzNybnlmN3p5NGFkIn0.zbs39bVfUf9ztz3AxnNTDg`,
      {
        method: 'GET',
      }
    )
      .then((response) => response.json())
      .then((result) => {
        dispatch({
          type: 'ADDLOCATION',
          payload: {
            location: locationdata,
            address: result.features[0].text,
          },
        });
      })
      .catch((error) => console.log('error', error));
  };

  return { location };
};

export default useTracking;
