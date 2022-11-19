import Layout from "../components/Layout";
import Sidebar from "../components/Sidebar";
import Image from "next/image";
import landingImg from "../public/imgs/landing.jpg";
import { Container, Row, Col } from "reactstrap";
import NavStructMenu from "../components/NavStructMenu";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import styles from '../styles/Home.module.css'
import { structures } from '../components/structures'

export default function Home() {
  return (
    <section className="section ">
      
      <div className={styles.navActive}>
        <NavStructMenu 
          // structName="PILHA" 
          // iconName={faBars} 
          // linkStruct="stack"
          // linkVisualization="stack/visualization"
          // linkExercicio="stack/exercices"
          methods={structures}
        />
      </div>

      <Container>
        <Row className="align-items-center">
          <Col lg={6}>
            <div className="pr-lg-5">
              <p className="text-uppercase text-primary font-weight-medium f-14 mb-4">
                Estrutura de Dados
              </p>
              <h1 className="mb-4 font-weight-normal line-height-1_4">
                THE DS-LEARNING{" "}
              </h1>
              <p className="text-muted mb-4 pb-2">
                As disciplinas iniciais de programação e algoritmos dos cursos
                da área de computação exigem um certo grau de abstração que,
                normalmente, não é cobrado no ensino médio. A partir de estudos
                prévios das maiores dificuldades de alunos dos cursos de
                programação e, tentando colaborar para diminuir as barreiras
                iniciais, este trabalho apresenta um simulador desenvolvido em
                plataforma Web, no qual é possível realizar manipulações de
                estruturas de dados com resultados visuais.
              </p>
              <p className="text-muted mb-4 pb-2">
                <strong>Os códigos aqui utilizados, serão baseados na linguagem C.</strong>
              </p>
              <a href="#" className="btn btn-warning">
                Saber Mais <span className="ml-2 right-icon">&#8594;</span>
              </a>
            </div>
          </Col>
          <Col lg={6}>
            <div className="mt-5 mt-lg-0">
              <Image src={landingImg} alt="Landing Page" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

Home.getLayout = function getLayout(page) {
  return (
    <Layout pageTitle="DS-Learning | Home">
      <Sidebar />
      {page}
    </Layout>
  );
};
