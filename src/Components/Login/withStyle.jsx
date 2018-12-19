import styled from 'styled-components';

export default (component) => styled(component)`
    .login-card {
        width: 50%;
        padding-top: 5px;
        margin-left: 25%;
        box-shadow: 1px 1px 2px 2px #ced6e0;
    }
    .text-field {
      height: 30px;
      width: 100%;
      padding-bottom: -20px;
      margin-bottom: 15px;
    }
    .button {
      background-color: black;
      color: white;
      margin-left: 18%;
      width: 70%;
    }
`;
