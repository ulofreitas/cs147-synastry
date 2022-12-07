// code from https://github.com/azdravchev/Travel-App/blob/search_screen/src/components/Search/SearchCard.js

import React from 'react';
import {View, Text, StyleSheet} from 'react-native';


import Card from './Card';
import CardMedia from './CardMedia';
import CardContent from './CardContent';


import Animated, {FadeInDown} from 'react-native-reanimated';

const SearchCard = ({item, index}) => {
  const even = index % 2 === 0;
  return (
    <Animated.View
      entering={FadeInDown.delay(index < 6 ? index * 80 : 0)}
      style={{
        paddingTop: index === 1 ? 24 : 0,
        paddingLeft: !even ? 24 / 2 : 0,
        paddingRight: even ? 24 / 2 : 0,
        paddingBottom: 24,
      }}>
      <Card
        style={{
          width: '100%',
          height: index % 3 === 0 ? 180 : 240,
        }}>
          <CardMedia source={item.image} borderBottomRadius />
        <CardContent>
          <View style={styles.titleBox}>
            <Text style={styles.title} numberOfLines={2}>
              {item.caption}
            </Text>
          </View>
        </CardContent>
      </Card>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  media: {
    flex: 1,
  },
  titleBox: {
    flex: 1,
  },
  title: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#0F0B4D',
    marginVertical: 4,
  },
});

export default SearchCard;