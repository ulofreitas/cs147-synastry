// code from https://github.com/azdravchev/Travel-App/blob/search_screen/src/components/Search/SearchMasonry.js

import React from 'react';
import {StyleSheet} from 'react-native';
import MasonryList from '@react-native-seoul/masonry-list';
import SearchCard from './SearchCard';

const SearchMasonry = ({list}) => {
  return (
    <MasonryList
      data={list}
      keyExtractor={item => item.id}
      numColumns={2}
      contentContainerStyle={styles.masonry}
      showsVerticalScrollIndicator={false}
      renderItem={({item, i}) => <SearchCard item={item} index={i} />}
      refreshing={false}
    />
  );
};

const styles = StyleSheet.create({
  masonry: {
    paddingHorizontal: 24,
  },
});

export default SearchMasonry;