import {BottomSheetBackdrop, BottomSheetModal} from '@gorhom/bottom-sheet';
import React from 'react';
import {View, Text} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import styled from 'styled-components';

/**
 * 
 * sample component
 * 
 * const itemInfoModalRef = useRef<BottomSheetModal>(null);
 * const handleItemInfoModalPress = () => itemInfoModalRef.current?.present();


const BottomSheetLoadingType = React.forwardRef((props: any, ref: any) => {
  const snapPoints = useMemo(() => ['60%', '60%'], []);
  const closeModal = () => ref.current.close();

  const handlePress = (v: string) => {
    dispatch(setLoadingType(v));
    closeModal();
  };

  return (
    <BottomSheetContainer
      ref={ref}
      snapPoints={snapPoints}
      <BottomSheetScrollView>
        <View style={{flex: 1, alignItems: 'center'}}>
          <Text>Hello</Text>
        </View>
      </BottomSheetScrollView>
    </BottomSheetContainer>
  );
});
 */

const renderBackdrop = (props: any) => (
  <BottomSheetBackdrop
    {...props}
    pressBehavior="close"
    appearsOnIndex={0}
    disappearsOnIndex={-1}
    //force rendered first dackdrop balck screen.
  />
);

export const BottomSheetContainer = React.forwardRef((props: any, ref: any) => {
  const {snapPoints} = props;

  return (
    <BottomSheetModal
      ref={ref}
      index={0}
      snapPoints={snapPoints}
      backdropComponent={renderBackdrop}
      style={{alignItems: 'center'}}>
      {props.children}
    </BottomSheetModal>
  );
});
