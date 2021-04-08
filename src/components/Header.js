import { headerStyles } from '../styles';
import profileImg from '../assets/Profile-thumbnail.png';

function Header() {

    const classes = headerStyles();

    return (
        <div className={classes.root}>
            <div className={classes.navbar}>
                <h1 className={classes.title}>
                    Word Editor
                </h1>
                <img src={profileImg} alt='Profile'></img>
            </div>
        </div>
    )
}

export default Header;
