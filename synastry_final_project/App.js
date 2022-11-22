import { StyleSheet, Image, SafeAreaView, Text, View, Pressable, FlatList, ScrollView, TextInput } from "react-native";
import { Themes, Images } from "./assets/Themes";
import { ImageBackground } from "react-native-web";
import { C } from "caniuse-lite/data/agents";
import { warmUpAsync } from "expo-web-browser";
import { Ionicons } from '@expo/vector-icons';
import { WebView } from "react-native-webview";
import { NavigationContainer, useIsFocused } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Dimensions } from 'react-native';
import UploadImage from "./UploadImage";
import React, { useState, useEffect } from 'react';
import AddCommunity from '../synastry_final_project/assets/add_community.png';






const Stack = createStackNavigator();
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;





/* The main dictionary used for updating Planet information


  Feel free to define any new keys as you see necessary. Functionality wise, if someone creates
  a planet, please update the image parameter!


  Current Keys:
  id: identifies what planet number we're on -- helpful mainly for the backend!
  img: the image that is shown for that planet -- (make sure to update this in planet creations!)
  title: The name that shows up under the planet


  IMPORTANT NOTE: REQUIRE ONLYYYY TAKES IN STRING LITERALS, SO WHEN WE USE IMAGE VARIABLES, 

  THE VARIABLE VALUE MUST INCLUDE THE RQUIRE FUNCTION IN IT, AND THE CALL MUST OMIT THE REQUIRE
*/

// Usage of Image.resolveAssetSource to get URI based off of https://medium.com/swlh/how-to-obtain-a-uri-for-an-image-asset-in-react-native-with-expo-88dfbe1023b8
const SolarSystemData = [
  {

    id: '1',
    img: Image.resolveAssetSource(AddCommunity).uri,
    title: 'Planet 1',
  },
  {
    id: '2',
    img: Image.resolveAssetSource(AddCommunity).uri,
    title: 'Planet 2',
  },
  {
    id: '3',
    img: Image.resolveAssetSource(AddCommunity).uri,
    title: 'Planet 3',
  },
  {
    id: '4',
    img: Image.resolveAssetSource(AddCommunity).uri,
    title: 'Planet 4',
  },
  {
    id: '5',
    img: Image.resolveAssetSource(AddCommunity).uri,
    title: 'Planet 5',
  },
  {
    id: '6',
    img: Image.resolveAssetSource(AddCommunity).uri,
    title: 'Planet 6',
  },

];





export default function App() {


  // two functions that update text / searched values --> This is used for the TextInput functionality  
  let [text, setText] = useState('');


  // Function that renders each planet in the dictionary

  // item is the solarsystem dictionary!
  const renderItem = (item, navigation) => {
    console.log(item.title)
    const img = item.img
    //console.log(img)
    return (


      // Creates rows of three planets, each planet is a pressable
      <View style={styles.planet_rows}>
        <Text style={styles.planet_names}> {item.title}</Text>


        <Pressable style={styles.button} onPress={() => {
          // navigates to planet screen when a planet is clicked, and passes the planet entry in the dictionary

          // i.e if planet 6 is clicked, all dict planet 6 values are passed
          navigation.navigate('Visiting a Planet', { solarSystem: item });

        }}
        >

          <Image
            style={styles.planet}
            // This is the image that shows up for each planet, so if img is changed for a planet, so will
            // its image
            source={{uri: item.img}}>

          </Image>

        </Pressable>


      </View>
    )

  };



  // This is the main solar system page
  function HomePage({ navigation }) {
    const isFocused = useIsFocused();

    return (
      // These are all the rendered planets, rendered using a flatlist
      <SafeAreaView style={styles.container}>
        {isFocused &&
          <View style={styles.planets_visual}>
            <FlatList
              data={SolarSystemData}
              renderItem={({ item }) => renderItem(item, navigation)}
              keyExtractor={item => item.id}
              numColumns={3}
            />
          </View>
        }


        {/* These is the button used for searching for a planet */}

        <View style={styles.navbuttons}>

          <Pressable style={styles.explore_button} onPress={() => {
            navigation.navigate('Search For a Planet');
          }}
          >

            {/* This is the image used for searching for a planet */}
            <Image
              style={styles.button_image}

              source={require('../synastry_final_project/assets/discover_communities.png')}>

            </Image>




          </Pressable>



          {/* This is the button used for creating  a planet */}
          <Pressable style={styles.add_button} onPress={() => {
            navigation.navigate('Create a Planet');
          }}
          >
            {/* This is the image used for creating  a planet */}
            <Image
              style={styles.button_image}

              source={require('../synastry_final_project/assets/add_community.png')}>

            </Image>




          </Pressable>






        </View>

        {/* This is the sun button, it is a pressable*/}
        <View style={styles.sun}>
          <Pressable style={styles.button} onPress={() => {
            navigation.navigate('Your Personal Space');
          }}
          >

            {/* This is the image used for the sun*/}
            <Image
              style={styles.sun_image}

              source={require('../synastry_final_project/assets/Sun.png')}>

            </Image>
          </Pressable>
        </View>



      </SafeAreaView>

    )
  }

  function SunPage({ navigation }) {


    // TODO:
    // Populate info in your dictionary in order to make sure changes persist
    return (


      // The sun uses a scroll view so that you can scroll around

      <ScrollView style={styles.scrollView}>



        {/* This section handles the what's hot area, the text is the label, and the TextInput is
      to allow you to change what's shown -- make sure to populate this into a dict so changes
      persist*/}

        <View style={styles.whatsHotHeader}>


          <Text style={styles.whatsHotHeaderText}>
            Tell us what's hot!
          </Text>

        </View>
        <View style={styles.whatsHot}>



          {/*TODO POPULATE THIS INTO A DICTIONARY */}
          <TextInput
            style={styles.whatsHot_textbox}


            placeholder={" Tell us how you're feeling...   "}

            onChange={newText => setText(newText)}    // uses the setText function and returns text, the updates input
            value={text}  // text is the updated input --> store this in a dictionary and ensure change persists


          />





        </View>


        {/* This section defines three rows, each with two columns for pictures for people to upload
      
      TODO:
      
      MAKE SURE THE CHANGES PERSIST --> THE UPLOAD IMAGE COMPONENT IS WHAT WORKS THE MAGIC, PLEASE FAMILIARIZE YOURSELF WITH THIS AND MAKE
      SURE U STORE THE UPDATED IMAGE PARAMETER IN A GLOBAL DICTIONARY HERE*/}

        <View style={styles.photos}>
          <View style={styles.sunScreen_rows}>

            <View style={styles.sunScreen_col}>
              <UploadImage />
              <Text style={{ marginVertical: 20, fontSize: 16 }}>This, is the first photo</Text>

            </View>
            <View style={styles.sunScreen_col}>
              <UploadImage />
              <Text style={{ marginVertical: 20, fontSize: 16 }}>This, is the second photo</Text>
            </View>


          </View>
          <View style={styles.sunScreen_rows}>
            <View style={styles.sunScreen_col}>
              <UploadImage />
              <Text style={{ marginVertical: 20, fontSize: 16 }}>This, is the third photo</Text>

            </View>
            <View style={styles.sunScreen_col}>
              <UploadImage />
              <Text style={{ marginVertical: 20, fontSize: 16 }}>This, is the fourth photo</Text>
            </View>


          </View>



          <View style={styles.sunScreen_rows}>
            <View style={styles.sunScreen_col}>
              <UploadImage />
              <Text style={{ marginVertical: 20, fontSize: 16 }}>This, is the fifth photo</Text>

            </View>
            <View style={styles.sunScreen_col}>
              <UploadImage />
              <Text style={{ marginVertical: 20, fontSize: 16 }}>This, is the sixth photo</Text>
            </View>

          </View>
        </View>

      </ScrollView>


    )
  }


  // This is an empty screen at the moment, but this is meant to create planets, basically design how u like, just make sure
  // to update the SolarSystemData dictionary when you create a planet 

  // FUNCTIONALITY: replace a planet with a new planet (ideally one the user wants to replace or an empty one)
  function PlanetCreation({ navigation }) {
    let [replace, setReplace] = useState('');
    let [name, setName] = useState('');
    let [image, setImage] = useState(null);

    // Code to get image data from UploadImage child component based off of https://javascript.plainenglish.io/how-to-pass-props-from-child-to-parent-component-in-react-d90752ff4d01
    const getImageFromUploader = (image_data) => {
      console.log("getImageFromUploader");
      console.log(image_data);
      setImage(image_data);
    }

    const createPlanet = () => {
      /*let last_id = SolarSystemData[SolarSystemData.length - 1].id;
      SolarSystemData.push({
        id: toString(last_id + 1),
        img: 'todo',
        title: name,
      })*/
      for (let i = 0; i < SolarSystemData.length; i++) {
        if (SolarSystemData[i].title == replace) {
          SolarSystemData[i].title = name;
          SolarSystemData[i].img = image;
        }
      }
      console.log(SolarSystemData);
      navigation.navigate('Your Solar System');
    }

    return (
      <SafeAreaView style={styles.search_container}>
        <View style={{ flexDirection: 'column', alignItems: 'center' }}>
          <TextInput
            style={styles.search_textbox}
            placeholder=" Planet to replace...   "
            onChangeText={text => setReplace(text)}
            value={replace}
          />
          <TextInput
            style={styles.search_textbox}
            placeholder=" Name your planet...   "
            onChangeText={text => setName(text)}
            value={name}
          />
          <View style={{ height: '5%' }} />
          <UploadImage passImage={getImageFromUploader} />
          <Pressable style={styles.create_planet_button} onPress={createPlanet}>
            <Text style={{ fontSize: 20 }}>Create!</Text>
          </Pressable>
        </View>

      </SafeAreaView>
    )
  }



  // Populate the info in the dictionary entry passed in
  const PlanetPage = ({ navigation, route }) => {




    const solar_system = route.params["solarSystem"]
    //console.log(solar_system["id"])

    return (
      <SafeAreaView style={styles.container}>
        <View>

          {/* THIS IS AN EXAMPLE OF DEREFERNECING FROM A PARAMETER -- THE solar_system is OUR GLOBAL DICTIONARY*/}
          <Text style={{ color: 'white' }}> You're in Planet {solar_system.id} </Text>
        </View>


      </SafeAreaView>
    )

  };

  // Search for key word by user to find if it appears in the dictionary of registered planets total, if so, add key to solar_system dictionary
  // REPLACES one key in the entries --> looks for empty, otherwise will replace whatever user wants to replace
  const PlanetSearch = (navigation) => {
    let [searched, searchText] = useState('');
    let [found_index, setFoundIndex] = useState(-1);

    useEffect(() => {
      console.log("searching")
      console.log(searched)
      console.log(found_index)
      if (searched.length != 0) {
        let i = 0;
        for (i = 0; i < SolarSystemData.length; i++) {
          if (SolarSystemData[i].title.toLowerCase().includes(searched.toLowerCase())) {
            setFoundIndex(i);
            console.log("found " + i)
            break;
          }
        }
        if (i == SolarSystemData.length) {
          setFoundIndex(-1);
        }
      } else {
        setFoundIndex(-1);
      }
    }, [searched])

    return (
      <SafeAreaView style={styles.search_container}>
        <View>
          <TextInput
            style={styles.search_textbox}
            placeholder=" Tell us what you're looking for...   "
            onChangeText={text => searchText(text)}
            value={searched}
          />
          {found_index != -1 &&
            <View style={{ height: '50%' }}>
              <Text style={styles.planet_names}> {SolarSystemData[found_index].title}</Text>
              <Pressable style={styles.button} onPress={() => {
                navigation.navigate('Visiting a Planet', { solarSystem: SolarSystemData[found_index] });
              }}
              >
                <Image
                  style={styles.planet}
                  source={SolarSystemData[found_index].img}>
                </Image>
              </Pressable>
            </View>
          }
        </View>

      </SafeAreaView>
    )

  };


  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Your Solar System" component={HomePage} />
        <Stack.Screen name="Visiting a Planet" component={PlanetPage} />
        <Stack.Screen name="Your Personal Space" component={SunPage} />
        <Stack.Screen name="Create a Planet" component={PlanetCreation} />
        <Stack.Screen name="Search For a Planet" component={PlanetSearch} />
      </Stack.Navigator>

    </NavigationContainer>

  );



}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Themes.synastry_styles.home_background,
    justifyContent: "center",
    alignItems: "center",
    height: '100%',
    width: '100%',
  },
  search_container: {
    backgroundColor: 'navy',
    justifyContent: "front",
    alignItems: "center",
    height: '100%',
    width: '100%',
  },
  create_planet_button: {
    backgroundColor: 'white',
    padding: 10,
    marginTop: 25,
    color: 'black',
    borderWidth: 2,
    borderColor: 'white',
    borderRadius: 20,
  },

  search_textbox: {
    backgroundColor: 'navy',
    marginTop: 20,
    height: 50,
    width: 300,
    fontSize: '20',
    color: 'white',
    textAlign: 'center',
    borderWidth: 2,
    borderColor: 'white',
    borderRadius: 10,
  },

  whatsHot_textbox: {
    backgroundColor: 'purple',
    height: '100%',
    width: '100%',
    fontSize: '50',
    color: 'white',
    textAlign: 'center',
  },

  scrollView: {
  },
  planet: {
    borderRadius: '100%',
    width: '100%',
    height: '100%',
    resizeMode: 'contain',

  },
  button_image: {
    borderRadius: 99999,
    width: '100%',
    height: '100%',
    resizeMode: 'contain',

  },
  sun_image: {
    width: '100%',
    height: '150%',

  },
  planet_names: {
    width: '100%',
    textAlign: 'center',
    color: 'white',
  },

  planet_rows: {
    width: '33.3%',
    height: "130%",
    alignContent: 'space-between',
    backgroundColor: 'navy',
    paddingTop: 10,
  },
  sunScreen_rows: {
    width: '100%',
    height: '33.34%',
    flexDirection: 'row',
    alignContent: 'space-between',

  },
  sunScreen_col: {
    width: '50%',
    height: '100%',
    flexDirection: 'column',
    alignContent: 'space-between',


  },
  planets_visual: {
    width: '100%',
    height: '55%',
    backgroundColor: 'navy',
  },
  button: {
    height: "100%",
    width: "100%",
  },
  sun: {
    height: '25%',
    width: '100%',


  },
  whatsHot: {
    width: '100%',
    height: '20%',
  },

  whatsHotHeader: {
    width: '100%',
    height: '10%',
  },
  whatsHotHeaderText: {
    fontSize: '24',
    textAlign: 'center',

  },
  photos: {
    height: '70%',
    width: '100%',

  },
  navbuttons: {
    height: '20%',
    width: '25%',

  },
  explore_button: {
    width: '75%',
    height: '60%',
    resizeMode: 'contain',
    position: 'absolute', left: '-130%', bottom: '25%',
  },


  add_button: {
    width: '75%',
    height: '60%',
    resizeMode: 'contain',
    position: 'absolute', left: '155%', bottom: '25%',
  }

});
