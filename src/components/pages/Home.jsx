import {Button, Container} from "reactstrap";
import {useAppContext} from "../../providers/ApplicationProvider";

const Home = props => {
    const [{userManager, accessToken, idToken, profile}] = useAppContext();
    return (
        <Container>
            <h1 className="display-1 text-center pb-3">Test přihlašování přes OAuth2</h1>
            <div className="text-center">
            {accessToken
                    ? <Button color="primary" size="lg" onClick={() => { userManager.signoutRedirect() }} >Odhlásit</Button>
                    : <Button color="primary" size="lg" onClick={() => { userManager.signinRedirect() }} >Přihlásit</Button>
            }
            </div>
            <h2>Access token</h2>
            <pre className="overflow-auto text-wrap">
                {accessToken}
            </pre>
            <h2>ID token</h2>
            <pre className="overflow-auto text-wrap">
                {idToken}
            </pre>
            <h2>Profil</h2>
            <pre className="overflow-auto">
                {JSON.stringify(profile, " ", 4)}
            </pre>
        </Container>
    );
}

export default Home;