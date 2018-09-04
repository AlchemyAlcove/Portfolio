import HexRgb from "hex-rgb";
import Styled from "react-emotion";

export default Styled.div`
  &#profile {
    padding: 40px 0;
    background: ${props => props.theme.colors.pageBackground};

    .profile-container {
      max-width: 800px;
      margin: 0 auto;
    }

    h2.section-title {
      font-size: 54px;
      color: ${props => props.theme.colors.primary};
      font-weight: 500;
      text-align: center;
    }

    h3.section-sub-title {
      border-bottom: 1px solid rgba(${props => HexRgb(props.theme.colors.textOnPageBackground).join(", ")}, 0.25);
      padding-bottom: 20px;
      text-align: center;
      font-size: 21px;
      font-weight: 300;
      font-family: ${props => props.theme.fonts[0]};
      margin-bottom: 40px;
    }

    h4 {
      color: ${props => props.theme.colors.primary};
      font-size: 24px;
      font-weight: 500;
      margin-bottom: 8px;
    }

    .details {
      display: inline-block;
      vertical-align: top;
      width: 135px;

      .detail {
        .detail-title {
          font-weight: 700;
          font-family: ${props => props.theme.fonts[1]};
        }

        .detail-value {
          font-size: 14px;
          margin: 6px 0 20px 6px;
        }
      }
    }

    .profile-image {
      display: inline-block;
      width: 215px;
      height: 215px;
      margin: 0 30px;
      border-radius: 215px;
      background: ${props => props.theme.colors.secondary};

      img {
        margin: 25px 22px;
        border-radius: 215px;
      }
    }

    .about {
      display: inline-block;
      vertical-align: top;
      width: 390px;

      p {
        font-size: 14px;
        line-height: 20px;
      }

      h4.email {
        margin-top: 20px;
      }
    }
  }
`;
