import Title from "@/Component/Navbar/Title";
import PageMenu from "@/Component/Navbar/PageMenu";
import {Box, Link, SwipeableDrawer, Toolbar} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import {useState} from "react";
import Button from "@mui/material/Button";
import { Amatic_SC } from 'next/font/google'

const amaticSC = Amatic_SC({ weight: '700', style: 'normal',subsets: ['latin'] })

export default function NavbarMobile() {
    const toggleDrawer =
        (open: any) => {
            setIsOpen(open);
        };

    const [isOpen, setIsOpen] = useState(false);

    return (
        <Toolbar disableGutters={true} sx={{display: {xs: "flex", lg: 'none'}, justifyContent: 'space-between'}}>
            <Title/>
            <MenuIcon onClick={() => {
                toggleDrawer(true)
            }} sx={{cursor: 'pointer'}}/>
            <SwipeableDrawer anchor={'left'} open={isOpen}
                             onClose={() => {
                                 toggleDrawer(false)
                             }}
                             onOpen={() => {
                                 toggleDrawer(true)
                             }}
                             disableScrollLock={true}
                            >
                <PageMenu direction={'column'} backgroundColor={'#E1B25A'} textColor={'white'} fontSize={30}
                          padding={"30vw"}/>
                    <Link>
                        <Button variant={"contained"} href={"Connexion"} sx={{fontSize: 30, width: '100%', borderRadius: 0}} className={amaticSC.className}>
                            Connexion
                        </Button>
                    </Link>
            </SwipeableDrawer>
        </Toolbar>
    );
}