import React from 'react';
import { AshenOption1 } from 'src/components/StaticPages/FromAshen.option.1';
import { PageLayout } from 'src/pages/Layouts/PageLayout';

const _Ashen1 = () => {
    return (
        <PageLayout>
            <AshenOption1 />
        </PageLayout>
    );
};

const Ashen1 = React.memo(_Ashen1)
export default Ashen1;