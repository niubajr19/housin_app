import React, { useEffect, useRef } from 'react';

import { Animated, ImageBackground, Text, TouchableOpacity, View } from 'react-native';

import { useColorScheme } from 'react-native-appearance';
import { Input } from 'react-native-elements/dist/input/Input';
import { SafeAreaView } from 'react-native-safe-area-context';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import LinearGradient from 'react-native-linear-gradient';

import AppStyleHousin from '../../../../AppStyleHousin';
import style from './style';

const UserCredentials = ({navigation}) => {
  const colorScheme = useColorScheme();
  const styles = style(colorScheme);

  const fadeAnim = useRef(new Animated.Value(0)).current;
  let imageLocal = require('../../../assets/images/ednaldo_bandeira.png');

  const fadeIn = () => {
    // Will change fadeAnim value to 1 in 5 seconds
    Animated.timing(fadeAnim, {
      useNativeDriver:true,
      toValue: 1,
      duration: 500
    }).start();
  };

  useEffect(()=> {
    fadeIn();
  },[])

  return (
    <SafeAreaView style={styles.containerFlex}>
      <View style={styles.flex2Container}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={()=>{
            navigation.goBack();
          }}>
            <MaterialIcons
                          name={'arrow-back-ios'}
                          color={
                            AppStyleHousin.colorSet[colorScheme]
                              .secondThemeBackgroundColor
                          }
                          size={AppStyleHousin.WINDOW_HEIGHT * 0.03}
                        />
          </TouchableOpacity>
        </View>
      </View>
        <Animated.View style={[styles.animatedContainer,{transform: [
              {
                translateY: fadeAnim.interpolate({
                  inputRange: [0,1],
                  outputRange: [600, 0]
                })
              }
            ]}]}>

          <View style={styles.imageContainer}>
            <View style={styles.imageBackground}>
              <ImageBackground
                    resizeMode='cover'
                    source={imageLocal}
                    style={styles.imageStyleFullRadius}
                  />
            </View>
            <View style={styles.nameAndAgeContainer}>
              <Text style={styles.h1TextGrayName}>Lucas A.</Text>
              <Text style={[styles.subTextName, styles.ageText]}>21 anos</Text>
            </View>
          </View>
          <View style={styles.spacingContainer}></View>
          <View style={styles.credentialsContainer}>

            {/* H1 Credentials */}
            <View style={styles.titleContainer}>
              <Text style={styles.h1TextGray}>Editar Credenciais</Text>
            </View>
            {/* /H1 Credentials */}

            {/* Inputs Container */}
            <View style={{height:'73%', width:'100%', paddingBottom:'7%'}}>
              <View style={{height:'25%', width:'100%', alignItems:'center', marginBottom:'2%'}}>
                <Text style={[{alignSelf:'flex-start'}, styles.subText]}>Nome</Text>
                <View style={styles.inputStyle}>
                  <Input inputContainerStyle={styles.inputContainerStyle}/>
                </View>
              </View>
              <View style={{height:'25%', width:'100%', alignItems:'center', marginBottom:'2%'}}>
                <Text style={[{alignSelf:'flex-start'}, styles.subText]}>E-Mail</Text>
                <View style={styles.inputStyle}>
                  <Input inputContainerStyle={styles.inputContainerStyle}/>
                </View>
              </View>
              <View style={{height:'25%', width:'100%', alignItems:'center', marginBottom:'2%'}}>
                <Text style={[{alignSelf:'flex-start'}, styles.subText]}>Senha</Text>
                <View style={styles.inputStyle}>
                  <Input inputContainerStyle={styles.inputContainerStyle}/>
                </View>
              </View>
              <View style={{height:'25%', width:'100%', alignItems:'center', marginBottom:'2%'}}>
                <Text style={[{alignSelf:'flex-start'}, styles.subText]}>Confirmar Senha</Text>
                <View style={styles.inputStyle}>
                  <Input inputContainerStyle={styles.inputContainerStyle}/>
                </View>
              </View>
            </View>
            {/* /Inputs Container */}

            <View style={{height:'15%', width:'100%', justifyContent:"center", alignItems:'flex-end'}}>
            <LinearGradient
            start={{x: 0.0, y: 1}} end={{x: 1, y: 1}}
        style={{height:'65%', width:'60%', justifyContent:'space-between', flexDirection:"row", alignItems:'center', paddingHorizontal:'2%', marginRight:'1%', borderRadius:50, marginBottom:'2%'}}
        colors={[
          AppStyleHousin.colorSet[colorScheme].mainThemeBackgroundColor,
          AppStyleHousin.colorSet[colorScheme].minLinearThemeBackground,
        ]}>
                <Text style={[styles.saveText, {paddingLeft:'5%'}]}>Salvar</Text>
                <View style={{width:AppStyleHousin.WINDOW_WIDTH * 0.08, height:AppStyleHousin.WINDOW_WIDTH * 0.08, backgroundColor:'white', borderRadius:30, alignItems:'center', justifyContent:'center'}}>
                  <MaterialCommunityIcons
                      name={'content-save-outline'}
                      color={
                        AppStyleHousin.colorSet[colorScheme]
                          .minLinearThemeBackground
                      }
                      size={AppStyleHousin.WINDOW_HEIGHT * 0.03}
                    />
                </View>
              </LinearGradient>
            </View>
          </View>
        </Animated.View>
    </SafeAreaView>
  );
};
export default UserCredentials;