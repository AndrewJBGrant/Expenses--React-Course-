// Functional component syntax
import React from 'react';
import styles from './Button.module.css';

const Button = props => {
  return (
    // CSS Modules in use here =>  className={styles.button} styles here related to import styles from './Button.module.css
    <button type={props.type} className={styles.button} onClick={props.onClick}>
      {props.children}
    </button>
  );
};




// Dynamic styling
// Tagged Template Literals  = a special js syntax for a method``
// Using styled compoments we create a button method and put the style within the ``
// dont need class names psuedo selectors use &

// import styled from "styled-components";

// const Button = styled.button`
//   width: 100%;
//   font: inherit;
//   padding: 0.5rem 1.5rem;
//   border: 1px solid #8b005d;
//   color: white;
//   background: #8b005d;
//   box-shadow: 0 0 4px rgba(0, 0, 0, 0.26);
//   cursor: pointer;

// @media (min-width: 768px) {
//   width: auto;
// }

// &:focus {
//     outline: none;
//   }

//   &:hover,
//   &:active {
//     background: #ac0e77;
//     border-color: #ac0e77;
//     box-shadow: 0 0 8px rgba(0, 0, 0, 0.26);
//   }
// `;

export default Button;
