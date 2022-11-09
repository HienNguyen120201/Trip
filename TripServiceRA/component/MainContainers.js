import {
    StyleSheet,
    View,
    Text,
    SafeAreaView,
} from 'react-native';
const MainContainers = () => {
    return(
        <SafeAreaView style =  {styles.container}>
            <ScrollView style =  {styles.container}> 

            </ScrollView>
        </SafeAreaView>
    )
} 
const styles = StyleSheet.create({
    container: {
        flex:1,
    },
  });
export default MainContainers;