import styled, { createGlobalStyle } from 'styled-components';

export const RectDatesOverrides = createGlobalStyle`
  .CalendarMonth_caption {
    padding-bottom: calc(37px + 22px);
  }
  .CalendarDay__selected_span {
    background: #FFA800;
    color: white;
    border: 1px solid #CB8300;
  }

  .CalendarDay__selected {
    background: #FFA800;
    color: white;
    border: 1px double #CB8300;
  }

  .CalendarDay__selected:hover {
    background: orange;
    color: white;
  }

  .CalendarDay__hovered_span:hover,
  .CalendarDay__hovered_span {
    background: brown;
  }
`;

export const ResetBtn = styled.button``;
