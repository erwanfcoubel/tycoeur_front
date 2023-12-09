import Grid2 from "@mui/material/Unstable_Grid2";
import Image from "next/image";
import Link from "../../../node_modules/next/link";
import {Box, Typography} from "@mui/material";
import {Amatic_SC} from "next/font/google";

const AmaticSc = Amatic_SC({
    style: "normal",
    weight: "700",
    subsets: ["latin"],
});

export default function Title() {
    return (
        <Box>
            <Grid2 container spacing={5}>
                <Grid2 sx={{alignSelf: "center"}}>
                    <Link href={"/"}>
                        <Image
                            src="/image/tycoeur_logo.png"
                            alt="Logo de l'association ty'coeur"
                            width={50}
                            height={50}
                        />
                    </Link>
                </Grid2>
                <Grid2>
                    <Link href={"/"}>
                        <Typography
                            variant="h6"
                            noWrap
                            sx={{
                                mr: 2,
                                letterSpacing: ".3rem",
                                fontSize: 50,
                                display: {xs: 'none', sm: 'flex'}
                            }}
                            className={AmaticSc.className}
                        >
                            {/* eslint-disable-next-line react/no-unescaped-entities */}
                            Ty'Coeur
                        </Typography>
                    </Link>
                </Grid2>
            </Grid2>
        </Box>
    );
}
