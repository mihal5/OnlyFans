import { View, Text, ImageBackground, StyleSheet, SafeAreaView, Image, Pressable, FlatList} from 'react-native';
import { useRouter, useGlobalSearchParams } from 'expo-router';
import users from '../../assets/data/users';
import { useState } from 'react'; 
import UserProfileHeader from '../../src/components/UserProfileHeader';
import posts from '../../assets/data/posts';
import Post from '../../src/components/Post';

//lock
import { Entypo } from '@expo/vector-icons'; 


const ProfilePage = () => {
  const [isSubscribed, setIsSubscribed] = useState(false);

  const { id } = useGlobalSearchParams();

  const user = users.find(u => u.id === id);
  if (!user) {
    return <Text>User not found</Text>
  }

  if (!isSubscribed) {
    return(
      <View>
        <UserProfileHeader 
          user={user}
          isSubscribed={isSubscribed}
          setIsSubscribed={setIsSubscribed} 
        />
        
        <View style={{backgroundColor: 'lightgray', alignItems: 'center', padding: 20}}>
          <Entypo name="lock" size={45} color='gray' />
            <Text 
              style={{
                backgroundColor: 'royalblue',
                padding: 12.5, 
                borderRadius: 25, 
                overflow: 'hidden', 
                height: 45 ,
                color: 'white',
                margin: 20
              }}
            >
              SUBSCRIBE TO SEE USER POSTS</Text>
        </View>

      </View>
    );
  }
  return (
    <View >
      {/* <UserProfileHeader 
        user={user}
        isSubscribed={isSubscribed}
        setIsSubscribed={setIsSubscribed} /> */}

        <FlatList 
          data={posts}
          renderItem={({ item }) => <Post post={item} />}
            ListHeaderComponent={() => ( 
              <UserProfileHeader 
                user={user}
                isSubscribed={isSubscribed}
                setIsSubscribed={setIsSubscribed} 
              />
            )}      
        />
    </View>
)};

const styles = StyleSheet.create({ 
  
});


export default ProfilePage