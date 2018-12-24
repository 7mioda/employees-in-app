import styled from 'styled-components';

export default (component) => styled(component)`

  .heading {
    font-size: 15px;
  }

  .secondaryHeading {
    font-size: 15px;
  }

  .details {
    align-items: center;
  }

  .column {
    flex-basis: 33.33%;
  }
  .double-column {
    flex-basis: 66.66%;
  }

  .helper {
    border-left: 2px solid;
    padding: 2px;
  }

  .head {
    background-color: black;
    color: white;
  }

  .body {
    font-size: 14;
  }
  .table {
    min-width: 700;
    width: 95%;
    margin: 2.5%;
  }

  .row {
    &:nth-of-type(odd) {
      background-color: grey,
    }
  }
`;
