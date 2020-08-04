# Recuperação de senha

**RF**

- O usuário deve poder recuperar sua senha, informando seu email;
- O usuário deve receber e-mail com instruções de recuperação de senha;
- O usuário deve poder resetar sua senha;

**RNF**

- Utilizar Mailtrap para testar envio de e-mails em desenvolvimento
- Utilizar Amazon SES para envios em produção;
- O envio de e-mails devem acontecer em segundo plano (background job);

**RN**

- O link enviado por e-mail para resetar senha, deve expirar em 2h;
- O usuário precisa confirmar a nova senha ao resetar sua senha;

# Atualização do perfil

**RF**

- O usuário deve poder atualizar seu perfil, sendo seu nome, email e senha

**RN**

- O usuário não pode alterar seu e-mail para um e-mail já uttilizado
- Para atualizar sua senha, o usuário deve informar a senha antiga
- Para atualizar sua senha, o usuário deve confirmar a nova senha

# Painel do prestador

**RF**

- O usuário deve poder visualizar os agendamentos de um dia específico;
- O prestador deve receber uma notificação sempre que houver um novo agendamento;
- O prestadir deve poder visulizar notificações não lidas;

**RNF**

- Os agendamentos do prestador do dia devem ser armazenados em cache;
- As notificações do prestador devem ser armazenadas no MongoDB;
- As noificações do prestador devem ser enviadas em tempo-real em Socket.io;

**RN**

- A notificação deve ter um status de lida ou não lida para que o prestador possa controlar;

# Agendamento de serviços

**RF**

- O usuário deve poder listar todos os prestadores de serviço cadastrados;
- O usuário deve poder listar os dias de um mês com pelo menos um horário disponível de um prestador;
- O usuário deve poder listar os horários disponíveis de um dia específico de um prestador;
- O usuário deve poder criar um novo agendamento de serviço com um prestador;

**RNF**

- A listagem de prestadores deve ser armazenada em cache;

**RN**

- Cada agendamento deve durar uma hora exatamente;
- Os agendamentos devem estar disponíveis entre 8h às 18h (primeiro às 8h e último às 17h);
- O usuário não pode agendar em um horário já ocupado;
- O usuário não pode agendar para um horário passado;
- O usuário não pode agendar serviço consigo mesmo;
