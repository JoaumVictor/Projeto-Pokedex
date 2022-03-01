import React from 'react';
import propTypes from 'prop-types';

function Button({
  id, classe, onClick, value,
}) {
  return (
    <button
      type="button"
      className={classe}
      onClick={onClick}
      id={id}
    >
      {value}
    </button>
  );
}

Button.propTypes = {
  id: propTypes.string,
  classe: propTypes.string,
  onClick: propTypes.func,
  value: propTypes.string,
};

Button.defaultProps = {
  id: propTypes.string,
  classe: propTypes.string,
  onClick: propTypes.func,
  value: propTypes.string,
};

export default Button;
