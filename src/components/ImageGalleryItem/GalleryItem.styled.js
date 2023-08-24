import styled from "styled-components";


export const ImageStyle = styled.img`
       
display: block;
        width: 270px;
        height: 100%; 
        object-fit: cover;
    display: block;
      
  `;

export const ListItemStyle = styled.li`
      transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

      &:hover,
      &:focus {
      transform: scale(1.03);
      }
`;