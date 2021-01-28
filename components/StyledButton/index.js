import React from 'react'
import { View, Text, Pressable } from 'react-native'
import styles from './styles';

const StyledButton = (props) => {

    // const type = props.type;
    // const content = props.content;
    // const onPress = props.onPress;

    const {type, content, onPress} = props;

    const backgroundColor = type === 'primary' ? '#0E0E1B' :'#F5F0F6';
    const text = type === 'primary' ? 'white' : 'black';

    return (
        <View style={styles.container}>
            <Pressable
                style={[styles.button, {backgroundColor: backgroundColor}]}
                onPress={() => onPress()}
            >
                <Text style={[styles.text, {color: text}]}>{content}</Text>
            </Pressable>
        </View>
    )
}

export default StyledButton;
