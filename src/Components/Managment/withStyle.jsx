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

  .tabel-cell {
    position: relative;
  }

  .skill-icon {
    position: absolute;
    width: 25px;
    height: 25px;
    top: 20%;
    right: 1%;
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

  .main-paper {
    width: 80%;
    margin-top: 150px;
    margin-left: 150px;
  }

  .sub-container {
    width: 95%;
    margin-left: 2.5%;
    margin-top: 100px;
  }

  .link {
    text-decoration: none;
    color: inherit;
  }

  .icon {
    float: right;
    margin: 50px;
    border-radius: 50%;
  }

  .icon:hover {
    background-color: rgba(60, 64, 67, 0.2);
    outline: none;
  }
  .input {
    height: 40px;
    width: 100%;
  }

  .body {
    font-size: 14;
  }

  .table {
    min-width: 700;
    width: 95%;
    margin: 2.5%;
  }

  .action-icon {
    border-radius: 50%;
    display: inline-block;
    cursor: pointer;
    height: 24px;
    width: 24px;
  }

  .action-icon:hover {
    background-color: rgba(60, 64, 67, 0.2);
    outline: none;
  }

  .row {
    cursor: pointer;
  }

  .row:nth-child(2n+1) {
    background-color: lightgrey;
  }

  .row:hover {
    -webkit-box-shadow: inset 1px 0 0 #dadce0, inset -1px 0 0 #dadce0,
      0 1px 2px 0 rgba(60, 64, 67, 0.3), 0 1px 3px 1px rgba(60, 64, 67, 0.15);
    box-shadow: inset 1px 0 0 #dadce0, inset -1px 0 0 #dadce0,
      0 1px 2px 0 rgba(60, 64, 67, 0.3), 0 1px 3px 1px rgba(60, 64, 67, 0.15);
    z-index: 2;
  }

  .card {
    display: flex;
  }

  .details {
    display: flex;
    flex-direction: column;
  }

  .content {
    flex: 1 0 auto;
  }

  .cover {
    width: 151px;
  }

  .controls {
    align-self: flex-end;
    margin: 5px 5px 0 0;
  }

  .play-icon: {
    height: 38px;
    width: 38px;
  }
  
`;
