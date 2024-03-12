import React from 'react';
import styles from './styles';
import { Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Meeting = props => {

    const post = props.post;

    // console.log(post);

    const navigation = useNavigation();

    const onPress = () => {
        navigation.navigate('Existing Meeting', {post: post});
    }

  return (
    <View style={styles.container}>
        <TouchableOpacity style={styles.touchable} onPress={onPress}>
            <View style={{flex: 2}}>
                <Text style={styles.title} numberOfLines={1}>{post.title}</Text>
            </View>
            <View style={{flex: 1}}>
                <Text style={styles.date}>{post.date}</Text>
            </View>
            <View style={{flex: 0.7, backgroundColor: post.color}}>
                <Text style={styles.locationStyle}>{post.location}</Text>
            </View>
        </TouchableOpacity>
    </View>
  );
};

export default Meeting;