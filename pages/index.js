import Link from 'next/link'
import Head from 'next/head'

export default function Home() {
  const linkedin = 'https://www.linkedin.com/in/brtmvdl/'
  const github = 'https://github.com/brtmvdl'

  return (
    <>
      <Head>
        <title>Tarsis Lima</title>
      </Head>

      <div>

        <h1>Tarsis Lima</h1>
        <p></p>

        <p>28 anos - solteiro - sem filhos</p>
        <p>Rio Claro, São Paulo, Brasil</p>
        <p>Linkedin: <Link href={linkedin}><a>{linkedin}</a></Link></p>
        <p>GitHub: <Link href={github}><a>{github}</a></Link></p>
        <p></p>

        <h2>Experiência</h2>
        <p></p>

        <h3>Programador Senior</h3>
        <p>Meta Serviços em Informática</p>
        <p>Em São Leopoldo, Rio Grande do Sul, Brasil (Remoto)</p>
        <p>De janeiro de 2021 a setembro de 2021</p>
        <p>Ferramentas: HTML 5, CSS 3, Javascript, API REST, Node.js, Angular, SASS, AWS, Git</p>
        <p></p>

        <h3>Aplicativo de solicitação de presente de Natal</h3>
        <p>MSwebmaker Digital Marketing Agency</p>
        <p>Em Miami, Florida, EUA (Remoto)</p>
        <p>De novembro de 2020 a dezembro de 2020</p>
        <p>Ferramentas: HTML 5, CSS 3, Javascript, API REST, Node.js, Angular, SASS, MySQL, Git</p>
        <p></p>

        <h3>Sistema de envio de notificações e e-mails</h3>
        <p>Grupo Rio Claro</p>
        <p>Em Rio Claro, São Paulo, Brasil</p>
        <p>De março de 2020 a julho de 2020</p>
        <p>Ferramentas: Typescript, Javascript, API REST, Node.js, PostgreSQL, AWS, Git</p>
        <p></p>

        <h3>Sistema de gestão educacional</h3>
        <p>Claretiano Faculdades</p>
        <p>Em Rio Claro, São Paulo, Brasil</p>
        <p>De dezembro de 2019 a janeiro de 2020</p>
        <p>Ferramentas: HTML 5, CSS 3, Javascript, API REST, Node.js, PostgreSQL, Git</p>
        <p></p>

        <h3>Website e aplicativo de e-commerce</h3>
        <p>Rique Iluminação</p>
        <p>Em Rio Claro, São Paulo, Brasil</p>
        <p>De dezembro de 2018 a janeiro de 2019</p>
        <p>Ferramentas: HTML 5, CSS 3, Javascript, React.js, API REST, Node.js, MySQL, Git</p>
        <p></p>

        <h3>Aplicativo de entrega de comida</h3>
        <p>Food & Drink</p>
        <p>Em Limeira, São Paulo, Brasil</p>
        <p>Em abril de 2018</p>
        <p>Ferramentas: HTML 5, CSS 3, Javascript, React.js, Typescript, API REST, Node.js, PostgreSQL, Git</p>
        <p></p>

        <h3>Aplicativo de entrega de comida</h3>
        <p>Food & Drink</p>
        <p>Em Limeira, São Paulo, Brasil</p>
        <p>Em janeiro de 2018</p>
        <p>Ferramentas: HTML 5, CSS 3, Javascript, React.js, Typescript, API REST, Node.js, PostgreSQL, Git</p>
        <p></p>

        <h3>Aplicativo de e-commerce</h3>
        <p>Rique Iluminação</p>
        <p>Em Rio Claro, São Paulo, Brasil</p>
        <p>Em julho de 2014</p>
        <p>Ferramentas: HTML 5, CSS 3, Javascript, API REST, Node.js, MySQL, Git</p>
        <p></p>

        <h3>Sistema de gestão imobiliária</h3>
        <p>Armando Aparecido Gobato</p>
        <p>Em Rio Claro, São Paulo, Brasil</p>
        <p>De abril de 2014 a junho de 2014</p>
        <p>Ferramentas: HTML 5, CSS 3, Javascript, PHP, CakePHP, MySQL</p>
        <p></p>

        <h3>Programador Pleno</h3>
        <p>Luxfacta Soluções em TI</p>
        <p>Em Rio Claro, São Paulo, Brasil</p>
        <p>De março de 2014 a setembro de 2017</p>
        <p>Ferramentas: HTML 5, CSS 3, Javascript, Less, API REST, Node.js, PHP, Laravel, MySQL, SVN</p>
        <p></p>

        <h3>Programador Junior</h3>
        <p>Plano W</p>
        <p>Em Rio Claro, São Paulo, Brasil</p>
        <p>De abril de 2013 a setembro de 2013</p>
        <p>Ferramentas: HTML 5, CSS 3, Javascript, PHP, Wordpress, MySQL, Git</p>
        <p></p>

        <h3>Programador (Voluntário)</h3>
        <p>Igreja Batista do Parque</p>
        <p>Em Rio Claro, São Paulo, Brasil</p>
        <p>De janeiro de 2011 a julho de 2014</p>
        <p>Ferramentas: HTML 5, CSS 3, Javascript, PHP, CakePHP, MySQL</p>
        <p></p>

        <h2>Formação</h2>
        <p></p>

        <h3>Análise e Desenvolvimento de Sistemas</h3>
        <p>Claretiano Faculdades</p>
        <p>Em Rio Claro, São Paulo, Brasil</p>
        <p>De janeiro de 2016 a agosto de 2018</p>
        <p></p>

        <h3>Técnico em Informática</h3>
        <p>ETEC Professor Armando Bayeux da Silva</p>
        <p>Em Rio Claro, São Paulo, Brasil</p>
        <p>De julho de 2009 a dezembro de 2010</p>
        <p></p>

        <h2>Certificações</h2>
        <p></p>

        <h3>AWS Certified Cloud Practitioner</h3>
        <p>Alura</p>
        <p>Em Julho de 2021</p>
        <p></p>

        <h3>Amazon Web Services</h3>
        <p>Alura</p>
        <p>Em Julho de 2021</p>
        <p></p>

        <h3>Amazon Web Services</h3>
        <p>LinkedIn</p>
        <p>Em Julho de 2021</p>
        <p></p>

        <h3>Node.js</h3>
        <p>LinkedIn</p>
        <p>Em Junho de 2021</p>
        <p></p>

        <h3>Javascript</h3>
        <p>LinkedIn</p>
        <p>Em Junho de 2021</p>
        <p></p>
      </div>

    </>
  )
}
