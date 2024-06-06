import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import React from 'react';
import Searchs from "../../assets/images/search.svg";
import Mic from "../../assets/images/mic.svg";
import { Montserrat_600SemiBold } from '@expo-google-fonts/montserrat';
import { search_data } from '../../components/Data/Data';
import { Lato_700Bold } from '@expo-google-fonts/lato';

const Search = () => {
  return (
    <View style={styles.container}>
        <View style={styles.search_input_container}>
                <TextInput
                    style={styles.searchInput}
                    placeholder="Search"
                />
                <TouchableOpacity style={styles.search}>
                    <Searchs />
                </TouchableOpacity>
                <TouchableOpacity style={styles.mic}>
                    <Mic />
                </TouchableOpacity>
            </View>
            <ScrollView showsVerticalScrollIndicator={false} >
          <Text style={styles.browse}>Browse all</Text>
          <View style={styles.search_tab_container}>
            {
              search_data.map((d) => (
                <View style={styles.search_tab} key={d.id}>
                  {d.image}
                  <Text style={styles.tab_text}>{d.text}</Text>
                </View>

              ))
            }
          </View>
          </ScrollView>
    </View>
  )
}

export default Search;

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    backgroundColor: '#ffffff',
  },
  search_input_container: {
    marginTop: 30,
    marginBottom: 24,
    position: 'relative',
},
searchInput: {
    borderRadius: 10,
    backgroundColor: '#F6F6F6',
    paddingVertical: 16,
    paddingLeft: 45,
    paddingRight: 40,
},
search: {
    position: 'absolute',
    bottom: 18,
    left: 10,
},
mic: {
    position: 'absolute',
    bottom: 18,
    right: 10,
},
browse: {
  fontSize: 18,
  lineHeight: 28,
  fontFamily: 'Montserrat_600SemiBold',
  color: '#121212',
},
search_tab_container: {
  flexDirection: 'row',
  flexWrap: 'wrap',
  alignItems: 'center',
  justifyContent: 'center',
  gap: 20,
  paddingTop: 24,
  paddingBottom: 55,
},
search_tab: {
  flexDirection: 'row',
  alignItems: 'center',
  gap: 10,
  backgroundColor: '#F6F6F6',
  borderRadius: 13,
  paddingRight: 20,
  marginTop: 10,
  maxWidth: 150,
  minWidth: 148,
},
tab_text: {
 fontSize: 14,
 lineHeight: 26,
 fontFamily: 'Lato_700Bold',
 color: '#121212',
 textTransform: 'capitalize',
}
})