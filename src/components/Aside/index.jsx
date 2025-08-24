import logo from './logo.png'
import AsideLink from '../AsideLink'
import { IconFeed } from '../icons/IconFeed'
import { IconAccount } from '../icons/IconAccount'
import { IconInfo } from '../icons/IconInfo'
import { IconLogin } from '../icons/IconLogin'
import { Button } from '../Button'
import { Link } from '../Link'

import styles from './aside.module.css'

export const Aside = () => {


    return (<aside className={styles.aside}>
        <nav>
            <ul>
                <li>
                    <Link href="#">
                        <img src={logo} alt="Logo da Code Connect" />
                    </Link>
                </li>
                <li>
                    <Button href="#" outline>
                        Publicar
                    </Button>
                </li>
                <li>
                    <AsideLink href="#">
                        <IconFeed />
                        Feed
                    </AsideLink>
                </li>
                <li>
                    <AsideLink href="#">
                        <IconAccount />
                        Perfil
                    </AsideLink>
                </li>
                <li>
                    <AsideLink href="#">
                        <IconInfo />
                        Sobre nós
                    </AsideLink>
                </li>
                <li>
                    <AsideLink href="#">
                        <IconLogin />
                        Login
                    </AsideLink>
                </li>
                <li>
                    <AsideLink href="#">
                        <IconLogin />
                        Logout
                    </AsideLink>
                </li>
            </ul>
        </nav>
    </aside>)
}