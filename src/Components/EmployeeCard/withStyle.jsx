import styled from 'styled-components';


export default (component) => styled(component)`
    .card {
        max-width: 300px;
    }
    .media {
        height: 300px;
        width: 300px;
    }
    .details {
        font-family: "Trebuchet MS", "Lucida Grande", "Lucida Sans Unicode", "Lucida Sans", sans-serif;
        height: 280px;
        width: 300px;
        padding: 10px;
    }
    .check-box {
        padding: 1px;
    }
`;
