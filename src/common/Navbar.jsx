import { useState } from "react"
import { GiftFilled, StarFilled , SettingOutlined } from '@ant-design/icons';
import { Menu } from 'antd';

const Navbar = () => {

    const items = [
        {
          label: 'Placa de Cumple',
          key: 'cumple',
          icon: <StarFilled />,
        },
        {
          label: 'Placa de Bienvenida',
          key: 'bienvenida',
          icon: <GiftFilled />,
          disabled: true,
        },
      ];

      const [current, setCurrent] = useState('cumple');
      const onClick = (e) => {
        console.log('click ', e);
        setCurrent(e.key);
      };
      return <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />;
}

export default Navbar
