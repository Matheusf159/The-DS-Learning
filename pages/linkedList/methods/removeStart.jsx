import React from "react";
import Layout from "../../../components/Layout";
import Sidebar from "../../../components/Sidebar";
import NavStructMenu from "../../../components/NavStructMenu";
import { Container, Row, Col } from "reactstrap";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";
import { methods } from "../../../components/LinkedListComponents/methods";
import styles from "../../../styles/Pages.module.css";

export default function RemoveStart() {
    const code = `
`;

    return (
        <section>
            <Container>
                <Row className="align-items-center mt-3">
                    <Col lg={12} className>
                        <div>
                            <h2 className="mb-4 font-weight-normal line-height-1_4">
                                Função Remover Início
                            </h2>

                            <div>
                                <p>
                                    
                                </p>
                            </div>

                            <div className={styles.content}>
                                <pre>
                                    <code className={styles.codes}>{code}</code>
                                </pre>

                                <div>
                                    
                                </div>

                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

RemoveStart.getLayout = function getLayout(page) {
    return (
        <Layout pageTitle="DS-Learning | Lista Encadeada">
            <Sidebar />

            <section>
                <NavStructMenu 
                    structName="LISTA ENCADEADA"
                    iconName={faEllipsis}
                    linkStruct="/linkedList"
                    linkVisualization="/linkedList/visualization"
                    linkExercicio="/linkedList/exercices"
                    methods={methods}
                />
                {page}
            </section>
        </Layout>
    );
}