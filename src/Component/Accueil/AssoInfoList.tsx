import { Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import Image from "next/image";
import { FaUsers } from "react-icons/fa";
import { FaHandsHoldingCircle, FaHandshakeAngle } from "react-icons/fa6";
import { TbTargetArrow } from "react-icons/tb";
import Goal from "../../../public/image/But_De_LAssociation.png"
import Together from "../../../public/image/Fort_Ensemble.png"
import Solidarity from "../../../public/image/Fort_En_Solidarite.png"
import Sharing from "../../../public/image/Fort_En_Partage.png"
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";

export default function AssoInfoList() {
  return (
    <Container maxWidth={"xl"}>
      <Grid2 container alignItems="center" marginBottom={{ xs: "30px", sm: "45px" }} rowGap={3}>
        <Grid2 xs={12} md={7} lg={5}>
          <Box display={"flex"} alignItems={"center"}>
            <TbTargetArrow style={{ width: "42px", height: "42px", marginRight: "12px" }} className="red" />
            <Typography variant="h2" className="orange Amatic" fontSize={"50px"}>Les buts de l&apos;association</Typography>
          </Box>
          <Box>
            <Box component={"p"} marginBottom={"20px"}>
              Cette association a pour vocation d&apos;apporter aux parents des enfants malades cardiaques congénitaux ou opérés du coeur : Tout le soutien nécessaire lorsqu&apos;ils rencontrent des difficultés, qu&apos;elles soient:
            </Box>
            <ul>
              <li>D&apos;établir, entretenir et sceller les liens d&apos;amitiés entre les familles.</li>

              <li>D&apos;echanger et d&apos;apporter des conseils aux parents des enfants malades cardiaques en particulier dans les démarches dans tout les services publiques, des organismes sociaux et du corps médical.</li>

              <li>De partager nos expériences personnelles.</li>

              <li>De favoriser la présence familiale auprès des enfants lors des opérations...</li>
            </ul>
          </Box>
        </Grid2>
        <Grid2 xs={12} md={4} mdOffset={1} lg={5} lgOffset={2} textAlign={"center"}>
          <Image
            src={Goal}
            alt="But de l'association Ty'Coeur"
            style={{ width: "100%", height: "auto", maxHeight: "375px", maxWidth: "561px" }}
          />
        </Grid2>
      </Grid2>

      <Grid2 container alignItems="center" flexDirection={{ xs: "column-reverse", md: "row" }} marginBottom={{ xs: "30px", sm: "45px" }} rowGap={3}>
        <Grid2 xs={12} md={4} lg={5} textAlign={"center"}>
          <Image
            src={Together}
            alt="But de l'association Ty'Coeur"
            style={{ width: "100%", height: "auto", maxHeight: "375px", maxWidth: "561px" }}
          />
        </Grid2>
        <Grid2 xs={12} md={7} mdOffset={1} lg={5} lgOffset={2}>
          <Box display={"flex"} alignItems={"center"}>
            <FaUsers style={{ width: "42px", height: "34px", marginRight: "12px" }} className="red" />
            <Typography variant="h2" className="orange Amatic" fontSize={"50px"}>Fort ensemble</Typography>
          </Box >
          <Box>
            <Box component={"p"} marginBottom={"20px"}>Afin de partager nos expériences, dédramatiser nos épreuves, se renforcer mutuellement. Associations, maison de quartier, services sociaux et organisme d&apos;état... Comment les aborder ? Quels droit, et à qui s&apos;adresser...</Box>
            <Box component={"p"}>Des réponses parmis nos familles ayant traversées les mêmes difficultés.</Box>
          </Box>
        </Grid2>
      </Grid2>

      <Grid2 container alignItems="center" marginBottom={{ xs: "30px", sm: "45px" }} rowGap={3}>
        <Grid2 xs={12} md={7} lg={5} >
          <Box display={"flex"} alignItems={"center"}>
            <FaHandshakeAngle style={{ width: "42px", height: "42px", marginRight: "12px" }} className="red" />
            <Typography variant="h2" className="orange Amatic" fontSize={"50px"}>Fort en solidarité</Typography>
          </Box>
          <Box>
            <p>Nos enfants traversent tous les mêmes épreuves :
              Opérations loin de la maison, souvent à Paris : Necker-Jacques Cartier-Marie Lannelongue... Nous veuillons à ce que la maman reste au chevet de son enfant, que la famille garde le contact pendant ces moments difficiles.</p>
          </Box>
        </Grid2>
        <Grid2 xs={12} md={4} mdOffset={1} lg={5} lgOffset={2} textAlign={"center"}>
          <Image
            src={Solidarity}
            alt="But de l'association Ty'Coeur"
            style={{ width: "100%", height: "auto", maxHeight: "375px", maxWidth: "561px" }}
          />
        </Grid2>
      </Grid2>

      <Grid2 container alignItems="center" flexDirection={{ xs: "column-reverse", md: "row" }} marginBottom={{ xs: "30px", sm: "45px" }} rowGap={3}>
        <Grid2 xs={12} md={4} lg={5} textAlign={"center"}>
          <Image
            src={Sharing}
            alt="But de l'association Ty'Coeur"
            style={{ width: "100%", height: "auto", maxHeight: "375px", maxWidth: "561px" }}
          />
        </Grid2>
        <Grid2 xs={12} md={7} mdOffset={1} lg={5} lgOffset={2}>
          <Box display={"flex"} alignItems={"center"}>
            <FaHandsHoldingCircle style={{ width: "42px", height: "42px", marginRight: "12px" }} className="red" />
            <Typography variant="h2" className="orange Amatic" fontSize={"50px"}>Fort en partage</Typography>
          </Box>
          <Box>
            <Box component={"p"} marginBottom={"20px"}>Des moments conviviaux pour soudés les familles entre elles, apprendre à se connaître enfant et parents :</Box>
            <ul>
              <li>Anniversaire des enfants</li>
              <li>Cadeaux de Noël</li>
              <li>Sorties familiales pendant les vacances</li>
              <li>Repas annuel en famille et amis</li>
              <li>Et bien dautres occasions...</li>
            </ul>
          </Box>
        </Grid2>
      </Grid2>
    </Container >
  )
}
