import { useState } from "react";
import { Card, Slider } from "@mui/material";


const ColorCard = () => {
    const [red, setRed] = useState(0)
    const [green, setGreen] = useState(0)
    const [blue, setBlue] = useState(0)

        return (
        <Card sx={{padding:"20px", paddingTop:"40px", backgroundColor:`rgb(${red}, ${green}, ${blue})`}}>
            <Slider valueLabelDisplay="on" value={red} min={0} max={255} onChange={(_,value) => {setRed(value)}}/>

            <Slider valueLabelDisplay="on" value={green} min={0} max={255} onChange={(_,value) => {setGreen(value)}}/>

            <Slider valueLabelDisplay="on" value={blue} min={0} max={255} onChange={(_,value) => {setBlue(value)}}/>
        </Card>
        )
};

export default ColorCard