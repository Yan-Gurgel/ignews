import { SignInButton } from '../SignInButton';

import styles from './styles.module.scss';
//Header importado para o _app pois ele vai aparecer em todas as páginas
export function Header() {
    return (
        <header className={styles.headerContainer}>
            <div className={styles.headerContent}>
                <img src="/images/logo.svg" alt="ig.news" />
                <nav>
                    <a className={styles.active}>Home</a>
                    <a>Post</a>
                </nav>

                <SignInButton />
            </div>
        </header>
    );
}