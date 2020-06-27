import React from 'react';
import DaumPostcode from 'react-daum-postcode';
// component
import { Wrap } from './index.style';

const Postcode = (props) => {
  const handleComplete = (data) => {
    let fullAddress = data.address;
    let extraAddress = '';

    if (data.addressType === 'R') {
      if (data.bname !== '') {
        extraAddress += data.bname;
      }
      if (data.buildingName !== '') {
        extraAddress +=
          extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddress += extraAddress !== '' ? ` (${extraAddress})` : '';
    }

    props.setState(fullAddress);
    props.toggle();
    console.log(fullAddress); // e.g. '서울 성동구 왕십리로2길 20 (성수동1가)'
  };

  return (
    <Wrap>
      <DaumPostcode onComplete={handleComplete} {...props} />
    </Wrap>
  );
};

export default Postcode;
