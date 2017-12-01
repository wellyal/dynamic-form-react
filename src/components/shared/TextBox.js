import React from 'react';
import styled from 'styled-components';
import {compose, pure, withProps} from 'recompose';

const enhancer = compose(
  withProps(({errors, item, touched}) => ({
    error: errors[item.id] && touched[item.id],
    success: !errors[item.id] && touched[item.id],
    initial: !touched[item.id]
  })),
  pure
);

export const TextBox = enhancer(
  ({
    item,
    value,
    handleChange,
    handleBlur,
    errors,
    touched,
    error,
    success,
    initial
  }) => {
    const status = {error, success, initial};
    return (
      <TextBoxWrapper {...status}>
        <Input
          id={item.id}
          required
          type={item.type}
          value={value}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <Label {...status} htmlFor={[item.type]}>
          {item.placeholder}
        </Label>
      </TextBoxWrapper>
    );
  }
);

const Label = styled.label.attrs({
  color: props => {
    if (props.initial) return props.theme.secondary;
    else if (props.error) return props.theme.danger;
    else if (props.success) return props.theme.success;
  }
})`
  font-size: 15px;
  position: absolute;
  top: 22px;
  transition: all 0.2s;
  color: ${props => props.color};
`;

const Input = styled.input.attrs({
  color: props => {
    if (props.initial) return props.theme.secondary;
    else if (props.error) return props.theme.danger;
    else if (props.success) return props.theme.success;
  }
})`
  border: 0;
  width: 100%;
  height: 20px;
  position: relative;
  outline: 0;
  font-size: 20px;
  top: 10px;
  z-index: 19;
  background: transparent;

  &:focus ~ ${Label}, &:active ~ ${Label}, &:valid ~ ${Label} {
    position: absolute;
    top: 7px;
    font-size: 11px;
    transition: all 0.2s;
    color: ${props => props.color};
  }
`;

const TextBoxWrapper = styled.div.attrs({
  color: props => {
    if (props.initial) return props.theme.secondary;
    else if (props.error) return props.theme.danger;
    else if (props.success) return props.theme.success;
  }
})`
  font-size: 20px;
  color: #ccc;
  border-bottom: 1px solid ${props => props.color};
  display: inline-block;
  height: 35px;
  width: 100%;
  display: flex;
  align-items: center;
  padding: 5px;
  position: relative;
  margin: 12px 0;
`;
