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
} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {RFValue} from 'react-native-responsive-fontsize';
import {BottomSheetContainer} from './src/components/BottomSheet';
import {FULL_SCREEN_HEIGHT} from './src/lib/size';
const App = () => {
  const sampleModal = useRef<BottomSheetModal>(null);
  const handleSampleModalPress = () => sampleModal.current?.present();

  const BottomSheetLoadingType = React.forwardRef((props: any, ref: any) => {
    const snapPoints = useMemo(() => ['90%', '90%'], []);
    const closeModal = () => ref.current.close();

    const handlePress = (v: string) => {
      closeModal();
    };

    return (
      <BottomSheetContainer ref={ref} snapPoints={snapPoints}>
        <Text>Happy coding!</Text>
        <Text>Hello</Text>

        {/* <BottomSheetScrollView></BottomSheetScrollView> */}
      </BottomSheetContainer>
    );
  });

  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <BottomSheetModalProvider>
        <SafeAreaView style={{backgroundColor: '#fff'}}>
          {/* // status bar style */}
          <View style={{display: 'flex', height: FULL_SCREEN_HEIGHT}}>
            <BottomSheetLoadingType ref={sampleModal} />

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
            </View>
          </View>
        </SafeAreaView>
      </BottomSheetModalProvider>
    </GestureHandlerRootView>
  );
};

export default App;
