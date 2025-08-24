import { AuthFormContainer } from "../../components/AuthFormContainer"
import { Checkbox } from "../../components/Checkbox"
import { Input } from "../../components/Input"
import { Label } from "../../components/Label"
import Typography from "../../components/Typography"
import { AuthLayout } from "../../layouts/Auth"
import { Button } from "../../components/Button"
import banner from './banner-register.png'
import { IconArrowFoward } from "../../components/icons/IconArrowFoward"
import { IconLogin } from "../../components/icons/IconLogin"
import { Form } from "../../components/Form"
import { Fieldset } from "../../components/Fieldset"
import { TextDivider } from "../../components/TextDivider"
import { Providers } from "../../components/Providers"
import { Link } from "../../components/Link"
import styles from './register.module.css'

export const Register = () => {
    return (
        <AuthLayout>
            <AuthFormContainer bannerSrc={banner}>
                <Typography variant="h1" color="--offwhite">Cadastro</Typography>
                <Typography variant="h2" color="--offwhite">Olá! Preencha seus dados.</Typography>
                <Form action="">
                    <Fieldset>
                        <Label>
                            Nome
                        </Label>
                        <Input
                            name="nome"
                            id="nome"
                            placeholder="Nome completo"
                            required
                        />
                    </Fieldset>
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
                        Já tem conta?
                    </Typography>
                    <Link href='#'>
                        <Typography variant="body" color="--highlight-green">
                            Faça seu login!
                        </Typography>
                        <IconLogin color="#81FE88" />
                    </Link>
                </footer>
            </AuthFormContainer>
        </AuthLayout>
    )
}