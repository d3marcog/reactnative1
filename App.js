import React, {Fragment} from 'react';
import React, { Component } from 'react'
import { AppRegistry, Text, View } from 'react-native';
import { Card, ListItem, Button, Icon } from 'react-native-elements'
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';


class App extends React.Component {
  constructor(props) {
      super(props)
      this.state = {
        loading:true,
        films: []
      }
    }

    componentDidMount() {
      this.setState({loading:true})
      fetch('https://ghibliapi.herokuapp.com/films')
        .then(response => response.json())
        .then(data => {
            this.setState({
              loading: false,
              films:data
            })
        })
      }
      
         render() {
          let { loading, films } = this.state;
          if(loading) {
            return <View>
              <Text style={{bold}}>Loading...</Text>
            </View>;
          } 
          else {
            return (
          
    

  
    <View>
      {films.map(films => ( 
  <FlatList key={films.id}>
    
      <Text style={styles.lightText}>{films.title}</Text>
      <Text style={styles.lightText}>{films.release_date}</Text>
      <Text style={styles.lightText}
        >{films.description}
      </Text>
    
      <Text style={styles.lightText}>
      <small>Rating: {films.rt_score}</small>
    </Text>
  </FlatList>
  )
  )}
</View>
            )

      }
        }
      }    
    




      AppRegistry.registerComponent('App', () => App)

