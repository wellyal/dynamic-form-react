import React from 'react';
import {
  compose,
  withState,
  lifecycle,
  withHandlers,
  branch,
  renderNothing,
  renderComponent
} from 'recompose';

// locals
import {Header, Wrapper, Loader} from '~/components/shared';
import Form from '~/components/organisms/Form';
import {getForm} from '~/services';

const enhancer = compose(
  withState('formList', 'setFormList', null),
  withState('formValues', 'setFormValues', null),
  withState('loading', 'setLoading', false),
  withState('registersList', 'setRegistersList', null),
  withHandlers({
    normalizeFormValues: () => formList => {
      let values = {};
      formList.forEach(item => {
        if (item.type === 'submit') return;
        values = {...values, [item.id]: ''};
      });

      return values;
    }
  }),
  lifecycle({
    async componentWillMount() {
      this.props.setLoading(true);
      const request = await getForm();
      const error = request.status !== 200;
      if (error) {
        this.props.setLoading(false);
        alert('Deu ruim');
        return;
      }
      const formList = request.data;
      const values = this.props.normalizeFormValues(formList);
      this.props.setRegistersList(
        JSON.parse(localStorage.getItem('registers'))
      );
      this.props.setFormList(formList);
      this.props.setFormValues(values);
      this.props.setLoading(false);
    }
  }),
  branch(({loading}) => loading, renderComponent(() => <Loader />)),
  branch(({formList}) => !formList, renderNothing)
);

export const App = enhancer(
  ({formValues, formList, registersList, setRegistersList}) => {
    return (
      <Wrapper>
        <Header secondary size="25px">
          Dynamic Form
        </Header>

        <Wrapper>
          <Form
            formValues={formValues}
            formList={formList}
            registersList={registersList}
            setRegistersList={setRegistersList}
          />
        </Wrapper>
      </Wrapper>
    );
  }
);
