import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import TestIconItem from './components/TestIconItem';
import React from 'react';

// export default class App extends React.Component {

//   constructor(props) {
//     super(props);
//     this.state = {
//       items: [
//         { id: 1, name: "Ahihi Phong 1" },
//         { id: 2, name: "Ahihi Phong 2" },
//         { id: 3, name: "Ahihi Phong 3" },
//         { id: 4, name: "Ahihi Phong 4" },
//         { id: 5, name: "Ahihi Phong 5" }
//       ]
//     };
//   }

//   render() {
//     const { items } = this.state
//     return (
//       <View style={styles.container}>
//         <ScrollView style={styles.scrollItem}>
//           {items.map(its => (<TestIconItem key={its.id} style={styles.textTitle} item={its} />))}
//         </ScrollView>
//       </View>
//     );
//   }
// }

export default function App(){
  const [state,setState] = useState({
    items: [
              { id: 1, name: "Ahihi Phong 1" },
              { id: 2, name: "Ahihi Phong 2" },
              { id: 3, name: "Ahihi Phong 3" },
              { id: 4, name: "Ahihi Phong 4" },
              { id: 5, name: "Ahihi Phong 5" }
            ]
  })
  const { items } = state
    return (
      <View style={styles.container}>
        <ScrollView style={styles.scrollItem}>
          {items.map(its => (<TestIconItem key={its.id} style={styles.textTitle} item={its} />))}
        </ScrollView>
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'center',
    marginLeft: 25,
    marginRight: 25

  },
  textTitle: {
    backgroundColor: 'red'
  },
  scrollItem: {
    paddingLeft: 15,
    paddingRight: 15
  }

});

