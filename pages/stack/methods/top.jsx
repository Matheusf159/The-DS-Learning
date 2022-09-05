import React from "react";
import { useRouter } from "next/router";
import Layout from "../../../components/Layout";
import Sidebar from "../../../components/Sidebar";
import NavStructMenu from "../../../components/NavStructMenu";
import { faLayerGroup } from "@fortawesome/free-solid-svg-icons";
import TopStackAnimation from "../../../components/StacksComponents/TopStackAnimation/Top_stack_animation";
import styles from "../../../styles/Pages.module.css";
import { methods } from "./methods";
import { Container, Row, Col } from "reactstrap";

export default function Top() {
  const router = useRouter();
  const func = router.query.createStack;

  const code = `
1.  int top(Pilha *p) {
2.      if(!esta_vazia(p))
3.          return p->vetor[p->top-1];
4.  }
`;

  return (
    <section>
    <Container>
      <Row className="align-items-center mt-3">
        <Col lg={12} className>
          <div>
            <h2 className="mb-4 font-weight-normal line-height-1_4">
              Função Top
            </h2>
            <p>
              Para informar qual é o topo da pilha, utiliza-se a função topo,
              que receberá um ponteiro do tipo Pilha. Ela utiliza a função <strong>estar vazia</strong> como verificação, pois caso a pilha
              não estaja vazia, isso quer dizer que seu topo é maior do que zero.
            </p>
          </div>

          <div className={styles.content}>
            <pre>
              <code className={styles.codes}>{code}</code>
            </pre>

            <div>
                <p className={styles.pAnimation1}>
                  Linha 1 A função receberá por Parâmetro o ponteiro do tipo Pilha.
                </p>
                <p className={styles.pAnimation2}>
                  Linha 2 A função verifica se a pilha não estar vazia. Caso não esteja, <br />
                  então a pilha tem um topo maior do que zero.
                </p>
                <p className={styles.pAnimation3}>
                  Linha 3 O ponteiro irá apontar para o topo da pilha sem que ocorra <br />
                  o desempilhamento.
                </p>
            </div>
            <div>
              <TopStackAnimation />
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  </section>
  );
}

Top.getLayout = function getLayout(page) {
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