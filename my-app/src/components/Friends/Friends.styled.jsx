import styled from "@emotion/styled";


export const Friendslist = styled.ul`
list-style: none;
padding:0;
margin:0;
display:flex;
flex-direction: column;
justify-content:center;
align-items:center;
margin-bottom: 40px;
`

export const Friend = styled.li`
display:flex;
align-items:center; 
justify-content:center;
margin-top:10px;
border: 1px solid;
width: 200px;
padding: 10px 0;
box-shadow: 0.4em 0.4em 5px rgba(122,122,122,0.5);
`
export const Status = styled.div`
background-color: ${props=>props.isOnline ? 'green':'red'};
border-radius:50%;
width: 30px;
height: 30px;


`
export const Photo = styled.img`
border-radius:10px;
width: 60px;
margin: 0 20px;
`
export const Text = styled.p`
width: 50px;
`