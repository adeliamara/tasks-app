import { Form, FormContainer, InlineItems } from "./styles"

export function LoginPage() {
  return (
    <main>
      <FormContainer>
      <Form>
      <h2>Login Page</h2>
        <input type="text" placeholder="Usuário..." />
        <input type="password" placeholder="Senha" />
        <button type="submit">Entrar</button>
      </Form>
      </FormContainer>

      
   
    </main>
  )
}