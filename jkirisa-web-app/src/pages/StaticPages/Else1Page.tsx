import React from 'react';
import { ElsewhereOption1 } from 'src/components/StaticPages/FromElsewhere.option.1';
import { PageLayout } from 'src/pages/layouts/PageLayout';

const _Else1 = () => {
    return (
        <PageLayout>
            <ElsewhereOption1 />
        </PageLayout>
    );
};

const Else1 = React.memo(_Else1)
export default Else1;