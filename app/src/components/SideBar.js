import React from "react";
import ReactDOM from "react-dom";
import { Menu, Switch, Divider } from "antd";
import { Link } from "react-router-dom";
import {
  MailOutlined,
  CalendarOutlined,
  AppstoreOutlined,
  SettingOutlined,
  LinkOutlined,
} from "@ant-design/icons";

const { SubMenu } = Menu;

class SideBar extends React.Component {
  state = {
    mode: "inline",
    theme: "light",
  };

  changeMode = (value) => {
    this.setState({
      mode: value ? "vertical" : "inline",
    });
  };

  changeTheme = (value) => {
    this.setState({
      theme: value ? "dark" : "light",
    });
  };

  render() {
    return (
      <>
        <div>
          <Switch onChange={this.changeMode} /> Change Mode
          <Divider type="vertical" />
          <Switch onChange={this.changeTheme} /> Change Style
        </div>
        <br />
        <br />
        <Menu
          style={{ width: 256 }}
          defaultSelectedKeys={["1"]}
          defaultOpenKeys={["sub1"]}
          mode={this.state.mode}
          theme={this.state.theme}
        >
          <Menu.Item key="1" icon={<MailOutlined />}>
            <Link to="/">Home</Link>
          </Menu.Item>

          <SubMenu
            key="sub1"
            icon={<AppstoreOutlined />}
            title="Navigation Two"
          >
            <Menu.Item key="3">Option 3</Menu.Item>
            <Menu.Item key="4">Option 4</Menu.Item>
            <SubMenu key="sub1-2" title="Submenu">
              <Menu.Item key="5">Option 5</Menu.Item>
              <Menu.Item key="6">Option 6</Menu.Item>
            </SubMenu>
          </SubMenu>
        </Menu>
      </>
    );
  }
}

export default SideBar;
