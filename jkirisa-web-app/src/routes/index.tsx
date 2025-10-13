import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PATH } from 'src/constants/paths';
import { Loading } from "src/components/Loading";
import { MainLayout } from "src/pages/Layouts/MainLayout";
import { Helmet} from "react-helmet";

//Static
const HomePage = lazy(() => import('src/pages/HomePages/HomePage'));
const AboutPage = lazy(() => import('src/pages/StaticPages/AboutPage'));
const Ashen1Page = lazy(() => import('src/pages/StaticPages/Ashen1Page'));
const Ashen2Page = lazy(() => import('src/pages/StaticPages/Ashen2Page'));
const Else1Page = lazy(() => import('src/pages/StaticPages/Else1Page'));

const NotFoundPage = lazy(() => import('src/pages/ErrorPages/404Pages'));


export const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Helmet>
                <meta charSet="utf-8" />
                <title>JKirisame</title>
                <link 
                    rel="canonical" 
                    href="http://jkirisa.me/" 
                />
            </Helmet>

            <MainLayout>
                <Suspense fallback={<Loading />}>
                    <Routes>
                        <Route path={PATH.HOME} element={<HomePage />} />
                        <Route path={PATH.ABOUT} element={<AboutPage />} />
                        <Route path={PATH.ASHEN1} element={<Ashen1Page />} />
                        <Route path={PATH.ASHEN2} element={<Ashen2Page />} />
                        <Route path={PATH.ELSE1} element={<Else1Page />} />

                        <Route element={<NotFoundPage />} />
                    </Routes>
                </Suspense>
            </MainLayout>
        </BrowserRouter>
    )
}