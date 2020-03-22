import React from "react";

/* -- import components -- */

/* -- import css -- */
import './css/About.css'
/* -- import data -- */
import metallica from "../data/mettalica";

/* -- import images -- */

/* -- import packages -- */
import Collapse from '@material-ui/core/Collapse';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import Typography from '@material-ui/core/Typography';


const About = () => {
    const [checked, setChecked] = React.useState(false);
    const handleChange = () => {
        setChecked(prev => !prev);
      };
    return (
        
        <div className="About">
            <FormControlLabel
                control={<Switch checked={checked} onChange={handleChange} />}
                label="Abstract"
            />
             <Collapse in={checked} collapsedHeight={100}>
            <Typography variant="body2" align="justify" gutterBottom>
                {metallica.abstract}
            </Typography>
            </Collapse>
        </div>
    
    );
};

export default About;
