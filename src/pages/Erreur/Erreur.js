import React from 'react';
import styled from 'styled-components';

const ErrorWrapper = styled.div`
  text-align: center;
`;

const ErrorTitle = styled.h1`
  font-size: 2rem;
  color: red;
`;

const ErrorSubtitle = styled.p`
  font-size: 1.2rem;
  color: #888888;
`;

function Error() {
  return (
     <ErrorWrapper>
      <ErrorTitle>404</ErrorTitle>
     <ErrorSubtitle>
     Oups! La page que vous demandez n'existe pas.
     </ErrorSubtitle>
   </ErrorWrapper>
  );
}

export default Error;
