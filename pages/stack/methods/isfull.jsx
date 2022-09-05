import React from "react";
import Layout from "../../../components/Layout";
import Sidebar from "../../../components/Sidebar";
import NavStructMenu from "../../../components/NavStructMenu";
import { faLayerGroup } from "@fortawesome/free-solid-svg-icons";
import IsFullStackAnimation from "../../../components/StacksComponents/isFullStackAnimation/isFullStackAnimationx"
import styles from "../../../styles/Pages.module.css";
import { methods } from "./methods";
import { Container, Row, Col } from "reactstrap";

export default function IsFull() {

  const code = `
1.  int estarCheia(Pilha *p) {
2.      if(p->top == MAX)
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
              Pilha Cheia
            </h2>

            <p>
              A função estarCheia funciona como uma verificação, informando se
              a pilha já está com todo o seu espaço preenchido. A pilha está cheia
              quando o seu topo for igual ao tamanho do vetor alocado para ela. Ela
              é utilziada em conjunto com a função empilhar, funcionando como uma
              condição que consiste em: o empilhamento só ocorre enquanto a pilha
              não estiver cheia.
            </p>
          </div>

          <div className={styles.content}>
            <pre>
              <code className={styles.codes}>{code}</code>
            </pre>
          
            <div>
              <p className={styles.pAnimation1}>
                Linha 1 a função receberá por Parâmetro o ponteiro do tipo Pilha
              </p>
              <p className={styles.pAnimation2}>
                Linha 2 a função função verifica se o topo é igual ao tamanho do vetor. <br />
                Caso verdadeiro a pilha estar cheia, e a função retorna verdadeira
              </p>
              <p className={styles.pAnimation3}>
                Linha 4 e 5 caso contrário, a função retornará falsa, pois ainda há <br />
                espaço sobrando para novos elementos
              </p>
            </div>

            <div>
              <IsFullStackAnimation />
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  </section>
  );
}


IsFull.getLayout = function getLayout(page) {
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
