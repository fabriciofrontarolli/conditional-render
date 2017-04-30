'use strict'

export default ( { condition, placeholder, children } ) => {
  /* Check if a placeholder was provided */
  const outputPlaceholder = placeholder ? placeholder : null;
  return condition ? outputPlaceholder : placeholder;
};
