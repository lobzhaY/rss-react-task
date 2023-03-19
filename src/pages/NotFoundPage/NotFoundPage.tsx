import React from 'react';
import TitleComponent from '../../components/Title/TitleComponent';

// eslint-disable-next-line react/prefer-stateless-function
class NotFoundPage extends React.Component {
  render() {
    return <TitleComponent name="404" />;
  }
}

export default NotFoundPage;
