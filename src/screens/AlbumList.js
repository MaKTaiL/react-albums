import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import Axios from 'axios';

import AlbumDetail from '../components/AlbumDetail';

const AlbumList = () => {
  const [albums, setAlbums] = useState();

  const searchAlbums = async () => {
    const response = await Axios.get(
      'https://rallycoding.herokuapp.com/api/music_albums',
    );
    setAlbums(response.data);
  };

  useEffect(() => {
    searchAlbums();
  }, []);

  if (!albums) {
    return null;
  }

  return (
    <View>
      <FlatList
        ListFooterComponent={<View style={{marginVertical: 8}}></View>}
        data={albums}
        renderItem={({item}) => {
          return <AlbumDetail album={item} />;
        }}
        keyExtractor={album => album.title}
      />
    </View>
  );
};

AlbumList.navigationOptions = {
  title: 'Álbums',
};

const styles = StyleSheet.create({});

export default AlbumList;
