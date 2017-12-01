import React from 'react';
import styled from 'styled-components';
import {compose, withState, withHandlers} from 'recompose';

const enhancer = compose(
  withState('file', 'setFile', null),
  withState('imagePreview', 'setImagePreview', null),
  withHandlers({
    handleUpload: ({setFile, setImagePreview}) => e => {
      e.preventDefault();

      let reader = new FileReader();
      let file = e.target.files[0];
      if (!file) return null;

      reader.onloadend = () => {
        setFile(file);
        setImagePreview(reader.result);
      };

      reader.readAsDataURL(file);
    }
  })
);

export const InputFile = enhancer(
  ({
    item,
    value,
    handleChange,
    handleBlur,
    errors,
    touched,
    handleUpload,
    imagePreview
  }) => {
    return (
      <div>
        <InputFileWrapper>
          <Input
            id={item.id}
            type={item.type}
            value={value}
            onChange={e => {
              handleUpload(e);
              handleChange(e);
            }}
            onBlur={handleBlur}
          />
        </InputFileWrapper>
        {!!imagePreview && (
          <WrapperThumb>
            <Thumb src={imagePreview} />
          </WrapperThumb>
        )}
      </div>
    );
  }
);

const Input = styled.input`
  font-size: 16px;
`;

const InputFileWrapper = styled.div`
  font-size: 20px;
  color: #ccc;
  border-bottom: 1px solid #ccc;
  display: inline-block;
  height: 35px;
  width: 100%;
  display: flex;
  align-items: center;
  padding: 5px;
  position: relative;
  margin: 12px 0;
`;

const WrapperThumb = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 12px 0;
`;

const Thumb = styled.img`
  max-width: 200px;
  max-height: 200px;
`;
