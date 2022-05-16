import styled from 'styled-components'


export const Container = styled.header`
  background-color: var(--blue);
`;

export const Content = styled.div`
max-width: 1120px;
margin: 0 auto;
padding:  2rem 1rem 12rem;

display: flex;
align-items: center;
justify-content: space-between;

button{
  background: var(--blue-light);
 font-size: 1rem;
 color: #FFFF;
  border: 0;
  border-radius: 0.25rem;
  padding: 0 2rem;
  transition: 0.2s;
  height: 3rem;


 &:hover{
  filter: brightness(0.9);
}

}
`;