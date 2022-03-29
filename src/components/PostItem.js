import React from 'react'
import './PostItem.css'
import styled from 'styled-components'

const paraStyled = {
    fontSize: '20px',
    color: 'darkblue'
}

const Wrapper = styled.section`
    padding: 4em;
    background: papayawhip;
    margin: 1em;
`;

const Button = styled.button`
    background: ${props => props.primary ? "palevioletred" : "white"};
    color: ${props => props.primary ? "white" : "palevioletred"};
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid palevioletred;
    border-radius: 3px;
`;

const PostItem = ({ post }) => {
    return (
        <Wrapper>
            <h1 className='headerText'>{post.title}</h1>
            <p style={paraStyled}>{post.body}</p>
            <p style={{ color: 'red'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, laboriosam.</p>
            <Button>Normal</Button>
            <Button primary>Primary</Button>
        </Wrapper>
    )
}

export default PostItem