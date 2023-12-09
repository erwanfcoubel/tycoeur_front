import {Box, Button, Card, CardContent, CardMedia,Typography} from '@mui/material';
import {AccessTime} from "@mui/icons-material";
import Link from "next/link";

export default function Page({ params }: { params: { slug: string } }) {
    return (
            <Box sx={{minHeight: "100vh" , backgroundImage: "url('/image/backgroundWaveTop.svg')", backgroundRepeat: "no-repeat", backgroundSize: "cover", marginBottom: 5}} >
                <Link href={"/Actualites"}><Button variant={"contained"} sx={{margin: 5}}>Retour</Button></Link>
                <Card className={"cardActu"} sx={{width: "50vw", margin: "auto"}} >
                    <CardMedia sx={{height: 300}} image={"/image/lost_in_random.jpg"}
                               title="Titre de l'actu">
                    </CardMedia>
                    <CardContent sx={{color: "black"}}>
                        <Typography gutterBottom variant={"h5"}
                                    component={"div"}>Titre de l&rsquo;actu</Typography>
                        <Box sx={{display: 'flex'}}>
                            <AccessTime/>
                            <Typography mx={1}>20/11/2000</Typography>
                            <Typography>par Erwan Coubel</Typography>
                        </Box>
                        <Typography m={3} paragraph={true}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc malesuada nunc non nisi ultricies, eu vulputate nulla elementum. Praesent vel pulvinar ex, vel pharetra nunc. Integer dignissim fermentum dolor. Pellentesque et magna a mauris volutpat cursus. Fusce eu lacus in justo vehicula lacinia at a risus. Aliquam nec metus felis. Nullam molestie semper arcu eu laoreet. Nullam ultrices dui non diam pulvinar, bibendum eleifend odio pharetra. Mauris odio tellus, consectetur et sodales non, vulputate sit amet mi. Proin vel libero a ligula placerat sagittis eu sit amet lacus. Curabitur purus urna, laoreet ac turpis ac, pharetra suscipit est. Nam blandit viverra consectetur. Curabitur at nisi consequat, dictum justo nec, aliquet ante.<br />
                            <br />
                            Vestibulum pulvinar, diam vel egestas dapibus, leo lacus faucibus arcu, in efficitur ligula metus id odio. Integer mi neque, semper ac est at, varius pharetra ex. Suspendisse congue a ex eu consectetur. Ut posuere odio sit amet ipsum scelerisque cursus. Morbi porttitor ipsum imperdiet, bibendum diam in, mattis nibh. Vivamus tincidunt rhoncus congue. Vestibulum posuere feugiat lorem vel suscipit. Sed tincidunt, tortor a scelerisque efficitur, enim arcu imperdiet lectus, sed sodales ante ex in urna. Suspendisse risus ante, consectetur sed suscipit quis, mattis non elit. Sed interdum justo in libero placerat, quis sagittis elit faucibus. Maecenas tempor massa mauris, vitae rhoncus tortor cursus eu. In pellentesque, mi ac semper tincidunt, nisi ipsum semper eros, ac ultrices leo augue a orci. Pellentesque vel erat condimentum, feugiat nisl sed, bibendum magna. Aliquam erat volutpat. Phasellus nec convallis sapien, sed consectetur nulla.<br />
                            <br />
                            Ves  tibulum ex quam, interdum ut rhoncus et, malesuada at purus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum ultricies posuere risus vel pretium. Fusce id feugiat tellus, non pretium mauris. Mauris mollis nisl nec nisi molestie, in eleifend libero mollis. Maecenas arcu risus, tempus ut malesuada vulputate, tristique vel libero. Nulla ultricies, ex et laoreet malesuada, risus sem tempus quam, sed posuere dolor quam id magna. Vivamus elit turpis, venenatis ac mauris vitae, aliquet maximus nulla. Vestibulum et ligula nec tellus viverra tempor. Aliquam congue in massa eget mollis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Praesent consequat, lectus ut convallis pretium, massa nisi gravida orci, sit amet tincidunt nibh felis sit amet urna. Vivamus sit amet leo risus. Aenean imperdiet vehicula ipsum vitae cursus. Donec libero lacus, semper vel dolor vitae, rhoncus fermentum urna. Nam a mi bibendum, ultrices lorem sed, interdum eros.<br />
                            <br />
                            Curabitur imperdiet dui sit amet dolor consequat feugiat. Curabitur cursus pulvinar tristique. Suspendisse vulputate iaculis massa vitae bibendum. Sed pellentesque dolor vel ante rutrum, pharetra mollis massa tincidunt. Nulla et erat et justo tempus porttitor. Donec suscipit feugiat nisl malesuada cursus. Suspendisse eu placerat nisl, in consectetur mi. Curabitur in odio ut ante fermentum hendrerit. Integer imperdiet ex nec lacus pellentesque condimentum. Nam volutpat erat non erat eleifend blandit. Donec tempor id dolor eu sagittis.<br />
                            <br />
                            Donec sed dui sit amet felis commodo laoreet a sit amet ante. Phasellus laoreet vitae nulla eget consectetur. Nullam varius nibh sit amet tellus imperdiet vulputate. Donec tempor lacinia elementum. Nam eleifend maximus ipsum in vulputate. Donec congue tellus eget semper ullamcorper. Donec id tortor pretium, pulvinar massa vel, congue justo. Aenean ut magna eu nisl aliquam suscipit id sit amet neque. Vestibulum eget rutrum eros.
                        </Typography>
                    </CardContent>
                </Card>
            </Box>
    );
}