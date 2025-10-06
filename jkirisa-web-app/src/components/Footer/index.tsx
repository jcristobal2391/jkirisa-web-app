import {
    GithubOutlined,
    UpCircleOutlined,
} from '@ant-design/icons';
import { BackTop } from 'antd';

export const AppFooter = () => {
    return(
        <div> className="footer"
            <div className="container">
                <div className="footer-inner">
                    <div className="footer-logo">
                        <a href="/">blahblahablah</a>
                    </div>
                    <ul className="footer-socials">
                        <li>
                            <a
                                target="_blank"
                                rel="noreffer"
                                href="https://github.com/jcristobal2391/jkirisa-web-app"
                            >
                                <GithubOutlined />
                            </a>
                        </li>
                    </ul>
                    <div className="copyright">Copyright &copy; 2025 blahblahblah</div>
                    <BackTop>
                        <div className="go-top">
                            <UpCircleOutlined />
                        </div>
                    </BackTop>
                </div>
            </div>
        </div>
    )
}