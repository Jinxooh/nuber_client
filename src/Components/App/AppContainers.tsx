import * as React from 'react';
import { graphql } from 'react-apollo';
import { IS_LOGGED_IN } from './AppQueries';

const AppContainers = ({ data }) => <span>{JSON.stringify(data)}</span>;

export default graphql(IS_LOGGED_IN)(AppContainers);