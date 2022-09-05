import React from "react";
import { useRouter } from "next/router";
import Layout from "../../../components/Layout";
import Sidebar from "../../../components/Sidebar";
import NavStructMenu from "../../../components/NavStructMenu";
import { faLayerGroup } from "@fortawesome/free-solid-svg-icons";
import IsEmptyStackAnimation from "../../../components/StacksComponents/IsEmptyStackAnimation/Is_empty_stack_animation";
import { methods } from "./methods";
import styles from "../../../styles/Pages.module.css";

import { Container, Row, Col } from "reactstrap";

export default function IsEmpty() {
  const router = useRouter();
  const func = router.query.createStack;

  const code = `
1.  int estarVazia(Pilha *P) {
2.      if(p->top == 0)
3.          return 1;
4.      else
5.          return 0;
6.  }
`;

  return (
    <section>
    <Container>
      <Row className="align-items-center mt-3">
        <Col lg={12} className>
          <div>
            <h2 className="mb-4 font-weight-normal line-height-1_4">
              Pilha Vazia
            </h2>

            <p>
              A função estarVazia funciona como uma verificação, informando se não 
              há elementos inseridos na pilha. A pilha está vazia quando o seu topo é 
              igual a zero. Ela é utilizada em conjunto com a função desempilhar, 
              funcionando como uma condição em que a função somente irá desempilhar caso
              a pilha não estiver vazia.
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
                  Linha 2 A função verifica se o topo é igual a zero. Caso verdadeiro <br />
                  a pilha estar vazia, e a função retorna verdadeira.
                </p>
                <p className={styles.pAnimation3}>
                  Linha 4 e 5 Caso contrário, a função retornará falsa, pois ainda há elementos
                  na pilha.
                </p>
            </div>

            <div>
              <IsEmptyStackAnimation />
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  </section>
  );
}

IsEmpty.getLayout = function getLayout(page) {
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