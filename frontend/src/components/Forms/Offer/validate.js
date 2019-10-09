import validator from 'validator';

const validate = values => {
  const errors = {};
  if (!values.get('address')) {
    errors.address = 'Address is Required!';
  }

  if (!values.get('offerDueDate')) {
    errors.offerDueDate = 'Offer Due Date is Required!';
  }

  if (
    !!values.get('redfinLink') &&
    !validator.isURL(values.get('redfinLink'))
  ) {
    errors.redfinLink = 'Invalid redfin link detected!';
  }

  if (
    !!values.get('zillowLink') &&
    !validator.isURL(values.get('zillowLink'))
  ) {
    errors.zillowLink = 'Invalid Zillow link detected!';
  }

  if (
    !!values.get('houseCanaryLink') &&
    !validator.isURL(values.get('houseCanaryLink'))
  ) {
    errors.houseCanaryLink = 'Invalid HouseCanary detected!';
  }

  return errors;
};

export default validate;
