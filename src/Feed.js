import React, { useEffect, useState } from "react";
import "./Feed.css";
import db from "./firebase";
import MessageSender from "./MessageSender";
import Post from "./Post";
import StoryReel from "./StoryReel";

const File = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setPosts(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() })))
      );
  }, []);

  return (
    <div className="feed">
      {/* Story Reel */}
      <StoryReel />
      {/* MessageSender */}
      <MessageSender />
      {posts.map((post) => (
        <Post
          key={post.data.id}
          profielPic={post.data.profilePic}
          message={post.data.message}
          timestamp={post.data.timestamp}
          username={post.data.username}
          image={post.data.image}
        />
      ))}
      {/* <Post
        profielPic="https://expertphotography.com/wp-content/uploads/2018/10/cool-profile-pictures-retouching-1.jpg"
        message="Nice Coding by Pekstar Coders"
        timestamp="12:55:12"
        username="Mary Sherryl"
        image="https://images.idgesg.net/images/article/2017/06/reactjs_code_coding_thinkstock-100725807-large.jpg"
      /> */}
      {/* <Post
        profielPic="https://img.etimg.com/thumb/width-1200,height-900,imgsize-594328,resizemode-1,msid-69381980/tech/internet/in-webs-dark-corner-your-profile-is-on-sale-for-just-a-few-bucks.jpg"
        message="The application actually Runs!"
        timestamp="22:55:12"
        username="Jack Anderson"
      /> */}
      {/* <Post />
      <Post /> */}
    </div>
  );
};

export default File;
