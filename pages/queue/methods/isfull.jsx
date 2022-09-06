import React from "react";
import Layout from "../../../components/Layout";
import Sidebar from "../../../components/Sidebar";
import NavStructMenu from "../../../components/NavStructMenu";
import { Container, Row, Col } from "reactstrap";
import { faLayerGroup } from "@fortawesome/free-solid-svg-icons";
import { methods } from "../../../components/QueueComponents/methods";
import IsFullQueueAnimation from "../../../components/QueueComponents/IsFullQueueAnimation/Is_full_queue_animation";
import styles from "../../../styles/Pages.module.css";

export default function IsFull() {
    const code = `
1.  int estaCheia(Fila* f) {
2.      return (f->fim == MAX);
3.  }
`;

    return (
        <section>
            <Container>
                <Row className="align-items-center mt-3">
                    <Col lg={12} className>
                        <div>
                            <h2 className="mb-4 font-weight-normal line-height-1_4">
                                Função Está Cheia
                            </h2>

                            <div>
                                <p>
                                A função estarCheia funciona como uma verificação, informando se
                                a fila já está com todo o seu espaço preenchido. A fila está cheia
                                quando o fim for igual ao tamanho do vetor alocado para ela, ou seja,
                                a última posição da fila. Ela é utilziada em conjunto com a função enfileirar, 
                                funcionando como uma condição que consiste em: o enfileiramento só ocorre enquanto a 
                                fila não estiver cheia.
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
                                        Linha 2 irá retornar verdadeiro caso o fim seja igual ao máximo ou <br />
                                        false caso a condição não seja verdadeira
                                    </p>
                                </div>
                            </div>

                            <IsFullQueueAnimation />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

IsFull.getLayout = function getLayout(page) {
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