import {Link}from 'react-router-dom'
import classes from "./MainNavigation.module.css";
function MainNavigation(){
    return(
        <header className={classes.header}>
            <nav>
                <ul className={classes.list}>
                    <li><Link to="/TIC-TAC-TOE-GAME/">Home</Link></li>
                    <li><Link to="/TIC-TAC-TOE-GAME/rankinglist">Ranking list</Link></li>
                    <li><Link to="/TIC-TAC-TOE-GAME/matching">Maching</Link></li>
                    <li><Link to="/TIC-TAC-TOE-GAME/shopping">shopping</Link></li>
                    <li><Link to="/TIC-TAC-TOE-GAME/personalcenter">personal center</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default  MainNavigation;