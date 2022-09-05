import React from "react";
import { useRouter } from "next/router";
import Layout from "../../../components/Layout";
import Sidebar from "../../../components/Sidebar";
import NavStructMenu from "../../../components/NavStructMenu";
import { faLayerGroup } from "@fortawesome/free-solid-svg-icons";
import PushStackAnimation from "../../../components/stacksComponents/PushStackAnimation/Push_stack_animation";
import styles from "../../../styles/Pages.module.css";
import { methods } from "./methods";
import { Container, Row, Col } from "reactstrap";

export default function Push() {
  const router = useRouter();
  const func = router.query.createStack;

  const code = `
1.  int pilha_push(Pilha *p, float v) {
2.      if(!estarCheia(p)) {
3.          p->vetor[p->top++] = v;
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
              Função Push
            </h2>
            <p>
              Para adicionar elementos na pilham utiliza-se a funcão empilhar.
              Esta função recebe um ponteiro do tipo pilha e o elemente a ser
              empilhado. Ela utiliza a função <strong>estarCheia()</strong> como
              condição para o empilhamento, seguindo a condição: só haverá o
              processo de empilhamento enquanto a pilha não estiver cheia.
            </p>
          </div>

          <div className={styles.content}>
            <pre>
              <code className={styles.codes}>{code}</code>
            </pre>

            <div>
                  <p className={styles.pAnimation1}>
                    Linha 1 A função receberá por Parâmetro o ponteiro do tipo Pilha. <br />
                    e o valor a ser empilhado.
                  </p>
                  <p className={styles.pAnimation2}>
                    Linha 2 A função verifica se a pilha estar cheia. Caso não, ocorrerá <br />
                    o empilhamento do novo elemento na pilha.
                  </p>
                  <p className={styles.pAnimation3}>
                    Linha 3 Irá ser inserido o elemento na posição indicada pelo topo <br />
                    e logo em seguida o valor do topo será incrementado.
                  </p>
              </div>
            <div>
              <PushStackAnimation />
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  </section>
  );
}


Push.getLayout = function getLayout(page) {
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