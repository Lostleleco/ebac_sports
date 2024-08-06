import styled from 'styled-components'
import { cores } from '../../styles'

export const Produtos = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 24px;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

export const Produto = styled.div``

export const Titulo = styled.h3`
  min-height: 64px;
`

export const Capa = styled.div`
  position: relative;

  img {
    display: block;
    width: 100%;
    margin-bottom: 8px;
  }
`

export const Prices = styled.div`
  margin: 16px 0;
  color: ${cores.corTexto};

  small {
    font-size: 16px;
    text-decoration: line-through;
    margin-right: 8px;
    opacity: 0.7;
  }

  strong {
    font-size: 18px;
  }
`

export const Tag = styled.span`
  background-color: ${cores.corPrincipal};
  position: absolute;
  top: 8px;
  left: 8px;
  padding: 8px;
  font-size: 12px;
  font-weight: 700;
  color: #fff;
`

export const BtnComprar = styled.button`
  display: block;
  width: 100%;
  background-image: linear-gradient(
    45deg,
    ${cores.corPrincipal},
    ${cores.corSecundaria}
  );
  font-weight: bold;
  font-size: 16px;
  padding: 12px 0;
  text-transform: capitalize;
  color: #eee;
  border: none;
  cursor: pointer;
  border-radius: 4px;
  margin-bottom: 8px;

  &:hover {
    background-image: linear-gradient(
      -45deg,
      ${cores.corPrincipal},
      ${cores.corSecundaria}
    );
  }
`
