import {Box, Card, CardContent, CardMedia, Typography, Grid, Chip, Stack} from "@mui/material";
import Link from "next/link";
import {AccessTime} from "@mui/icons-material";
import {Amatic_SC} from 'next/font/google'

const amaticSC = Amatic_SC({weight: '700', style: 'normal', subsets: ['latin']});

export default function Actualites() {
    let actu = [
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
                Actualites</Typography>
            <Box sx={{ backgroundImage: "url('/image/backgroundWaveTop.svg')", backgroundRepeat: "no-repeat", backgroundSize: "cover" , backgroundPosition: "center"}}>
                <Grid container spacing={10} columns={12} p={13}>
                    {actu.map((actu) => {
                        return (
                            <Grid item xs={12} md={6} lg={4} key={actu.id}>
                                <Link href={"Actualites/" + actu.slug}>
                                    <Card className={"cardActu"}>
                                        <CardMedia sx={{height: 300}} image={"/image/lost_in_random.jpg"}
                                                   title={actu.titre}>
                                        </CardMedia>
                                        <CardContent sx={{color: "black"}}>
                                            <Typography gutterBottom variant={"h5"}
                                                        component={"div"}>{actu.titre}</Typography>
                                            <Box sx={{display: 'flex'}}>
                                                <AccessTime/>
                                                <Typography mx={1}>{actu.date}</Typography>
                                            </Box>
                                            <Stack direction={"row"} m={2}>
                                                {actu.tags?.map((tags, index: number) => {
                                                    return (
                                                        <Chip key={index} label={tags.title} color={"primary"} sx={{marginX: 2}}/>
                                                    );
                                                })}
                                            </Stack>
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
