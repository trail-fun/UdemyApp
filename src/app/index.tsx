import { View, StyleSheet } from 'react-native'
import Header from '../components/header'
import MemoListItem from '../components/MemoListItem '
import CircleButton from '../components/CircleButton'

const Index = (): React.JSX.Element  => { 
    return (
        <View style={styles.container}>

            <Header />
            <View>
                <MemoListItem />
                <MemoListItem />
                <MemoListItem />
            </View>

            <CircleButton>+</CircleButton>

        </View>
    )  
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff'
    },
    circleButton: {
        width: 64,
        height: 64,
        borderRadius: 32,
        backgroundColor: '#467fd3',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        right: 40,
        bottom: 40,
        shadowColor: '#000000',
        shadowOpacity: 0.25,
        shadowRadius: 8,
        shadowOffset: { width: 0, height: 8},
        elevation: 8
    },
    circleButtonLabel: {
        fontSize: 40,
        lineHeight: 48,
        color: '#ffffff'
    }
})



export default Index
