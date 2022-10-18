import React from "react";
import Layout from "../../../components/Layout";
import Sidebar from "../../../components/Sidebar";
import NavStructMenu from "../../../components/NavStructMenu";
import { Container, Row, Col } from "reactstrap";
import { faLayerGroup } from "@fortawesome/free-solid-svg-icons";
import { methods } from "../../../components/QueueComponents/methods";
import styles from "../../../styles/Pages.module.css";

export default function PrintQueue() {
    const code = `
1.  void imprimeFila(Fila *f) {
2.      for (int i = f->inicio; i < f->fim; i++)
3.          printf("%d ", f->vet[i]);
4.  }
`;

    return (
        <section>
            <Container>
                <Row className="align-items-center mt-3">
                    <Col lg={12} className>
                        <div>
                            <h2 className="mb-4 font-weight-normal line-height-1_4">
                                Função Imprime Fila
                            </h2>

                            <div>
                                <p>
                                    A função imprimeFila é responsável por apresentar em tela cada elemento
                                    que compõem a fila, facilitando assim o controle não só da quantidade de elementos
                                    como também informando a posição de cada elemento na fila.
                                </p>
                            </div>

                            <div className={styles.content}>
                                <pre>
                                    <code className={styles.codes}>{code}</code>
                                </pre>

                                <div>
                                    <p className={styles.pAnimation1}>
                                        Linha 1 a função receberá por Parâmetro o ponteiro do tipo Fila
                                    </p>
                                    <p className={styles.pAnimation2}>
                                        Linha 2 o laço de repetição for irá percorrer a fila desde o início até. <br />
                                        seu fim
                                    </p>
                                    <p className={styles.pAnimation3}>
                                        Linha 3 irá printar em tela cada elemento da fila em ordem
                                    </p>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

PrintQueue.getLayout = function getLayout(page) {
    return (
        <Layout pageTitle="DS-Learning | Fila">
            <Sidebar />

            <section>
                <NavStructMenu 
                    structName="FILA"
                    iconName={faLayerGroup}
                    linkStruct="/queue"
                    linkVisualization="/queue/visualization"
                    linkExercicio="/queue/exercices"
                    methods={methods}
                />
                {page}
            </section>
        </Layout>
    );
}