import React, {useEffect, useState} from 'react';
import {Modal, StyleSheet, View, Image, Button} from 'react-native';
import {Card, LinearProgress} from 'react-native-elements';
import axios from '../../config/axios';
import env from '../../config/Env';

const MovieDetails = ({modalVisible, handleClose, movieId}) => {
  const {baseUrl, API_KEY, imageUrl} = env;
  const [movie, setMovie] = useState({});
  console.log('Movie Id', movieId);

  useEffect(() => {
    getMovie();
  }, [movieId]);

  const getMovie = async () => {
    const movie = await axios.get(
      `${baseUrl}/3/movie/${movieId}?api_key=${API_KEY}`,
    );
    setMovie(movie.data);
    console.log('movie is here', movie);
  };

  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        visible={modalVisible}
        onRequestClose={() => {
          handleClose;
        }}>
        <View style={styles.centeredView}>
          <Card>
            <Card.Title h4>{movie?.original_title}</Card.Title>

            <Image
              source={{uri: `${imageUrl}${movie?.poster_path}`}}
              style={styles.poster}
            />
            <Card.Title h5>{movie?.tagline}</Card.Title>
            <LinearProgress
              style={{marginVertical: 10, color: 'red'}}
              value={movie?.vote_average / 10}
              variant="determinate"
              color="#1E8C4A"
            />
            <View style={styles.headingLine}>
              <Card.Title h5 style={{textAlign: 'right'}}>
                User Score :
              </Card.Title>
              <Card.Title h5>{movie?.vote_average * 10}%</Card.Title>
            </View>
            <Card.Title h4 style={{textAlign: 'left'}}>
              Overview
            </Card.Title>

            <Card.Title h5 style={{textAlign: 'left'}}>
              {movie?.overview}
            </Card.Title>
            <View style={styles.headingLine}>
              <Card.Title h5 style={{textAlign: 'left'}}>
                Status :{' '}
              </Card.Title>
              <Card.Title h5 style={{textAlign: 'left'}}>
                {movie?.status}
              </Card.Title>
            </View>
            <Card.Title h5 style={{textAlign: 'left'}}>
              Genres:
            </Card.Title>
            <View style={styles.genresContainer}>
              {/* {movie?.genres?.length >0 && (movie?.genres.map(item => (
                <Card.Title h5 style={{textAlign: 'left'}}>
                  {item?.name}
                </Card.Title>
              )))} */}
            </View>
          </Card>
          <Button onPress={handleClose} title={'Close'} color="#f194ff" />
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    marginTop: 45,
  },
  poster: {height: 250, width: 300, alignSelf: 'center'},
  headingLine: {flexDirection: 'row', alignItems: 'center'},
  genresContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});

export default MovieDetails;
