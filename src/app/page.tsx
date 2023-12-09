"use client";
import KidsList from "@/Component/Accueil/KidsList";
import AssoInfoList from "@/Component/Accueil/AssoInfoList";
import OurStory from "@/Component/Accueil/OurStory";
import HomeHeader from "@/Component/Accueil/HomeHeader";
import { Box, Container } from "@mui/system";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Box marginTop={"130px"} sx={{ backgroundImage: "url('/image/backgroundWaveTop.svg')", backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>
        <Container maxWidth={"xl"}>
          <HomeHeader />

          <OurStory />
        </Container >
      </Box>

      <AssoInfoList />

      <Box sx={{ backgroundImage: "url('/image/backgroundWaveBottom.svg')", backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>
        <KidsList />
      </Box>
    </>
  );
}
