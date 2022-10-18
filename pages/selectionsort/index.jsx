import Layout from "../../components/Layout";
import Sidebar from "../../components/Sidebar";
import NavStructMenu from "../../components/NavStructMenu";
import { Container, Row, Col } from 'reactstrap'
import { faSignal } from "@fortawesome/free-solid-svg-icons"

export default function SelectionSort() {
    return (
        <section>
            <Container>
                <Row className="align-items-center mt-3">
                    <Col lg={12} className>
                        <div>
                            <h2 className="mb-4 font-weight-normal line-height-1_4">
                                Definição
                            </h2>
                            <p>
                                O algoritmo Selection Sort (Ordenação por Seleção) funciona da seguinte maneira: cada elemento do vetor, a partir do primeiro, 
                                será comparado com o seu próximo elemento. A ordenação é feita por comparações, seja pelo menor valor, quando for ordenação 
                                crescente ou pelo maior caso seja decrescente, quando a condição é satisfeita, a troca ocorre e os números a esquerda estarão 
                                sempre ordenados. (ASCENCIO et al., 2010).
                            </p>
                        </div>

                        <Row>
                            <Col>
                                
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

SelectionSort.getLayout = function getLayout(page) {
     return (
        <Layout pageTitle="DS-Learning | SelectionSort">
            <Sidebar />
            <section>
                <NavStructMenu 
                    structName="SELECTIONSORT"
                    iconName={faSignal}
                    linkStruct="/selectionsort"
                    linkVisualization="/selectionsort/visualization"
                    linkExercicio="/selectionsort/exercicio"
                />
                {page}
            </section>
        </Layout>
    )
}