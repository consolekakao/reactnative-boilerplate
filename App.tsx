import {
  BottomSheetModal,
  BottomSheetModalProvider,
  BottomSheetScrollView,
} from '@gorhom/bottom-sheet';
import React, {useMemo, useRef, type PropsWithChildren} from 'react';
import {
  SafeAreaView,
  Text,
  View,
  TouchableOpacity,
  Linking,
  Alert,
} from 'react-native';
import {GestureHandlerRootView, ScrollView} from 'react-native-gesture-handler';
import {RFValue} from 'react-native-responsive-fontsize';
import {BottomSheetContainer} from './src/components/BottomSheet/BottomSheet';
import {BottomSheetSample} from './src/components/BottomSheet/BottomSheetSample';
import {FULL_SCREEN_HEIGHT} from './src/lib/size';
import axiosInstance from './src/services/axios';
import {SampleInstance} from './src/services/sample';
const App = () => {
  const sampleModal = useRef<BottomSheetModal>(null);
  const handleSampleModalPress = () => sampleModal.current?.present();

  const handleAxiosPress = async () => {
    const service = await SampleInstance().getIpAddress();
    Alert.alert('My ip is ', service);
  };
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <BottomSheetModalProvider>
        <SafeAreaView style={{backgroundColor: '#fff'}}>
          {/* // status bar style */}
          <View style={{display: 'flex', height: FULL_SCREEN_HEIGHT}}>
            <BottomSheetSample ref={sampleModal} />

            {/* start point */}
            <View
              style={{
                display: 'flex',
                alignItems: 'center',
                marginVertical: 160,
              }}>
              <Text style={{fontSize: RFValue(20), textAlign: 'center'}}>
                Thank you using my boiler plate. {'\n'}Have a happy coding!
                {'\n\n\n'}
              </Text>

              <TouchableOpacity
                onPress={() => Linking.openURL('https://bdev.tistory.com')}>
                <Text
                  style={{fontSize: RFValue(20), color: 'rgb(105, 185, 255)'}}>
                  Visit Blog{'\n'}
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() =>
                  Linking.openURL('https://github.com/consolekakao')
                }>
                <Text
                  style={{fontSize: RFValue(20), color: 'rgb(105, 185, 255)'}}>
                  Visit Github
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={{marginTop: 20}}
                onPress={handleSampleModalPress}>
                <Text
                  style={{fontSize: RFValue(20), color: 'rgb(105, 185, 255)'}}>
                  Show Modal
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={{marginTop: 20}}
                onPress={handleAxiosPress}>
                <Text
                  style={{fontSize: RFValue(20), color: 'rgb(105, 185, 255)'}}>
                  Axios Test
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </SafeAreaView>
      </BottomSheetModalProvider>
    </GestureHandlerRootView>
  );
};

export default App;
