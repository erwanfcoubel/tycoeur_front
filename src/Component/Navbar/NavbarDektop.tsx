"use client";
import Title from "@/Component/Navbar/Title";
import PageMenu from "@/Component/Navbar/PageMenu";
import {Avatar, Button, Toolbar} from "@mui/material";
import {Amatic_SC} from 'next/font/google'
import Link from "next/link";

const amaticSC = Amatic_SC({weight: '700', style: 'normal', subsets: ['latin']})
const isConnected = true;
export default function NavbarDesktop() {
    return (
        <Toolbar sx={{display: {xs: "none", lg: 'flex'}, justifyContent: 'space-between'}}>
            <Title/>
            <PageMenu direction={'row'} backgroundColor={'white'} textColor={'black'} fontSize={35} padding={2}/>
            {
                isConnected ?
                    <Link href={"/Profil"}>
                        <Avatar sx={{bgcolor: '#FFA500'}}>EC</Avatar>
                    </Link>
                    :
                    <Link href={"/Connexion"}>
                        <Button variant={"contained"} sx={{color: "white", fontSize: 35, borderRadius: 10}}
                                className={amaticSC.className}>Connexion/Inscription</Button>
                    </Link>
            }
        </Toolbar>
    );
}