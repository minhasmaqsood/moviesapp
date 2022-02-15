import React, { useEffect, useState } from 'react'
import { View, StyleSheet, Text } from 'react-native'
import axios from '../config/axios'
import env from '../config/Env'
import CustomButton from '../components/button/Button'
import MovieList from '../components/list/MovieList'
import MovieDetails from '../components/modal/MovieDetails'

const Home = () => {
  const { baseUrl, API_KEY } = env
  const [data, setData] = useState([])
  const [page, setPage] = useState(1)
  const [listType, setListType] = useState('popular')
  const [showDetail, setShowDetail] = useState(false)
  const [selectedMovie, setSelectedMovie] = useState(null)

  useEffect(() => {
    getMovies()
  }, [page, listType])

  const getMovies = async () => {
    let type = listType === 'popular' ? 'popular' : 'now_playing'

    const movies = await axios.get(
      `${baseUrl}/3/movie/${type}?api_key=${API_KEY}&language=en_Us&page=${page}`
    )
    setData([...data, ...movies.data.results])
  }
  const onScrollEnd = async () => {
    setPage(page + 1)
  }

  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <CustomButton
          title={'Popular'}
          disabled={listType === 'popular' && true}
          onPress={() => {
            setData([])
            setListType('popular')
            setPage(1)
          }}
        />
        <CustomButton
          title={'Latest'}
          disabled={listType === 'latest' && true}
          onPress={() => {
            setData([])
            setListType('latest')
            setPage(1)
          }}
        />
      </View>
      <Text style={styles.heading}>{listType.toUpperCase()}</Text>
      <MovieList
        data={data}
        onEndReached={onScrollEnd}
        onOpenMovie={id => {
          setSelectedMovie(id)
          setShowDetail(true)
        }}
      />
      {selectedMovie && <MovieDetails
        modalVisible={showDetail}
        handleClose={() => setShowDetail(!showDetail)}
        movieId={selectedMovie}
      />}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttonContainer: { flexDirection: 'row', justifyContent: 'center' },
  heading: {
    fontWeight: 'bold',
    fontSize: 23,
    color: '#5221D3',
    marginHorizontal: 15,
  },
})

export default Home
