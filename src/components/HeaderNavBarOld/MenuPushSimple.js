/* eslint-disable */
/*
 * Kopax Ltd Copyright (c) 2016.
 */

/**
 * MenuPush Component
 *
 *
*/
import React, { PropTypes } from 'react';
import styled from 'styled-components';
import theme from 'theme';

import { transition } from '../../styled/mixins/transition';
import { mediaBreakpointUp } from '../../styled/mixins/breakpoints';
import MenuPush from './MenuPush';
const defaultProps = { theme };

// eslint-disable-next-line no-class-assign
const MenuPushSimple = styled(MenuPush)`
  ${(props) => ` 
    ${transition(
      props.theme['$enable-transitions'],
      'transform 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms'
    )}
   
    &.menu-left {
      left:0;
      transform: translate3d(-100%, 0, 0);
      ${mediaBreakpointUp(
        'sm',
        props.theme['$grid-breakpoints'],
        `
          transform: translate3d(0, 0, 0);
        `
      )}
    }
    
    &.menu-right {
      right:0;
      transform: translate3d(100%, 0, 0);
      ${mediaBreakpointUp(
        'sm',
        props.theme['$grid-breakpoints'],
        `
          transform: translate3d(0, 0, 0);
        `
      )}
    }
    
    &.active {
      transform: translate3d(0, 0, 0);
      width: 100%;
      ${mediaBreakpointUp(
          'sm',
          props.theme['$grid-breakpoints'],
          `
            display: block;
            width: ${props.theme['$menu-push-width']};
          `
      )}
    }
  `}
`;

MenuPushSimple.defaultProps = defaultProps;

export default MenuPushSimple;
