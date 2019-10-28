import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Button,
  Linking,
  StatusBar,
} from 'react-native';

const AlbumDetail = ({album}) => {
  return (
    <View style={styles.card}>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <View style={styles.thumbCard}>
        <Image
          style={styles.thumbImage}
          source={{uri: album.thumbnail_image}}
        />
        <View style={{marginLeft: 10}}>
          <Text style={{fontSize: 22}}>{album.title}</Text>
          <Text>{album.artist}</Text>
        </View>
      </View>

      <View style={styles.albumImageCard}>
        <Image style={styles.albumImage} source={{uri: album.image}} />
      </View>

      <View style={{margin: 10}}>
        <Button title="Buy Now" onPress={() => Linking.openURL(album.url)} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  thumbCard: {
    borderBottomWidth: 2,
    borderColor: 'lightgrey',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  thumbImage: {
    height: 60,
    width: 60,
  },
  albumImageCard: {
    borderBottomWidth: 2,
    borderColor: 'lightgrey',
  },
  albumImage: {
    height: 300,
    margin: 10,
  },
  card: {
    marginHorizontal: 15,
    marginTop: 17,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,

    elevation: 10,
    backgroundColor: 'white',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'lightgrey',
  },
});

export default AlbumDetail;
