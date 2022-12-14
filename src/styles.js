import React from 'react';
import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
  vw_login:{
    flexGrow: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  txInp:{
    borderRadius: 20,
    borderColor: 'black',
    width: '80%',
    height: 50,
    backgroundColor: 'red',
    fontSize: 18,
    borderWidth: 3,
  },
  vw_txInp:{
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'lightgray',
    width: '80%',
    height: 200,
    marginTop: 50,
    borderRadius: 20,
  },
  btn_SIN:{
    justifyContent: 'center',
    alignItems: 'center',
    width: '80%',
    height: 50,
    backgroundColor: 'red',
    borderRadius: 30,
    marginTop: 20,
    borderWidth: 3
  }
})

export default styles