import styled from 'styled-components';

export default (component) => styled(component)`
    .my-container {
        width: 100% !important;
    }
    .login-card {
        width: 50%;
        min-width: 200px;
        padding-top: 5px;
        margin-left: 25%;
        box-shadow: 1px 1px 2px 2px #ced6e0;
    }
    .text-field {
      width: 98%;
      margin-top: 3px; 
    }
    .button {
      background-color: black;
      color: white;
      margin-top: 10px;
      margin-left: 18%;
      width: 70%;
      &:hover {
        color: black;
      }
    }
`;
