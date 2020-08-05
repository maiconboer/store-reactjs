import styled from 'styled-components';

export const Container = styled.header`
  margin: 60px 0;
    
  a {
    text-decoration: none;
    margin-right: 16px;
    padding: 16px 24px;
    font-size: 18px;
    font-weight: bold;
    background-color: var(--color-background-2);
    color: var(--color-text-1);
    border-radius: 4px;
    transition: all .2s;

    &:hover {
      background-color: var(--color-background-3);
    }
  }
`;