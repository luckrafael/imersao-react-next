import styled from 'styled-components';

import React from 'react';
import PropTypes from 'prop-types';

function Logo({ className }) {
  return (
    <img className={className} src="logo.png" alt="logo" />
  );
}

Logo.propTypes = {
  className: PropTypes.string.isRequired,
};

const QuizLogo = styled(Logo)`
  margin: auto;
  display: block;
  width: 400px;
  height: auto;
  @media screen and (max-width: 500px) {
    margin: 0;
    width: 300px;
  }
`;

export default QuizLogo;
