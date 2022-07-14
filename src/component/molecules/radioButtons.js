import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import styles from '../../scenes/styles.js';

const RadioButton = ({ onPress, selected, children }) => {
    return (
      <View style={styles.radioButtonContainer}>
        <TouchableOpacity onPress={onPress} style={styles.radioButton}>
          {selected ? <View style={styles.radioButtonIcon} /> : null}
        </TouchableOpacity>
        <TouchableOpacity onPress={onPress}>
          <Text style={styles.radioButtonText}>{children}</Text>
        </TouchableOpacity>
      </View>
    );
  };

/*
A METTRE DANS LA PAGE OÙ ON APPELLE LES BOUTONS RADIOS

IMPORTATION:

import RadioButton from 'radioButtons.js'
import RadioButton from '../component/molecules/radioButtons.js'


const [isLiked, setIsLiked] = useState([
    { id: 1, value: true, name: "Yes", selected: false },
    { id: 2, value: false, name: "No", selected: false }
]);

const onRadioBtnClick = (item) => {
    let updatedState = isLiked.map((isLikedItem) =>
        isLikedItem.id === item.id ? { ...isLikedItem, selected: true } : { ...isLikedItem, selected: false }
    ); // Operateur Ternaire
setIsLiked(updatedState);
};

POUR APPELLER LES BOUTONS RADIOS: 

{isLiked.map((item) => (
    <RadioButton
    onPress={() => onRadioBtnClick(item)}
    selected={item.selected}
    key={item.id}
    >
    {item.name}
    </RadioButton>
))}


*/

export default RadioButton;