import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
        container: {
          flex: 1,
          backgroundColor: '#660099'
        },
        titleContainer: {
          flexDirection: 'row',
          alignItems: 'center',
          gap: 8,
        },
        stepsis:{
          alignContent: 'center',

            borderTopRightRadius: 90,
            borderTopLeftRadius: 90,
            marginTop: 600,
            height: 300,
            width: 430,
            backgroundColor: 'black',
            opacity: 0.7,
            color:'white',
           
          
       },
       input:{
        width: 250,
        height: 50,
        backgroundColor: 'white',
        color: 'orange',
        marginLeft: 90,
       },
       bacon:{
        width: 250,
        height:50,
        backgroundColor: 'red',
       },
       text:{
        color: 'white',
        fontSize: 30,
        marginLeft: 110,
        marginBottom: 100,
        height: 300,
        width: 300,
        
        
       },
        reactLogo: {
          marginTop: 30,
          marginLeft: 40,
          borderRadius: 25,
          height: 55,
          width: 55,
          opacity: 1,
        },
});