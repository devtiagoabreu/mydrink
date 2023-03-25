import styled from "styled-components";

export const Container = styled.aside`
  background-color: ${({theme}) => theme.colors.red};
  width: 7.75rem; //rem é um unidade relativa se modifica segundo o evento na tela
  padding: 2rem 0;
  overflow: hidden; //tira barra de rolagem
  display: flex;
  flex-direction: column; //o agrupamento do flex será verticalmente (colunas)
  align-items: center; //itens centralizados

`
