import styled, {css} from 'styled-components';

export const Header = styled.div.attrs({
  color: props => props.color || props.theme.primary,
  size: props => props.size || '15px',
  weight: props => props.weight || 'normal',
  align: props => props.align || 'center'
})`
  color: ${props => props.color};
  font-size: ${props => props.size};
  font-weight: ${props => props.weight};
  text-align: ${props => props.align};
  margin: 20px 0;

  ${props =>
    props.primary &&
    css`
    color: ${props => props.theme.primary};
  `}

  ${props =>
    props.secondary &&
    css`
    color: ${props => props.theme.secondary};
  `};
`;
