import React, { Component } from 'react';
import { StyleSheet, Platform, View, FlatList, Text, Image, TouchableOpacity, YellowBox } from 'react-native';
import { Header } from 'react-native-elements';
 
export default class List extends Component {
  static navigationOptions = {
        header: null,
    };
 constructor(props) {
   super(props);
   this.state = {
     data: require('../employees.json')
   }
   YellowBox.ignoreWarnings([
    'Warning: componentWillMount is deprecated',
    'Warning: componentWillReceiveProps is deprecated',
  ]);
 }

 _onPress(item) {
    this.props.navigation.navigate('Details',
     {pic: item.pic, fName: item.firstName, lName:item.lastName,
      dept:item.department,manager:item.managerName,moNo: item.officePhone,
      email:item.email,addr:item.address});
  }

 
 FlatListItemSeparator = () => {
   return (
     <View
       style={{
         height: .5,
         width: "100%",
         backgroundColor: "#000",
       }}
     />
   );
 }
 renderItem = ({item}) => {
    return (
        <TouchableOpacity onPress={() => this._onPress(item)} style={{flex:1, flexDirection: 'row'}}>
              <Image source = {{ uri: item.pic }} style={styles.imageView} />
              <Text style={styles.textView} >{item.firstName} {item.lastName}</Text>
              <View style={{marginTop:'18%',marginLeft:'-24%'}}>
              <Text style={styles.textSubView}>{item.title}</Text>
              </View>
        </TouchableOpacity>
    );
  };
 render() {
   const { data } = this.state
   return (
     <View style={styles.MainContainer}>
       <Header 
        centerComponent={{ text: 'EMPLOYEES LIST', 
        style: { color: 'Black', fontWeight:'bold',fontSize:20} }}
         containerStyle={{backgroundColor: '#C0C0C0',height:'10%'}} />
       <FlatList
        data={data['employees'] }
        ItemSeparatorComponent = {this.FlatListItemSeparator}
        renderItem={this.renderItem}
        keyExtractor={(item, index) => index.toString()}  
        renderHeader={() => <SearchBar onChange={this.search.bind(this)} />}      
        />
     </View>
   );
 }
}
 
const styles = StyleSheet.create({
MainContainer :{
    justifyContent: 'center',
    flex:1,
    margin: 5,
    marginTop: (Platform.OS === 'ios') ? 20 : 0,
},
imageView: {
    width: '50%',
    height: 100 ,
    margin: 7,
    resizeMode:'contain',
    borderRadius : 7
},
textView: {
    textAlignVertical:'center',
    padding:10,
    color: '#000'
},
textSubView:{
    textAlignVertical:'center',
    padding:10,
    color: 'gray'
}
});