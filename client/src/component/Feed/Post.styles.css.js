import styled from 'styled-components'


export const StyledPost = styled.div`
    margin-top: ${props => props.marginTop || "95px;"};
`;

export const StyledPhotoContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
background: #2B2B2B;
border-radius: 28px;
width: 339px;
height: 301px;
margin: auto;
`;