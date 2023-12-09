"use client";

import {Avatar, Box, Button, FormGroup, TextField, Typography} from "@mui/material";
import {DatePicker, LocalizationProvider} from "@mui/x-date-pickers";
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";

import {Amatic_SC} from 'next/font/google'

const amaticSC = Amatic_SC({weight: '700', style: 'normal', subsets: ['latin']});


export default function Profil() {
    return (
        <Box sx={{
            backgroundImage: "url('/image/backgroundWaveProfil.svg')",
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
            minHeight: "100vh"
        }} className={amaticSC.className}>
            <Box sx={{display: "flex", alignItems: "center", padding: "6vh"}} >
                <Avatar sx={{bgColor: "#FFA500", height: "15vh", width: "15vh", marginX: "5vw"}}>EC</Avatar>
                <Typography fontSize={35} color={"white"} className={amaticSC.className}>Erwan Coubel</Typography>
            </Box>
            <Box sx={{padding: "10vh", display: "flex", flexDirection: "column"}} >
                <Typography variant={"h3"} className={amaticSC.className}>Mes informations personnelles:</Typography>
                <FormGroup sx={{display: "flex", flexDirection: "column", marginX: "10vw"}}>
                    <Box sx={{display: "flex", justifyContent: "space-between", marginY: "3vh"}}>
                        <TextField variant={"outlined"} label={"Prenom"}/>
                        <TextField variant={"outlined"} label={"Email"}/>
                    </Box>
                    <Box sx={{display: "flex", justifyContent: "space-between", marginY: "3vh"}}>
                        <TextField variant={"outlined"} label={"Nom"}/>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DatePicker label={"Date de naissance"}/>
                        </LocalizationProvider>
                    </Box>
                </FormGroup>
                <Box sx={{display: "flex", justifyContent: "space-between", marginX: "10vw"}}>
                    <Button variant={"contained"} color={"error"}>Supprimer mon compte</Button>
                    <Button variant={"contained"} color={"success"}>Enregistrer les modifications</Button>
                    <Button variant={"contained"} color={"warning"}>Reinitialiser mon mot de passe</Button>
                </Box>
            </Box>
        </Box>
    );
}