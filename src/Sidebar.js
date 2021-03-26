import {
  Chat,
  EmojiFlags,
  ExpandMoreOutlined,
  LocalHospital,
  People,
  Storefront,
  VideoLibrary,
} from "@material-ui/icons";
import React from "react";
import "./Sidebar.css";
import SidebarRow from "./SidebarRow";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <SidebarRow
        src="https://scifusion360.com/wp-content/uploads/2020/03/What-Types-of-Coders-are-There-300x200.jpg"
        title="Eric Pekmah"
      />
      <SidebarRow Icon={LocalHospital} title="CVD Information Center" />
      <SidebarRow Icon={EmojiFlags} title="Pages" />
      <SidebarRow Icon={People} title="Friends" />
      <SidebarRow Icon={Chat} title="Messenger" />
      <SidebarRow Icon={Storefront} title="Marketplace" />
      <SidebarRow Icon={VideoLibrary} title="Videos" />
      <SidebarRow Icon={ExpandMoreOutlined} title="Marketplace" />
    </div>
  );
};

export default Sidebar;
