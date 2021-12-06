import React, { useState, useEffect }  from 'react'
import {
    View,
    Text,
    Image,
    ScrollView
} from 'react-native'
import { RectButton } from 'react-native-gesture-handler'
import { styles } from './styles'
import IllustrationImg from '../../assets/illustration.png'
import { useNavigation } from '@react-navigation/native'
import { FeedCitites } from '../../components/FeedCitites/index'

export default function Home() {
    const navigation = useNavigation()

    function handleSignIn() {
        navigation.navigate('Weather')
    }

    const [feedCitites, setFeedCitites] = useState()

    async function fetchData(){
        try{
        const cityUrl = 'http://192.168.0.101:3333/cities?country=USA'

        const response = await fetch(cityUrl)
        const results = await response.json()

        setFeedCitites(results)
        } catch (err) {
            console.log(err)
        }
    }
    
    useEffect(() => {
        fetchData()
    })

    return (
        <View style={styles.container}>
            <ScrollView>
                <Image
                    style={styles.image}
                    source={IllustrationImg}
                />

                <View style={styles.content} >
                    <Text style={styles.title} >
                        Weather App {`\n`}
                    </Text>

                    <Text style={styles.subtitle} >
                        Search for any city {`\n`}
                        you can imagine
                    </Text>
                </View>
                <RectButton
                    onPress={handleSignIn}
                    activeOpacity={0.7}
                    style={styles.containerBTN}>
                    <Text style={styles.titleBTN}>
                        {'START'}
                    </Text>
                </RectButton>
                <ScrollView>
                    <Text style={styles.scrollTitle}>Largest cities In USA</Text>
                    <FeedCitites feedCitites={feedCitites}/>
                </ScrollView>
            </ScrollView>
        </View>
    )
}