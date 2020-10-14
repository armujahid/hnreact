import React from 'react';
import ContentLoader from "react-content-loader"
import { Card } from 'reactstrap';

const CustomLoader = props => (
  <Card>
    <ContentLoader
      height={95}
      width={1108}
      speed={2}
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
      {...props}
    >
      <rect x="25" y="20" rx="5" ry="5" width="319" height="20" />
      <rect x="25" y="62" rx="5" ry="5" width="200" height="12.8" />
    </ContentLoader>
  </Card>
)

export default CustomLoader
