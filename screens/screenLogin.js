import React, {useRef,useState,useEffect} from 'react';
import {
  View,
  Animated,
  Image,
  TouchableHighlight,
  Text,
  Easing,
} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';

import styles from '../src/styles';

function Login({navigation}) {
  const startValue = useRef(new Animated.Value(0)).current;
  const startValue2 = useRef(new Animated.Value(0)).current;

  const [offset] = useState(new Animated.ValueXY({x:0,y:100}))
  const [opacity] = useState(new Animated.Value(0))

  useEffect(() => {
    Animated.parallel([
        Animated.spring(offset.y,{
            toValue: 0,
            speed: 4,
            bounciness: 20
        }),
        Animated.timing(opacity,{
            toValue: 1,
            duration: 200
        })
    ]).start()
  },[])

  startValue.setValue(-150);

  Animated.timing(startValue, {
    toValue: 30,
    duration: 2000,
    easing: Easing.linear,
    useNativeDriver: true,
  }).start();

  startValue2.setValue(0);

  Animated.timing(startValue2, {
    toValue: 1,
    duration: 4000,
  }).start();

  return (
    <View style={styles.vw_login}>
      <Animated.Image
        source={require('../assets/logo.png')}
        style={{
          width: 150,
          height: 150,
          transform: [{translateY: startValue}],
          borderRadius: 100,
        }}
      />

      <Animated.View style={[styles.vw_txInp, {opacity: opacity,transform:[{translateY: offset.y,}]}]}>
        <TextInput placeholder="Username" style={styles.txInp} />
        <TextInput
          placeholder="Password"
          style={[styles.txInp, {marginTop: 20}]}
        />
      </Animated.View>

      <TouchableHighlight style={styles.btn_SIN}>
        <Text style={{fontSize: 18}}>Sign In</Text>
      </TouchableHighlight>
    </View>
  );
}

export default Login;
