/** @format */
import { useState, useEffect } from "react";
import {
  Text,
  View,
  StyleSheet,
  ActivityIndicator,
  FlatList,
} from "react-native";

const url = "http swapi.py4e.com/api/planets/1/";

export default function PokeStar() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then(
        (result) => {
          setData(result.results);
          setIsLoading(false);
        },
        (error) => {
          setError(error);
          setIsLoading(false);
        }
      );
  }, []);

  console.log(data);
  console.log(error);

  const getContent = () => {
    if (isLoading) {
      return (
        <View>
          <Text>Loading Data</Text>
          <ActivityIndicator
            size='large'
            color='green'
          />
        </View>
      );
    }
    if (error) {
      return <Text>Error</Text>;
    }
    return (
      <View>
        <FlatList
          data={data}
          renderItem={({ item }) => (
            <View style={styles.cardCOntainer}>
              <Text>Name: {item.name}</Text>
                <Text>Height: {item.height}</Text>
                <Text>Mass: {item.mass}</Text>
                <Text>Created: {item.created}</Text>
                <Text>Edited: {item.edited}</Text>
                <Text>Films: {item.films}</Text>
            </View>
          )}
        />
      </View>
    );
  };

  return <View>{getContent()}</View>;
}
const styles = StyleSheet.create({
  textProps: {
    fontSize: 20,
    color: "red",
  },
  cardCOntainer: { 
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    boxColor: "#000",
    boxOffset: {
      width: 0,
      height: 2,
    },
    boxOpacity: 0.25,
    boxRadius: 3.84,
    elevation: 5,
    marginTop: 10,
  },
  image : {
    width: 200,
    height: 200,
  },
  errorStyle: {
    fontSize: 20,
    color: "red",
  },    
})