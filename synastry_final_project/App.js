import { useCallback } from 'react';
import { TouchableOpacity, StyleSheet, Button, Image, SafeAreaView, Text, View, Pressable, FlatList, ScrollView, TextInput, TouchableWithoutFeedback, Keyboard } from "react-native";
import { Themes, Images } from "./assets/Themes";
import { ImageBackground } from "react-native";
import { C } from "caniuse-lite/data/agents";
import { warmUpAsync } from "expo-web-browser";
import { Ionicons, MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import { WebView } from "react-native-webview";
import { NavigationContainer, useIsFocused } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Dimensions } from 'react-native';
import UploadImage from "./UploadImage";
import React, { useState, useEffect } from 'react';
import AddCommunity from '../synastry_final_project/assets/add_community.png';
import Stars from '../synastry_final_project/assets/stars.png';
import nullPlanet from '../synastry_final_project/assets/null_planet.png';
import createPlanet from '../synastry_final_project/assets/create_planet_white.png';
import discoverPlanet from '../synastry_final_project/assets/discover_planet.png';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import Modal from "react-native-modal";
import { KERIPOSTS } from './data';
import keri_image_1 from '../synastry_final_project/assets/keri/keri_image_1.jpeg';
import keri_image_2 from '../synastry_final_project/assets/keri/keri_image_2.jpeg';
import keri_image_3 from '../synastry_final_project/assets/keri/keri_image_3.jpeg';
import keri_image_4 from '../synastry_final_project/assets/keri/keri_image_4.jpeg';
import keri_image_5 from '../synastry_final_project/assets/keri/keri_image_5.jpeg';
import keri_image_6 from '../synastry_final_project/assets/keri/keri_image_6.jpeg';
import keri_planet from '../synastry_final_project/assets/keri/keri_planet.jpeg';
import maurice_planet from '../synastry_final_project/assets/maurice_planet.jpeg';
import default_avatar from '../synastry_final_project/assets/default_avatar.jpeg';
import SearchMasonry from './components/SearchMasonry';

const Stack = createStackNavigator();
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
let User = {
  id: '1',
  name: "Tomi",
  avatar: Image.resolveAssetSource(default_avatar).uri, 
  phone_number: "",
  email: "",
  instagram: '',
  tags: []
}
const PopulatedPlanetData = [
  {
    id: '1',
    profile: '../synastry_final_project/assets/maurice_planet.jpeg',
    img: Image.resolveAssetSource(maurice_planet).uri,
    person: 'Maurice',
    title: 'Maurice\'s Planet',
    phone_number: "(601)-383-1782",
    email: "mauricek@gmail.com",
    instagram: "@maurice_blessed",
    tags: ['family', 'man', 'decathalon', 'weight loss', 'young', 'gym'],
  },
  {
    id: '2',
    person: 'Keri',
    profile: '../synastry_final_project/assets/keri/keri_planet.jpeg',
    title: 'Keri\'s Planet',
    img: Image.resolveAssetSource(keri_planet).uri,
    phone_number: '(347)-981-8123',
    email: 'kerij@gmail.com',
    instagram: '@kerij',
    tags: [
      'diabetes', 'woman', 'indian', 'girl'
    ],
  },
  {
    id: '3',
    person: 'Inda',
    profile: '../synastry_final_project/assets/keri/keri_planet.jpeg',
    title: 'Keri\'s Planet',
    img: Image.resolveAssetSource(keri_planet).uri,
    phone_number: '(347)-981-8123',
    email: 'kerij@gmail.com',
    instagram: '@kerij',
    tags: [
      'nigerian', 'woman', 'pcos', 'girl'
    ],
  },
  {
    id: '4',
    person: 'Arjun',
    profile: '../synastry_final_project/assets/keri/keri_planet.jpeg',
    title: 'Keri\'s Planet',
    img: Image.resolveAssetSource(keri_planet).uri,
    phone_number: '(347)-981-8123',
    email: 'kerij@gmail.com',
    instagram: '@kerij',
    tags: [
      'nigerian', 'woman', 'pcos', 'girl'
    ],
  },
  {
    id: '5',
    person: 'Alison',
    profile: '../synastry_final_project/assets/keri/keri_planet.jpeg',
    title: 'Keri\'s Planet',
    img: Image.resolveAssetSource(keri_planet).uri,
    phone_number: '(347)-981-8123',
    email: 'kerij@gmail.com',
    instagram: '@kerij',
    tags: [
      'nigerian', 'woman', 'pcos', 'girl'
    ],
  },
  {
    id: '6',
    person: 'Tyler',
    profile: '../synastry_final_project/assets/keri/keri_planet.jpeg',
    title: 'Keri\'s Planet',
    img: Image.resolveAssetSource(keri_planet).uri,
    phone_number: '(347)-981-8123',
    email: 'kerij@gmail.com',
    instagram: '@kerij',
    tags: [
      'nigerian', 'woman', 'pcos', 'girl'
    ],
  },
];



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

// find a way to exclude first element of list when redering, and make sure to update ID of added to length 
// of Solar System Data + 1
let SolarSystemData = [
{ id: '',
  person: '',
  profile: '',
  title: '',
  img: '',
  phone_number: '',
  email: '',
  instagram: '',
  tags: [
  ],
},
];

const Polaroids = [
  {
    image: null,
    caption: 'Caption',
  },
  {
    image: null,
    caption: 'Caption',
  },
  {
    image: null,
    caption: 'Caption',
  },
  {
    image: null,
    caption: 'Caption',
  },
  {
    image: null,
    caption: 'Caption',
  },
  {
    image: null,
    caption: 'Caption',
  },
]



export default function App() {


  // two functions that update text / searched values --> This is used for the TextInput functionality  
  let [fontsLoaded] = useFonts({
    'Buffalo': require('./assets/fonts/Buffalo.otf'),
    'Norwester': require('./assets/fonts/Norwester.otf'),
    'CodePro': require('./assets/fonts/CodePro.otf'),
    'Montserrat': require('./assets/fonts/Montserrat.ttf'),
    'Montserrat-Bold': require('./assets/fonts/Montserrat-Bold.ttf'),
    'PermanentMarker': require('./assets/fonts/PermanentMarker-Regular.ttf')
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  let [text, setText] = useState('');
  let [global_whats_hot, setGlobalWhatsHot] = useState('');
  let [global_caption_0, setGlobalPolaroid0Caption] = useState('');
  let [global_caption_1, setGlobalPolaroid1Caption] = useState('');
  let [global_caption_2, setGlobalPolaroid2Caption] = useState('');
  let [global_caption_3, setGlobalPolaroid3Caption] = useState('');
  let [global_caption_4, setGlobalPolaroid4Caption] = useState('');
  let [global_caption_5, setGlobalPolaroid5Caption] = useState('');


  // Function that renders each planet in the dictionary

  // item is the solarsystem dictionary!
  const renderItem = (item, navigation) => {
    console.log(item.title)
    const img = item.img
    //console.log(img)
    return (
      // Creates rows of three planets, each planet is a pressable
      <View style={styles.planet_rows}>
        <Text numberOfLines={1} style={styles.planet_names}>
          {item.title}
        </Text>

        <Pressable style={styles.button} onPress={() => {
          // navigates to planet screen when a planet is clicked, and passes the planet entry in the dictionary
          // i.e if planet 6 is clicked, all dict planet 6 values are passed
          navigation.navigate('Visiting a Planet', { solarSystem: item, populatedPlanets: "" });
        }}>
          <Image
            style={styles.planet}
            // This is the image that shows up for each planet, so if img is changed for a planet, so will
            // its image
            source={{ uri: item.img }}>
          </Image>
        </Pressable>
      </View>
    )
  };

  // This is the main solar system page
  function HomePage({ navigation }) {
    const isFocused = useIsFocused();
    const removeDummy = (item) => {
      return '' !== item.title;
    }
    return (
      // These are all the rendered planets, rendered using a flatlist
      <SafeAreaView style={styles.container}>
        <ImageBackground style={styles.stars_background}
          resizeMode='cover'
          source={require('../synastry_final_project/assets/stars.png')}>
          <View style={styles.solar_system_header}>
            <Text style={styles.my_solar_system_text}>
              My
            </Text>
            <Text style={styles.my_solar_system_text}>
              Solar System
            </Text>
          </View>
          {isFocused &&
            <View style={styles.planets_visual}>
              <FlatList
                data={SolarSystemData.filter(removeDummy)}
                renderItem={({ item }) => renderItem(item, navigation)}
                keyExtractor={item => item.id}
                numColumns={3}
                ItemSeparatorComponent={() => <View style={{height: 15}} />}
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
                source={require('../synastry_final_project/assets/discover_planet.png')}>
              </Image>
            </Pressable>
            <View style={{ width: '40%' }} />
            {/* This is the button used for creating  a planet */}
            <Pressable style={styles.add_button} onPress={() => {
              navigation.navigate('Profile');
            }}
            >
              {/* This is the image used for creating  a planet */}
              <Image
                style={styles.button_image}
                source={require('../synastry_final_project/assets/create_planet_white.png')}>
              </Image>
            </Pressable>
          </View>

          {/* This is the sun button, it is a pressable*/}
          <View style={styles.sun}>
            <Pressable style={styles.sun_button} onPress={() => {
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
        </ImageBackground>
      </SafeAreaView>

    )
  }

  function SunPage({ navigation }) {
    let [whats_hot, setWhatsHot] = useState('');
    let [count, setCount] = useState(0);
    let [caption_0, setPolaroid0Caption] = useState('');
    let [caption_1, setPolaroid1Caption] = useState('');
    let [caption_2, setPolaroid2Caption] = useState('');
    let [caption_3, setPolaroid3Caption] = useState('');
    let [caption_4, setPolaroid4Caption] = useState('');
    let [caption_5, setPolaroid5Caption] = useState('');
    
    // Code to get image data from UploadImage child component based off of https://javascript.plainenglish.io/how-to-pass-props-from-child-to-parent-component-in-react-d90752ff4d01
    // Can clean this up later if necessary, but for now it's just a hard-coded fn for each Polaroid
    const getImageFromUploader0 = (image_data) => {
      console.log("getImageFromUploader");
      Polaroids[0].image = image_data;
      console.log(image_data);
    }
    const getImageFromUploader1 = (image_data) => {
      console.log("getImageFromUploader");
      Polaroids[1].image = image_data;
      console.log(image_data);
    }
    const getImageFromUploader2 = (image_data) => {
      console.log("getImageFromUploader");
      Polaroids[2].image = image_data;
      console.log(image_data);
    }
    const getImageFromUploader3 = (image_data) => {
      console.log("getImageFromUploader");
      Polaroids[3].image = image_data;
      console.log(image_data);
    }
    const getImageFromUploader4 = (image_data) => {
      console.log("getImageFromUploader");
      Polaroids[4].image = image_data;
      console.log(image_data);
    }
    const getImageFromUploader5 = (image_data) => {
      console.log("getImageFromUploader");
      Polaroids[5].image = image_data;
      console.log(image_data);
    }

    /*useEffect(() => {
      if (count > 0) {
        console.log("updated");
      }
      setCount(count + 1);
      setGlobalWhatsHot(whats_hot);
    }, [whats_hot])*/

    // TODO:
    // Populate info in your dictionary in order to make sure changes persist
    return (
      
      <SafeAreaView style={styles.sunPageBackground}>
        <Pressable
          style={styles.resurfaceButton}
          onPress = {() => {
            navigation.navigate('Your Solar System');
          }}>
            <Ionicons name="chevron-up-outline" size={32} color={Themes.synastry_styles.resurface_button}/>
        </Pressable>
        {/* This section handles the what's hot area, the text is the label, and the TextInput is
      to allow you to change what's shown -- make sure to populate this into a dict so changes
      persist*/}

        <View style={styles.whatsHotHeader}>
          <Text style={styles.whatsHotHeaderText}>
            What's hot?
          </Text>
          {/*TODO POPULATE THIS INTO A DICTIONARY */}
          <TextInput
            style={styles.whatsHot_textbox}
            placeholder={" I'm feeling...   "}
            placeholderTextColor="#949494" 
            defaultValue={global_whats_hot}
            onChangeText={newText => setWhatsHot(newText)}    // uses the setText function and returns text, the updates input
            onEndEditing={() => setGlobalWhatsHot(whats_hot)}
            //value={whats_hot}  // text is the updated input --> store this in a dictionary and ensure change persists
            />
        </View>

        <ScrollView style={styles.scrollView}>
          <View style={styles.photos}>
            <View style={styles.sunScreen_rows}>
              <View style={styles.sunScreen_col}>
                <View style={styles.polaroid_photo}>
                  <UploadImage passImage={getImageFromUploader0} image={Polaroids[0].image} />
                </View>
                <View style={styles.polaroid_text_box}>
                  <TextInput
                    style={styles.polaroid_text_input}
                    placeholder=" Write your caption here..."
                    placeholderTextColor = 'black'
                    defaultValue={global_caption_0}
                    onChangeText={newText => setPolaroid0Caption(newText)}
                    onEndEditing={() => setGlobalPolaroid0Caption(caption_0)}
                    multiline
                    maxLength={40}
                  />
                </View>
              </View>

              <View style={styles.sunScreen_col}>
                <View style={styles.polaroid_photo}>
                  <UploadImage passImage={getImageFromUploader1} image={Polaroids[1].image} />
                </View>
                <View style={styles.polaroid_text_box}>
                  <TextInput
                    style={styles.polaroid_text_input}
                    placeholder=" Write your caption here..."
                    placeholderTextColor = 'black'
                    defaultValue={global_caption_1}
                    onChangeText={newText => setPolaroid1Caption(newText)}
                    onEndEditing={() => setGlobalPolaroid1Caption(caption_1)}
                    multiline
                    maxLength={40}
                  />
                </View>
              </View>
            </View>

            <View style={{ height: 15 }} />

            <View style={styles.sunScreen_rows}>
              <View style={styles.sunScreen_col}>
                <View style={styles.polaroid_photo}>
                  <UploadImage passImage={getImageFromUploader2} image={Polaroids[2].image} />
                </View>
                <View style={styles.polaroid_text_box}>
                  <TextInput
                    style={styles.polaroid_text_input}
                    placeholder=" Write your caption here..."
                    placeholderTextColor = 'black'
                    defaultValue={global_caption_2}
                    onChangeText={newText => setPolaroid2Caption(newText)}
                    onEndEditing={() => setGlobalPolaroid2Caption(caption_2)}
                    multiline
                    maxLength={40}
                  />
                </View>
              </View>

              <View style={styles.sunScreen_col}>
                <View style={styles.polaroid_photo}>
                  <UploadImage passImage={getImageFromUploader3} image={Polaroids[3].image} />
                </View>
                <View style={styles.polaroid_text_box}>
                  <TextInput
                    style={styles.polaroid_text_input}
                    placeholder=" Write your caption here..."
                    placeholderTextColor = 'black'
                    defaultValue={global_caption_3}
                    onChangeText={newText => setPolaroid3Caption(newText)}
                    onEndEditing={() => setGlobalPolaroid3Caption(caption_3)}
                    multiline
                    maxLength={40}
                  />
                </View>
              </View>
            </View>

            <View style={{ height: 15 }} />
            
            <View style={styles.sunScreen_rows}>
              <View style={styles.sunScreen_col}>
                <View style={styles.polaroid_photo}>
                  <UploadImage passImage={getImageFromUploader4} image={Polaroids[4].image} />
                </View>
                <View style={styles.polaroid_text_box}>
                  <TextInput
                    style={styles.polaroid_text_input}
                    placeholder=" Write your caption here..."
                    placeholderTextColor = 'black'
                    defaultValue={global_caption_4}
                    onChangeText={newText => setPolaroid4Caption(newText)}
                    onEndEditing={() => setGlobalPolaroid4Caption(caption_4)}
                    multiline
                    maxLength={40}
                  />
                </View>
              </View>

              <View style={styles.sunScreen_col}>
                <View style={styles.polaroid_photo}>
                  <UploadImage passImage={getImageFromUploader5} image={Polaroids[5].image} />
                </View>
                <View style={styles.polaroid_text_box}>
                  <TextInput
                    style={styles.polaroid_text_input}
                    placeholder=" Write your caption here..."
                    placeholderTextColor = 'black'
                    defaultValue={global_caption_5}
                    onChangeText={newText => setPolaroid5Caption(newText)}
                    onEndEditing={() => setGlobalPolaroid5Caption(caption_5)}
                    multiline
                    maxLength={40}
                  />
                </View>
              </View>
            </View>

          </View>
        </ScrollView>

      </SafeAreaView>
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
        <ImageBackground style={styles.stars_background}
          resizeMode='cover'
          source={require('../synastry_final_project/assets/stars.png')}>
          <Pressable
            style={styles.resurfaceButton}
            onPress = {() => {
              navigation.navigate('Your Solar System');
            }}>
              <Ionicons name="chevron-up-outline" size={32} color={Themes.synastry_styles.resurface_button}/>
          </Pressable>
          <View style={styles.create_planet_header}>
            <Text style={styles.create_planet_text}>
              Create your own planet!
            </Text>
          </View>
          <View style={styles.add_planet_box}>
            <TextInput
              style={styles.search_textbox}
              placeholder=" Planet to replace...   "
              onChangeText={text => setReplace(text)}
              value={replace}
            />
            <TextInput
              style={styles.search_textbox}
              placeholder=" Name your new planet...   "
              onChangeText={text => setName(text)}
              value={name}
            />
            <View style={{ height: '5%' }} />
            <Text style={styles.upload_planet_photo}>
              Upload a cover photo for your planet:
            </Text>
            <View style={{ height: '3%' }} />
            <UploadImage passImage={getImageFromUploader} />
            <Pressable style={styles.create_planet_button} onPress={createPlanet}>
              <Text style={{ fontSize: 20 }}>Create Planet!</Text>
            </Pressable>
          </View>
        </ImageBackground>

      </SafeAreaView>
    )
  }




  // Populate the info in the dictionary entry passed in
  const PlanetPage = ({ navigation, route }) => {
    let [whats_hot, setWhatsHot] = useState('');
    let solar_system = {};
    if (route.params["solarSystem"] === "") {
      solar_system = route.params["populatedPlanets"];
    } else {
      solar_system = route.params["solarSystem"];
    }
    // const img0 = solar_system.posts[0];
    // const img1 = solar_system.posts[1];
    // const img2 = solar_system.posts[2];
    // const img3 = solar_system.posts[3];
    // const img4 = solar_system.posts[4];
    // const img5 = solar_system.posts[5];

    // const solar_system = route.params["solarSystem"]
    //console.log(solar_system["id"])



    // Code to get image data from UploadImage child component based off of https://javascript.plainenglish.io/how-to-pass-props-from-child-to-parent-component-in-react-d90752ff4d01
    // Can clean this up later if necessary, but for now it's just a hard-coded fn for each Polaroid


    const [isModalVisible, setModalVisible] = useState(false);

    const toggleModal = () => {
      setModalVisible(!isModalVisible);
    }

    const startButton = SolarSystemData.includes(solar_system);
    const [clickedId, setClickedId ] = useState(startButton);
    const text2 = "Add Planet";
    const text1 = "Remove Planet";

    const removeElem = (elem) => {
      return elem.title !== solar_system.title;
    }
    const removeDummy = () => {
      return '' !== solar_system.title;
    }
    const handleClick = () => {
      if (clickedId) {
        SolarSystemData = SolarSystemData.filter(removeElem);
        setClickedId(false);
      } else {
        SolarSystemData.push(solar_system);
        SolarSystemData = SolarSystemData.filter(removeDummy);
        setClickedId(true);
      } 
    }
    const contactText = solar_system.person + '\'s Contact';
    
    let posts;
    switch (solar_system.name) {
      case 'Maurice':
        posts = KERIPOSTS;
        break;
      case 'Keri':
        posts = KERIPOSTS;
        break;
      default:
        posts = KERIPOSTS;
    }

    //const profileImg = require(solar_system.img);
    //console.log(profileImg);

    return (
      <SafeAreaView style={styles.container}>
      <ImageBackground style={styles.stars_background}
          resizeMode='cover'
          source={require('../synastry_final_project/assets/PlanetBackground.png')}>



            <View style={[{flexDirection: 'row', justifyContext: 'space-between', alignItems: 'center', paddingHorizontal: 24, marginTop: 24}]}>
                  <Ionicons style={[{marginRight: 55}]}name="chevron-back" size={32} color={Themes.synastry_styles.resurface_button} onPress={() => { navigation.goBack()}}/>
                  <TouchableOpacity 
                                onPress ={() => handleClick()}
                                style={
                                    clickedId ? styles.activeButton : styles.inactiveButton }>
                            <Text
                                style={clickedId ? styles.activeText: styles.inactiveText }>
                                    {clickedId ? text1 : text2}
                            </Text>    
                    </TouchableOpacity>
                    <Pressable onPress={toggleModal}>
                    <MaterialCommunityIcons style={[{marginLeft: 55}]} name="contacts" size={32} color={Themes.synastry_styles.resurface_button}/>
                  </Pressable>
                </View>



        <ScrollView style={styles.scrollViewPlanetPage}>



          {/* This section handles the what's hot area, the text is the label, and the TextInput is
to allow you to change what's shown -- make sure to populate this into a dict so changes
persist*/}

          <View style={styles.whatsHotHeaderPlanetPage}>


              <Modal isVisible={isModalVisible}>
                <View style={styles.ModalBox}>
                  <Text style={styles.ModalText}> {contactText} </Text>
                  <Text style={{color:"gray"}}>
                  Phone Number: {solar_system.phone_number}
                  </Text>
                  <Text style={{color:"gray"}}>
                    Email: {solar_system.email}
                  </Text>
                  <Text style={{color:"gray"}}>
                    Instagram: {solar_system.instagram}
                  </Text>
                  <Pressable style={styles.ModalButtonBox} onPress={toggleModal}>
                    <Text style={styles.ModalButtonText}>Close</Text>
                  </Pressable>
                </View>
              </Modal>            
              <View style={[{marginTop: 40, alignContent: 'center', justifyContent: 'center', alignItems: 'center'}]}>
                <Text style={[{fontFamily: 'Buffalo', fontSize: 25, color: 'white'}]}> Welcome To </Text>
                <Text style={styles.whatsHotHeaderTextPlanetPage}>
                  {solar_system.title}:
                </Text>

            </View>
            <View style={{ marginTop: 14, alignItems: "center" }}>
                    <View style={[{ shadowColor: "#151734", shadowRadius: 30, shadowOpacity: 0.4}]}>
                        <Image
                            source={
                                { uri: solar_system.img }
                            }
                            style={[{width: 136, height: 136, borderRadius: 68}]}
                        />
                    </View>
                    {/* <Text style={styles.name}>{this.state.user.name}</Text> */}
                </View>

            {/*TODO POPULATE THIS INTO A DICTIONARY */}

          </View>
          
          <View style={{ marginTop: 55, alignItems: "center" }}>
          <SearchMasonry key="all" list={posts} />
          </View>

          {/* This section defines three rows, each with two columns for pictures for people to upload

TODO:

MAKE SURE THE CHANGES PERSIST --> THE UPLOAD IMAGE COMPONENT IS WHAT WORKS THE MAGIC, PLEASE FAMILIARIZE YOURSELF WITH THIS AND MAKE
SURE U STORE THE UPDATED IMAGE PARAMETER IN A GLOBAL DICTIONARY HERE*/}
          
          

        </ScrollView>
        </ImageBackground>
      </SafeAreaView>
    )

  };

  const Profile = ({navigation}) => {
    let [image, setImage] = useState(null);
    const [text, onChangeText] = useState(null);
    const [number, onChangeNumber] = useState(null);

    // Code to get image data from UploadImage child component based off of https://javascript.plainenglish.io/how-to-pass-props-from-child-to-parent-component-in-react-d90752ff4d01
    const getImageFromUploader = (image_data) => {
      console.log("getImageFromUploader");
      console.log(image_data);
      setImage(image_data);
    }

    return (
      <SafeAreaView style={[{width: "100%", height: "100%", backgroundColor: "#504B8D"}]}>

                  <View style={[{flexDirection: 'row', justifyContext: 'space-between', alignItems: 'center', paddingHorizontal: 24, marginTop: 24}]}>
                      <Ionicons style={[{marginRight: 55}]}name="chevron-back" size={32} color={Themes.synastry_styles.resurface_button} onPress={() => { navigation.goBack()}}/>
                      <View 
                                    style={[styles.inactiveButton, {backgroundColor: "#BFA005", borderColor: "#BFA005"}]}>
                                <Text
                                    style={[styles.inactiveText, {color: "white", fontFamily: 'Buffalo', fontSize: 28}]}>
                                        Profile
                                </Text>    
                        </View>
                        <MaterialCommunityIcons style={[{marginLeft: 55}]} name="contacts" size={32} color={"#504B8D"}/>
                    </View>
                    <ScrollView>
                    
                  <View style={{ marginTop: 38, alignItems: "center" }}>
                    <View style={[{ shadowColor: "#151734", shadowRadius: 30, shadowOpacity: 0.4}]}>
                      <UploadImage passImage={getImageFromUploader} />
                      <View style={{ marginTop: 25, alignItems: "center" }}>
                          <Text style={{ fontSize: 50, fontFamily: 'Norwester', color: 'white' }}>{User.name}</Text>
                          </View>
                    </View>
                    <View style={{ flexDireaction: "row", marginTop: 38, alignItems: "flex-start", justifyContent: "flex-start", marginRight: "auto", marginLeft: 12}}>
                    <View 
                                    style={[styles.inactiveButton, {backgroundColor: "#BFA005", borderColor: "#BFA005", width: '100%', marginLeft: 0, borderRadius: 2, justifyContent: "flex-start"}]}>
                                <Text
                                    style={[styles.inactiveText, {color: "white", fontFamily: 'Montserrat-Bold', fontSize: 18, textAlign: "right"}]}>
                                        Describe Your Health Journey
                                </Text>    
                        </View>
                        <TextInput
                            style={[{ width: 332, height: 40, margin: 12, borderBottomColor: 'white', borderBottomWidth: 3,}]}
                            onChangeText={onChangeText}
                            value={text}
                            placeholderTextColor="#BFBEBE"
                            placeholder="Bio"
                          />
                      </View>




                      <View style={{ flexDireaction: "row", marginTop: 38, alignItems: "flex-start", justifyContent: "flex-start", marginRight: "auto", marginLeft: 12}}>
                    <View 
                                    style={[styles.inactiveButton, {backgroundColor: "#BFA005", borderColor: "#BFA005", width: '100%', marginLeft: 0, borderRadius: 2, justifyContent: "flex-start"}]}>
                                <Text
                                    style={[styles.inactiveText, {color: "white", fontFamily: 'Montserrat-Bold', fontSize: 18, textAlign: "right"}]}>
                                        Contact
                                </Text>    
                        </View>
                        <TextInput
                            style={[{ width: 332, height: 40, margin: 12, borderBottomColor: 'white', borderBottomWidth: 3,}]}
                            onChangeText={onChangeNumber}
                            value={number}
                            placeholderTextColor="#BFBEBE"
                            placeholder="Phone Number"
                          />
                                                  <TextInput
                            style={[{ width: 332, height: 40, margin: 12, borderBottomColor: 'white', borderBottomWidth: 3,}]}
                            onChangeText={onChangeNumber}
                            value={number}
                            placeholderTextColor="#BFBEBE"
                            placeholder="Email"
                          />
                                                  <TextInput
                            style={[{ width: 332, height: 40, margin: 12, borderBottomColor: 'white', borderBottomWidth: 3,}]}
                            onChangeText={onChangeNumber}
                            value={number}
                            placeholderTextColor="#BFBEBE"
                            placeholder="Instagram"
                          />
                      </View>
                    {/* <Text style={styles.name}>{this.state.user.name}</Text> */}
                </View>
              </ScrollView>
      </SafeAreaView>
    );
  }
  // Search for key word by user to find if it appears in the dictionary of registered planets total, if so, add key to solar_system dictionary
  // REPLACES one key in the entries --> looks for empty, otherwise will replace whatever user wants to replace
  
  const PlanetSearch = ({navigation}) => {
    let [searched, searchText] = useState('');
    let [found_index, setFoundIndex] = useState(-1);

    useEffect(() => {
      console.log("searching")
      console.log(searched)
      console.log(found_index)
      if (searched.length != 0) {
        let i = 0;
        for (i = 0; i < PopulatedPlanetData.length; i++) {
          let j = 0;
          const currtags = PopulatedPlanetData[i].tags;
          for (j = 0; j < currtags.length; j++) {
            if (currtags[j].toLowerCase().includes(searched.toLowerCase())) {
              setFoundIndex(i);
              console.log("found " + i);
              break;
            }
          }
          if (j !== currtags.length) {
            break;
          }
        }

        if (i == PopulatedPlanetData.length) {
          setFoundIndex(-1);
        }
      } else {
        setFoundIndex(-1);
      }
    }, [searched])

    const Bold = (props) => <Text style={{fontWeight: 'bold'}}>{props.children}</Text>

    return (
      <SafeAreaView style={styles.search_container}>
        <ImageBackground style={styles.stars_background}
          resizeMode='cover'
          source={require('../synastry_final_project/assets/stars.png')}>

          <View style={styles.search_top_third}>
            <Pressable
              style={styles.resurfaceButton}
              onPress = {() => {
                navigation.navigate('Your Solar System');
              }}>
                <Ionicons name="chevron-up-outline" size={32} color={Themes.synastry_styles.resurface_button}/>
            </Pressable>
            <View style={styles.search_for_planet_text}>
                <Text style={styles.search_for_planet_text_content}>
                  Search for a planet to visit!
                </Text>
            </View>
          </View>
          <View style={styles.search_bottom_third}>
            <TouchableWithoutFeedback onPress={() => {Keyboard.dismiss()}}>
              <TextInput
                style={styles.search_textbox}
                placeholder=" Tell us what you're looking for...   "
                onChangeText={text => searchText(text)}
                value={searched}
                />
            </TouchableWithoutFeedback>
            <View style={{ height: '5%' }} />
            {found_index != -1 &&    
              <View style={styles.planet_to_visit_preview}>
                <View style={styles.planet_preview_text_box}>
                  <Text style={styles.planet_preview_text}>
                    You may be interested: <Bold>{PopulatedPlanetData[found_index].title}</Bold>
                  </Text>
                </View>
                <Pressable style={styles.planet_to_visit_button} onPress={() => {
                  navigation.navigate('Visiting a Planet', { solarSystem: "", populatedPlanets: PopulatedPlanetData[found_index] });
                }}
                >
                  <View style={styles.planet_preview}>
                    <Image
                      style={styles.planet_preview}
                      source={{ uri: PopulatedPlanetData[found_index].img }}>
                    </Image>
                  </View>
                </Pressable>
              </View>
            }
          </View>
          <View style={styles.search_tip}>
            <Text style={styles.search_tip_text}>
              <Bold>Tip:</Bold> It's helpful to search for concepts/names you may be interested in!<Bold></Bold>
            </Text>
          </View>
        </ImageBackground>

      </SafeAreaView>
    )

  };


  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Your Solar System" component={HomePage} options={{headerShown: false}} />
        <Stack.Screen name="Visiting a Planet" component={PlanetPage} options={{headerShown: false}}/>
        <Stack.Screen name="Your Personal Space" component={SunPage} options={{headerShown: false}} />
        <Stack.Screen name="Create a Planet" component={PlanetCreation} options={{headerShown: false}} />
        <Stack.Screen name="Search For a Planet" component={PlanetSearch} options={{headerShown: false}} />
        <Stack.Screen name="Profile" component={Profile} options={{headerShown: false}} />
      </Stack.Navigator>
    </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#0F0B4D",
    justifyContent: "center",
    alignItems: "center",
    height: '100%',
    width: '100%',
  },
  stars_background: {
    height: '100%',
    width: '100%',
    alignItems: "center",
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
  // Search for/visit planet styling
  search_container: {
    backgroundColor: 'navy',
    justifyContent: "front",
    alignItems: "center",
    height: '100%',
    width: '100%',
  },
  create_planet_header: {
    height: '10%',
    justifyContent: 'center',
  },
  create_planet_text: {
    fontSize: '24',
    color: 'white',
    textShadowColor: 'rgba(255, 255, 255, 0.8)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 5,
  },
  add_planet_box: {
    height: '80%',
    flexDirection: 'column', 
    alignItems: 'center',
  },
  search_top_third: {
    height: '10%',
    width: '100%',
    flexDirection: 'column',
  },
  planet_top_third: {
    height: '5%',
    width: '100%',
    flexDirection: 'column',
  },
  activeButton: {
    backgroundColor: "rgba(0,0,0, 0.3)",
    alignItems: 'center',
    justifyContent: 'center',
    padding: 22,
    borderRadius: 20,
    borderColor: "rgba(0,0,0, 0.1)",
    color: "white",
    width: "48%",
    flexDirection: 'column',
    borderWidth: '2',
    height: 40,
    paddingBottom: 0,
    paddingTop: 0,

    shadowColor: 'rgba(0,0,0, .4)', // IOS
    shadowOffset: { height: 1, width: 1 }, // IOS
    shadowOpacity: 1, // IOS
    shadowRadius: 1, //IOS
    elevation: 2, // Android
    flexDirection: 'row',
},
inactiveButton: {
    backgroundColor: 'rgba(255, 255, 255, 1)',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 22,
    width: "48%",
    borderRadius: 20,
    borderColor: 'white',
    color: '#0F0B4D',
    borderWidth: '2',
    height: 40,
    paddingBottom: 0,
    paddingTop: 0,

    // code adapted from Stack Overflow https://stackoverflow.com/questions/50162879/create-raised-or-shadow-effect-on-touchableopacity-react-native
    shadowColor: 'rgba(255,255,255, .4)', // IOS
    shadowOffset: { height: 1, width: 1 }, // IOS
    shadowOpacity: 1, // IOS
    shadowRadius: 1, //IOS
    elevation: 2, // Android
    flexDirection: 'row',
},

activeText: {
    fontSize: 14,
    color: 'white',
    fontFamily: 'Montserrat-Bold',
},

inactiveText: {
    fontSize: 14,
    color: '#0F0B4D',
    fontFamily: 'Montserrat-Bold',
},
  addToSolarSys: {
    flexDirection: "row",
    alignItems: "center",
    height: 60, 
    width: "75%",  
    justifyContent: "center",
    alignSelf: "center",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  search_bottom_third: {
    height: '55%',
    width: '80%',
    alignItems: 'center',
  },
  search_for_planet_text: {
    height: '50%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  search_for_planet_text_content: {
    fontSize: '24',
    color: 'white',
    textShadowColor: 'rgba(255, 255, 255, 0.8)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 5,
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
  upload_planet_photo: {
    fontSize: '20',
    color: 'white',
    textAlign: 'center',
  },
  planet_to_visit_preview: {
    height: '70%',
    width: '80%',
    backgroundColor: '#00009b',
    borderRadius: 10,
    justifyContent: 'center',
  },
  planet_preview_text_box: {
    alignItems: 'center',
    justifyContent: 'center',
    height: '20%',
  },
  planet_preview_text: {
    fontSize: '18',
    color: 'white',
    textAlign: 'center',
  },
  planet_to_visit_button: {
    height: '70%',
  },
  search_tip: {
    height: '10%',
    width: '80%',
    backgroundColor: '#faaea0',
    borderRadius: 10,
    justifyContent: 'center'
  },
  search_tip_text: {
    color: 'white',
    fontSize: '16',
    textAlign: 'center',
  },
  whatsHot_textbox: {
    backgroundColor: 'rgba(255, 255, 255, 0.6)',
    height: 50,
    width: 300,
    fontSize: '20',
    color: 'white',
    textAlign: 'center',
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.05)',
    borderRadius: 10,
    marginTop: 10,
  },
  whatsHot_textboxPlanetPage: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    height: 50,
    width: 300,
    fontSize: '20',
    textAlign: 'center',
    borderWidth: 2,
    borderColor: 'rgba(0, 0, 0, 0.1)',
    borderRadius: 10,
    marginTop: 10,
    paddingTop: 10,
    color: '#b0b3b8',
    alignItems: 'center',
    justifyContent: 'center'
  },

  scrollView: {
    height: '85%'
  },
  scrollViewPlanetPage: {
    marginTop: 35,
    width: "95%",
  },
  planet: {
    marginTop: -30,
    borderRadius: 99999,
    width: 114,
    height: 114,
  },
  planet_preview: {
    borderRadius: 99999,
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
    alignItems: 'center',
    justifyContent: 'center'
  },
  button_image: {
    borderRadius: 99999,
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
    shadowOffset: {
      width: Themes.synastry_styles.shadows.shadowOffset.width,
      width: Themes.synastry_styles.shadows.shadowOffset.height,
    },
    shadowColor: Themes.synastry_styles.shadows.shadowColor,
    shadowOpacity: Themes.synastry_styles.shadows.shadowOpacity,
    shadowRadius: Themes.synastry_styles.shadows.shadowRadius,
    elevation: 24,
  },
  sun_image: {
    marginTop: -50,
    width: '100%',
    height: '150%',

  },
  planet_names: {
    width: '100%',
    height: '9%',
    textAlign: 'center',
    fontFamily: 'Montserrat-Bold',
    color: 'white', 
    fontSize: 12,
  },

  planet_rows: {
    width: '33.3%',
    height: 180,
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 5,
  },
  sunScreen_rows: {
    width: '100%',
    // height: '33%',
    height: 220,
    flexDirection: 'row',
    justifyContent: 'space-evenly'

  },
  sunScreen_col: {
    width: '45%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',

  },
  polaroid_photo: {
    backgroundColor: 'black',
    width: '90%',
    height: '70%',
    justifyContent: 'center',
    alignContent: 'center',
  },
  polaroid_photo_planet: {
    borderRadius: 99999,
    width: '60%',
    height: '60%',
    resizeMode: 'contain',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 30,
    paddinTop: 30,
  },
  polaroid_text_box: {
    width: '90%',
    height: '20%',
    justifyContent: 'center',
  },
  polaroid_text_input: {
    fontSize: 14,
    textAlign: 'center',
    flex: 1,
    flexShrink: 1,
    color: 'black',
    width: '100%',
    height: '100%',
  },
  planetPage_rows: {
    width: '100%',
    height: '33.34%',
    flexDirection: 'row',
    justifyContent: 'center'

  },
  planetPage_col: {
    width: '50%',
    height: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'

  },
  solar_system_header: {
    marginTop: 30,
    height: '10%',
    justifyContent: 'center',
  },
  my_solar_system_text: {
    color: Themes.synastry_styles.white,
    // color: "#E49726",
    fontSize: '24',
    textAlign: 'center',
    textShadowColor: 'rgba(228, 151, 38, 0.8)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 7,
    fontSize: 40, 
    fontFamily: 'PermanentMarker',
  },
  planets_visual: {
    marginTop: 25,
    width: '100%',
    height: '50%',
  },
  navbuttons: {
    height: '22%',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  explore_button: {
    width: '25%',
  },
  add_button: {
    width: '25%',
  },
  button: {
    height: "90%",
    width: "100%",
    justifyContent: 'center',
    alignContent: 'center'
  },
  sun_button: {
    height: "100%",
    width: "100%",
  },
  sun: {
    height: '20%',
    width: '100%',
  },
  sunPageBackground: {
    backgroundColor: Themes.synastry_styles.yellow_sun,
  },
  whatsHot: {
    // backgroundColor: '#FFD700',
    width: '100%',
    height: '20%',
  },

  resurfaceButton: {
    justifyContent: 'center',
    alignItems: 'center',
    shadowOffset: {
      width: Themes.synastry_styles.shadows.shadowOffset.width,
      width: Themes.synastry_styles.shadows.shadowOffset.height,
    },
    shadowColor: Themes.synastry_styles.shadows.shadowColor,
    shadowOpacity: Themes.synastry_styles.shadows.shadowOpacity,
    shadowRadius: Themes.synastry_styles.shadows.shadowRadius,
  },
  whatsHotHeader: {
    // backgroundColor: '#FFD700',
    width: '100%',
    height: '15%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  whatsHotHeaderText: {
    fontSize: '24',
    textAlign: 'center',
  },

  ModalBox: {
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 22,
    borderRadius: 4,
    borderColor: 'rgba(0, 0, 0, 0.1)',
  },
  ModalText: {
    fontSize: 20,
    marginBottom: 12,
  },
  ModalParaText: {
    fontSize: 16,
    marginBottom: 8,
  },

  whatsHotHeaderPlanetPage: {
    width: '100%',
    height: 200,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  ModalButtonBox: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'navy',
    marginTop: 20
  },
  ModalButtonText: {
    fontSize: 16,
    lineHeight: 21,
    letterSpacing: 0.25,
    color: 'white',
  },
  whatsHotHeaderTextPlanetPage: {
    fontSize: '35',
    textAlign: 'center',
    color: 'white',
    fontFamily: 'Norwester',

  },
  photos: {
    height: '100%',
    width: '100%',
    justifyContent: 'space-between',
  },
});
