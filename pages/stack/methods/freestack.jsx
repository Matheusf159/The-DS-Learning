import React from "react";
import { useRouter } from "next/router";
import Layout from "../../../components/Layout";
import Sidebar from "../../../components/Sidebar";
import NavStructMenu from "../../../components/NavStructMenu";
import FreeStackAnimation from "../../../components/stacksComponents/FreeStackAnimation/Free_stack_animation..jsx";
import styles from "../../../styles/Pages.module.css";
import { faLayerGroup } from "@fortawesome/free-solid-svg-icons";
import { methods } from "./methods";

import { Container, Row, Col } from "reactstrap";

export default function FreeStack() {
  const router = useRouter();
  const func = router.query.createStack;

  const code = `
  1.  void liberarPilha(Pilha *p) {
  2.      free(p);
  3.  }
  `;

  return (
    <section>
    <Container>
      <Row className="align-items-center mt-3">
        <Col lg={12} className>
          <div>
            <h2 className="mb-4 font-weight-normal line-height-1_4">
              Liberar Pilha
            </h2>
            
            <p>
              Para liberar a pilha da memória, é utilizada a função liberarPilha, que irá receber um ponteiro
              para uma estrutura do tipo Pilha e liberar a memória ocupada por ela através da função <strong>free()</strong>.
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
                  Linha 2 A função free será responsável por liberar a memória ocupada.
                </p>
            </div>

            <div>
              <FreeStackAnimation />
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  </section>
  );
}

FreeStack.getLayout = function getLayout(page) {
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
