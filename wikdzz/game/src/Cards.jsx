import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function ImgMediaCard() {
  return (
    <Card sx={{ maxWidth: 400 }} className="bg-black text-white">
      <CardMedia
        component="img"
        alt="green iguana"
        height="70"
        // src="../src/gameicon/cb.jpg"
        src="./img/recent/recent-1.jpg"
        className="image bg-black"
      />
      {/* <img src= alt="" srcset=""> */}

      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>

    // <div className="rounded overflow-hidden shadow-lg  ease-in duration-500  outline   ">
    //   <img className="img" src="./img/recent/recent-1.jpg" alt="MK X" />
    //   <div className="px-2 py-4">
    //     <div className="font-bold text-xl mb-2">Mortal Kombat X</div>
    //     <p className="game-desc font-serif ff-pp">
    //       Cole Young, a washed-up MMA fighter, is chosen to join a team of
    //       champions in a high-stakes battle to prevent the Earth from being
    //       taken over by Outworld.
    //     </p>
    //   </div>
    //   <div className="px-6 pt-4 pb-2">
    //     <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
    //       #fighting
    //     </span>
    //     <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
    //       #action
    //     </span>
    //     <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
    //       #mk
    //     </span>
    //   </div>
    // </div>
  );
}
