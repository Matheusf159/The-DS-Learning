import React from "react";
import { useRouter } from "next/router";
import Layout from "../../../components/Layout";
import Sidebar from "../../../components/Sidebar";
import NavStructMenu from "../../../components/NavStructMenu";
import { faLayerGroup } from "@fortawesome/free-solid-svg-icons";
import PopStackAnimation from "../../../components/stacksComponents/PopStackAnimation/Pop_stack_animation";
import styles from "../../../styles/Pages.module.css";
import { methods } from "./methods";
import { Container, Row, Col } from "reactstrap";

export default function Pop() {
  const router = useRouter();
  const func = router.query.createStack;

  const code = `
1.  int pop(Pilha *p, int *v) {
2.      if(!estarVazia(p)) {
3.          *v = p->vetor[--p->top];
4.          return 1;
5.      }
6.      return 0;
7.  }
`;

  return (
    <section>
    <Container>
      <Row className="align-items-center mt-3">
        <Col lg={12} className>
          <div>
            <h2 className="mb-4 font-weight-normal line-height-1_4">
              Função Pop
            </h2>
            <p>
              Para remover elementos da pilha, utiliza-se a função desempilhar.
              Esta função recebe um ponteiro do tipo pilha e um ponteiro de uma variável
              inteira. Ela utiliza a função <strong>estarVazia()</strong> como condição para desempilhar,
              ou seja, só haverá o processo de desempilhamento se a pilha não estiver
              vazia.
            </p>
          </div>

          <div className={styles.content}>
            <pre>
              <code className={styles.codes}>{code}</code>
            </pre>

            <div>
                <p className={styles.pAnimation1}>
                  Linha 1 A função receberá por Parâmetro o ponteiro do tipo Pilha. <br />
                  e um ponteiro para uma variável inteira.
                </p>
                <p className={styles.pAnimation2}>
                  Linha 2 A função verifica se a pilha não estar vazia. Caso não esteja, <br />
                  ocorrerá o processo de desempilhamento.
                </p>
                <p className={styles.pAnimation3}>
                  Linha 3 Ocorre o processo de desempilhamento, onde o elemento <br />
                  da posição logo abaixo do vetor é retirado e o valor do topo é <br />
                  decrementado.
                </p>
            </div>

            <div>
              <PopStackAnimation />
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  </section>
  );
}


Pop.getLayout = function getLayout(page) {
  return (
    <Layout pageTitle="DS-Learning | Pilha">
      <Sidebar />
      <section>
        <NavStructMenu
          structName="PILHA"
          iconName={faLayerGroup}
          linkStruct="/stack"
          linkVisualization="/stack/visualization"
          linkExercicio="/stack/exercicio"
          methods={methods}
        />
        {page}
      </section>
    </Layout>
  );
};