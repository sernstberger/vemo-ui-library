// const validation = (value: any) => {
//   console.log('value', value)
//   let error = 'nooooo'

//   // if (required && (!value || value.length === 0)) {
//   //   error = `${label} is required`
//   //   return error
//   // }

//   // if (maxLength) {
//   //   setCounter(value.length)
//   // }

//   // if (value) {
//   //   if (maxLength && value.length > maxLength) {
//   //     error = `${label} can't be more than ${maxLength} characters`
//   //     return error
//   //   }
//   //   // if (value.length < minLength) {
//   //   //   error = `${label} can't be less than ${minLength} characters`
//   //   //   return error
//   //   // }
//   // }

//   // // if value is numeric, validate length of digits only (no dashes)
//   // if (value && value.length && exactLength) {
//   //   let strippedValue
//   //   strippedValue = value.replace('+1', '')
//   //   strippedValue = strippedValue.replace(/\D/g, '')

//   //   if (strippedValue.length !== exactLength) {
//   //     error = `${label} must be ${exactLength} characters`
//   //     return error
//   //   }
//   // }

//   // // handle custom validations
//   // if (value && customValidation) {
//   //   const customValidationArray = Array.isArray(customValidation)
//   //     ? customValidation
//   //     : [customValidation]

//   //   await Promise.all(
//   //     customValidationArray.map(async cv => {
//   //       // check to see if the yup schema is valid
//   //       if (typeof cv.schema !== 'object') {
//   //         return
//   //       }

//   //       // check to see if the the field's value is valid; returns boolean
//   //       const validateField = await cv.schema.isValid(value)

//   //       if (!validateField) {
//   //         error = cv.message
//   //       }
//   //     })
//   //   )
//   // }

//   return error
// }

function validation(value: any) {
  console.log('value', value)
  let error;
  if (!value) {
    error = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
    error = 'Invalid email address';
  }
  return error;
}

export default validation
