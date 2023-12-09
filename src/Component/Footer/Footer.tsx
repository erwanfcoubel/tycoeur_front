import {Box, Typography} from "@mui/material";
import { Amatic_SC } from 'next/font/google'

const amaticSC = Amatic_SC({ weight: '700', style: 'normal',subsets: ['latin'] })

export default function Footer() {
    const anneeActuelle = new Date().getFullYear();

    return (
        <Box sx={{backgroundColor: 'white', color: 'black'}} py={'2vh'} >
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            <Typography variant={'h4'} sx={{textAlign: 'center'}} className={amaticSC.className}>©2004-{anneeActuelle} - <span>Ty'Coeur</span></Typography>
        </Box>
    );
}