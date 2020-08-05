import styled from 'styled-components';

export const Container = styled.section`
  .wrapper {
    display: grid;
    grid-template-columns: 2fr 1fr;

    img {
      width: 90%;
      border-radius: 8px;
    }

    .informations { 
      h2 {
        margin-bottom: 16px;
      }

      p {
        margin-bottom: 8px;
        margin-left: 34px;
        position: relative;

        ::after {
          content: '';
          display: block;
          position: absolute;
          left: -32px;
          top: 12px;
          width: 24px;
          height: 2px;
          color: var(--color-background-2);
          background-color: var(--color-background-2);
        }
      }
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