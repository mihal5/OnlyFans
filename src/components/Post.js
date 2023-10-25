import { View, Text, Image } from 'react-native';
import { Entypo } from '@expo/vector-icons'; 
//heart
import { AntDesign } from '@expo/vector-icons'; 
//dollar
import { FontAwesome5 } from '@expo/vector-icons'; 




const Post = ({ post }) => {
  return (
    <View style={{ marginVertical: 15}}>
      <View style={{flexDirection: 'row', alignItems:'center', padding: 7}}>
        <Image src={post.User.avatar} style={{width: 50, aspectRatio:1, borderRadius: 50, marginRight: 10,}}/>

            <View style={{}}>
              <Text style={{ fontWeight: '600', fontSize: 16, marginBottom: 3,}}>{post.User.name}</Text>
              <Text style={{ color: 'gray'}} >@{post.User.handle}</Text>
            </View>
      
            <View style={{marginLeft: 'auto', flexDirection: 'row'}}>
              <Text style={{ marginRight:5, color: 'gray' }}>{post.created_at}</Text>
                <Entypo name="dots-three-horizontal" size={18} color="gray" />
            </View>
      </View>   

        <Text style={{ margin: 10, lineHeight: 18 }} >{post.text}</Text>

        <Image src={post.image} style={{ width: '100%', aspectRatio: 1}} />
        
        <View style={{margin: 10, flexDirection: 'row'}}>
          <AntDesign name="hearto" size={24} color="gray" style={{marginRight: 15}} />

          <FontAwesome5 name="comment-dollar" size={24} color="gray" style={{marginRight: 15}} />

        </View>

        <Text style={{ fontWeight: '500', marginHorizontal: 10}}>{post.likes} Likes</Text>
    </View>
  );
};

export default Post