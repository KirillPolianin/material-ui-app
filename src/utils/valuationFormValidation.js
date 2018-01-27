export default function validate(values) {
  const errors = {};
  const requiredFields = ['address', 'postcode', 'size', 'cost'];
  requiredFields.forEach(field => {
    if (!values[field]) {
      errors[field] = 'Required';
    }
  });

  return errors;
}
