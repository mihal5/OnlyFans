import { StyleSheet, Text, View, Image, ImageBackground, Pressable } from "react-native";
import { Link } from "expo-router";

export default function UserCard({ user }) {
  return (
    <Link href={`/user/${user.id}`} asChild>
        <Pressable>
            <ImageBackground source={{uri: user.coverImage}} style={styles.userCard}>
                <View style={styles.overlay} />
                    <Image src={user.avatar} style={styles.userImage} />
                        <View>
                            <Text style={{color: 'white', fontSize: 22, fontWeight: "500", marginBottom: 5}}> {user.name}</Text>
                            <Text style={{color: 'white',}}> @{user.handle} </Text>  
                        </View>
            </ImageBackground>
        </Pressable>
    </Link>

  )
}


const styles = StyleSheet.create({
  userCard: {
    padding: 10,
    backgroundColor: 'gainsboro',  
    flexDirection: "row",
    alignItems: "flex-end",

    borderRadius: 10,
    overflow: "hidden",
    marginVertical: 5,
  },
  userImage: {
    width: 100,
    height: 100,
    borderRadius: 100,
    borderColor: 'white',
    borderWidth: 3,
    marginRight: 20,
  },
  overlay: {
    backgroundColor: 'rgba(0,0,0,0.4),',
    //miesto tohoto možem pouťiž toto 
    // position: 'absolute',
    // top: 0,
    // left: 0,
    // right: 0,
    // bottom: 0,
    ...StyleSheet.absoluteFillObject
  }
});
