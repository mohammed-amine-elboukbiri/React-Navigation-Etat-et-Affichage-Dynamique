import ListeTaches from './ListeTaches';
import Logo from './Logo';
import LecteurAudio from './LecteurAudio';

function Accueil() {
    return (
        <main>
            <header>
                <h2>Bienvenue sur la page d’accueil</h2>
            </header>

            <section>
                <ListeTaches />
            </section>

            <section>
                <Logo />
            </section>

            <section>
                <LecteurAudio />
            </section>
        </main>
    );
}

export default Accueil;