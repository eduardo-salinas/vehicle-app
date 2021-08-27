import styled from 'styled-components';


const StyledCategory = styled.div`
display: flex;
align-items: center;
margin: 2rem;
padding:1rem;
background-color: rgb(247, 246, 242,0.7); 
border-radius: .5rem;
color : #311D3F ;
border: solid #311D3F;
button{
    color : #311D3F ;
}
.prop{
    padding:1rem;
    display:flex;
    flex-direction: row;
    justify-content: space-between;
}
.spinner{
    display:flex;
    justify-content: center;
    align-items: center;
}
`

export default StyledCategory;