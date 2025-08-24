import { AuthFormContainer } from "../../components/AuthFormContainer"
import { Checkbox } from "../../components/Checkbox"
import { Input } from "../../components/Input"
import { Label } from "../../components/Label"
import Typography from "../../components/Typography"
import { AuthLayout } from "../../layouts/Auth"
import { Button } from "../../components/Button"
import banner from './banner-login.png'
import { IconArrowFoward } from "../../components/icons/IconArrowFoward"
import { IconAssignement } from "../../components/icons/IconAssignement"
import { Form } from "../../components/Form"
import { Fieldset } from "../../components/Fieldset"
import { TextDivider } from "../../components/TextDivider"
import { Providers } from "../../components/Providers"
import { Link } from "../../components/Link"
import styles from './login.module.css'

export const Login = () => {
    return (
        <AuthLayout>
            <AuthFormContainer bannerSrc={banner}>
                <Typography variant="h1" color="--offwhite">Login</Typography>
                <Typography variant="h2" color="--offwhite">Boas-vindas! Faça seu login.</Typography>
                <Form action="">
                    <Fieldset>
                        <Label>
                            E-mail
                        </Label>
                        <Input
                            name="email"
                            id="email"
                            type="email"
                            placeholder="Digite seu e-mail"
                            required
                        />
                    </Fieldset>
                    <Fieldset>
                        <Label>
                            Senha
                        </Label>
                        <Input
                            name="password"
                            id="password"
                            type="password"
                            required
                        />
                        <Checkbox label="Lembrar-me" required />
                    </Fieldset>
                    <Button type="submit">
                        Login <IconArrowFoward />
                    </Button>
                </Form>
                <div>
                    <TextDivider text="ou entre com outras contas" />
                    <Providers />
                </div>
                <footer className={styles.footer}>
                    <Typography variant="body" color="--offwhite">
                        Ainda não tem conta?
                    </Typography>
                    <Link href='#'>
                        <Typography variant="body" color="--highlight-green">
                            Crie seu cadastro!
                        </Typography>
                        <IconAssignement color="#81FE88" />
                    </Link>
                </footer>
            </AuthFormContainer>
        </AuthLayout>
    )
}