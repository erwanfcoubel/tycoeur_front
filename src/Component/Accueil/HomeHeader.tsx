import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import Image from "next/image";

export default function HomeHeader() {
  return (
    <Box display={"flex"} flexDirection={"column"} alignItems={"center"} marginBottom={{ xs: "25px", sm: "256px" }}>
      <Image className="responsiveImage" src="/image/tycoeur_logo.png" alt="Logo de l'association Ty'Coeur" width={500} height={497} style={{ marginTop: "-50px", marginBottom: "27px" }} />
      <Typography variant="h1" component="h1" fontSize={{ xs: 50, md: 75 }} marginBottom={{ xs: "px", sm: "19px" }} className="titre">
        Bienvenue chez <span className="orange">Ty&apos;Coeur</span>
      </Typography>
      <Box component={"p"} className="white" textAlign={"center"}>
        La faute à pas de chance, 1 cas sur... Cette phrase que l&apos;on nous
        dit sans le mode d&apos;emploi !
      </Box>
    </Box >
  )
}
