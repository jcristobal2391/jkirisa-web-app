//import React, { useEffect } from 'react';
// import { connect, type ConnectedProps } from 'react-redux';
import { connect } from 'react-redux';
import { AppRoutes } from 'src/routes';

const mapStateToProps = () => ({});
const connector = connect(mapStateToProps);
// interface Props extends ConnectedProps<typeof connector> {}

const _App = () => {
    return <AppRoutes />;
};

export const App = connector(_App);