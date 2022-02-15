import React from 'react'
import { FlatList, Pressable } from 'react-native'
import CustomCard from '../card/Card'


const MovieList = ({ data, onScrollEnd, onOpenMovie }) => {

const renderItem = ({ item }) => {
    const { id, original_title, poster_path, vote_average, overview } = item
    return (
      <Pressable onPress={()=> onOpenMovie(id)}>
      <CustomCard
        key={id}
        title={original_title}
        poster={poster_path}
        average={vote_average}
        overview={overview}
      />
      </Pressable>
    )
  }
  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={item => item.id}
      onEndReached={onScrollEnd}
    />
  )
}

export default MovieList
