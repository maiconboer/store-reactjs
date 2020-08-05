import styled from 'styled-components';

export const Container = styled.section`
  .products {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 40px;

    img {
      width: 100%;
      border-radius: 8px;
      margin-bottom: 8px;
    }

    h2 {
      margin-bottom: 16px;
    }
  }
`;

export const Content = styled.section`

  opacity: 0;
  transform: translateX(-20px);
  animation: animeLeft 0.3s forwards;

  @keyframes animeLeft {
  to {
    opacity: initial;
    transform: initial;
  }
}
`;