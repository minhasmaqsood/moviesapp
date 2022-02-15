import React from 'react'
import { Text, Card, LinearProgress } from 'react-native-elements'
import env from '../../config/Env'

export default CustomCard = ({ title, poster, average, overview }) => {
  const { imageUrl } = env
  return (
    <Card>
      <Card.Title h4>{title}</Card.Title>
      <Card.Image
        style={{ height: 250 }}
        source={{
          uri: `${imageUrl}${poster}`,
        }}
      />
      <Card.Divider />
      <Text style={{ marginBottom: 10 }} numberOfLines={3}>
        User Score : {average * 10}%
      </Text>
      <LinearProgress
        style={{ marginVertical: 10, color: 'red' }}
        value={average / 10}
        variant="determinate"
        color="#1E8C4A"
      />
      <Text style={{ marginBottom: 10 }} numberOfLines={3}>
        {overview}
      </Text>
    </Card>
  )
}

