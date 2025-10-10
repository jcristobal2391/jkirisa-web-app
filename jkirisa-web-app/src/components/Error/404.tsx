import { ExclamationOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';

export const NotFound = () => {
    const history = useNavigate();
    const goBack = () => {
        history(-1)
    };
    return (
        <div className="main-body-section">
            <div className="container">
                <div className="block-title" style={{ color: '#Fa8c16' }}>
                    <h2 style = {{ color: '#Fa8c16' }}>
                        <ExclamationOutlined /> 404 - Page Not Found
                    </h2>
                </div>
                <p className="large">How did you get here???</p>
                <Button type="primary" onClick={goBack}>
                    Leave and never come back
                </Button>
            </div>
        </div>
    )
};