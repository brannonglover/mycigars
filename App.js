import { useState } from 'react';
import { AppRegistry, StyleSheet, Text, SafeAreaView, View, FlatList } from 'react-native';
import { ApolloClient, InMemoryCache, ApolloProvider, useQuery, gql } from '@apollo/client';
import AddCigarBtn from './components/AddCigarBtn'
import AddFaveCigar from './components/AddFaveCigar';

const client = new ApolloClient({
  uri: 'https://us-east-1.aws.realm.mongodb.com/api/client/v2.0/app/mycigars-brmig/graphql',
  headers: {
    "apiKey": "KFjLr6KlyIQmk6nMzE2fWFevVj8Tjbrbohdxx31RBKUOZHeRAgYV9Ay10TZQvYMe",
  },
  cache: new InMemoryCache()
});

const getCigars = gql`
  query {
    cigars {
      binder
      brand
      description
      filler
      image
      name
      wrapper
    }
  }
`;

function App() {
  const [addFaveCigar, setAddFaveCigar] = useState(false);
  const { data } = useQuery(getCigars);
  console.log(data);
  return (
    <>
      <SafeAreaView>
        <Text style={styles.mainTitle}>My Cigars</Text>
        <FlatList
          style={styles.listItems}
          renderItem={({ item }) => (
            <View key={item.key} style={styles.cigar}>
              <Text style={styles.listItem}>{item.name[0]}</Text>
              <View style={styles.subTextWrap}>
                <Text style={styles.subText}>{item.name[1]}</Text><Text style={styles.subText}>{ item.name[2] }</Text>
              </View>
              <View>

              </View>
            </View>
          )}
        />
      </SafeAreaView>
      <AddCigarBtn bgColor='red' shape='round' setAddFaveCigar={setAddFaveCigar} />
      {addFaveCigar && <AddFaveCigar />}
    </>
  );
}

export default function AppolloWrap() {
  return (
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  )
}

AppRegistry.registerComponent('mycigars', () => AppolloWrap);

const styles = StyleSheet.create({
  mainTitle: {
    fontFamily: 'Verdana',
    fontSize: 25,
    textAlign: 'center'
  },
  cigar: {
    paddingBottom: 15
  },
  listItems: {
    paddingTop: 20,
    paddingHorizontal: 20
  },
  listItem: {
    paddingVertical: 5,
    fontSize: 18
  },
  subTextWrap: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  subText: {
    fontSize: 12
  }
});
