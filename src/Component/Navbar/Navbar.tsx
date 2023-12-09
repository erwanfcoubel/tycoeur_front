"use client";

import { AppBar, Container, Toolbar } from "@mui/material";
import { Amatic_SC } from "next/font/google";
import NavbarDesktop from "@/Component/Navbar/NavbarDektop";
import NavbarMobile from "@/Component/Navbar/NavbarMobile";

const AmaticSc = Amatic_SC({
    style: "normal",
    weight: "700",
    subsets: ["latin"],
});
export default function Navbar() {
    return (
        <>
            <AppBar component="nav" position={"fixed"} sx={{ backgroundColor: 'white', color: '#E1B25A'}}>
                    <NavbarDesktop />
                    <NavbarMobile />
            </AppBar>
            <Toolbar sx={{minHeight: {xs: 56, lg: 80, xl: 92.13}}}/>
        </>
    );
}
