import React from "react";
import { useRouter } from "next/router";
import Layout from "../../../components/Layout";
import Sidebar from "../../../components/Sidebar";
import NavStructMenu from "../../../components/NavStructMenu";
import { Container, Row, Col } from "reactstrap";
import { faLayerGroup } from "@fortawesome/free-solid-svg-icons";
import { methods } from "./methods";

import CreateStackAnimation from "../../../components/stacksComponents/CreateStackAnimation/CreateStackAnimation";

import styles from "../../../styles/Pages.module.css";

export default function CreateStack() {
  const router = useRouter();
  const func = router.query.createStack;

  const code = `
1.  Pilha* criarPilha() {
2.      Pilha* p = (Pilha*);
3.      malloc(sizeof(Pilha));
4.      p -> topo = 0;
5.      return p;
6.  }
  `;

  return (
    <section>
      <Container>
        <Row className="align-items-center mt-3">
          <Col lg={12} className>
            <div>
              <h2 className="mb-4 font-weight-normal line-height-1_4">
                Função Criar Pilha
              </h2>

              <div >
                <p>
                  Agora, partindo para a impementação, temos primeiramente a
                  função de criação da pilha.
                  Cuja a finalidade é alocar mémoria para a estrutura,
                  inicializa-la é logo em seguida retornar-la.
                </p>
              </div>

              <div className={styles.content}>
                <pre>
                  <code className={styles.codes}>{code}</code>
                </pre>

                <div>
                  <p className={styles.pAnimation1}>
                    Linha 2 e 3 aloca dinaminacmente a estrutura na memória
                  </p>
                  <p className={styles.pAnimation2}>
                    Linha 4 inicializa o topo do vetor da pilha
                  </p>
                  <p className={styles.pAnimation3}>
                    Linha 5 retorna o ponteira da estrutura criada
                  </p>
                </div>

                <div className={styles.right}>
                  <div>
                    <CreateStackAnimation />
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

CreateStack.getLayout = function getLayout(page) {
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
