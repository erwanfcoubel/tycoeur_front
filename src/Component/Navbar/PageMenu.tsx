"use client";
import {Box, Button} from "@mui/material";
import {Amatic_SC} from "next/font/google";
import Link from "../../../node_modules/next/link";
const AmaticSc = Amatic_SC({
    style: "normal",
    weight: "700",
    subsets: ["latin"],
});

export default function PageMenu(props: any) {
    const pages = ["Accueil", "Actualites", "Agenda", "Galerie", "Contact"];

    let link;
    return (
        <Box
            sx={{
                display: "flex",
                justifyContent: 'space-around',
                flexDirection: props.direction,
                backgroundColor: props.backgroundColor,
                height: props.direction == 'column' ? "100vh" : "",
                overflow: "auto",
                textAlign: "center"
            }}
        >
            {pages.map((page) => {
                page == "Accueil" ? (link = "/") : (link = "/"+page);
                return (
                    <Link href={link} key={page}>
                        <Button
                            key={page}
                            sx={{
                                my: "1vh",
                                color: props.direction == "column" ? "white" : '#3E3936',
                                fontSize: props.fontSize,
                                padding: props.direction == "colonne" ? "5vw" : ""
                            }}
                            variant={"text"}
                            className={AmaticSc.className}
                        >
                            {page}
                        </Button>
                    </Link>
                );
            })}
        </Box>
    );
}