import { Card, CardContent, CardHeader, Grid, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import Image from "next/image";
import Link from "next/link";

export default function KidsList() {

  const kids = [
    { nom: "Yannick", texte: "Sydrome de Di-georges, Tétralogie de Fallot, Agénésie des valves pulmonaires, CIC, CIA, CAV" },
    { nom: "Victor", texte: "Syndrome d'allagille" },
    { nom: "Typhaine", texte: "Ventricule unique, interversion des gros vaisseaux et sténose pulmonaire" },
    { nom: "Paul", texte: "Atrésie pulmonaire à septum ouvert" },
    { nom: "Yumi", texte: "Tronc artériel commun" },
    { nom: "Shaona", texte: "CIA: Communication entre les deux oreillettes" },
    { nom: "Isaac", texte: "Trisomie partielle 22 q11, rvpa total non bloquée" },
    { nom: "Lhéna", texte: "CIA: Communication entre les deux oreillettes" },
    { nom: "Rafäel", texte: "Tétralogie de fallot" },
    { nom: "Iris", texte: "Sévère atrésie pulmonaire à septum ouvert et CIV" }
  ];

  return (
    <Container maxWidth={"xl"} sx={{ padding: "350px 0px" }}>
      <Typography variant="h2" className="white Amatic" textAlign={"center"}>Les enfants de l&apos;asso</Typography>
      <Box component={"p"} textAlign={"center"} fontWeight={700} fontSize={25} className="white">Ceux que l&apos;on appelle nos petits protégés</Box>
      <Grid container marginTop={"58px"} rowGap={3} justifyContent={"center"}>
        {kids.map((kid, index) => (
          <Grid xs={12} sm={6} lg={4} key={index} textAlign={"center"} px={3} >
            <Link href={"Enfants/" + kid.nom} key={index} style={{ display: "flex", flexDirection: "column", height: "100%" }}>
              <Image src="/image/enfantProfile.svg" alt="Logo de l'association Ty'Coeur" width={350} height={350} style={{ margin: "auto" }} />
              <Card sx={{ height: "auto", flex: "1", paddingY: "15px" }}>
                <CardHeader
                  title={
                    <Box className="Amatic" fontSize={{ xs: "35px", lg: "50px" }} lineHeight={1}>
                      {kid.nom}
                    </Box>
                  }
                  className="orange"
                  sx={{ paddingY: 0 }}
                />
                <CardContent sx={{ paddingY: " 0 !important" }}>
                  <Box >{kid.texte}</Box>
                </CardContent>
              </Card>
            </Link>
          </Grid>
        ))}
      </Grid>
    </Container >
  )
}
