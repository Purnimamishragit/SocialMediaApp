import React from "react";
import { TouchableOpacity, View,Text, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  MaterialIcons,
  Ionicons,
  Feather,
  Foundation,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
const Feed = () => {
  function renderHead() {
    return (
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom:575,
          marginHorizontal:140
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            
          }}
        >
          <Text style={{ marginRight: 200,fontSize:'Large' }}>My Networks+</Text>
        </View>
        <View style={{
            flexDirection:'row',
            justifyContent:'center'
        }}>
            <TouchableOpacity style={{
                height:35,
                width:35,
                alignItems:"center",
                justifyContent:'center',
                backgroundColor:'white',
                shadowColor:"#182748",
                shadowOffset:{
                  width:0,
                  height:4.5,
                },
                shadowOpacity:0.12,
                shadowRadius:6.5,
                elevation:2,
                borderRadius:22
            }}>
                <Ionicons name="filter" size={24} color={'black'}/>
            </TouchableOpacity>
            <LinearGradient 
            colors={['black','purple']}
            style={{
              height:35,
                width:35,
                alignItems:"center",
                justifyContent:'center',
                backgroundColor:'purple',
                shadowColor:"#182748",
                shadowOffset:{
                  width:0,
                  height:4.5,
                },
                shadowOpacity:0.12,
                shadowRadius:6.5,
                elevation:2,
                borderRadius:22,
                marginLeft:2
            }}>
              <Feather 
                name="plus"
                size={24}
                color={'black'}/>
            </LinearGradient>
        </View>
      </View>
    );
  }
  function renderSuggestionsContainer(){
    return(
      <View style={{marginBottom:20}}>
        <Text>TimeLine</Text>
        <Text>Friends</Text>
      </View>
    )
  }
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <View style={{ flex: 1, paddingHorizontal: 22 }}>
        {renderHead()}
        <ScrollView>
          {renderSuggestionsContainer()}
        </ScrollView>
        </View>
    </SafeAreaView>
  );
};

export default Feed;
