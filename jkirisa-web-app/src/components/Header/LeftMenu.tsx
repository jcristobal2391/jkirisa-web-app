import { NavLink } from 'react-router-dom';
import { Menu, Grid } from 'antd';

const { SubMenu, ItemGroup: MenuItemGroup } = Menu;
const { useBreakpoint } = Grid;

export const LeftMenu = () => {
    const { md } = useBreakpoint();
    return (
        <Menu mode={md ? 'horizontal' : 'inline'}>
        <Menu.Item key="key-home">
            <NavLink className="navbar-item" to="/">
            Home
            </NavLink>
        </Menu.Item>
        <SubMenu key="sub1" title="Stories">
            <MenuItemGroup title="FromAshen">
            <Menu.Item key="setting:1">
                <NavLink to="/ashen1">The Sword Saint</NavLink>
            </Menu.Item>
            <Menu.Item key="setting:2">
                <NavLink to="/ashen2">The Witch War</NavLink>
            </Menu.Item>
            </MenuItemGroup>
            <MenuItemGroup title="FromElsewhere">
            <Menu.Item key="setting:3">
                <NavLink to="/else1">Waiting for Her, Waiting for Him</NavLink>
            </Menu.Item>
            </MenuItemGroup>
        </SubMenu>
        <Menu.Item key="key-about">
            <NavLink className="navbar-item" to="/about">
            About
            </NavLink>
        </Menu.Item>
        <Menu.Item key="key-contact">
            <NavLink className="navbar-item" to="/contact">
            Contact
            </NavLink>
        </Menu.Item>
        </Menu>
    );
}