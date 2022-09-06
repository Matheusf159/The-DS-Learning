import React from "react";
import Layout from "../../../components/Layout";
import Sidebar from "../../../components/Sidebar";
import NavStructMenu from "../../../components/NavStructMenu";
import { Container, Row, Col } from "reactstrap";
import { faLayerGroup } from "@fortawesome/free-solid-svg-icons";
import { methods } from "../../../components/QueueComponents/methods";
import CreateQueueAnimation from "../../../components/QueueComponents/CreateQueueAnimation/Create_queue_animation";
import styles from "../../../styles/Pages.module.css";

export default function CreateQueue() {
    const code = `
1.  Fila * criaFila() {
2.      Fila *f = (Fila*)malloc(sizeof(Fila));
3.      f->inicio = 0;
4.      f->fim = 0;
5.      return f;
6.  }
`;

    return (
        <section>
            <Container>
                <Row className="align-items-center mt-3">
                    <Col lg={12} className>
                        <div>
                            <h2 className="mb-4 font-weight-normal line-height-1_4">
                                Função Criar Fila
                            </h2>

                            <div>
                                <p>
                                    Agora, partindo para a implementação, temos primeiramente a
                                    função de criação da fila. Aqui será alocada a memória para a
                                    estrutura, como também será iniciada o controle de início e
                                    fim da fila, chegando por fil o retorno de um ponteiro para a
                                    estrutura. 
                                </p>
                            </div>

                            <div className={styles.content}>
                                <pre>
                                    <code className={styles.codes}>{code}</code>
                                </pre>

                                <div>
                                    <p className={styles.pAnimation1}>
                                        Linha 2 aloca dinaminacmente o estrutura na memória
                                    </p>
                                    <p className={styles.pAnimation2}>
                                        Linha 3 inicializa o início da fila com 0
                                    </p>
                                    <p className={styles.pAnimation3}>
                                        Linha 4 inicializa o fim da fila com 0
                                    </p>
                                </div>

                            </div>
                            
                            <CreateQueueAnimation />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

CreateQueue.getLayout = function getLayout(page) {
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