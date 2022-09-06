import React from "react";
import Layout from "../../../components/Layout";
import Sidebar from "../../../components/Sidebar";
import NavStructMenu from "../../../components/NavStructMenu";
import { Container, Row, Col } from "reactstrap";
import { faLayerGroup } from "@fortawesome/free-solid-svg-icons";
import { methods } from "../../../components/QueueComponents/methods";
import FreeQueueAnimation from "../../../components/QueueComponents/FreeQueueAnimation/Free_queue_animation";
import styles from "../../../styles/Pages.module.css";

export default function FreeQueue() {
    const code = `
1.  void liberarFila(Fila *f) {
2.      free(f);
3.  }
`;

    return (
        <section>
            <Container>
                <Row className="align-items-center mt-3">
                    <Col lg={12} className>
                        <div>
                            <h2 className="mb-4 font-weight-normal line-height-1_4">
                                Função Liberar Fila
                            </h2>

                            <div>
                                <p>
                                    Para liberar a fila da memória, é utilizada a função liberarFila, que
                                    irá receber um ponteiro para uma estrutura do tipo fila e liberar a memória ocupada por 
                                    através da função <strong>free()</strong>. 
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
                                    Linha 2 a função free será responsável por liberar a memória ocupada
                                    </p>
                                </div>
                            </div>
                            
                            <FreeQueueAnimation />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

FreeQueue.getLayout = function getLayout(page) {
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