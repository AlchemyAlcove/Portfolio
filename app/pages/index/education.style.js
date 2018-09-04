import HexRgb from "hex-rgb";
import Styled from "react-emotion";

export default Styled.div`
  &#education {
    padding: 40px 0;
    background: ${props => props.theme.colors.secondary};

    .education-container {
      max-width: 800px;
      margin: 0 auto;
    }

    h2.section-title {
      font-size: 54px;
      color: ${props => props.theme.colors.primary};
      font-weight: 500;
      text-align: center;
      border-bottom: 1px solid rgba(${props => HexRgb(props.theme.colors.textOnPageBackground).join(", ")}, 0.25);
    }
  }
`;
