import styled from 'styled-components';

export default (component) => styled(component)`
    .login-card {
        width: 50%;
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
      margin-left: 18%;
      width: 70%;
    }
`;
