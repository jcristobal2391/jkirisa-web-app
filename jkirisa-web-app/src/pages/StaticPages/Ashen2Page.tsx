import React from 'react';
import { AshenOption2 } from 'src/components/StaticPages/FromAshen.option.2';
import { PageLayout } from 'src/pages/layouts/PageLayout';

const _Ashen2 = () => {
    return (
        <PageLayout>
            <AshenOption2 />
        </PageLayout>
    );
};

const Ashen2 = React.memo(_Ashen2)
export default Ashen2;