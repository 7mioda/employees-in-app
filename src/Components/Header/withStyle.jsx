import styled from 'styled-components';

export default (component) => styled(component)`

  .search {
    position: relative;
    margin-left: 60%;
    width: 50%;
    border-radius: 2px;
    padding: 2px;
    background-color: #b2bec3;
  }
  .search-icon {
    height: 100%;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center
  }
  .input-root {
    color: white;
    margin-left: 7%;
    width: 80%;
  }
`;
