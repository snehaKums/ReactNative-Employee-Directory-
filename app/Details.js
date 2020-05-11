import React,{ Component } from 'react';
import{ View,Text,Image} from 'react-native';
 
export default class Details extends Component {
    constructor(props) {
        super(props);
      }
    render(){
      const {navigation} = this.props;
        pic = navigation.getParam('pic', 'NO-pic');
        fName = navigation.getParam('fName', 'NO-FirstName');
        lName = navigation.getParam('lName', 'NO-LastName');
        dept = navigation.getParam('dept', 'NO-Department');
        manager = navigation.getParam('manager', 'NO-Manager');
        moNo = navigation.getParam('moNo', 'NO-MobileNo');
        email = navigation.getParam('email', 'NO-Email');
        addr = navigation.getParam('addr', 'NO-Address');

        return(
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: '6%',
            marginTop:'5%',
          }}>
        
            <Image style={{
                  height:'40%',
                  width: '30%',
                  borderWidth: 1,
                  borderColor: 'black',
              }} source={{uri:pic}} />
            <Text style={{fontSize:20,margin:2}}>FirstName: {fName}</Text>
            <Text style={{fontSize:20,margin:2}}>LastName: {lName}</Text>
            <Text style={{fontSize:20,margin:2}}>Department: {dept}</Text>
            <Text style={{fontSize:20,margin:2}}>Manager: {manager}</Text>
            <Text style={{fontSize:20,margin:2}}>Mobile NO: {moNo}</Text>
            <Text style={{fontSize:20,margin:2}}>Email: {email}</Text>
            <Text style={{fontSize:20,margin:2}}>Address: {addr}</Text>

            </View>
        )
    }
}