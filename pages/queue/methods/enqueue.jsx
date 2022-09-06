import React from "react";
import Layout from "../../../components/Layout";
import Sidebar from "../../../components/Sidebar";
import NavStructMenu from "../../../components/NavStructMenu";
import { Container, Row, Col } from "reactstrap";
import { faLayerGroup } from "@fortawesome/free-solid-svg-icons";
import { methods } from "../../../components/QueueComponents/methods";
import styles from "../../../styles/Pages.module.css";
import EnqueueAnimation from "../../../components/QueueComponents/EnqueueAnimation/Enqueue_animation";

export default function Enqueue() {
    const code = `
1.  void enfileirar(Fila* f, int valor) {
2.      if (!estaCheia(f))
3.          f->vet[f->fim++] = valor;
4.      else printf("A fila esta cheia");
5.  }
`;

    return (
        <section>
            <Container>
                <Row className="align-items-center mt-3">
                    <Col lg={12} className>
                        <div>
                            <h2 className="mb-4 font-weight-normal line-height-1_4">
                                Função Enfileirar
                            </h2>

                            <div>
                                <p>
                                    Para adicionar elementos na fila, utiliza-se a função enfileirar.
                                    Esta função recebe um ponteiro do tipo fila e um valor a ser enfileirado,
                                    mas para que ocorra a inserção, primeiro verifica se a pilha não está cheia usando
                                    a função <strong>estaCheia()</strong>, caso não esteja, coloca-se o valor indicado pelo
                                    fim e incrementa-se o fim, caso contrário a fila estará cheia e não será possíveç
                                    enfileirar.
                                </p>
                            </div>

                            <div className={styles.content}>
                                <pre>
                                    <code className={styles.codes}>{code}</code>
                                </pre>

                                <div>
                                    <p className={styles.pAnimation1}>
                                        Linha 2 verifica se a fila não está cheia
                                    </p>
                                    <p className={styles.pAnimation2}>
                                        Linha 3 o valor é enfileirado e ocorre a incrementação do fim
                                    </p>
                                    <p className={styles.pAnimation3}>
                                        Linha 4 a fila está cheia e não é possível enfileirar
                                    </p>
                                </div>
                            </div>

                            <EnqueueAnimation />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

Enqueue.getLayout = function getLayout(page) {
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