create table usuario(
	id int unsigned auto_increment primary key,
    nome varchar(30) not null,
    descricao varchar(300),
    email varchar(254) not null unique,
    -- armazenar o hash da senha para seguranca
    hash_senha varchar(64) not null,
    caminho_foto varchar(255)
);

create table local(
    id int unsigned auto_increment primary key,
    tipo_logradouro varchar(50),
    logradouro varchar(255) not null,
    numero varchar(6),
    complemento varchar(100),
    bairro varchar(100) not null,
    cep char(9) not null,
    localidade varchar(50) not null,
    federacao char(2) not null,
    -- o conjunto do logradouro, numero e complemento e unico para cada local 
    unique(logradouro, numero, complemento)
);

create table arquivo(
    id int unsigned auto_increment primary key,
    nome varchar(30) not null,
    caminho varchar(255) not null,
    descricao varchar(300),
    -- o hash foi incluido para servir como um identificador nas consultas de arquivos
    hash_conteudo varchar(64) unique not null
);

create table projeto(
    id int unsigned auto_increment primary key,
    id_lider int unsigned not null,
    nome varchar(30) not null,
    descricao varchar(300) not null,
    data_prazo date,
    caminho_foto varchar(255),
    conclusao date,
    foreign key (id_lider) references usuario(id),
    -- um lider(usuario) nao poder ter projetos com o mesmo nome 
    unique(id_lider, nome)
);

create table equipe(
    id int unsigned auto_increment primary key,
    id_lider int unsigned not null,
    id_projeto int unsigned not null,
    nome varchar(30) not null,
    descricao varchar(300) not null,
    objetivo varchar(100),
    data_formacao date not null,
    foreign key (id_lider) references usuario(id),
    foreign key (id_projeto) references projeto(id),
    -- um projeto nao poder ter equipes com o mesmo nome
    unique(id_projeto, nome),
    -- um projeto nao poder ter equipes com a mesma descricao
    unique(id_projeto, descricao)
);

create table usuario_equipe(
	id int unsigned auto_increment primary key,
    id_usuario int unsigned not null,
    id_equipe int unsigned not null,
    foreign key (id_usuario) references usuario(id),
    foreign key (id_equipe) references equipe(id),
    -- previne a participacao duplicada de um usuario em uma equipe
	unique(id_usuario, id_equipe)
);

create table projeto_arquivo(
    id int unsigned auto_increment primary key,
    id_projeto int unsigned not null,
    id_arquivo int unsigned not null,
    primary key (id),
    foreign key (id_projeto) references projeto(id),
    foreign key (id_arquivo) references arquivo(id),
    -- previne a associacao duplicada de um arquivo em um projeto
    unique(id_projeto, id_arquivo)
);

create table tarefa(
	id int unsigned auto_increment primary key,
	id_local int unsigned,
	id_projeto int unsigned,
	id_equipe int unsigned,
	id_usuario int unsigned,
	titulo varchar(30) not null,
	descricao varchar(300) not null,
	data_prazo date,
	estado tinyint unsigned,
	foreign key(id_local) references local(id),
	foreign key(id_projeto) references projeto(id),
	foreign key(id_equipe) references equipe(id),
	foreign key(id_usuario) references usuario(id),
    -- usuarios e projetos nao podem ter tarefas com o mesmo titulo
    unique(id_projeto, titulo),
    unique(id_usuario, titulo),
    -- verificacao da associacao de tarefas com tabelas relacionadas
	check(
        -- uma tarefa pode pertencer somente a um usuario
		(id_usuario is not null and id_projeto is null and id_equipe is null) or
        -- uma tarefa pode pertencer somente a um projeto
        (id_usuario is null and id_projeto is not null and id_equipe is null) or
        -- uma tarefa pode pertencer somente a um projeto e estar associada a uma equipe
		(id_usuario is null and id_projeto is not null and id_equipe is not null) or
        -- uma tarefa pode pertencer somente a um projeto, estar associada a uma equipe e designada a um usuario
		(id_usuario is not null and id_projeto is not null and id_equipe is not null)
        -- a tentativa de registro de tarefas que forem associadas de outra forma ocasionara num erro que sera tratado na aplicacao
	)
);

create table tarefa_arquivo(
    id int unsigned auto_increment primary key,
    id_tarefa int unsigned not null,
    id_arquivo int unsigned not null,
    primary key (id),
    foreign key (id_tarefa) references tarefa(id),
    foreign key (id_arquivo) references arquivo(id),
    -- previne a associacao duplicada de um arquivo em uma tarefa
    unique(id_tarefa, id_arquivo)
);