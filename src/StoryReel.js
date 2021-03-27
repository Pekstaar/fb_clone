import React from "react";
import Story from "./Story";
import "./StoryReel.css";

const StoryReel = () => {
  return (
    <div className="storyReel">
      <Story
        image="https://img.etimg.com/thumb/width-1200,height-900,imgsize-594328,resizemode-1,msid-69381980/tech/internet/in-webs-dark-corner-your-profile-is-on-sale-for-just-a-few-bucks.jpg"
        profileSrc="https://i.pinimg.com/originals/7d/1a/3f/7d1a3f77eee9f34782c6f88e97a6c888.jpg"
        title="Jack Anderson"
      />
      <Story
        image="https://cms-assets.themuse.com/media/lead/_1200x630_crop_center-center_82_none/9272122e-c22e-4c44-ae7f-d53c9ecf8a9e.jpg?mtime=1568749727"
        profileSrc="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        title="Pekstar Coders"
      />
      <Story
        image="https://expertphotography.com/wp-content/uploads/2018/10/cool-profile-pictures-retouching-1.jpg"
        profileSrc="https://expertphotography.com/wp-content/uploads/2018/10/cool-profile-pictures-retouching-1.jpg"
        title="Mary Sherryl"
      />
      <Story
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgttPNOHYWhA6WxXDPY6bAE4dKAHU56FMyWQ&usqp=CAU"
        profileSrc="https://images.unsplash.com/photo-1457449940276-e8deed18bfff?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmlsZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80"
        title="Ben sean"
      />
      <Story
        image="https://netstorage-tuko.akamaized.net/images/b4970c2fd30c272e.jpg?imwidth=900"
        profileSrc="https://upload.wikimedia.org/wikipedia/commons/5/5f/Alberto_conversi_profile_pic.jpg"
        title="Avatar Jones"
      />
    </div>
  );
};

export default StoryReel;
