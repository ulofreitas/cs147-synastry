import { StyleSheet, View, Text, Button, TouchableOpacity } from 'react-native';
import { useState, useEffect } from 'react';


// Code Adapted from https://www.youtube.com/watch?v=8W6Jn5nygGw

export default function PublicPrivateToggle({ buttons }) {
    const [clickedId, setClickedId ] = useState(0);

    const handleClick = (item, id) => {
        setClickedId(id)
    }
    return (
        <View style={styles.toggleContainer}>
            {
                buttons.map((buttonLabel, index) => {
                    return (
                        
                        <TouchableOpacity 
                            onPress ={(item) => handleClick(item, index)}
                            key={index}
                            style={[
                                index === clickedId ? styles.toggleContainerChildClicked : styles.toggleContainerChild,
                                index === 0? {borderTopLeftRadius: 10, borderBottomLeftRadius: 10} : "",
                                index === 1? {borderTopRightRadius: 10, borderBottomRightRadius: 10} : ""
                            ]}
                        >
                            <Text
                            style={index === clickedId ? styles.toggleContainerChildTextClicked: styles.toggleContainerChildText }>
                                {buttonLabel}
                            </Text>
                        </TouchableOpacity>
                    )
                })
            }
        </View>
    );
}


const styles = StyleSheet.create({
    toggleContainer: {
        flexDirection: 'row',
        justifyContent: "flex-end"
    },
    toggleContainerChild: {
        backgroundColor: 'rgba(0, 0, 0, 0)',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 22,
        borderRadius: 0.5,
        borderColor: 'white',
        flex: 1,
        color: 'black',
        borderWidth: '2',
        height: 40,
        paddingBottom: 0,
        paddingTop: 0,

        // code adapted from Stack Overflow https://stackoverflow.com/questions/50162879/create-raised-or-shadow-effect-on-touchableopacity-react-native
        shadowColor: 'rgba(0,0,0, .4)', // IOS
        shadowOffset: { height: 1, width: 1 }, // IOS
        shadowOpacity: 1, // IOS
        shadowRadius: 1, //IOS
        elevation: 2, // Android
        flexDirection: 'row',
        width: 80,

    },
    toggleContainerChildText: {
        fontSize: 14,
        color: 'white',
        fontWeight: 'bold',
        fontFamily: 'Montserrat-Bold'
    },

    toggleContainerChildTextClicked: {
        fontSize: 14,
        color: '#9d8403',
        fontWeight: 'bold',
        fontFamily: 'Montserrat-Bold'
    },

    toggleContainerChildClicked: {
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 22,
        borderRadius: 0.5,
        borderColor: 'white',
        flex: 1,
        color: 'black',
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
        width: 80,
    },
  });

