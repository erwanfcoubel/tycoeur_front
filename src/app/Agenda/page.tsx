import {Box, Card, CardContent, CardMedia, Typography, Grid, Chip, Stack, Button} from "@mui/material";
import Link from "next/link";
import {AccessTime} from "@mui/icons-material";
import {Amatic_SC} from 'next/font/google'

const amaticSC = Amatic_SC({weight: '700', style: 'normal', subsets: ['latin']});

export default function Actualites() {
    let outings = [
        {
            "id": 1,
            "titre": "test",
            "slug": "un_super_post",
            "content": "fssdffddfs",
            "date": "2023-05-01",
            "tags": [
                {
                    "title": "tags1",
                    "color": "#2F329F"
                }
            ]
        },
        {
            "id": 2,
            "titre": "Un super titre",
            "slug": "un_super_post",
            "content": "fssdffddfs",
            "date": "2023-05-01",
            "tags": [
                {
                    "title": "tags1",
                    "color": "#2F329F"
                }
            ]
        },
        {
            "id": 3,
            "titre": "test",
            "slug": "un_super_post",
            "content": "fssdffddfs",
            "date": "2023-05-01",
            "tags": [
                {
                    "title": "tags1",
                    "color": "#2F329F"
                }
            ]
        },
        {
            "id": 4,
            "titre": "test",
            "slug": "un_super_post",
            "content": "fssdffddfs",
            "date": "2023-05-01",
            "tags": [
                {
                    "title": "tags1",
                    "color": "#2F329F"
                }
            ]
        },
        {
            "id": 5,
            "titre": "test",
            "slug": "un_super_post",
            "content": "fssdffddfs",
            "date": "2023-05-01",
            "tags": [
                {
                    "title": "tags1",
                    "color": "#2F329F"
                }
            ]
        },
        {
            "id": 6,
            "titre": "Un super titre mais quand",
            "slug": "un_super_titre_mais_quand&6",
            "content": "Un super titre mais quand meme vachement long pour un titrte",
            "date": "2023-05-01",
            "tags": [
                {
                    "title": "tags1",
                    "color": "#2F329F"
                }
            ]
        },
        {
            "id": 7,
            "titre": "test",
            "slug": "test&7",
            "content": "fssdffddfs",
            "date": "2023-05-01",
            "tags": [
                {
                    "title": "tags1",
                    "color": "#2F329F"
                }
            ]
        },
        {
            "id": 8,
            "titre": "test",
            "slug": "un_super_post",
            "content": "fssdffddfs",
            "date": "2023-05-01",
            "tags": [
                {
                    "title": "tags1",
                    "color": "#2F329F"
                },
                {
                    "title": "Sortie",
                    "color": "#2F329F"
                }
            ]
        },
    ];


    return (
        <>
            <Typography variant={"h1"} className={amaticSC.className} sx={{color: "#E1B25A"}} align={"center"} mt={2}>Nos
                Evenements</Typography>
            <Box sx={{ backgroundImage: "url('/image/backgroundWaveTop.svg')", backgroundRepeat: "no-repeat", backgroundSize: "cover" , backgroundPosition: "center"}}>
                <Grid container spacing={10} columns={12} p={13}>
                    {outings.map((outing) => {
                        return (
                            <Grid item xs={12} md={6} lg={4} key={outing.id}>
                                <Link href={"Agenda/" + outing.slug}>
                                    <Card className={"cardActu"}>
                                        <CardMedia sx={{height: 300}} image={"/image/lost_in_random.jpg"}
                                                   title={outing.titre}>
                                        </CardMedia>
                                        <CardContent sx={{color: "black"}}>
                                            <Typography gutterBottom variant={"h5"}
                                                        component={"div"}>{outing.titre}</Typography>
                                            <Box sx={{display: 'flex'}}>
                                                <AccessTime/>
                                                <Typography mx={1}>{outing.date}</Typography>
                                            </Box>
                                        </CardContent>
                                    </Card>
                                </Link>
                            </Grid>
                        )
                    })}
                </Grid>
            </Box>
        </>
    );
}
