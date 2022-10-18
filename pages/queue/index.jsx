import Layout from "../../components/Layout";
import Sidebar from "../../components/Sidebar";
import NavStructMenu from "../../components/NavStructMenu";
import { Container, Row, Col } from 'reactstrap'
import { faLinesLeaning } from "@fortawesome/free-solid-svg-icons"
import { methods } from "../../components/QueueComponents/methods";
import { StructQueueCode } from '../../components/QueueComponents/CodesQueue/CodesQueue'

export default function Queue() {
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
                                A estrutura de fila também é bastante utilizada. Diferentemente da pilha, ela segue a regra em que o primeiro 
                                que entra é o primeiro que sai, conhecida como FIFO (First in, First out). Seguindo o conceito que usamos no dia a dia, 
                                quem entra primeiro numa fila é o primeiro a ser atendido. Portanto, seguindo esta metodologia, só é possível inserir um 
                                novo elemento no final e só se pode remover o elemento do início da fila (CELES et al., 2004).
                            </p>

                            <p>
                                Assim como a pilha, a estrutura de fila possui duas operações básicas, são elas a operação de inserir um novo elemento no 
                                fim da fila, conhecida como enqueue (enfileirar), e de remover o elemento do início da fila, o dequeue (desenfileirar). 
                                (CORMEN et al., 2012). Possuindo também métodos como: liberar fila, verificação de fila cheia e vazia, imprimir fila e
                                liberar fila.
                            </p>

                            <p>
                                Logo abaixo se tem a estrutura que forma uma Fila:
                            </p>
                        </div>

                        <Row>
                            <Col lg={4}> 
                                <StructQueueCode show={true} inputValue='MAX' />
                            </Col>

                            <Col>
                                <p>
                                    A struct que define a fila é formada por 3 características: <br />
                                    o <strong>vetor</strong> responsável por definir a quantidade de elementos que a fila irá ter; <br />
                                    o <strong>início</strong> responsável por informar o começo da fila; <br />
                                    e o <strong>fim</strong>, responsável por informar o término da fila.
                                </p>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

Queue.getLayout = function getLayout(page) {
     return (
        <Layout pageTitle="DS-Learning | Fila">
            <Sidebar />
            <section>
                <NavStructMenu 
                    structName="FILA"
                    iconName={faLinesLeaning}
                    linkStruct="/queue"
                    linkVisualization="/queue/visualization"
                    linkExercicio="/queue/exercices"
                    methods={methods}
                />
                {page}
            </section>
        </Layout>
    )
}