import React from 'react';
import styled from 'styled-components';
import {compose, pure, branch, renderComponent} from 'recompose';

import {Header} from '~/components/shared';

const enhancer = compose(
  branch(
    ({registersList}) => !registersList,
    renderComponent(() => <div>Nenhum cadastro efetuado</div>)
  ),
  pure
);

export const ListView = enhancer(({registersList}) => {
  console.log('registersList', registersList);
  return (
    <div>
      <Header size={20}>Listagem</Header>
      {registersList.map(item => {
        return (
          <Row key={item.txtCPF}>
            <div>{item.txtFullname}</div>
            <div>{item.txtPhone}</div>
          </Row>
        );
      })}
    </div>
  );
});

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 10px 0;
  border-bottom: 1px solid #ccc;
`;
