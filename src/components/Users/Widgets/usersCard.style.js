import styled from 'styled-components';

export default styled.div`
  width: 72%;
  margin: auto;

  .card--item {
    display: inline-block;
    vertical-align: top;
    padding: 20px;
    width: 33.33%;

    .item--innerbox {
      padding: 20px;
      background-color: #fff;
      box-shadow: rgba(0, 0, 0, 0.1) 0 0 50px 0;
      border-radius: 10px;
      overflow: hidden;
      cursor: pointer;
      transition: all ease 0.2s;

      .user-fullname {
        font-size: 16px;
        font-weight: bold;
        margin: 10px 0;
        color: #000;
      }

      .user-email {
        color: #000;
        font-size: 14px;
      }

      &:hover {
        box-shadow: rgba(0, 0, 0, 0.17) 0 0 50px 0;
      }
    }
  }
`;
