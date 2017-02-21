/**
 * H2 Component
 *
 *
 */
import styled from 'styled-components';
import theme from 'theme';
import { typography } from '../../styled/mixins/typography';
const defaultProps = { theme };

const H2 = styled.h2`
  ${(props) => `

    font-size: ${props.theme['$font-size-h2']};
    ${typography(
      props.theme['$headings-margin-bottom'],
      props.theme['$headings-font-family'],
      props.theme['$headings-font-weight'],
      props.theme['$headings-line-height'],
      props.theme['$headings-color'],
      props.theme['$display1-size'],
      props.theme['$display2-size'],
      props.theme['$display3-size'],
      props.theme['$display4-size'],
      props.theme['$display1-weight'],
      props.theme['$display2-weight'],
      props.theme['$display3-weight'],
      props.theme['$display4-weight'],
    )}

    &.lead {
      font-size: ${props.theme['$lead-font-size']};
      font-weight: ${props.theme['$lead-font-weight']};
    }

    /* Reboot Scss */
    margin-top: 0;
  `}
`;

H2.defaultProps = defaultProps;

export default H2;
