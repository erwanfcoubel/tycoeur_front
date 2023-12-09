import { Button, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Image from "next/image";
import Link from "next/link";

export default function OurStory() {
  return (
    <Grid container alignItems="center" flexDirection={{ xs: "column-reverse", md: "row" }} paddingBottom={{ xs: "150px", sm: "480px" }}>
      <Grid xs={12} md={8} >
        <Typography variant="h1" component="h2" fontSize={{ xs: 50, md: 75 }} className="titre">Notre <span className="orange">histoire</span> :</Typography>
        <Box component={"p"} className="white" marginBottom={"20px"}>
          L&apos;association Ty&apos;Coeur fut crée en 2006 par la maman
          Typhaine, d&apos;où son nom Ty&apos;Coeur comme Typhaine.
        </Box>
        <Box component={"p"} className="white" marginBottom={"30px"}>
          A cette époque, aucune aide précise sur les cardiopathies
          congénitales, internet étant à ses débuts. Pourquoi ne pas créer
          vous même cette association, nous a proposé la référente famille de
          notre maison de quartier. Ce que nous avons fait lors d&apos;un
          parcours du coeur organisé en avril de cette même année.
        </Box>
        <Link href={"Contact"} style={{ fontSize: "25px" }}>
          <Button
            key={"contact"}
            sx={{
              padding: { xs: "8px 30px", sm: "13px 96px" },
              color: "#fff",
              fontSize: { xs: 15, sm: 25 },
              backgroundColor: "#E1B25A",
              textTransform: "capitalize",
              "&:hover": {
                backgroundColor: "#F5F5F5",
                color: "#E1B25A",
              },
            }}
          >
            Contact
          </Button>
        </Link>
      </Grid>
      <Grid xs={12} md={4} display={"flex"} alignItems={"center"} justifyContent={"center"} marginBottom={{ xs: "15px", sm: "0px" }}>
        <Box position={"relative"}>
          <Image style={{ position: "relative", zIndex: 1 }} alt="test" src={"/image/profileNotreHistoire.svg"} width={350} height={350} className="responsiveImage" />
          <Image style={{ position: "absolute", left: 0, top: 0 }} src={"/image/whiteSplashProfil.svg"} alt="Logo de l'association Ty'Coeur" width={350} height={350} className="responsiveImage" />
        </Box >
      </Grid>
    </ Grid >
  )
}
