import React from 'react';
import {compose} from 'recompose';
import {withFormik} from 'formik';
import {validateCpf} from '~/utils';

// locals
import {
  TextBox,
  InputFile,
  InputMap,
  ListView,
  Button,
  Header
} from '~/components/shared';

const enhancer = compose(
  withFormik({
    mapPropsToValues: ({formValues}) => {
      return formValues;
    },
    validate: values => {
      const errors = {};
      if (!values.txtFullname) {
        errors.txtFullname = 'Required';
      }
      if (!values.txtCPF) {
        errors.txtCPF = 'Required';
      } else if (!validateCpf(values.txtCPF) || values.txtCPF.length !== 11) {
        errors.txtCPF = 'Invalid';
      }
      if (!values.txtPhone) {
        errors.txtPhone = 'Required';
      }
      return errors;
    },
    handleSubmit: (values, {setSubmitting, props, resetForm}) => {
      setTimeout(() => {
        const oldRegisters = localStorage.getItem('registers');
        let listRegisters = [];
        if (oldRegisters) {
          const oldRegistersParsed = JSON.parse(oldRegisters);
          listRegisters = [...oldRegistersParsed, values];
          localStorage.setItem('registers', JSON.stringify(listRegisters));
        } else {
          listRegisters = [values];
          localStorage.setItem('registers', JSON.stringify(listRegisters));
        }

        props.setRegistersList(JSON.parse(localStorage.getItem('registers')));
        alert('Registro feito com sucesso');
        resetForm();
        document.documentElement.scrollTop = 0;
        setSubmitting(false);
      }, 1000);
    },
    displayName: 'BasicForm'
  })
);

export const Form = enhancer(
  ({
    values,
    touched,
    errors,
    dirty,
    isSubmitting,
    handleUpload,
    handleChange,
    handleBlur,
    handleSubmit,
    handleReset,
    formList,
    setValues,
    registersList
  }) => {
    return (
      <div>
        <ListView registersList={registersList} />
        <Header size={20}>Formulário</Header>
        <form noValidate onSubmit={handleSubmit}>
          {formList.map(item => {
            if (item.id === 'btnSave') {
              return (
                <Button key={item.id} type="submit" loading={isSubmitting}>
                  {item.placeholder}
                </Button>
              );
            } else if (item.id === 'txtFullname') {
              return (
                <TextBox
                  key={item.id}
                  item={item}
                  value={values.txtFullname}
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                  errors={errors}
                  touched={touched}
                />
              );
            } else if (item.id === 'txtCPF') {
              return (
                <TextBox
                  key={item.id}
                  item={item}
                  value={values.txtCPF}
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                  errors={errors}
                  touched={touched}
                />
              );
            } else if (item.id === 'txtPhone') {
              return (
                <TextBox
                  key={item.id}
                  item={item}
                  value={values.txtPhone}
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                  errors={errors}
                  touched={touched}
                />
              );
            } else if (item.id === 'txtAddress') {
              return (
                <InputMap
                  key={item.id}
                  item={item}
                  value={values.txtAddress}
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                  errors={errors}
                  touched={touched}
                  setValues={setValues}
                  isMarkerShown
                />
              );
            } else if (item.id === 'uplImage') {
              return (
                <InputFile
                  key={item.id}
                  item={item}
                  value={values.uplImage}
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                  errors={errors}
                  touched={touched}
                />
              );
            } else {
              return null;
            }
          })}
        </form>
      </div>
    );
  }
);
