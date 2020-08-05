import styled from 'styled-components';

export const Container = styled.section`
  .wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 40px;

    img {
      max-width: 500px;
      width: 100%;
      border-radius: 8px;
      margin-bottom: 40px;
    }

    .product-information { 
      h2 {
        margin-bottom: 16px;
        color: var( --color-text-1);
      }

      .price {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 140px;
        padding: 12px 24px;
        background-color: var( --color-background-4);
        color: var( --color-background-1);
        border-radius: 4px;
        cursor: pointer;

        &:hover {
          filter: brightness(90%);
        }
      }

      .description {
        margin-top: 24px;
        font-size: 18px;
        font-weight: bold;
        color: var( --color-text-1);
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