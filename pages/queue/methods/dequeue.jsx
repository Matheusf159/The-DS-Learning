import React from "react";
import Layout from "../../../components/Layout";
import Sidebar from "../../../components/Sidebar";
import NavStructMenu from "../../../components/NavStructMenu";
import { Container, Row, Col } from "reactstrap";
import { faLayerGroup } from "@fortawesome/free-solid-svg-icons";
import { methods } from "../../../components/QueueComponents/methods";
import DequeueAnimation from "../../../components/QueueComponents/DequeueAnimation/Dequeue_animation";
import styles from "../../../styles/Pages.module.css";

export default function Dequeue() {
    const code = `
1.  int desenfileirar(Fila* f) {
2.      if (!estaVazia(f))
3.          return f->vet[f->inicio++];
4.      else {
5.          printf("A fila esta vazia");
6.          return 0;
7.      }
8.  }
`;

    return (
        <section>
            <Container>
                <Row className="align-items-center mt-3">
                    <Col lg={12} className>
                        <div>
                            <h2 className="mb-4 font-weight-normal line-height-1_4">
                                Função Desenfileirar
                            </h2>

                            <div>
                                <p>
                                    Para remover elementos da fila, utiliza-se a função desenfileirar.
                                    Esta função recebe o ponteiro da fila e para que ocorra a remoção do elemento
                                    primeiro irá verifica se a fila não estar vazia utliziando a função <strong>estaVazia()</strong>,
                                     caso não eseja, irá acontecer a remoção do elemento e logo em seguida irá incrementar o início da fila. 

                                </p>
                            </div>

                            <div className={styles.content}>
                                <pre>
                                    <code className={styles.codes}>{code}</code>
                                </pre>

                                <div>
                                    <p className={styles.pAnimation1}>
                                        Linha 2 verifica se a fila não está vazia
                                    </p>
                                    <p className={styles.pAnimation2}>
                                        Linha 3 caso não esteja retorna a retirada do elemento da fila <br />
                                        e logo em seguida é incrementado o inicio
                                    </p>
                                    <p className={styles.pAnimation3}>
                                        Linha 5 caso contrário, a fila estará vazia e retornará zero.
                                    </p>
                                </div>
                            </div>

                            <DequeueAnimation />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

Dequeue.getLayout = function getLayout(page) {
    return (
        <Layout pageTitle="DS-Learning | Fila">
            <Sidebar />

            <section>
                <NavStructMenu 
                    structName="FILA"
                    iconName={faLayerGroup}
                    linkStruct="/queue"
                    linkVisualization="/queue/visualization"
                    linkExercicio="/queue/exercicio"
                    methods={methods}
                />
                {page}
            </section>
        </Layout>
    );
}