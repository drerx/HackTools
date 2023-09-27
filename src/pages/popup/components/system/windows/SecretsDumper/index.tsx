import { FileSyncOutlined } from '@ant-design/icons';
import type { TabsProps } from 'antd';
import { FloatButton, Tabs } from 'antd';
import LSASS from './LSASS';
import SAM from './SAM';
import { useSecretsStore } from './useSecret';




const WindowSecretDumper = () => {

    const items: TabsProps['items'] = [
        {
            key: '1',
            label: 'SAM',
            children: SAM()
        },
        {
            key: '2',
            label: 'LSASS',
            children: LSASS()
        },
    ];

    const { setIsServerConnectModalVisible } = useSecretsStore();

    const showServerConnectModal = () => {
        setIsServerConnectModalVisible(true);
    };


    return (
        <>
            <Tabs defaultActiveKey="1" items={items} />
            <FloatButton
                icon={<FileSyncOutlined />}
                onClick={showServerConnectModal}
            />
        </>
    );
}




export default WindowSecretDumper;