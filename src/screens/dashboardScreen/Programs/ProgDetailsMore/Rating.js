import { StyleSheet, Text, View,ScrollView, Image } from 'react-native'
import React from 'react'
import StarRating from 'react-native-star-rating';
import { useState } from 'react';

const Rating = () => {

    const [rating, setRating] = useState(0); // Initial rating value is 0
  
    const onStarRatingPress = (rating) => {
      // Update the state with the selected rating
      setRating(rating);
    };

  return (
    <ScrollView>
    <View style={styles.container1}>
    <Text
      style={{
        fontWeight: 500,
        fontSize: 18,
        color: '#313131',
        marginLeft: 10,
      }}>
      View Ratings
    </Text>
    <Image
      source={require('../../../../assets/dashboard/Notification.png')}
      style={styles.image3}
    />
  </View>

  <View>
    <Image
      source={require('../../../../assets/ProgList/Screenshot.png')}
      style={{
        height: 200,
        width: 350,
        borderRadius: 10,
        marginLeft: 5,
        marginTop: 10,
      }}
    />
  </View>
  <View>
    <Text
      style={{
        color: '#313131',
        fontWeight: 500,
        fontSize: 20,
        marginTop: 10,
        marginLeft: 10,
      }}>
      Aliqua id fugiat nostrud irure
    </Text>
  </View>
  <View style={{flexDirection: 'row'}}>
    <Image
      source={require('../../../../assets/ProgList/Calendar.png')}
      style={{marginTop: 13, marginLeft: 10}}
    />
    <Text style={{color: '#313131', marginTop: 10, marginLeft: 10}}>
      02-21-2022 | 03:50 PM
    </Text>
    <View>
      <Text
        style={{
          fontSize: 18,
          fontWeight: 500,
          color: '#313131',
          marginTop: 10,
          justifyContent: 'flex-end',
          marginLeft: 100,
        }}>
        $14.99
      </Text>
    </View>
  </View>

  <View>
  <StarRating
    disabled={false}
    maxStars={5}
    rating={rating}
    selectedStar={onStarRatingPress}
    starSize={5} // Change the size of the star images
    fullStar=<Image source={require('../../../../assets/Star33.png')} style={{ width: 30, height: 30 }} />
    emptyStar=<Image source={require('../../../../assets/Star33.png')} style={{ width: 30, height: 30 }} />
  />
</View>

    </ScrollView>
  )
}

export default Rating

const styles = StyleSheet.create({
  container1: {
    alignItems: 'center',
    padding: 10,
    flexDirection: 'row',
  },
  image3: {
    marginLeft: 200,
    justifyContent: 'flex-end',
  },
})