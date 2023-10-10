import { Form, FormContainer, InlineItems } from "./styles"

export function TaskFormPage() {
    const descriptionInputRef = useRef<HTMLInputElement>(null);
    const onSave = useContext(SaveTaskContext); // Use o contexto para obter a função onSave
  
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      const text = descriptionInputRef.current!.value;
  
      const form = event.target as HTMLFormElement;
      form.reset();
      descriptionInputRef.current!.focus();
  
      onSave({ id: 'id_gerado', name: text, done: false, created_at: new Date() }); // Chame a função onSave com os dados da tarefa
    };

  return (
    <main>
      <FormContainer>
      <Form onSubmit={handleSubmit}>
      <h2>Login Page</h2>
        <input type="text" placeholder="Usuário..." />
        <input type="password" placeholder="Senha" />
        <button type="submit">Entrar</button>
      </Form>
      </FormContainer>

      
   
    </main>
  )
}

