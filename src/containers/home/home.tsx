
  import React from 'react';
 import {
   SafeAreaView,
   ScrollView,
   StatusBar,
   StyleSheet,
   Text,
   View,
   TextInput
 } from 'react-native';
 
 
 const Home = () => {
   const [search, setSearch] = React.useState<string>('');
   return (
     <SafeAreaView style={styles.safeAreaView}>
       <StatusBar
         barStyle={'light-content'}
        //  backgroundColor={styles.backgroundColor}
       />
       <ScrollView
         contentInsetAdjustmentBehavior="automatic"
         style={styles.container}
        >
            <View>
                <Text style={styles.searchText}>Search</Text>
                <TextInput style={styles.searchTextBox} value={search} onChangeText={(val)=>setSearch(val)}/>
            </View>
            <View>
              
            </View>
       </ScrollView>
     </SafeAreaView>
   );
 };
 

 const styles = StyleSheet.create({
    safeAreaView:{
      flex:1,
      backgroundColor: '#001315',
      padding: 20,
    },
    container:{
      flex:1,
      backgroundColor: '#001315',
      padding: 20,
    },
    searchText: {
     fontFamily: 'AvertaStd-Bold',
     fontWeight: "700",
     fontSize: 14,
     lineHeight: 17,
     color: "#FFFFFF"
   },
   searchTextBox:{
    fontFamily: 'AvertaStd-Light',
    fontWeight: "400",
    fontSize: 14,
    lineHeight: 17,
    color: "#989898",
    backgroundColor: "#003238",
    borderRadius: 5,
    padding: 8
   }
   
 });
 
 export default Home;
 