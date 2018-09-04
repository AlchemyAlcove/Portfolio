import Full from "../../../assets/images/full.jpg";
import HexRgb from "hex-rgb";
import Styled from "react-emotion";

export default Styled.div`
  &#top {
    height: 100vh !important;
    width: 100vw;
    position: relative;
    background: url(${Full}) no-repeat center center;
    background-size: cover;

    .top-stripe {
      background: rgba(${props => HexRgb(props.theme.colors.textOnPageBackground).join(", ")}, 0.4);
      position: relative;
      top: 28%;
      text-align: center;
      color: ${props => props.theme.colors.pageBackground};
      user-select: none;

      h1 {
        display: inline-block;
        font-weight: bold;
        font-size: 63px;
        line-height: 103px;
        color: ${props => props.theme.colors.pageBackground};
        margin: 0 0 10px;
        border-bottom: 1px solid rgba(${props => HexRgb(props.theme.colors.pageBackground).join(", ")}, 0.7);

        @media (max-width: ${props => props.theme.dimensions.tabletBreakpoint}px) {
          font-size: 50px;
        }
      }

      p.lead {
        margin-bottom: 0 !important;
        padding-bottom: 15px !important;
        font-size: 21px;
        font-weight: 300;
      }
    }
  }
`;
