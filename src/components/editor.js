import React from 'react';
import ReactDOM from 'react-dom/client';

import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/xml/xml';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/css/css';

import { Controlled as ControlledEditor } from 'react-codemirror2';

import { Box, Typography, Button, styled } from '@mui/material';
import { CloseFullscreen } from '@mui/icons-material';

import '../App.css';

const Heading = styled(Box)`
    background: #1d1e22;
    padding: 9px 12px;
    display: flex
`
const Header = styled(Box)`
    display: flex;
    justify-content: space-between;
    background: #060606;
    color: #AAAEBC;
    font-weight: 700;
`
const Editor = () =>{
    return (
        <Box>
            <Header>
                <Heading>
                    <Box>
                        <Box component="span" style={{
                            background: 'red',
                            borderRadius: 5,
                            marginRight: 5,
                            height: 20,
                            width: 20,
                            display: 'flex',
                            placeContent: 'center',
                            color: '#000',
                            paddingBottom: 2}}>/</Box>
                        HTML
                    </Box>
                </Heading>
                <CloseFullscreenIcon style={{
                position: 'absolute',
                right: 30,}}/>
                <ControlledEditor className='controlled-editor'/>
            </Header>
        </Box>    
        
    )
}

export default Editor 