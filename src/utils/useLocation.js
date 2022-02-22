import React, { useEffect, useState } from 'react';
import RNLocation from 'react-native-location';
// import { isEmpty, isLoaded, useFirebase } from 'react-redux-firebase';
import { useDispatch, useSelector } from 'react-redux';

const useLocation = (props) => {
  const dispatch = useDispatch();
  const firebase = useFirebase();
  const profile = useSelector(({ firebase: { profile } }) => profile);
  const [location, setLocation] = useState({});

  useEffect(() => {
    RNLocation.requestPermission({
      ios: 'whenInUse', // or 'whenInUse'
      android: {
        detail: 'fine', // or 'fine'
        rationale: {
          title: 'Nailzi wants to get your current location',
          message: 'We use your location to show where you are.',
          buttonPositive: 'OK',
          buttonNegative: 'Cancel',
        },
      },
    }).then((granted) => {
      if (granted) {
        RNLocation.getLatestLocation({ timeout: 60000 }).then(
          (latestLocation) => {
            setLocation((prev) => ({
              ...prev,
              longitude: latestLocation ? latestLocation.longitude : -123.1207,
              latitude: latestLocation ? latestLocation.latitude : 49.2827,
            }));

            // get the current address
            if (isLoaded(profile) && !isEmpty(profile)) {
              if (profile.active) {
                // update to firestore
                firebase.updateProfile({
                  coords: {
                    longitude: latestLocation
                      ? latestLocation.longitude
                      : -123.1207,
                    latitude: latestLocation
                      ? latestLocation.latitude
                      : 49.2827,
                  },
                });
              } else {
                firebase.updateProfile({
                  coords: {
                    longitude: 0,
                    latitude: 0,
                  },
                });
              }
            }

            getAddress({
              latitude: latestLocation ? latestLocation.latitude : 49.2827,
              longitude: latestLocation ? latestLocation.longitude : -123.1207,
            });
          }
        );
      }
    });
  }, []);

  const getAddress = (locationdata) => {
    fetch(
      `https://api.tiles.mapbox.com/v4/geocode/mapbox.places-v1/${locationdata.longitude},${locationdata.latitude}.json?access_token=pk.eyJ1IjoibmFpbHppYXBwIiwiYSI6ImNrcW1hdTZ5czBnbjEyd3F3MGx3dmRzemUifQ.ecpUetqEY2fayrduMdxbww`,
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

export default useLocation;
